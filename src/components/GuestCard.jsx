import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { usePayment, } from "../context/paymentContext"
/* eslint-disable react/prop-types */
function GuestCard({ product }) {
  const { register, handleSubmit } = useForm()
  const { newPayment, getKey } = usePayment()
  const navegate = useNavigate()
  useEffect(() => {
    getKey()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const sendData = handleSubmit(async (data) => {
    const validData = {
      ...data
    }
    try {
      console.log(validData)
      await newPayment(validData)
      navegate('/checkOut')
    } catch (err) {
      console.error(err)
    }
  })
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={sendData}>
          <header className="flex justify-between">
              <h1 className="text-2xl font-bold" {...register('description', {value: product.name})}> {product.name} </h1>
          </header>
          <p className="text-slate-300">Region: {product.region}</p>
          <p className="text-slate-300" {...register('amount', { value: product.price })}>Price: {product.price}</p>
          <p className="text-slate-300">Category: {product.category}</p>
          <p className="text-slate-300">Offer by: {product.user.name}</p>
          <p className="text-slate-300" hidden {...register('seller', {value: product.user._id})}>User Id: {product.user._id}</p>
          <div className="flex gap-x-2 items-center">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 border border-green-700 rounded">Buy now!</button>
          </div>
      </form>
    </div>
  )
}

export default GuestCard