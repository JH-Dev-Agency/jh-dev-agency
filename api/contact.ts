import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, type, budget, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env['EMAIL_USER'],
      pass: process.env['EMAIL_PASS'],
    },
  });

  const mailOptions = {
    from: `"JH Dev Agency Lead" <${process.env['EMAIL_USER']}>`,
    to: process.env['EMAIL_USER'],
    subject: 'Nuevo lead desde jhdevagency.com',
    html: `
      <h2>Nuevo lead</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo:</strong> ${type}</p>
      <p><strong>Presupuesto:</strong> ${budget}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Email failed' });
  }
}
