import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [body.email],
      subject: 'Orders From Imacab',
      react: EmailTemplate({ body }),
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
