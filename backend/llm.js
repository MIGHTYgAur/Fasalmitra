import { GoogleGenAI } from "@google/genai";


const getAdvice = async ( location, rain, temperature, windSpeed, soilTemp, predictedDisease) => {

    console.log("Fetching advice for:", {
        location,
        rain,
        temperature,
        windSpeed,
        soilTemp,
        predictedDisease
    }
    )
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});  

    const systemPrompt = `
    You are an agricultural expert assistant helping farmers through an app called Fasalmitra.

    The user is located in ${location}. The current weather conditions are: 
    - Rain: ${rain} mm 
    - Temperature: ${temperature}°C, 
    - Wind Speed: ${windSpeed} km/h, 
    - Soil Temperature: ${soilTemp}°C.
    The system has detected a possible crop disease for a wheat crop: ${predictedDisease}.

    Provide the following in simple English:
    1. An explanation of what this disease is.
    2. Symptoms the farmer should check for.
    3. Preventive measures the farmer can take.
    4. Remedies or treatments (organic and chemical, if needed).
    5. Any special advice based on the current weather and location.
    Keep the language simple and farmer-friendly and in few lines.
    `;

    const chat = ai.chats.create({model: "gemini-2.5-flash"})

    const response = await chat.sendMessage({
        message: systemPrompt,
    })

    return response.text;

}

// const test = async () =>{
//     const advice = await getAdvice("Pune", "Sunny with a chance of rain", "Powdery Mildew");
//     console.log(advice);
// }
// test();

export default getAdvice;