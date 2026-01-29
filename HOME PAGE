'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const footballWords = [
  'football','soccer','goal','match','league',
  'player','coach','fifa','uefa','stadium'
]

export default function Home() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState<any[]>([])

  const isFootball = (msg: string) =>
    footballWords.some(word => msg.toLowerCase().includes(word))

  useEffect(() => {
    supabase.from('chats')
      .select('*')
      .order('created_at', { ascending: true })
      .then(res => setMessages(res.data || []))
  }, [])

  const send = async () => {
    if (!isFootball(text)) {
      alert('Only football-related messages allowed ⚽')
      return
    }

    const user = (await supabase.auth.getUser()).data.user
    const profile = await supabase.from('profiles')
      .select('username')
      .eq('id', user?.id)
      .single()

    await supabase.from('chats').insert({
      user_id: user?.id,
      username: profile.data?.username,
      message: text
    })

    setText('')
    location.reload()
  }

  return (
    <div>
      <h2>Football Chat ⚽</h2>

      {messages.map(m => (
        <p key={m.id}><b>{m.username}</b>: {m.message}</p>
      ))}

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  )
}
