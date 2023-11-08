import { useAuth } from '../context/authContext.jsx'


function Profile() {
  const {  user } = useAuth()

  if (user.length == 0) {
    return <h1>No tasks</h1>
  }
  return (
    <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="max-w-md w-full p-10 rounded-md border-solid border-2 border-zinc-800">
            <h1>Your data</h1>
            <p>Email: {user.email}</p>
            <p>Name: {user.username}</p>
            <p>Phone: {user.phone}</p>
          </div>
        </div>
    </>
  )
}

export default Profile