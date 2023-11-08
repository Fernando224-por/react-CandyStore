import { useForm, Controller } from "react-hook-form"
import { useProduct } from "../context/productContext"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Toaster } from "sonner"
import { successAction, badAction, updateAction } from "../utils/Toast.jsx"
function ProductForm() {
  const { register, handleSubmit, control, setValue } = useForm()
  const { createProduct, getProduct, updateProduct } = useProduct()
  const params = useParams()
  useEffect (() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id)
        setValue('name', product.data.name)
        setValue('region', product.data.region),
        setValue('price', product.data.price),
        setValue('category', product.data.category)
      }
    }
    loadProduct()
  },[params, getProduct, setValue])
  const sendData = handleSubmit((data)=>{
    const validData = {
      ...data
    }
    if (!params.id) {
      try {
        createProduct(validData)
        successAction()
      } catch (error) {
        badAction()
      }

    } else {
      try {
        updateProduct(params.id, validData)
        updateAction()
      } catch (error) {
        console.log(error)
        badAction()
      }
    }
  })
  return (
    <><div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="max-w-md w-full p-10 rounded-md border-solid border-2 border-zinc-900">
        <form onSubmit={sendData}>
          <label htmlFor="title">Name of the product</label>
          <input type="text" {...register('name', { require: true })}
            autoFocus
            className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" />
          <br />
          <label htmlFor="region">Region</label>
          <input type="region" {...register('region', { require: true })}
            autoFocus
            className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" />
          <br />
          <label htmlFor="price">Price</label>
          <input type="number" {...register('price', { required: true, valueAsNumber: true })}
            className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" />
          <br />
          <label htmlFor="title">Category</label>
          <Controller
            name="category" // Nombre del campo, debe coincidir con el nombre en el objeto 'data'
            control={control}
            rules={{ required: true }}
            defaultValue="Otros" // Valor por defecto
            render={({ field }) => (
              <select {...field} className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2">
                <option value="Gomitas">Gomitas</option>
                <option value="Galletas">Galletas</option>
                <option value="Dulces de leche">Dulces de leche</option>
                <option value="Turrones">Turrones</option>
                <option value="Helados">Helados</option>
                <option value="Otros">Otros</option>
              </select>
            )} />

          <br />
          <div className="flex items-center justify-center py-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 border border-blue-700 rounded">Register</button>
          </div>
        </form>
      </div>
    </div><>
        <Toaster />
      </></>
  )
}

export default ProductForm