/* eslint-disable react/prop-types */
function GuestCard({ product }) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
            <h1 className="text-2xl font-bold"> {product.name} </h1>
        </header>
        <p className="text-slate-300">Region: {product.region}</p>
        <p className="text-slate-300">Price: {product.price}</p>
        <p className="text-slate-300">Category: {product.category}</p>
        <p className="text-slate-300">Offer by: {product.user.name}</p>
    </div>
  )
}

export default GuestCard