'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    supabase.from('profiles')
      .select('id, username, city, position, gender, approved')
      .then(res => setUsers(res.data || []))
  }, [])

  const approveUser = async (id: string) => {
    await supabase.from('profiles')
      .update({ approved: true })
      .eq('id', id)
    alert('User approved')
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {users.map(u => (
        <div key={u.id} style={{ marginBottom: 10 }}>
          <b>{u.username}</b> | {u.city} | {u.position} | {u.gender}
          {!u.approved && (
            <button onClick={() => approveUser(u.id)}>Approve</button>
          )}
        </div>
      ))}
    </div>
  )
}
