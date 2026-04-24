## Antsar Trade

### Local development

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build production bundle: `npm run build`

### Contact form email delivery (Netlify)

This project now sends the contact form through a Netlify Function:

- Endpoint: `/.netlify/functions/send-contact`
- Provider: Resend API

Configure these environment variables in your Netlify site settings:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (your inbox)
- `CONTACT_FROM_EMAIL` (verified sender in Resend, optional fallback exists)

You can use `.env.example` as a reference.

