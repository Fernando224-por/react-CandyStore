import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/authContext.jsx"
function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth()
    console.log(loading, isAuthenticated)
    if (loading) {
        return <div>loading ...</div>
    }
    if (!loading && !isAuthenticated) {
        return <Navigate to='/login' replace />
    }
  return (
    <Outlet />
  )
}

export default ProtectedRoute