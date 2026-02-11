import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const API_KEY = process.env.API_KEY;

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

async function resposta() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "qual a capital do Uruguai?",
  });
  console.log("-------------------");
  console.log(response.text);
  console.log("-------------------");
}

// resposta();

export default resposta;

