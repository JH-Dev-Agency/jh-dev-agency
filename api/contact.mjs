import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  type: z.string(),
  budget: z.string(),
  message: z.string().min(10),
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const validatedData = contactSchema.parse(req.body);
    const { name, email, type, budget, message } = validatedData;

    await resend.emails.send({
      from: 'JH Dev Agency <hello@jhdevagency.com>',
      to: 'jhoracio19@hotmail.com',
      subject: `Nuevo lead: ${type} - ${name}`,
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Interés:</b> ${type}</p>
        <p><b>Presupuesto:</b> ${budget}</p>
        <p><b>Mensaje:</b></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid data', details: error.errors });
    }
    console.error('Resend error:', error?.message || error);
    return res.status(500).json({ error: 'Email failed', detail: error?.message });
  }
}
