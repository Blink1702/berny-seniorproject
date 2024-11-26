"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'


// components
import AuthForm from "../AuthForm"

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const user = {
        email, password
    }

    const res = await fetch('http://localhost:3083/users/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/')
    } 

  }
[]
  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}