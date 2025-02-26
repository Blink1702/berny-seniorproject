import Link from "next/link"

async function getOrders() {
    const res = await fetch('http://localhost:8085/orders',{
      next: {
        revalidate : 0 //0 = no cache
      }
    })
    
    return res.json()
}

export default async function OrderList() {
    const orders = await getOrders()

  return (
    <>
        {orders.map((order) => (
          <div key={order.id} className="card my-5">
            <Link href={`/orders/${order.orderid}`}>
              <h3>{order.date}</h3>
              <p>{order.item.slice(0,200)}...</p>
              <div className={`pill ${order.fulfilled}`}>
                 Fullfilled
              </div>
            </Link>
          </div>  
        ))}
        {orders.length === 0 && (
            <p className="text-center">There are no open orders!</p>
        )}
    </>
  )
}
