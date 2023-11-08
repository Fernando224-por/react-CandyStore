import { useState, useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm.jsx"
import { usePayment } from "../context/paymentContext.jsx"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
function PaymentStripe() {
  const { payment, secretKey } = usePayment()

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const paymentString = payment
  const secretString = secretKey

  useEffect(() => {
    if ( typeof paymentString === "string" && paymentString.trim().length > 0) {
      setStripePromise(loadStripe(paymentString))
    } else {
      console.error("object not valid")
    } 
      setClientSecret(secretString)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="max-w-md w-full p-10 rounded-md border-solid border-2 border-zinc-900">
      <h1 className="text-3xl font-bold text-center my-2 py-2 text-black">Confirm you buy</h1>
            {
            stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }} >
                    <CheckoutForm/>
                </Elements>
            )}
      </div>

    </div>
    </>
    
  )
}

export default PaymentStripe