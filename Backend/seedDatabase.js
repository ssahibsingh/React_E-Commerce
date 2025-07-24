import mongoose from 'mongoose';
import { Product } from './Models/products.model.js';
import dotenv from 'dotenv';

dotenv.config();

const productData = [
    {
      "id": 1,                  
      "title": "Paracetamol 500mg Tablets (Pack of 30)",
      "price": 5.99,
      "description": "Effective relief from mild to moderate pain and fever. Suitable for adults and children over 12 years. Always read the label and consult a doctor if symptoms persist.",
      "category": "medicines",
      "image": "https://example.com/images/paracetamol.jpg",
      "rating": {
        "rate": 4.5,
        "count": 200
      }
    },
    {
      "id": 2,
      "title": "Vitamin C 1000mg Effervescent Tablets (Pack of 20)",
      "price": 12.99,
      "description": "Boosts immunity and supports overall health. Dissolves quickly in water for a refreshing drink. Suitable for daily use.",
      "category": "supplements",
      "image": "https://example.com/images/vitamin-c.jpg",
      "rating": {
        "rate": 4.7,
        "count": 150
      }
    },
    {
      "id": 3,
      "title": "Omron Blood Pressure Monitor",
      "price": 49.99,
      "description": "Accurate and easy-to-use blood pressure monitor for home use. Features a large display and memory storage for up to 100 readings.",
      "category": "medical devices",
      "image": "https://example.com/images/blood-pressure-monitor.jpg",
      "rating": {
        "rate": 4.8,
        "count": 300
      }
    },
    {
      "id": 4,
      "title": "Cetirizine Hydrochloride 10mg Tablets (Pack of 14)",
      "price": 8.49,
      "description": "Relieves symptoms of hay fever and other allergies. Non-drowsy formula for daytime use.",
      "category": "medicines",
      "image": "https://example.com/images/cetirizine.jpg",
      "rating": {
        "rate": 4.3,
        "count": 180
      }
    },
    {
      "id": 5,
      "title": "Fish Oil Omega-3 Capsules (120 Capsules)",
      "price": 19.99,
      "description": "Supports heart, brain, and joint health. High-strength omega-3 fatty acids derived from pure fish oil.",
      "category": "supplements",
      "image": "https://example.com/images/fish-oil.jpg",
      "rating": {
        "rate": 4.6,
        "count": 250
      }
    },
    {
      "id": 6,
      "title": "Thermometer Digital with Fever Alarm",
      "price": 14.99,
      "description": "Fast and accurate temperature readings. Features a fever alarm and waterproof design for easy cleaning.",
      "category": "medical devices",
      "image": "https://example.com/images/thermometer.jpg",
      "rating": {
        "rate": 4.4,
        "count": 220
      }
    },
    {
      "id": 7,
      "title": "Ibuprofen 400mg Tablets (Pack of 16)",
      "price": 6.99,
      "description": "Relieves pain, inflammation, and fever. Suitable for adults and children over 12 years. Always consult a doctor if symptoms persist.",
      "category": "medicines",
      "image": "https://example.com/images/ibuprofen.jpg",
      "rating": {
        "rate": 4.2,
        "count": 190
      }
    },
    {
      "id": 8,
      "title": "Probiotic Capsules for Gut Health (60 Capsules)",
      "price": 24.99,
      "description": "Promotes a healthy gut microbiome with 10 billion live cultures per capsule. Suitable for daily use.",
      "category": "supplements",
      "image": "https://example.com/images/probiotic.jpg",
      "rating": {
        "rate": 4.7,
        "count": 210
      }
    },
    {
      "id": 9,
      "title": "Nebulizer Machine for Asthma and Respiratory Care",
      "price": 59.99,
      "description": "Compact and portable nebulizer for effective respiratory treatment. Ideal for asthma, COPD, and other respiratory conditions.",
      "category": "medical devices",
      "image": "https://example.com/images/nebulizer.jpg",
      "rating": {
        "rate": 4.9,
        "count": 400
      }
    },
    {
      "id": 10,
      "title": "Multivitamin Gummies for Adults (60 Gummies)",
      "price": 15.99,
      "description": "Delicious gummies packed with essential vitamins and minerals. Supports overall health and well-being.",
      "category": "supplements",
      "image": "https://example.com/images/multivitamin-gummies.jpg",
      "rating": {
        "rate": 4.5,
        "count": 170
      }
    },
    {
      "id": 11,
      "title": "First Aid Kit with 100 Pieces",
      "price": 29.99,
      "description": "Comprehensive first aid kit for home, travel, or workplace. Includes bandages, antiseptic wipes, scissors, and more.",
      "category": "healthcare products",
      "image": "https://example.com/images/first-aid-kit.jpg",
      "rating": {
        "rate": 4.8,
        "count": 320
      }
    },
    {
      "id": 12,
      "title": "Lactase Enzyme Tablets for Lactose Intolerance (30 Tablets)",
      "price": 9.99,
      "description": "Helps digest lactose in dairy products. Suitable for individuals with lactose intolerance.",
      "category": "medicines",
      "image": "https://example.com/images/lactase.jpg",
      "rating": {
        "rate": 4.6,
        "count": 140
      }
    },
    {
      "id": 13,
      "title": "Knee Support Brace for Pain Relief",
      "price": 22.99,
      "description": "Provides compression and support for knee pain, arthritis, or sports injuries. Adjustable and comfortable design.",
      "category": "healthcare products",
      "image": "https://example.com/images/knee-brace.jpg",
      "rating": {
        "rate": 4.4,
        "count": 260
      }
    },
    {
      "id": 14,
      "title": "Vitamin D3 2000 IU Softgels (90 Capsules)",
      "price": 18.99,
      "description": "Supports bone health, immunity, and overall well-being. High-strength vitamin D3 for daily use.",
      "category": "supplements",
      "image": "https://example.com/images/vitamin-d3.jpg",
      "rating": {
        "rate": 4.7,
        "count": 230
      }
    },
    {
      "id": 15,
      "title": "Reusable Hot and Cold Therapy Pack",
      "price": 12.99,
      "description": "Provides relief from muscle pain, swelling, and inflammation. Can be used hot or cold for versatile therapy.",
      "category": "healthcare products",
      "image": "https://example.com/images/therapy-pack.jpg",
      "rating": {
        "rate": 4.5,
        "count": 180
      }
    },
    {
      "id": 16,
      "title": "Aspirin 75mg Tablets (Pack of 28)",
      "price": 4.99,
      "description": "Low-dose aspirin for heart health and blood thinning. Always consult a doctor before use.",
      "category": "medicines",
      "image": "https://example.com/images/aspirin.jpg",
      "rating": {
        "rate": 4.1,
        "count": 120
      }
    },
    {
      "id": 17,
      "title": "Zinc Lozenges for Immune Support (24 Lozenges)",
      "price": 9.99,
      "description": "Supports immune function and helps reduce the duration of colds. Suitable for adults and children over 12 years.",
      "category": "supplements",
      "image": "https://example.com/images/zinc-lozenges.jpg",
      "rating": {
        "rate": 4.3,
        "count": 160
      }
    },
    {
      "id": 18,
      "title": "Pulse Oximeter for Blood Oxygen Monitoring",
      "price": 39.99,
      "description": "Measures blood oxygen levels and pulse rate. Compact and easy to use at home or on the go.",
      "category": "medical devices",
      "image": "https://example.com/images/pulse-oximeter.jpg",
      "rating": {
        "rate": 4.7,
        "count": 280
      }
    },
    {
      "id": 19,
      "title": "Antiseptic Cream for Wound Care (30g)",
      "price": 3.99,
      "description": "Helps prevent infection in minor cuts, scrapes, and burns. Suitable for all ages.",
      "category": "medicines",
      "image": "https://example.com/images/antiseptic-cream.jpg",
      "rating": {
        "rate": 4.6,
        "count": 210
      }
    },
    {
      "id": 20,
      "title": "Collagen Peptides Powder for Skin and Joints (300g)",
      "price": 29.99,
      "description": "Promotes healthy skin, hair, nails, and joints. Unflavored and easy to mix into drinks or food.",
      "category": "supplements",
      "image": "https://example.com/images/collagen-powder.jpg",
      "rating": {
        "rate": 4.8,
        "count": 340
      }
    },
    {
      "id": 21,
      "title": "Compression Socks for Improved Circulation (Pair)",
      "price": 16.99,
      "description": "Helps reduce swelling and improve blood flow in the legs. Ideal for travel or long periods of sitting.",
      "category": "healthcare products",
      "image": "https://example.com/images/compression-socks.jpg",
      "rating": {
        "rate": 4.5,
        "count": 190
      }
    },
    {
      "id": 22,
      "title": "Melatonin 3mg Sleep Aid Tablets (60 Tablets)",
      "price": 14.99,
      "description": "Supports restful sleep and helps regulate sleep cycles. Suitable for adults.",
      "category": "supplements",
      "image": "https://example.com/images/melatonin.jpg",
      "rating": {
        "rate": 4.4,
        "count": 220
      }
    },
    {
      "id": 23,
      "title": "Electric Heating Pad for Back Pain Relief",
      "price": 34.99,
      "description": "Provides soothing heat therapy for back pain, muscle stiffness, and cramps. Adjustable temperature settings.",
      "category": "healthcare products",
      "image": "https://example.com/images/heating-pad.jpg",
      "rating": {
        "rate": 4.6,
        "count": 270
      }
    },
    {
      "id": 24,
      "title": "Antacid Tablets for Heartburn Relief (Pack of 24)",
      "price": 5.49,
      "description": "Fast-acting relief from heartburn and indigestion. Suitable for adults and children over 12 years.",
      "category": "medicines",
      "image": "https://example.com/images/antacid.jpg",
      "rating": {
        "rate": 4.2,
        "count": 150
      }
    },
    {
      "id": 25,
      "title": "Epsom Salt for Muscle Relaxation (1kg)",
      "price": 8.99,
      "description": "Relieves muscle aches and pains when added to a warm bath. Suitable for regular use.",
      "category": "healthcare products",
      "image": "https://example.com/images/epsom-salt.jpg",
      "rating": {
        "rate": 4.7,
        "count": 240
      }
    },
    {
      "id": 26,
      "title": "Glucosamine and Chondroitin Joint Supplements (90 Tablets)",
      "price": 27.99,
      "description": "Supports joint health and mobility. Ideal for individuals with arthritis or joint pain.",
      "category": "supplements",
      "image": "https://example.com/images/glucosamine.jpg",
      "rating": {
        "rate": 4.5,
        "count": 200
      }
    },
    {
      "id": 27,
      "title": "Wrist Support Brace for Carpal Tunnel Relief",
      "price": 18.99,
      "description": "Provides support and relief for carpal tunnel syndrome, arthritis, or wrist injuries. Adjustable strap for a secure fit.",
      "category": "healthcare products",
      "image": "https://example.com/images/wrist-brace.jpg",
      "rating": {
        "rate": 4.3,
        "count": 180
      }
    },
    {
      "id": 28,
      "title": "Iron Supplement Tablets for Anemia (60 Tablets)",
      "price": 11.99,
      "description": "Helps replenish iron levels and supports red blood cell production. Suitable for adults with iron deficiency.",
      "category": "supplements",
      "image": "https://example.com/images/iron-supplement.jpg",
      "rating": {
        "rate": 4.4,
        "count": 170
      }
    },
    {
      "id": 29,
      "title": "Portable ECG Monitor with Smartphone Connectivity",
      "price": 129.99,
      "description": "Allows you to monitor your heart health at home. Syncs with your smartphone for easy tracking and analysis.",
      "category": "medical devices",
      "image": "https://example.com/images/ecg-monitor.jpg",
      "rating": {
        "rate": 4.8,
        "count": 350
      }
    },
    {
      "id": 30,
      "title": "Hand Sanitizer Gel with Aloe Vera (500ml)",
      "price": 7.99,
      "description": "Kills 99.9% of germs and keeps your hands moisturized with aloe vera. Suitable for daily use.",
      "category": "healthcare products",
      "image": "https://example.com/images/hand-sanitizer.jpg",
      "rating": {
        "rate": 4.6,
        "count": 300
      }
    }
  ]; 

  export default productData; 
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Ecommerce_Users");
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    await Product.insertMany(productData);
    console.log(`Successfully seeded ${productData.length} products`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();