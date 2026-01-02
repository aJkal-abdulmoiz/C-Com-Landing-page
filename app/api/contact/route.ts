import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, companyName, email, phone, details } = body;

    if (!firstName || !lastName || !companyName || !email) {
      return new Response(
        JSON.stringify({ error: "Required fields are missing" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${firstName} ${lastName} from ${companyName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light dark">
          <meta name="supported-color-schemes" content="light dark">
          <title>New Contact Submission</title>
          <style type="text/css">
            :root {
              color-scheme: light dark;
              supported-color-schemes: light dark;
            }
            
            /* Light mode (default) */
            .email-body { background-color: #f3f4f6; }
            .email-container { background: linear-gradient(145deg, rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.85)); border: 1px solid rgba(6, 188, 189, 0.2); }
            .header-section { background: linear-gradient(135deg, rgba(6, 188, 189, 0.1), transparent); border-bottom: 1px solid rgba(6, 188, 189, 0.2); }
            .badge { background: rgba(6, 188, 189, 0.1); border: 1px solid rgba(6, 188, 189, 0.3); }
            .badge-text { color: #06bcbd; }
            .heading { color: #1f2937; }
            .subheading { color: rgba(31, 41, 55, 0.7); }
            .info-card { background: radial-gradient(50% 50% at 50% 100%, rgba(6, 188, 189, 0.08), transparent 100%), #ffffff; border: 1px solid #e5e7eb; }
            .label { color: rgba(31, 41, 55, 0.6); }
            .value { color: #1f2937; }
            .link { color: #06bcbd; }
            .message-text { color: rgba(31, 41, 55, 0.9); }
            .footer-section { background: rgba(0, 0, 0, 0.03); border-top: 1px solid rgba(0, 0, 0, 0.08); }
            .footer-text { color: rgba(31, 41, 55, 0.5); }
            .glow-line { background: linear-gradient(90deg, transparent, #06bcbd, transparent); }
    
            /* Dark mode overrides */
            @media (prefers-color-scheme: dark) {
              .email-body { background-color: #080a0d !important; }
              .email-container { background: linear-gradient(145deg, rgba(10, 9, 10, 0.95), rgba(10, 9, 10, 0.85)) !important; border: 1px solid #222 !important; }
              .header-section { background: linear-gradient(135deg, rgba(6, 188, 189, 0.1), transparent) !important; border-bottom: 1px solid rgba(6, 188, 189, 0.2) !important; }
              .heading { color: #ffffff !important; }
              .subheading { color: rgba(229, 231, 235, 0.7) !important; }
              .info-card { background: radial-gradient(50% 50% at 50% 100%, rgba(6, 188, 189, 0.15), transparent 100%), #020203 !important; border: 1px solid #1a1a1a !important; }
              .label { color: rgba(229, 231, 235, 0.6) !important; }
              .value { color: #ffffff !important; }
              .message-text { color: rgba(229, 231, 235, 0.9) !important; }
              .footer-section { background: rgba(0, 0, 0, 0.3) !important; border-top: 1px solid rgba(255, 255, 255, 0.05) !important; }
              .footer-text { color: rgba(229, 231, 235, 0.5) !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" class="email-body" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" class="email-container" style="max-width: 600px; width: 100%; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(6, 188, 189, 0.15);">
                  
                  <!-- Header with Gradient Glow -->
                  <tr>
                    <td style="padding: 0; position: relative;">
                      <div class="glow-line" style="height: 3px; opacity: 0.8;"></div>
                      <div class="header-section" style="padding: 40px 30px; text-align: center;">
                        <div class="badge" style="display: inline-block; padding: 8px 20px; border-radius: 50px; margin-bottom: 20px;">
                          <span class="badge-text" style="font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">New Inquiry</span>
                        </div>
                        <h1 class="heading" style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2;">Let's Talk Submission</h1>
                        <p class="subheading" style="margin: 12px 0 0 0; font-size: 14px;">Someone wants to connect with you</p>
                      </div>
                    </td>
                  </tr>
    
                  <!-- Contact Information Cards -->
                  <tr>
                    <td style="padding: 30px;">
                      
                      <!-- Name & Company Row -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td width="48%" class="info-card" style="border-radius: 12px; padding: 20px; vertical-align: top;">
                            <p class="label" style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</p>
                            <p class="value" style="margin: 0; font-size: 18px; font-weight: 600;">${firstName} ${lastName}</p>
                          </td>
                          <td width="4%"></td>
                          <td width="48%" class="info-card" style="border-radius: 12px; padding: 20px; vertical-align: top;">
                            <p class="label" style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</p>
                            <p class="value" style="margin: 0; font-size: 18px; font-weight: 600;">${companyName}</p>
                          </td>
                        </tr>
                      </table>
    
                      <!-- Email Card -->
                      <div class="info-card" style="border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                        <p class="label" style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email Address</p>
                        <p style="margin: 0;">
                          <a href="mailto:${email}" class="link" style="font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                        </p>
                      </div>
    
                      ${phone ? `
                      <div class="info-card" style="border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                        <p class="label" style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone Number</p>
                        <p style="margin: 0;">
                          <a href="tel:${phone}" class="link" style="font-size: 16px; font-weight: 500; text-decoration: none;">${phone}</a>
                        </p>
                      </div>
                      ` : ''}
    
                      ${details ? `
                      <div class="info-card" style="border-radius: 12px; padding: 20px;">
                        <p class="label" style="margin: 0 0 12px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Additional Details</p>
                        <p class="message-text" style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${details}</p>
                      </div>
                      ` : ''}
    
                    </td>
                  </tr>
    
                  <!-- CTA Button -->
                  <tr>
                    <td style="padding: 0 30px 30px 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #06bcbd 0%, #076b6d 100%); color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 16px 32px; border-radius: 10px; box-shadow: 0 4px 12px rgba(6, 188, 189, 0.3);">
                              Reply to ${firstName}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    
                  <!-- Footer -->
                  <tr>
                    <td class="footer-section" style="padding: 20px 30px; text-align: center;">
                      <p class="footer-text" style="margin: 0; font-size: 12px;">
                        Received ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      <p class="footer-text" style="margin: 8px 0 0 0; font-size: 11px;">
                        This message was sent from your website contact form
                      </p>
                    </td>
                  </tr>
    
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };
    

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
