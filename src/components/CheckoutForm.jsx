import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
  }
  return (
    <>
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <br />
        <div className="flex items-center justify-center ">
          <button disabled={ isProcessing || !stripe || !elements } id="submit"
          className=" bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-20 border border-green-700 rounded"
          >
            <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
            </span>
          </button>
        </div>

          {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
    </>

  )
}

export default CheckoutForm