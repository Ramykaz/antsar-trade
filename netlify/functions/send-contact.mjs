const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method not allowed' }) };
  }

  let name, email, subject, message;
  try {
    ({ name, email, subject, message } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ message: 'Invalid request body.' }) };
  }

  if (!name || !email || !message) {
    return { statusCode: 400, headers, body: JSON.stringify({ message: 'Name, email, and message are required.' }) };
  }
  if (!isValidEmail(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ message: 'Please provide a valid email address.' }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'ANTSAR Contact <onboarding@resend.dev>';

  if (!apiKey || !toEmail) {
    return { statusCode: 500, headers, body: JSON.stringify({ message: 'Email service is not configured on the server.' }) };
  }

  let emailResponse;
  try {
    emailResponse = await fetch('https://api.resend.com/emails', {
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
  } catch (err) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ message: `Could not reach email service: ${err.message}` }),
    };
  }

  let emailPayload = {};
  try {
    emailPayload = await emailResponse.json();
  } catch {
    // Resend returned non-JSON — still check status
  }

  if (!emailResponse.ok) {
    const reason = emailPayload?.message || emailPayload?.name || `HTTP ${emailResponse.status}`;
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ message: `Email provider error: ${reason}` }),
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ ok: true, id: emailPayload.id }),
  };
}
