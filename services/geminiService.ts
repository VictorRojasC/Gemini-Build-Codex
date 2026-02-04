
import { GoogleGenAI } from "@google/genai";

export async function getRaffleAdvice(userQuestion: string): Promise<string> {
  try {
    // Correctly initialize GoogleGenAI with process.env.API_KEY directly
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un asesor experto para un sitio de sorteos por suscripción llamado Premios Red (PremiosRed.com).
      Responde las dudas del usuario sobre estrategias para ganar, legalidad de los sorteos o cómo funcionan las membresías anuales.
      Sé profesional, motivador y claro. 
      El usuario pregunta: "${userQuestion}"`,
      config: {
        systemInstruction: "Eres el Asistente AI de Premios Red. Ayudas a los usuarios a entender el valor de las suscripciones anuales y cómo funcionan los multiplicadores de boletos. No menciones marcas de la competencia.",
        temperature: 0.7,
      },
    });
    // Correctly access .text property from response
    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "El asesor AI no está disponible temporalmente. Por favor, intenta más tarde.";
  }
}
