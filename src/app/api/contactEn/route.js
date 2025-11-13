// /api/contact/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { projectDescription, budget, contact, name } = await request.json()
    console.log('Received data:', { projectDescription, budget, contact, name }) // for debugging

    if (!projectDescription?.trim() || !budget || !contact?.trim()) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send to Telegram with ALL data
    await sendTelegram(projectDescription, budget, contact, name)
    
    return NextResponse.json(
      { message: 'Message sent successfully! I will contact you within 1 hour.' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { message: 'Message received! I will contact you shortly.' },
      { status: 200 } // Always return success for better UX
    )
  }
}

async function sendTelegram(projectDescription, budget, contact, name) {
  const shortDescription = projectDescription.length > 500 
    ? projectDescription.substring(0, 500) + '...' 
    : projectDescription

  const message = `
🎯 New lead from portfolio

👤 Name: ${name || 'Not specified'}
📝 Project Description:
${shortDescription}

💰 Budget: ${budget}
📞 Contact: ${contact}

⏰ ${new Date().toLocaleString('en-US')}
  `.trim()

  const TELEGRAM_BOT_TOKEN = '8033000735:AAE6cGB-LngUngNZ7I0N6m2lYz2wiom_hW4'
  const TELEGRAM_CHAT_ID = '5389242618'

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      })
    })
    
    if (!response.ok) {
      console.error('Telegram API error:', await response.text())
    }
  } catch (error) {
    console.error('Failed to send to Telegram:', error)
  }
}