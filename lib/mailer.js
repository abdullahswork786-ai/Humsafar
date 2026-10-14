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
    console.warn("Warning: EMAIL_USER or EMAIL_PASS is not configured. Email will be skipped.");
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
 * Generate a high-conversion, branded HUMSAFAR HTML email template.
 */
function generateEmailHtml({ title, badge, fields, button, footerNote }) {
  const fieldRows = fields
    .map(
      (f) => `
      <tr>
        <td style="padding: 10px 14px; font-weight: 700; color: #101C2A; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; width: 35%; border-bottom: 1px solid #ECEFF2; background-color: #F8FAFC;">
          ${f.label}
        </td>
        <td style="padding: 10px 14px; color: #1F2933; font-size: 14px; line-height: 1.5; border-bottom: 1px solid #ECEFF2;">
          ${
            f.isPhone
              ? `<a href="https://wa.me/${String(f.value).replace(/[^0-9]/g, "")}" style="color: #008A4B; font-weight: 700; text-decoration: none;">${f.value} &rarr; (Chat on WhatsApp)</a>`
              : f.isEmail
              ? `<a href="mailto:${f.value}" style="color: #E31B23; font-weight: 600; text-decoration: none;">${f.value}</a>`
              : f.value || '<span style="color: #94A3B8; font-style: italic;">Not Provided</span>'
          }
        </td>
      </tr>
    `
    )
    .join("");

  const actionButton = button
    ? `
      <div style="text-align: center; margin: 28px 0 16px 0;">
        <a href="${button.url}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #E31B23; color: #FFFFFF; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; padding: 14px 28px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 15px rgba(227, 27, 35, 0.35);">
          ${button.label}
        </a>
        <p style="margin-top: 8px; font-size: 11px; color: #64748B;">Link hosted securely on Vercel Cloud Storage</p>
      </div>
    `
    : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F1F5F9; padding: 30px 15px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 30px rgba(16, 28, 42, 0.08); border: 1px solid #E2E8F0; max-width: 100%;">
              
              <!-- Brand Header -->
              <tr>
                <td style="background-color: #101C2A; padding: 26px 30px; text-align: center; border-bottom: 4px solid #E31B23;">
                  <h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase;">
                    HUMSAFAR
                  </h1>
                  <p style="margin: 4px 0 0 0; color: #94A3B8; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">
                    Visa, Immigration & Study Abroad Consultancy
                  </p>
                </td>
              </tr>

              <!-- Title & Badge -->
              <tr>
                <td style="padding: 24px 30px 10px 30px;">
                  ${
                    badge
                      ? `<span style="display: inline-block; background-color: #FEF2F2; color: #E31B23; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 6px; border: 1px solid #FECACA; margin-bottom: 8px;">${badge}</span>`
                      : ""
                  }
                  <h2 style="margin: 0; color: #101C2A; font-size: 20px; font-weight: 800;">
                    ${title}
                  </h2>
                </td>
              </tr>

              <!-- Data Table -->
              <tr>
                <td style="padding: 10px 30px 20px 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #ECEFF2; border-radius: 12px; overflow: hidden; border-collapse: separate; border-spacing: 0;">
                    ${fieldRows}
                  </table>

                  ${actionButton}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #F8FAFC; padding: 18px 30px; text-align: center; border-top: 1px solid #E2E8F0; font-size: 11px; color: #64748B;">
                  <p style="margin: 0 0 4px 0;">This is an automated notification from <strong>humsafar.com</strong> portal.</p>
                  <p style="margin: 0; font-size: 10px; color: #94A3B8;">&copy; ${new Date().getFullYear()} HUMSAFAR Consultancy. All rights reserved.</p>
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
 * Send notification email to admin.
 */
export async function sendNotificationEmail({
  subject,
  title,
  badge,
  fields,
  button,
  replyTo,
}) {
  const transporter = getTransporter();

  if (!transporter) {
    console.log("Email skipped (transporter not configured). Details would have been:", { subject, fields });
    return { success: false, skipped: true };
  }

  const to = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
  const from = `"HUMSAFAR Portal" <${process.env.EMAIL_USER}>`;

  const html = generateEmailHtml({
    title,
    badge,
    fields,
    button,
  });

  const mailOptions = {
    from,
    to,
    subject,
    html,
    replyTo: replyTo || undefined,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Notification email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error("Failed to send notification email:", err);
    return { success: false, error: err.message };
  }
}

export default sendNotificationEmail;

