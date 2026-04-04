import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_CONTACT_WEBHOOK_URL;
const N8N_API_KEY = process.env.N8N_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, brand, message } = body;

    // Basic validation
    if (!name || typeof name !== "string" || name.trim().length < 1) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // Sanitize inputs (no HTML, just trim)
    const payload = {
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      brand: typeof brand === "string" ? brand.trim().slice(0, 200) : "",
      message: typeof message === "string" ? message.trim().slice(0, 2000) : "",
      source: "web",
      timestamp: new Date().toISOString(),
    };

    // Forward to n8n (if configured)
    if (N8N_WEBHOOK_URL) {
      const n8nRes = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(N8N_API_KEY ? { "X-API-Key": N8N_API_KEY } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!n8nRes.ok) {
        console.error("n8n webhook failed:", n8nRes.status, await n8nRes.text());
        return NextResponse.json(
          { error: "Failed to process request" },
          { status: 500 }
        );
      }
    } else {
      // Dev fallback: just log
      console.log("[/api/contact] Received submission (n8n not configured):", payload);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
