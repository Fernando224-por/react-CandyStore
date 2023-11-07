import { createContext, useContext, useState } from "react";
import { requestPaymentIntent, requestStripeKey } from "../API/payment.js";

export const PaymentContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const usePayment = () => {
    const context = useContext(PaymentContext)
    if (!context) throw new Error (' usePayment must be used within a provider ')
    return (context)
}

// eslint-disable-next-line react/prop-types
export const PaymentProvider = ({ children }) => {
    const [payment, setPayment] = useState([])
    const newPayment = async (Payment) => {
        try {
            const res = await requestPaymentIntent(Payment)
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }
    const getKey = async () => {
        try {
            const res = await requestStripeKey()
            console.log(res.data)
            setPayment(res.data)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <PaymentContext.Provider value={{
            payment,
            getKey,
            newPayment
        }}>
            { children }
        </PaymentContext.Provider>
    )
}