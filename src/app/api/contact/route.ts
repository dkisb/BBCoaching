import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

    if (!resendApiKey) {
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 })
    }
    if (!toEmail) {
      return NextResponse.json({ error: 'Missing CONTACT_TO_EMAIL' }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)

    const subject = `New contact form submission from ${name}`

    const html = `
      <div style="font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 12px 0">New Message</h2>
        <p style="margin:0 0 8px 0"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px 0"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p style="margin:0 0 8px 0"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p style="margin:12px 0 4px 0"><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0">${escapeHtml(message)}</div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message || 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
