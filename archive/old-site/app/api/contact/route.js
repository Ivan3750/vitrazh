// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Vitrazh <${process.env.EMAIL_USERNAME}>`,
      to: "upgrademotiv@gmail.com",
      subject: "Нове повідомлення з форми зворотного зв'язку",
      html: `
        <b>Ім'я:</b> ${name} <br/>
        <b>Телефон:</b> ${phone} <br/>
        <b>Повідомлення:</b><br/> ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
