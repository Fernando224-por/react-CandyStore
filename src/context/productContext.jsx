import { createContext, useContext, useState } from "react";
import { requestProduct, requestProductSeller } from "../API/product.js";

export const ProductContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => {
    const context = useContext(ProductContext)
    if (!context) throw new Error ('useProduct must be used within a provider')
    return context
}

// eslint-disable-next-line react/prop-types
export const ProductProvider =({ children }) => {
    const [products, setProduct] = useState([])
    const createProduct = async (product) => {
        try {
            const res = await requestProduct(product)
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }
    const getProductSeller = async () => {
        try {
            const res = await requestProductSeller()
            setProduct(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <ProductContext.Provider value={{
            products,
            createProduct,
            getProductSeller
        }}>
            { children }
        </ProductContext.Provider>
    )
}