import { notFound } from "next/navigation"
import Link from "next/link"

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch(`http://localhost:8085/orders`)
    const orders = await res.json()

    return orders.map((order) => ({
        id: order.id
    }))
}

async function getOrder(id) {
    const res = await fetch(`http://localhost:8085/orders/${id}`,{
      next: {
        revalidate : 60
      }
    })

    if (!res.ok) {
        notFound()
    }
    
    return res.json()
}

export default async function OrderDetails({params}) {
    const order = await getOrder(params.id)
  return (
    <main>
        <nav>
            <h2>Order Details</h2>
        </nav>
        <div className="card">
        <Link href={`/profile/${order.user}`}>
            <h3>Date created: {order.date}</h3>
        </Link>
            <small>{order.orderid}</small>
            <p>{order.item}</p>
            
            <div className={`pill ${order.fulfilled}`}>
                {order.fulfilled ? null : "Not"} Fulfilled
            </div>
        </div>
    </main>
  )
}
