import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sender: { type: String, required: true }, // Отправитель (например, "user" или "bot")
  timestamp: { type: Date, default: Date.now },
});

const MessagesModel =
  mongoose.models.MessagesModel ||
  mongoose.model('MessagesModel', messageSchema);

export default MessagesModel;
