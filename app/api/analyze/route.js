import OpenAI from "openai";

export async function POST(req) {
  try {
    const { answers } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `Analyze this user: ${JSON.stringify(answers)}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;

    return Response.json({
      result: text,
    });

  } catch (error) {
    return Response.json(
      {
        error: "AI analysis failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
