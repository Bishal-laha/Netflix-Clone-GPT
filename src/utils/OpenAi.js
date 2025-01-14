import OpenAI from "openai";
import {OPEN_AI_KEY} from "./Constants.js";

const openAi = new OpenAI({
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openAi;
