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
<<<<<<< HEAD
    

=======
    var x = ""
    
>>>>>>> dde6dfc59b5820fafd7b0d2dde8d6faedc39e06a
  return (
    <>
        {orders.map((order) => (
          <div key={order.id} className="card my-5">
            <Link href={`/orders/${order.orderid}`}>
              <h3>{order.date.slice(order,10)}</h3>
              <p>{order.item.slice(0,200)}...</p>
              <div className={`pill ${order.fulfilled}`}>
                {order.fulfilled ? null : "Not"} Fullfilled
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
