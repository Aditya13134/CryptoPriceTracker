import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  crypto: { type: String, required: true },
  threshold: { type: Number, required: true },
  email: { type: String, required: true },
});

export default mongoose.model('Alert', alertSchema);