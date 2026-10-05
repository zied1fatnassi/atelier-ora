import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Proposal" | "Won" | "Lost";

export interface StudioLead {
  id: string;
  createdAt: string;
  status: LeadStatus;
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType?: string;
  services: string[];
  budget?: string;
  details?: string;
  timeline?: string;
  referralSource?: string;
  consent: boolean;
  locale: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead: StudioLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      status: "New",
      fullName: body.fullName || "",
      businessName: body.businessName || "",
      email: body.email || "",
      phone: body.phone || "",
      businessType: body.businessType || "",
      services: Array.isArray(body.services) ? body.services : [],
      budget: body.budget || "",
      details: body.details || "",
      timeline: body.timeline || "",
      referralSource: body.referralSource || "Website Direct",
      consent: Boolean(body.consent),
      locale: body.locale || "en",
    };

    // Log structured lead to server logs
    console.log(`=== NEW ${siteConfig.name} PROJECT INQUIRY ===`);
    console.log("Lead ID:", lead.id);
    console.log("Timestamp:", lead.createdAt);
    console.log("Lead Payload:", JSON.stringify(lead, null, 2));

    // Optional environment-driven integrations (e.g. Resend / Webhook)
    // If RESEND_API_KEY is configured in Vercel, send notification to projects@aura-prod.tech
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `AURA PROD Inquiries <${siteConfig.emails.general}>`,
            to: [siteConfig.emails.projects],
            reply_to: lead.email,
            subject: `New Project Inquiry: ${lead.businessName} (${lead.fullName})`,
            html: `
              <h2>New Project Inquiry Received</h2>
              <p><strong>Name:</strong> ${lead.fullName}</p>
              <p><strong>Business:</strong> ${lead.businessName}</p>
              <p><strong>Email:</strong> ${lead.email}</p>
              <p><strong>Phone:</strong> ${lead.phone}</p>
              <p><strong>Services:</strong> ${lead.services.join(", ")}</p>
              <p><strong>Timeline:</strong> ${lead.timeline}</p>
              <p><strong>Details:</strong><br/>${lead.details}</p>
            `,
          }),
        });
      } catch (err) {
        console.warn("Failed to dispatch email via Resend:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        leadId: lead.id,
        message: `Your project brief has been received by ${siteConfig.name}.`,
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
