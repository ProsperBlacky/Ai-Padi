export async function POST(req) {
  try {
    const body = await req.json();

    const { answers, name } = body;

    console.log("NAME:", name);
    console.log("ANSWERS:", answers);

    if (!answers || Object.keys(answers).length === 0) {
      return Response.json({
        result: "No answers received. Check frontend data flow."
      });
    }

    const prompt = `
You are Padi, a world-class AI career coach.

User name: ${name || "User"}

Analyze deeply and return:
- personality summary
- best digital skill
- why it fits
- 90-day roadmap
- monetization path

User answers:
${JSON.stringify(answers, null, 2)}
`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await res.json();

    console.log("OPENAI RAW RESPONSE:", data);

    const result = data?.choices?.[0]?.message?.content;

    return Response.json({
      result: result || "AI failed to generate response"
    });

  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json({
      result: "Server error occurred"
    });
  }
}
