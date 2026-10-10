const mongoose = require('mongoose');

// 1. สร้าง schema (Schema) สำหรับการสร้าง document
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'], // กำหนดให้มีค่าได้แค่ 3 ค่า
    default: 'medium' // ถ้าไม่ส่งค่า priority มา ให้ตั้งเป็น medium อัตโนมัติ
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  // 2. บังคับให้ model ต้องเป็น collection ที่ชื่อ 'task'
  collection: 'task',
  timestamps: true
});

// 3. สร้าง model ที่ใช้ schema
const Task = mongoose.model('Task', taskSchema);

// 4. export model
module.exports = Task;
