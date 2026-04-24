const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Name, email, and message are required.' }),
      };
    }

    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Please provide a valid email address.' }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'ANTSAR Contact <onboarding@resend.dev>';

    if (!apiKey || !toEmail) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ message: 'Email service is not configured on the server.' }),
      };
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: subject?.trim() || `New website inquiry from ${name}`,
        text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      }),
    });

    const emailPayload = await emailResponse.json();

    if (!emailResponse.ok) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ message: 'Email provider rejected the request.', details: emailPayload }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, id: emailPayload.id }),
    };
  } catch {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Unexpected error while sending email.' }),
    };
  }
}
