import Image from 'next/image'
import Link from 'next/link'
import Logo from "./LUlogo.png"

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image 
            src={Logo}
            alt='Lawrence University logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
      </Link>
      <Link href="/">
        <h1>Lawrence University Food Pantry</h1>
      </Link>
      <Link href="/orders/create">Order Form</Link>
      <Link href="/supplies">Supplies</Link>
      <Link href="/login">Login</Link>
    </nav>
  )
}
