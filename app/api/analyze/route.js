export async function POST(req) {
  try {
    const body = await req.json();

    const input = body.input;

    // SIMPLE LOGIC (replace with AI later if you want)
    const output = `You said: ${input}`;

    return Response.json({
      result: output,
    });
  } catch (error) {
    return Response.json({
      result: "Error occurred",
    });
  }
}
