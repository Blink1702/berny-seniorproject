import Link from "next/link"

async function getSupplies() {
    const res = await fetch('http://localhost:8085/stock',{
      next: {
        revalidate : 60
      }
    })
    
    return res.json()
}

export default async function StockList() {
    const Stock = await getSupplies()
  return (
    <>
        {Stock.map((stock) => (
          <div key={stock.id} className="card my-5">
            <Link href={`/supplies/${stock.id}`}>
              <h3>{stock.item}</h3>
              <p>{stock.amount}</p>
              <p>{stock.type}</p>
              <div className={`pill ${stock.datePurchased}`}>
              </div>
            </Link>
          </div>  
        ))}
        {Order.length === 0 && (
            <p className="text-center">There are no supplies!</p>
        )}
    </>
  )
}
