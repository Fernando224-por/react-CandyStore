import { useProduct } from "../context/productContext"
/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  const { deleteProduct } = useProduct()
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
            <h1 className="text-2xl font-bold"> {product.name} </h1>
            <div className="flex gap-x-2 items-center">
              <button onClick={() => {
                deleteProduct( product._id )
              }} className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 border border-red-700 rounded">
                  Delete
              </button>
            </div>
        </header>
        <p className="text-slate-300">{product.region}</p>
        <p className="text-slate-300">Price: {product.price}</p>
        <p className="text-slate-300">Offer by: {product.user.name}</p>
    </div>
  )
}

export default ProductCard