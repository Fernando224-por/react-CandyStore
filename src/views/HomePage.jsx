import { useEffect } from "react"
import { useProduct } from "../context/productContext"
import GuestCard from "../components/GuestCard"
function HomePage() {
  const { products, getProductGuest } = useProduct()
  useEffect(() => {
    getProductGuest()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (products.length === 0) {
    return <h1 className="text-center my-5 text-2xl">No hay productos disponibles</h1>
  }
  return (
    <>    
    <div className="text-center my-5 text-3xl "><h1>Estos son nuestros productos</h1></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {
        products.map( product => (
          <GuestCard product={product} key={product._id}/>
        ))
      }
    </div>
    </>

  )
}

export default HomePage