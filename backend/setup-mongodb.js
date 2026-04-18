// Test MongoDB connection and add initial data
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

async function connectAndSetup() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    const conn = await mongoose.connect(MONGODB_URI);
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📊 Database Host:', conn.connection.host);
    console.log('🗄️  Database Name:', conn.connection.name || 'KnowVerse (default)');
    
    console.log('\n🎉 MongoDB connection established successfully!');
    
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

connectAndSetup();
