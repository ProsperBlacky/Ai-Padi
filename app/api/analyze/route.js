export async function POST(req) {
  try {
    const body = await req.json();

    const { answers, name } = body;

    const prompt = `
You are Padi, a friendly AI career coach.

Speak like a human mentor.

User name: ${name}

User answers:
${JSON.stringify(answers)}

Do:

1. Greet user by name
2. Analyze personality
3. Recommend ONE main digital skill
4. Give 2 supporting skills
5. Explain WHY it fits
6. Give a simple 90-day plan
7. Show how to start earning
8. End with motivation

Tone: human, warm, conversational

No bullet overload. No robotic tone.
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
    return Response.json({ result: "Error generating result" });
  }
}5. WHY THESE FIT THE USER
6. 90-DAY ROADMAP (Month 1, 2, 3)
7. HOW TO START EARNING
8. STRATEGIC INSIGHTS (mistakes + advantages)
9. NEXT GROWTH PATH

Be practical, realistic, and focused on helping the user earn income.

No scoring. No numbers grading. No filler.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    const output = data.choices?.[0]?.message?.content;

    return Response.json({
      result: output,
    });
  } catch (error) {
    return Response.json({
      result: "Error generating analysis.",
    });
  }
}
