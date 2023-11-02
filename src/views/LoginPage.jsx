import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function LoginPage () {
    const { register, handleSubmit, formState:{
        errors
    } } = useForm()
    const { singin, errors: singinErrors, isAuthenticated } = useAuth()
    const navegate = useNavigate() 
    const sendData = handleSubmit(data => {
        singin(data)
    })
    useEffect(() => {
        if (isAuthenticated) {
            navegate('/Dasboard')
        }
    }, [isAuthenticated, navegate]) 
    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md"> 
                <h1 className="text-3xl font-bold text-center my-2">Login</h1>
                {
                singinErrors.map((error, i) => (
                    <div key={i} className="bg-red-500 p-2 text-white text-center my-2 rounded-md">
                        {error}
                    </div>
                ))
                }
                <form onSubmit={ sendData }>
                    <div>
                        <input type="email" {...register('email',{ 
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                message: "This email is invalid"
                            }
                        })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder='email'
                        />
                        {
                            errors.email && (
                                <p className="text-red-500" >{errors.email.message}</p>
                            )
                        }                    
                    </div>

                    <div>
                    <input type="password" {...register('password', { required: {
                        value: true,
                        message: 'Password is required'
                    } ,
                    minLength: {
                        value: 8,
                        message: 'Your password need minimun 8 characters'
                    }
                    })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder='password'
                    />
                        {
                            errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )
                        }                
                    </div>
                    <div className=" flex items-center justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Login</button>
                    </div>
                </form>
                <p className="flex gap-x-2 justify-between my-3">
                    Do not have account? <Link to={'/register'} className="text-sky-500">Sign up</Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage