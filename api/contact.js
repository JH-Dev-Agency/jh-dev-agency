const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, type, budget, message } = req.body;

    await resend.emails.send({
      from: 'JH Dev Agency <hello@jhdevagency.com>',
      to: 'jhoracioag11@gmail.com',
      subject: 'Nuevo lead desde jhdevagency.com',
      html: `
        <h2>Nuevo contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Tipo:</b> ${budget}</p>
        <p><b>Mensaje:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error?.message || error);
    return res.status(500).json({ error: 'Email failed', detail: error?.message });
  }
};
