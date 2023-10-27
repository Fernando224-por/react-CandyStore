import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/authContext.jsx"
import { ProductProvider } from "./context/productContext.jsx"
import HomePage from "./views/homePage.jsx"
import LoginPage from "./views/LoginPage.jsx"
import RegisterPage from "./views/RegisterPage.jsx"
import Dashboard from "./views/Dashboard.jsx"
import ProductForm  from "./views/ProductForm.jsx"
import NavBar from "./components/NavBar.jsx"
import ProtectedRoute from "./protectedRoute.jsx"
import Profile from "./views/Profile.jsx"
function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <NavBar/>

            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/login" element={<LoginPage/>}></Route>
              <Route path="/register" element={<RegisterPage/>}></Route>

              <Route element={<ProtectedRoute/>}>
                <Route path="/Dasboard" element={<Dashboard/>}></Route>
                <Route path="/newProduct" element={<ProductForm/>}></Route>
                <Route path="/Profile" element={<Profile/>}></Route>                
              </Route>

            </Routes>
          </main>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
