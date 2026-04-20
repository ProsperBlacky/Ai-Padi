export async function POST(req) {
  try {
    const body = await req.json();

    const answers = body.answers;

    const prompt = `
You are an elite career strategist and digital economy analyst.

Your job is to analyze the user deeply and recommend high-income digital skills.

Follow this structure exactly:

STEP 1: DEEP DIAGNOSTIC
Ask yourself and interpret:
${JSON.stringify(answers)}

STEP 2: HUMAN PROFILE ANALYSIS
Identify personality, strengths, weaknesses, learning style, urgency.

STEP 3: DIGITAL SKILL MATCHING
Choose from:
- Creative Skills
- Technical Skills
- Marketing & Sales
- Communication Skills
- Business Systems
- Writing & Knowledge Work

STEP 4: OUTPUT FORMAT (STRICT)
Return ONLY in this format:

1. HUMAN PROFILE SUMMARY
2. PRIMARY SKILL (1)
3. SECONDARY SKILLS (2)
4. STACKABLE SKILLS (2–3)
5. WHY THESE FIT THE USER
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
