import { useState, useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm.jsx"
import { usePayment } from "../context/paymentContext.jsx"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
function PaymentStripe() {
  const { payment, secretKey } = usePayment()

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const paymentString = JSON.stringify(payment);
  console.log(paymentString)
  const secretKeyString = JSON.stringify(secretKey)
  const publicKey = payment.publishableKey
  console.log(publicKey)
  const keySecret = secretKey.clientSecret
  
    useEffect(() => {
      if (secretKeyString) {
        if (typeof paymentString === "string" && paymentString.trim().length > 0) {
          setStripePromise(loadStripe(publicKey))
        } else {
          console.error("El valor de payment no es una cadena válida.");
        }
      setClientSecret(keySecret)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
    <div className="text-center my-5 text-2xl">
        <h1>Payment with stripe :D</h1>
    </div>
    {
            stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }} >
                    <CheckoutForm/>
                </Elements>
            )}
    </>
    
  )
}

export default PaymentStripe