import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

export const gemini = new GoogleGenAI(process.env.GEMINI_API_KEY);