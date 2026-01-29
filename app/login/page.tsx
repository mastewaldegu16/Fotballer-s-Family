'use client'
import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const login = async (): Promise<void> => {
    if (!username || !password) {
      window.alert('Please enter username and password')
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: `${username}@ff.com`,
        password
      })

      if (error) {
        window.alert(error.message)
      } else {
        // Successful login — navigate to home
        router.push('/home')
      }
    } catch (err) {
      console.error('Login error:', err)
      window.alert('An unexpected error occurred. Check console for details.')
    } finally {
      setLoading(false)
    }
  }

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      void login()
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={onUsernameChange}
        onKeyDown={onKeyDown}
        aria-label="username"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        onKeyDown={onKeyDown}
        aria-label="password"
      />

      <br />
      <br />

      <button onClick={() => void login()} disabled={loading}>
        {loading ? 'Logging in…' : 'Login'}
      </button>
    </div>
  )
}
