import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, type, budget, message } = req.body;

    await resend.emails.send({
      from: 'JH Dev Agency <onboarding@resend.dev>',
      to: 'tu_correo@gmail.com',
      subject: 'Nuevo lead desde jhdevagency.com',
      html: `
        <h2>Nuevo contacto</h2>
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
    console.error(error);

    return res.status(500).json({ error: 'Email failed' });
  }
}
