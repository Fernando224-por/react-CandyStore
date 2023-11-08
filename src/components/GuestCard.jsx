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
    <div className="max-w-md w-full p-10 rounded-md border-solid border-2 border-pink-400">
      <form onSubmit={sendData}>
          <header className="flex justify-between">
              <h1 className="text-2xl font-bold" {...register('description', {value: product.name})}> {product.name} </h1>
          </header>
          <div className="py-2">
            <p className="text-zinc-800">Region: {product.region}</p>
            <p className="text-zinc-800" {...register('amount', { value: product.price })}>Price: {product.price}$</p>
            <p className="text-zinc-800">Category: {product.category}</p>
            <p className="text-zinc-800">Offer by: {product.user.name}</p>
            <p className="text-zinc-800" hidden {...register('seller', {value: product.user._id})}>User Id: {product.user._id}</p>
          </div>
          <div className="flex gap-x-2 items-center py-2">
            <button type="submit" className="bg-red-300 hover:bg-red-400 text-black font-bold py-2 px-4 border border-red-400 rounded">Buy now!</button>
          </div>
      </form>
    </div>
  )
}

export default GuestCard