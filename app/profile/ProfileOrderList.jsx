"use client"

import { useEffect, useState } from 'react';
import Link from "next/link"

async function getUserOrders(id) {
  const res = await fetch(`http://localhost:8085/orders/userOrders/${id}`,{
    next: {
      revalidate : 0 //0 = no cache
    }
  })
  
  return res.json()
  
}


export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const id = window.location.pathname.slice(9);
      getUserOrders(id).then((data) => {
        setOrders(data);
      });
    }
  }, []);
    
  return (
    <>
        {orders.map((order) => (
          <div key={order.id} className="card my-5">
              <h3>{order.item}...</h3>
              <p>{order.date}</p>
              <div className={`pill ${order.fulfilled}`}>
                Fulfilled
              </div>
          </div>  
        ))}
        {orders.length === 0 && (
            <p className="text-center">You don&apos;t have any orders!</p>
        )}
    </>
  )
}
