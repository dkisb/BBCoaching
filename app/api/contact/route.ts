import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX_LENGTH = { name: 100, email: 254, phone: 40, message: 5000 } as const
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactInput = { name: string; email: string; phone: string; message: string }

function parseContact(body: unknown): ContactInput | null {
  if (typeof body !== 'object' || body === null) return null
  const raw = body as Record<string, unknown>
  const field = (key: keyof ContactInput) => (typeof raw[key] === 'string' ? raw[key].trim() : '')
  const input = { name: field('name'), email: field('email'), phone: field('phone'), message: field('message') }

  if (!input.name || !input.email || !input.message) return null
  if (!EMAIL_PATTERN.test(input.email)) return null
  const tooLong = (Object.keys(MAX_LENGTH) as (keyof ContactInput)[]).some(
    (key) => input[key].length > MAX_LENGTH[key]
  )
  return tooLong ? null : input
}

export async function POST(req: Request) {
  try {
    const input = parseContact(await req.json())
    if (!input) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const { name, email, phone, message } = input

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

    if (!resendApiKey || !toEmail) {
      console.error('[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL')
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)

    const subject = `New contact form submission from ${name.replace(/[\r\n]+/g, ' ')}`

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
      replyTo: email,
      subject,
      html,
    })

    if (error) {
      console.error('[contact] Resend error', error)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
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
