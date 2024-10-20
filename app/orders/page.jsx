import { Suspense } from "react";
import OrderList from "./OrderList";
import Loading from "../loading";

export default function Order() {
  return (
    <main>
        <nav>
            <div>
                <h2>Orders</h2>
                <p><small>Currently open orders</small></p>
            </div>
        </nav>

        <Suspense fallback={<Loading />}>
          <OrderList />
        </Suspense>
    </main>
  )
}
