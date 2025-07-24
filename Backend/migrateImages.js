import mongoose from 'mongoose';
import { Product } from './Models/products.model.js';
import dotenv from 'dotenv';

dotenv.config();

const imageMap = {
  "Paracetamol 500mg Tablets (Pack of 30)": "paracetamol.jpg",
  "Vitamin C 1000mg Effervescent Tablets (Pack of 20)": "vitamin c.jpg",
  "Omron Blood Pressure Monitor": "omron bpm.jpg",
  "Cetirizine Hydrochloride 10mg Tablets (Pack of 14)": "cetrizine.jpg",
  "Fish Oil Omega-3 Capsules (120 Capsules)": "fish oil.jpg",
  "Thermometer Digital with Fever Alarm": "thermometer.jpg",
  "Ibuprofen 400mg Tablets (Pack of 16)": "ibuprofen.jpg",
  "Probiotic Capsules for Gut Health (60 Capsules)": "Probiotic capsule.jpg",
  "Nebulizer Machine for Asthma and Respiratory Care": "nebulizer.jpg",
  "Multivitamin Gummies for Adults (60 Gummies)": "multivitamins.jpg",
  "First Aid Kit with 100 Pieces": "first aid kit.jpg",
  "Lactase Enzyme Tablets for Lactose Intolerance (30 Tablets)": "lactase enzyme.jpg",
  "Knee Support Brace for Pain Relief": "knee support.jpg",
  "Vitamin D3 2000 IU Softgels (90 Capsules)": "vitamin D3.jpg",
  "Reusable Hot and Cold Therapy Pack": "Therapy pack.jpg",
  "Aspirin 75mg Tablets (Pack of 28)": "aspirin.jpg",
  "Zinc Lozenges for Immune Support (24 Lozenges)": "zinc lozenges.jpg",
  "Pulse Oximeter for Blood Oxygen Monitoring": "oximeter.jpg",
  "Antiseptic Cream for Wound Care (30g)": "antiseptic cream.jpg",
  "Collagen Peptides Powder for Skin and Joints (300g)": "collegen peptide.jpg",
  "Compression Socks for Improved Circulation (Pair)": "compression socks.jpg",
  "Melatonin 3mg Sleep Aid Tablets (60 Tablets)": "Melatonin.jpg",
  "Electric Heating Pad for Back Pain Relief": "heating pad.jpg",
  "Antacid Tablets for Heartburn Relief (Pack of 24)": "Antaacid tablets.jpg",
  "Epsom Salt for Muscle Relaxation (1kg)": "Epsom salt.jpg",
  "Glucosamine and Chondroitin Joint Supplements (90 Tablets)": "glucosamine.jpg",
  "Wrist Support Brace for Carpal Tunnel Relief": "wrist support brace.jpg",
  "Iron Supplement Tablets for Anemia (60 Tablets)": "iron supplement.jpg",
  "Portable ECG Monitor with Smartphone Connectivity": "ecg monitors.jpg",
  "Hand Sanitizer Gel with Aloe Vera (500ml)": "hand sanitizer.jpg"
};
async function migrateProductImages() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const products = await Product.find({});
    let updatedCount = 0;

    for (const product of products) {
      const filename = imageMap[product.title];
      if (filename) {
        product.image = `/images/products/${filename}`;
        await product.save();
        updatedCount++;
        console.log(`Updated ${product.title}`);
      }
    }

    console.log(`Migration complete. Updated ${updatedCount} products`);
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

migrateProductImages();