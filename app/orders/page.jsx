import OrderList from "./OrderList";

export default function Order() {
  return (
    <main>
        <nav>
            <div>
                <h2>Orders</h2>
                <p><small>Currently open orders</small></p>
            </div>
        </nav>

        <OrderList />
    </main>
  )
}
