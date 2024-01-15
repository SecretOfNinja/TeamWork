import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

let openaiInstance = null;

const getOpenAiInstance = () => {
    if (!openaiInstance) {
        const configuration = {
            organization: process.env.ORGANIZATION_ID,
            apiKey: process.env.OPENAI_API_KEY,
        };
        openaiInstance = new OpenAI(configuration);
    }
  
    return openaiInstance;
};


export default getOpenAiInstance;