import { useAuth } from "../context/authContext.jsx"
function Dashboard() {
  const { user } = useAuth()
  return (
    <>
    <h2 className="text-center "> welcome {user.username}</h2>
    <br />
    </>
  )
}

export default Dashboard