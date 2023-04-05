import { NextResponse } from "next/server";

export async function POST(request:Request){
    try {
        const {question} = await request.json()
      var myHeaders = new Headers();
      myHeaders.append("OpenAI-Organization", `${process.env.ORG_KEY}`);
      myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
      });

      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
        const res = await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
        const resJson = await res.json()
        if(res && resJson){
            return NextResponse.json({
                success: true,
                data: resJson
            })
        }else{
            return NextResponse.json({
                success : false,
                message: "GPT error"
            })
        }
        
    } catch (error:any) {
        return NextResponse.json({
            success: false,
            message: error.message || "something went wrong"
        })
    }
}