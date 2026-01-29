'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [messages, setMessages] = useState<any[]>([])
  const [text, setText] = useState('')

  useEffect(() => {
    supabase
      .from('chats')
      .select('*')
      .order('created_at', { ascending: true })
      .then(res => setMessages(res.data || []))
  }, [])

  const send = async () => {
    if (!text) return

    const user = (await supabase.auth.getUser()).data.user
    if (!user) return alert('Not logged in')

    await supabase.from('chats').insert({
      user_id: user.id,
      username: 'user',
      message: text
    })

    setText('')
    location.reload()
  }

  return (
    <div>
      <h2>Football Chat ⚽</h2>

      {messages.map(m => (
        <p key={m.id}>{m.message}</p>
      ))}

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  )
}
