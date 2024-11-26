import Link from "next/link"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }) {

  return (
    <>
      <nav>
        <h1>Blus Food Pantry</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}