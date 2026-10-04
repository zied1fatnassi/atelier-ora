import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log the lead data to the server console
    console.log("=== NEW ATELIER ORA STUDIO INQUIRY ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Data:", JSON.stringify(data, null, 2));

    // In production, you can trigger email notifications via Resend, save to Supabase, or send a Telegram/WhatsApp webhook
    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received by Atelier Ora studio.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to process contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process project inquiry.",
      },
      { status: 500 }
    );
  }
}
