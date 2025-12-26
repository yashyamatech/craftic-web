export const runtime = "nodejs";


import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {


    const data = await req.json();

    const {
      name,
      email,
      phone,
      company,
      subject,
      budget,
      timeline,
      message,
    } = data;


    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }


    const htmlContent = `
      <html>
        <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:40px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
                  <tr>
                    <td style="padding:32px;">
                      <h2 style="margin:0 0 16px;color:#111;">
                        📩 New Portfolio Inquiry
                      </h2>

                      <p style="margin:0 0 24px;color:#555;">
                        Someone just submitted your contact form.
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#333;">
                        ${row("Name", name)}
                        ${row("Email", email)}
                        ${row("Phone", phone || "—")}
                        ${row("Company", company || "—")}
                        ${row("Subject", subject)}
                        ${row("Budget", budget || "—")}
                        ${row("Timeline", timeline || "—")}
                      </table>

                      <hr style="margin:24px 0;border:none;border-top:1px solid #eee;" />

                      <p style="margin:0 0 8px;font-weight:bold;color:#111;">
                        Message
                      </p>

                      <p style="margin:0;color:#444;line-height:1.6;">
                        ${escapeHtml(message)}
                      </p>
                    </td>
                  </tr>
                </table>

                <p style="margin-top:16px;font-size:12px;color:#888;">
                  Sent from your portfolio website
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_SMTP_KEY || "",
        },
        body: JSON.stringify({
          sender: {
            name: "Portfolio",
            email: process.env.MAIL_FROM,
          },
          to: [
            {
              email: process.env.MAIL_TO,
              name: "Me",
            },
          ],
          subject: "New Portfolio Lead",
          htmlContent: htmlContent,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json(
        { error: err },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}



/* helpers */

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;color:#666;width:30%;">${label}</td>
      <td style="padding:8px 0;color:#111;font-weight:500;">${value}</td>
    </tr>
  `;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}