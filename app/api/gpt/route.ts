import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

export async function POST(request: Request) {
  try {
    const { question } = await request.json();
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      temperature: 0.5,
      max_tokens: 700,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    if (response) {
      return NextResponse.json({
        success: true,
        data: response.data.choices[0].text,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "GPT error",
      });
    }
  } catch (error: any) {
    console.log("error.......", error);
    return NextResponse.json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}
