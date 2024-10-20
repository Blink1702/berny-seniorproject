import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3x1">Oh No!</h2>
        <p>We could not find the order you were looking for.</p>
        <p>Go back to all <Link href="/orders">orders</Link></p>
    </main>
  )
}
