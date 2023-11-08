import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext.jsx"

function NavBar() {
    const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="bg-sky-300 my-3 flex justify-between py-5 px-10 rounded-md">
    <Link className="text-2xl font-bold text-black" to={isAuthenticated ? "/Dasboard" : "/"}>Candy Store :D</Link>            
        <ul className="flex gap-x-2">
            { isAuthenticated ? (
                <>
                    <li>
                        <Link to='/' onClick={(logout)} className="bg-indigo-500 px-4 py-1 rounded-md text-cyan-50 font-bold">Cerrar Sesión</Link>
                    </li>
                    <li>
                        <Link to='/Profile' className="bg-indigo-500 px-4 py-1 rounded-md text-cyan-50 font-bold">Profile</Link>
                    </li>
                    <li>
                        <Link to='/newProduct' className="bg-indigo-500 px-4 py-1 rounded-md text-cyan-50 font-bold">Create Product</Link>
                    </li>
                </>
            ):(
                <>
                    <li>
                        <Link to='/login' className="bg-indigo-500 px-4 py-2 rounded-md text-cyan-50 font-bold">Login</Link>
                    </li>
                     <li>
                        <Link to='/register' className="bg-indigo-500 px-4 py-2 rounded-md text-cyan-50 font-bold">Register</Link>
                    </li>
                </>
            )}
        </ul>
    </nav>
  )
}

export default NavBar