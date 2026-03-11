import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, type, budget, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"JH Dev Agency Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Nuevo lead desde jhdevagency.com',
      html: `
        <h2>Nuevo lead</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Tipo:</b> ${type}</p>
        <p><b>Presupuesto:</b> ${budget}</p>
        <p><b>Mensaje:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('EMAIL ERROR:', error);

    return res.status(500).json({ error: 'Email failed' });
  }
}
