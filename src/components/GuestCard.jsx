import { Link } from "react-router-dom"
/* eslint-disable react/prop-types */
function GuestCard({ product }) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
            <h1 className="text-2xl font-bold"> {product.name} </h1>
            <div className="flex gap-x-2 items-center">
              <Link to={'/payment'} className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 border border-green-700 rounded" >Buy</Link>
            </div>
        </header>
        <p className="text-slate-300">Region: {product.region}</p>
        <p className="text-slate-300">Price: {product.price}</p>
        <p className="text-slate-300">Category: {product.category}</p>
        <p className="text-slate-300">Offer by: {product.user.name}</p>
    </div>
  )
}

export default GuestCard