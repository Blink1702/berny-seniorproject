import { notFound } from "next/navigation"

export const dynamicParams = true

export async function  generateStaticParams() {
    const res = await fetch('')

    const tickets = await res.json()

    return OrderList.map((order) => ({
        id: order.id
    }))
}

async function getOrder(id) {
    const res = await fetch('' + id,{
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
            <h3>{order.title}</h3>
            <small>Created by {order.user_email}</small>
            <p>{order.body}</p>
            <div className={`pill ${order.priority}`}>
                {order.priority} priority
            </div>
        </div>
    </main>
  )
}
