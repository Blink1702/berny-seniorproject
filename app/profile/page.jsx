import React from 'react'
import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:8085/users/profile`)
  const profiles = await res.json()

  return profiles.map((profile) => ({
      id: profile.id
  }))
}

async function getProfile(id) {
  const res = await fetch(`http://localhost:8085/users/profile/${id}`,{
    next: {
      revalidate : 60
    }
  })

  if (!res.ok) {
      notFound()
  }
  
  return res.json()
}

export default async function ProfileDetails({params}) {
  const profile = await getProfile(params.id)
  return (
    <main>
        <h2>Profile</h2>
        <h4>LU ID: {profile.luId}</h4>
        <h4>Email: {profile.email}</h4>
        <h4>Orders: {profile.orders}</h4>
    </main>

  )
}
