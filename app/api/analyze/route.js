export async function POST(req) {
  try {
    const body = await req.json();
    const { answers, name } = body;

    const prompt = `
You are Padi, a smart and friendly AI career coach.

User name: ${name}

User responses:
${JSON.stringify(answers)}

Do the following:

1. Greet the user by name
2. Analyze their personality and strengths
3. Recommend ONE best digital skill
4. Suggest 2 supporting skills
5. Explain why it fits them
6. Give a clear 90-day roadmap
7. Explain how they can start earning
8. End with motivation

Keep it human, simple, and practical.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    return Response.json({
      result: data.choices?.[0]?.message?.content,
    });
  } catch (error) {
    return Response.json({
      result: "Something went wrong generating your result.",
    });
  }
}
