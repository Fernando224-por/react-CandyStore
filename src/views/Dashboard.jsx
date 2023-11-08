import { useEffect } from "react"
import { useAuth } from "../context/authContext.jsx"
import ProductCard from "../components/ProductCard.jsx"
import { useProduct } from "../context/productContext.jsx"
function Dashboard() {
  const { user } = useAuth()
  const { products, getProductSeller } = useProduct()
  useEffect(() => {
    getProductSeller()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (products.length === 0) {
    return <h1>No products</h1>
  }
  return (
    <>
    <h2 className="text-center "> welcome {user.username}</h2>
    <br />
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

export default Dashboard