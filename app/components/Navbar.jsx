import Image from 'next/image'
import Link from 'next/link'
import Logo from "./LUlogo.png"

export default function Navbar() {
  return (
    <nav>
        <Image 
            src={Logo}
            alt='Lawrence University logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
        <h1>Lawrence University Food Pantry</h1>
        <Link href="/">Home</Link>
        <Link href="/form">Form</Link>
        </nav>
  )
}
