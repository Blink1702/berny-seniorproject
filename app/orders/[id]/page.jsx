import { notFound } from "next/navigation"

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
    var x = `Not`
    if(order.fulfilled==true){
        x = `Order`
    }
  return (
    <main>
        <nav>
            <h2>Order Details</h2>
        </nav>
        <div className="card">
            <h3>{order.user}</h3>
            <small>Date created: {order.date}</small>
            <p>{order.item}</p>
            
            <div className={`pill ${x}`}>
                {x} Fulfilled
            </div>
        </div>
    </main>
  )
}
