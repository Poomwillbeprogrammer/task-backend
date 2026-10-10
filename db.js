const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('เกิดข้อผิดพลาดในการเชื่อมต่อ MongoDB:', err);
});

db.once('open', () => {
  console.log('เชื่อมต่อ MongoDB Atlas สำเร็จ');
});
