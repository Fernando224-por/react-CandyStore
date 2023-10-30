import { useEffect } from "react"
import { useProduct } from "../context/productContext"
import ProductCard from "../components/ProductCard"
function HomePage() {
  const { products, getProductGuest } = useProduct()
  useEffect(() => {
    getProductGuest()
  }, [getProductGuest])
  return (
    <>    
    <div className="text-center my-5 text-2xl"><h1>Estos son nuestros productos</h1></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {
        products.map( product => (
          <ProductCard product={product} key={product._id}/>
        ))
      }
    </div>
    </>

  )
}

export default HomePage