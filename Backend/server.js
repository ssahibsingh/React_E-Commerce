import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { User } from './Models/users.model.js';
import { Product } from './Models/products.model.js'; // We'll create this model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path'
const __dirname = path.resolve();

//import useNavigate from 'react-router-dom

dotenv.config();
const app = express();
// In server.js (backend)
const port = process.env.PORT || 3001; // Change from 3000 to 3001

//const navigate = useNavigate(); 
// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001','https://medoc-ecom.vercel.app'], // Both frontend and backend
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));

  // server.js
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://medoc-ecom.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json());

// ✅ Serve images from /images directory at /images route
app.use('/images', express.static(path.join(__dirname, 'images')));
// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Ecommerce_Users")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Routes
// User Registration
// Registration Route
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName: name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    res.json({ token, user: { id: user._id, email: user.email, name: user.fullName } });
   
    
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Product Routes
app.get('/api/products', async (req, res) => {
    try {
      const { category } = req.query;
      const filter = category ? { category } : {};
      
      const products = await Product.find(filter);
      res.json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  });
  
  // Get single product
  app.get('/api/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({
          success: false,
          error: 'Product not found'
        });
      }
      
      res.json({
        success: true,
        data: product
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  });
// Protected route example
app.get('/api/user', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});