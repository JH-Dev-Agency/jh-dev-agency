import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('REQUEST BODY:', req.body);

  try {
    const { name, email, type, budget, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env['EMAIL_USER'],
        pass: process.env['EMAIL_PASS'],
      },
    });

    console.log('SENDING EMAIL...');

    await transporter.sendMail({
      from: `"JH Dev Agency Lead" <${process.env['EMAIL_USER']}>`,
      to: process.env['EMAIL_USER'],
      subject: 'Nuevo lead desde jhdevagency.com',
      html: `<p>${name} - ${email}</p>`,
    });

    console.log('EMAIL SENT');

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('EMAIL ERROR:', error);

    return res.status(500).json({ error: 'Email failed' });
  }
}
