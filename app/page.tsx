'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div>
      <h2>Welcome to Footballer’s Family ⚽</h2>
      <p>A community for football lovers.</p>

      <button onClick={() => router.push('/login')}>
        Login
      </button>

      <button onClick={() => router.push('/signup')}>
        Signup
      </button>
    </div>
  )
}
