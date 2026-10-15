import nodemailer from "nodemailer";

/**
 * Creates and returns a Nodemailer transporter.
 */
function getTransporter() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = Number(process.env.EMAIL_PORT) || 465;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransporter({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Generate a modern, elegant, Simple-inspired HUMSAFAR HTML email template.
 * Font Family: Matches the website's exact geometric typography (Manrope) with clean,
 * refined font weights (600/700 for headings, 400/500 for body) instead of heavy/thick 900s.
 */
function generateEmailHtml({ title, badge, fields, button }) {
  const FONT_STACK = "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

  // Extract key recipient/applicant info if available
  const nameField = fields.find((f) => /name/i.test(f.label))?.value || "Client";
  const phoneField = fields.find((f) => f.isPhone || /phone/i.test(f.label))?.value;
  const cleanPhone = phoneField ? String(phoneField).replace(/[^0-9]/g, "") : null;

  const fieldItems = fields
    .map(
      (f) => `
      <div style="padding: 12px 0; border-bottom: 1px solid #EDF2F7;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td valign="top" style="width: 38%; font-family: ${FONT_STACK}; font-size: 11px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; padding-right: 14px;">
              ${f.label}
            </td>
            <td valign="top" style="font-family: ${FONT_STACK}; font-size: 14px; font-weight: 500; color: #1E293B; line-height: 1.55;">
              ${
                f.isPhone
                  ? `<a href="https://wa.me/${String(f.value).replace(/[^0-9]/g, "")}" style="color: #008A4B; font-weight: 600; text-decoration: none; display: inline-block; font-family: ${FONT_STACK};">${f.value} &nbsp;<span style="color: #008A4B; font-size: 11px; font-weight: 600; background-color: #E8F7F0; padding: 2px 8px; border-radius: 999px;">WhatsApp &rarr;</span></a>`
                  : f.isEmail
                  ? `<a href="mailto:${f.value}" style="color: #E31B23; font-weight: 600; text-decoration: none; font-family: ${FONT_STACK};">${f.value}</a>`
                  : f.value || '<span style="color: #94A3B8; font-style: italic; font-weight: 400;">Not Provided</span>'
              }
            </td>
          </tr>
        </table>
      </div>
    `
    )
    .join("");

  // Determine action button: If explicit button passed (e.g. CV download), show it.
  // Otherwise, if phone exists, offer a direct WhatsApp quick action button.
  let renderedButton = "";
  if (button) {
    renderedButton = `
      <div style="margin: 26px 0 10px 0;">
        <table cellpadding="0" cellspacing="0" style="margin: 0;">
          <tr>
            <td align="center" style="border-radius: 50px; background-color: #E31B23; box-shadow: 0 4px 14px rgba(227, 27, 35, 0.25);">
              <a href="${button.url}" target="_blank" rel="noopener noreferrer" style="font-family: ${FONT_STACK}; font-size: 13px; font-weight: 700; color: #FFFFFF; text-decoration: none; padding: 13px 28px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
                ${button.label} &rarr;
              </a>
            </td>
          </tr>
        </table>
        <p style="margin: 8px 0 0 4px; font-size: 11px; color: #94A3B8; font-family: ${FONT_STACK}; font-weight: 400;">Hosted securely on Vercel Cloud Storage</p>
      </div>
    `;
  } else if (cleanPhone) {
    renderedButton = `
      <div style="margin: 22px 0 10px 0;">
        <table cellpadding="0" cellspacing="0" style="margin: 0;">
          <tr>
            <td align="center" style="border-radius: 50px; background-color: #008A4B; box-shadow: 0 4px 14px rgba(0, 138, 75, 0.2);">
              <a href="https://wa.me/${cleanPhone}" target="_blank" rel="noopener noreferrer" style="font-family: ${FONT_STACK}; font-size: 13px; font-weight: 600; color: #FFFFFF; text-decoration: none; padding: 12px 24px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
                Chat With Applicant on WhatsApp &rarr;
              </a>
            </td>
          </tr>
        </table>
      </div>
    `;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      
      <!-- Google Fonts (Manrope) -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
      
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
        
        body, table, td, h1, h2, p, a, span, div {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: ${FONT_STACK}; -webkit-font-smoothing: antialiased;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F1F5F9; padding: 32px 12px;">
        <tr>
          <td align="center">
            
            <!-- Main Content Container (580px, clean white, crisp subtle border) -->
            <table width="580" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05); border: 1px solid #E2E8F0; max-width: 100%;">
              
              <!-- 1. Top Logo Bar (Simple clean brand header) -->
              <tr>
                <td style="padding: 22px 34px 18px 34px; background-color: #FFFFFF; border-bottom: 1px solid #F1F5F9;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="left" valign="middle">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <!-- Red/Navy Brand Icon -->
                            <td style="vertical-align: middle; padding-right: 10px;">
                              <div style="width: 26px; height: 26px; border-radius: 7px; background-color: #101C2A; text-align: center; line-height: 26px; color: #FFFFFF; font-weight: 700; font-size: 13px; font-family: ${FONT_STACK};">
                                H
                              </div>
                            </td>
                            <td style="vertical-align: middle;">
                              <span style="font-size: 17px; font-weight: 700; letter-spacing: 1.5px; color: #101C2A; text-transform: uppercase; font-family: ${FONT_STACK};">
                                HUMSAFAR
                              </span>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" valign="middle">
                        <span style="font-size: 10px; font-weight: 700; color: #E31B23; text-transform: uppercase; letter-spacing: 0.8px; background-color: #FEF2F2; padding: 4px 10px; border-radius: 6px; border: 1px solid #FEE2E2; font-family: ${FONT_STACK};">
                          ${badge || "Portal Alert"}
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- 2. Hero Graphic Illustration Banner (Inspired by Simple's 3-panel geometric banner) -->
              <tr>
                <td style="padding: 0; background-color: #101C2A; border-bottom: 3px solid #E31B23;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                    <tr>
                      
                      <!-- Panel 1: Visas & Grants -->
                      <td width="33%" align="center" style="padding: 24px 10px; border-right: 1px solid rgba(255, 255, 255, 0.08); background-color: #101C2A;">
                        <div style="font-size: 24px; line-height: 1; margin-bottom: 7px;">🏛️</div>
                        <div style="font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.8px; font-family: ${FONT_STACK};">
                          Visas & Grants
                        </div>
                      </td>

                      <!-- Panel 2: Global Pathways -->
                      <td width="34%" align="center" style="padding: 24px 10px; border-right: 1px solid rgba(255, 255, 255, 0.08); background-color: #0E1823;">
                        <div style="font-size: 24px; line-height: 1; margin-bottom: 7px;">🌐</div>
                        <div style="font-size: 10px; font-weight: 600; color: #F1F5F9; text-transform: uppercase; letter-spacing: 0.8px; font-family: ${FONT_STACK};">
                          Global Pathways
                        </div>
                      </td>

                      <!-- Panel 3: Study & Travel -->
                      <td width="33%" align="center" style="padding: 24px 10px; background-color: #101C2A;">
                        <div style="font-size: 24px; line-height: 1; margin-bottom: 7px;">✈️</div>
                        <div style="font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.8px; font-family: ${FONT_STACK};">
                          Study & Travel
                        </div>
                      </td>

                    </tr>
                  </table>
                </td>
              </tr>

              <!-- 3. Editorial Body Section -->
              <tr>
                <td style="padding: 34px 34px 26px 34px;">
                  
                  <!-- Greeting (Clean 700 weight, not heavy 900) -->
                  <h1 style="margin: 0 0 12px 0; font-size: 23px; font-weight: 700; color: #101C2A; letter-spacing: -0.3px; line-height: 1.3; font-family: ${FONT_STACK};">
                    Hey Team Humsafar,
                  </h1>

                  <!-- Intro text (Clean 400 regular weight) -->
                  <p style="margin: 0 0 22px 0; font-size: 14px; font-weight: 400; color: #475569; line-height: 1.6; font-family: ${FONT_STACK};">
                    Just a quick note to notify you that a new <strong>${title}</strong> has been submitted on the HUMSAFAR official website portal by <strong>${nameField}</strong>.
                  </p>

                  <!-- Modern Summary Card -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 4px 18px 6px 18px; margin-bottom: 22px;">
                    ${fieldItems}
                  </div>

                  <!-- Action Button (CV Download or Direct WhatsApp) -->
                  ${renderedButton}

                  <!-- Warm editorial closing text (Regular 400 weight) -->
                  <p style="margin: 24px 0 6px 0; font-size: 14px; font-weight: 400; color: #334155; line-height: 1.6; font-family: ${FONT_STACK};">
                    Three (heck, make it four) cheers for new client opportunities!
                  </p>
                  <p style="margin: 0; font-size: 14px; font-weight: 600; color: #64748B; font-family: ${FONT_STACK};">
                    &mdash; The Team at HUMSAFAR
                  </p>

                </td>
              </tr>

              <!-- 4. Solid Brand Color Footer (Inspired by Simple's bottom block) -->
              <tr>
                <td style="background-color: #101C2A; padding: 24px 34px; border-top: 3px solid #E31B23;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      
                      <!-- Left: Address & Brand Info -->
                      <td align="left" valign="middle">
                        <div style="font-size: 12px; font-weight: 700; color: #FFFFFF; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px; font-family: ${FONT_STACK};">
                          HUMSAFAR Consultancy
                        </div>
                        <div style="font-size: 11px; font-weight: 400; color: #94A3B8; line-height: 1.5; font-family: ${FONT_STACK};">
                          Islamabad & Lahore, Pakistan<br>
                          <a href="mailto:info@humsafar.com" style="color: #CBD5E1; text-decoration: none;">info@humsafar.com</a> &bull; +92 (300) 123-4567
                        </div>
                      </td>

                      <!-- Right: Website Button -->
                      <td align="right" valign="middle">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-left: 10px;">
                              <a href="https://humsafar.com" style="color: #FFFFFF; font-size: 11px; font-weight: 600; text-decoration: none; background-color: rgba(255,255,255,0.12); padding: 7px 14px; border-radius: 8px; font-family: ${FONT_STACK}; display: inline-block;">
                                Website &rarr;
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>

                    </tr>
                  </table>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
}

/**
 * Send notification email to admin via Resend (preferred) or Nodemailer SMTP fallback.
 */
export async function sendNotificationEmail({
  subject,
  title,
  badge,
  fields,
  button,
  replyTo,
}) {
  const html = generateEmailHtml({
    title,
    badge,
    fields,
    button,
  });

  const toEmail = process.env.ADMIN_EMAIL || "abdullahswork786@gmail.com";

  // 1. Preferred: Send via Resend API
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const fromEmail = process.env.EMAIL_FROM || "HUMSAFAR Portal <onboarding@resend.dev>";
      const payload = {
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
      };
      if (replyTo) {
        payload.reply_to = replyTo;
      }

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.id) {
        console.log("Resend notification email delivered:", data.id);
        return { success: true, messageId: data.id, provider: "resend" };
      } else {
        console.error("Resend API error:", data);
      }
    } catch (resendError) {
      console.error("Failed to send via Resend API:", resendError);
    }
  }

  // 2. Fallback: Send via Nodemailer SMTP
  const transporter = getTransporter();
  if (transporter) {
    const from = `"HUMSAFAR Portal" <${process.env.EMAIL_USER}>`;
    const mailOptions = {
      from,
      to: toEmail,
      subject,
      html,
      replyTo: replyTo || undefined,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Nodemailer SMTP email sent:", info.messageId);
      return { success: true, messageId: info.messageId, provider: "smtp" };
    } catch (err) {
      console.error("Failed to send via Nodemailer:", err);
      return { success: false, error: err.message };
    }
  }

  console.warn("Email skipped: Neither RESEND_API_KEY nor SMTP credentials configured.");
  return { success: false, skipped: true };
}

export default sendNotificationEmail;
