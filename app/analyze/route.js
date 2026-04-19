import OpenAI from "openai";

export async function POST(req) {
  const { answers } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `Analyze this user: ${JSON.stringify(answers)}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return Response.json({
    result: response.choices[0].message.content,
  });
}
    const text = response.choices[0].message.content;

    return Response.json(JSON.parse(text));
  } catch (error) {
    return Response.json(
      { error: "AI analysis failed", details: error.message },
      { status: 500 }
    );
  }
}
