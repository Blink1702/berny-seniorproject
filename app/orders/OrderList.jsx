import Link from "next/link"

async function getOrders() {
    const res = await fetch('',{
      next: {
        revalidate : 0 //0 = no cache
      }
    })
    
    return res.json()
}

export default async function OrderList() {
    const Order = await getOrders()
  return (
    <>
        {Order.map((Order) => (
          <div key={Order.id} className="card my-5">
            <Link href={`/tickets/${order.id}`}>
              <h3>{Order.title}</h3>
              <p>{Order.body.slice(0,200)}...</p>
              <div className={`pill ${Order.priority}`}>
              </div>
            </Link>
          </div>  
        ))}
        {Order.length === 0 && (
            <p className="text-center">There are no open orders!</p>
        )}
    </>
  )
}