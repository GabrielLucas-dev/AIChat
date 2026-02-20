import { GoogleGenerativeAI } from "@google/generative-ai";



async function respostaGemini(prompt, API_KEY) {

  const ai = new GoogleGenerativeAI(API_KEY);

  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return responseText;
  } catch (error) {
    if (error.status === 429) {
      console.log("limite de requições atingida!");
      throw error;
    } else {
      console.log("Erro: ", error);
      throw error;
    }
  }
}

export default respostaGemini;
