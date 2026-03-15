import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'cedenoargenys39@gmail.com',
      subject: 'Nuevo registro — Odiseum AI',
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
    });

    console.log('Resend result:', result);
    return Response.json({ success: true });

  } catch (error) {
    console.log('Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}