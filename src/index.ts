import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";
import { WebBrowser } from "langchain/tools/webbrowser";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

dotenv.config();

// const model = new OpenAI({
//   modelName: "gpt-3.5-turbo",
//   openAIApiKey: process.env.OPENAI_API_KEY,
// });

// const res = await model.call(
//   "What's a good idea for an application to build with GPT-3?"
// );

// console.log(res);

export async function run() {
  const model = new ChatOpenAI({ temperature: 0 });
  const embeddings = new OpenAIEmbeddings();

  const browser = new WebBrowser({ model, embeddings });

  const result = await browser.call(
    `"https://www.livechart.me/", "Cuando saldra el nuevo episodio de Kimetsu no yaiba?"`
  );

  console.log(result);
}

await run();
