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
 * Generate a modern, editorial, Simple-inspired HUMSAFAR HTML email template.
 * Inspired by modern fintech/SaaS email architecture (clean header, hero visual banner,
 * editorial typography, elegant summary card, and solid brand footer).
 */
function generateEmailHtml({ title, badge, fields, button }) {
  // Extract key recipient/applicant info if available
  const nameField = fields.find((f) => /name/i.test(f.label))?.value || "Client";

  const fieldItems = fields
    .map(
      (f) => `
      <div style="padding: 12px 0; border-bottom: 1px solid #EEF2F6;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td valign="top" style="width: 38%; font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; padding-right: 12px;">
              ${f.label}
            </td>
            <td valign="top" style="font-size: 14px; font-weight: 600; color: #0F172A; line-height: 1.5;">
              ${
                f.isPhone
                  ? `<a href="https://wa.me/${String(f.value).replace(/[^0-9]/g, "")}" style="color: #008A4B; font-weight: 800; text-decoration: none; display: inline-block;">${f.value} &nbsp;<span style="color: #008A4B; font-size: 11px; font-weight: 700; background-color: #E8F7F0; padding: 2px 8px; border-radius: 999px;">WhatsApp &rarr;</span></a>`
                  : f.isEmail
                  ? `<a href="mailto:${f.value}" style="color: #E31B23; font-weight: 700; text-decoration: none;">${f.value}</a>`
                  : f.value || '<span style="color: #94A3B8; font-style: italic; font-weight: 400;">Not Provided</span>'
              }
            </td>
          </tr>
        </table>
      </div>
    `
    )
    .join("");

  const actionButton = button
    ? `
      <div style="margin: 28px 0 10px 0;">
        <table cellpadding="0" cellspacing="0" style="margin: 0;">
          <tr>
            <td align="center" style="border-radius: 50px; background-color: #E31B23; box-shadow: 0 4px 14px rgba(227, 27, 35, 0.3);">
              <a href="${button.url}" target="_blank" rel="noopener noreferrer" style="font-size: 13px; font-weight: 800; color: #FFFFFF; text-decoration: none; padding: 14px 28px; display: inline-block; text-transform: uppercase; letter-spacing: 0.8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                ${button.label} &rarr;
              </a>
            </td>
          </tr>
        </table>
        <p style="margin: 8px 0 0 4px; font-size: 11px; color: #94A3B8;">Hosted securely on Vercel Cloud Storage</p>
      </div>
    `
    : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #EDF2F7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #EDF2F7; padding: 32px 12px;">
        <tr>
          <td align="center">
            
            <!-- Main Content Container (Max 580px, clean white with crisp edges) -->
            <table width="580" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(15, 23, 42, 0.06); border: 1px solid #E2E8F0; max-width: 100%;">
              
              <!-- 1. Top Logo Bar (Simple clean brand header) -->
              <tr>
                <td style="padding: 24px 36px 20px 36px; background-color: #FFFFFF; border-bottom: 1px solid #F1F5F9;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="left" valign="middle">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <!-- Red/Navy Brand Icon -->
                            <td style="vertical-align: middle; padding-right: 10px;">
                              <div style="width: 26px; height: 26px; border-radius: 8px; background-color: #101C2A; text-align: center; line-height: 26px; color: #FFFFFF; font-weight: 900; font-size: 14px;">
                                H
                              </div>
                            </td>
                            <td style="vertical-align: middle;">
                              <span style="font-size: 18px; font-weight: 900; letter-spacing: 2px; color: #101C2A; text-transform: uppercase;">
                                HUMSAFAR
                              </span>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" valign="middle">
                        <span style="font-size: 10px; font-weight: 800; color: #E31B23; text-transform: uppercase; letter-spacing: 1px; background-color: #FEF2F2; padding: 4px 10px; border-radius: 6px; border: 1px solid #FEE2E2;">
                          ${badge || "Portal Alert"}
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- 2. Hero Graphic Illustration Banner (Inspired by Simple's 3-panel geometric banner) -->
              <tr>
                <td style="padding: 0; background-color: #101C2A; border-bottom: 4px solid #E31B23;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                    <tr>
                      
                      <!-- Panel 1: Embassy / Destination Outline Art -->
                      <td width="33%" align="center" style="padding: 26px 12px; border-right: 1px solid rgba(255, 255, 255, 0.08); background-color: #101C2A;">
                        <div style="color: #60A5FA; font-size: 26px; line-height: 1; margin-bottom: 8px;">🏛️</div>
                        <div style="font-size: 10px; font-weight: 800; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px;">
                          Visas & Grants
                        </div>
                      </td>

                      <!-- Panel 2: Center Globe / Coordination Network -->
                      <td width="34%" align="center" style="padding: 26px 12px; border-right: 1px solid rgba(255, 255, 255, 0.08); background-color: #0D1722;">
                        <div style="color: #E31B23; font-size: 26px; line-height: 1; margin-bottom: 8px;">🌐</div>
                        <div style="font-size: 10px; font-weight: 800; color: #FFFFFF; text-transform: uppercase; letter-spacing: 1px;">
                          Global Pathways
                        </div>
                      </td>

                      <!-- Panel 3: Airplane / Journey Flight -->
                      <td width="33%" align="center" style="padding: 26px 12px; background-color: #101C2A;">
                        <div style="color: #F59E0B; font-size: 26px; line-height: 1; margin-bottom: 8px;">✈️</div>
                        <div style="font-size: 10px; font-weight: 800; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px;">
                          Study & Travel
                        </div>
                      </td>

                    </tr>
                  </table>
                </td>
              </tr>

              <!-- 3. Editorial Body Section -->
              <tr>
                <td style="padding: 36px 36px 28px 36px;">
                  
                  <!-- Greeting -->
                  <h1 style="margin: 0 0 14px 0; font-size: 26px; font-weight: 900; color: #0F172A; letter-spacing: -0.5px; line-height: 1.2;">
                    Hey Team Humsafar,
                  </h1>

                  <!-- Intro text -->
                  <p style="margin: 0 0 24px 0; font-size: 15px; color: #475569; line-height: 1.6;">
                    Just a quick note to notify you that a new <strong>${title}</strong> has been submitted on the HUMSAFAR official website portal by <strong>${nameField}</strong>.
                  </p>

                  <!-- Modern Summary Card -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 6px 20px 8px 20px; margin-bottom: 24px;">
                    ${fieldItems}
                  </div>

                  <!-- Action Button (if present) -->
                  ${actionButton}

                  <!-- Warm editorial closing text -->
                  <p style="margin: 28px 0 6px 0; font-size: 14px; color: #334155; line-height: 1.6; font-style: normal;">
                    Three (heck, make it four) cheers for new client opportunities!
                  </p>
                  <p style="margin: 0; font-size: 14px; font-weight: 700; color: #64748B;">
                    &mdash; The Team at HUMSAFAR
                  </p>

                </td>
              </tr>

              <!-- 4. Solid Brand Color Footer (Inspired by Simple's vivid bottom block) -->
              <tr>
                <td style="background-color: #101C2A; padding: 26px 36px; border-top: 3px solid #E31B23;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      
                      <!-- Left: Address & Brand Info -->
                      <td align="left" valign="middle">
                        <div style="font-size: 12px; font-weight: 800; color: #FFFFFF; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                          HUMSAFAR Consultancy
                        </div>
                        <div style="font-size: 11px; color: #94A3B8; line-height: 1.5;">
                          Islamabad & Lahore, Pakistan<br>
                          <a href="mailto:info@humsafar.com" style="color: #E2E8F0; text-decoration: none;">info@humsafar.com</a> &bull; +92 (300) 123-4567
                        </div>
                      </td>

                      <!-- Right: Social Links -->
                      <td align="right" valign="middle">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-left: 12px;">
                              <a href="https://humsafar.com" style="color: #FFFFFF; font-size: 11px; font-weight: 700; text-decoration: none; background-color: rgba(255,255,255,0.12); padding: 6px 12px; border-radius: 8px;">
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
