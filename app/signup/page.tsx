'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Signup() {
  const [form, setForm] = useState<any>({})

  const register = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: `${form.username}@ff.com`,
      password: form.password
    })

    if (error) return alert(error.message)

    await supabase.from('profiles').insert({
      id: data.user?.id,
      username: form.username,
      city: form.city,
      position: form.position,
      gender: form.gender
    })

    alert('Signup successful! Await admin approval.')
  }

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })} />

      <input placeholder="City of residence"
        onChange={e => setForm({ ...form, city: e.target.value })} />

      <input placeholder="Playing position"
        onChange={e => setForm({ ...form, position: e.target.value })} />

      <select onChange={e => setForm({ ...form, gender: e.target.value })}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input type="password" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />

      <br /><br />
      <button onClick={register}>Register</button>
    </div>
  )
}
