"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// components
import AuthForm from "../AuthForm"

export default function Signup() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, username, password) => {
    e.preventDefault()
    setError('')

    const user = {
        username, password
    }

    const res = await fetch('http://localhost:8085/users/signup', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    if (error) {
        setError(error.message)
      }
      if (!error) {
        router.push('/signup/addProfile')
      }
    
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}