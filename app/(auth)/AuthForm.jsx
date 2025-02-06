"use client"

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, username, password)}>
      <label>
        <span>Username:</span>
        <input 
          type="username" 
          onChange={(e) => setUser(e.target.value)}
          value={username}
          required 
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  )
}