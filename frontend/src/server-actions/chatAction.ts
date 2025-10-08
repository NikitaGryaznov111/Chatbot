'use server';
import mongoose from 'mongoose';
import MessagesModel from '../models/messages-models.js';

// ДЛЯ ТРЕНИРОВКИ ПЕРЕПИШИ СЕРВЕРНЫЙ ЭКШН НА ОБЫЧНЫЙ АПИ ЗАПРОС НА БЭКЕНД.
// ПОТОМ ПОСМОТРИ КАК ЕГО ОТОБРАЖАТЬ НА КЛИЕНТЕ ДЛЯ ПЕРЕПИСКИ, МОЖЕТ И НЕ НУЖНО СОХРАНЯТЬ СООБЩЕНИЯ В БД
type TPlainObject = {
  _id: string;
  message: string;
  sender: string;
  timestamp: string;
};
await mongoose.connect('mongodb://127.0.0.1:27017/chatbot');
export default async function sendMessage(formData: FormData) {
  try {
    const message = formData.get('message');
    const res = await MessagesModel.create({ message, sender: 'user' });

    const plainObject: TPlainObject = {
      _id: res._id.toString(),
      message: res.message,
      sender: res.sender,
      timestamp: res.timestamp.toISOString(),
    };

    return plainObject;
  } catch (error) {
    console.error(`Не удалось получить сообщение: ${error}`);
  }
}
