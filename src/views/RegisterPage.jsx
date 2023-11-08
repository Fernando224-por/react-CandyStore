import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext.jsx';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function RegisterPage () {
    const { register, handleSubmit, formState:{
        errors
    } } = useForm()
    const { singup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/Dasboard')
        }
    }, [isAuthenticated, navigate]) 
    const sendData = handleSubmit (async (values) => {
        singup(values)
    })
    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <div className="max-w-md w-full p-10 rounded-md border-solid border-2 border-zinc-900">
                <h1 className="text-2xl font-bold text-center my-2">Register</h1>
                {
                    registerErrors.map((error, i) => (
                        <div key={i} className="bg-red-500 p-2 text-white">
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={ sendData }>
                    <div>
                        <input type="text" {...register('name', {
                            required: {
                                value: true,
                                message: "Name is required"
                            },
                            minLength: {
                                value: 4,
                                message: 'You name must be have 4 characters'
                            },
                            maxLength: {
                                value: 150,
                                message: 'You name must be menor to 150 characters'
                            }
                        })}
                        className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" placeholder='username'
                        />
                        {
                            errors.username && (
                                <p className="text-red-500" >{errors.name.message}</p>
                            )
                        }
                    </div>

                    <div>
                        <input type="number" {...register('phone',{ required: {
                            value: true,
                            message: 'Phone is required'
                        },
                        maxLength: {
                            value: 11,
                            message: 'You phone number must have 11 numbers'
                        },
                        valueAsNumber: {
                            value: true,
                            message: 'This field must be number'
                        }
                        })}
                        className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" placeholder='Phone number'
                        />
                        {
                            errors.username && (
                                <p className="text-red-500" >{errors.phone.message}</p>
                            )
                        }
                    </div>

                    <div>
                        <input type="email" {...register('email', { required: {
                            value: true,
                            message: "Email is Rquired"
                        },
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                            message: "This email is invalid"
                        }
                        })}
                        className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" placeholder='email'
                        />
                        {
                            errors.email && (
                                <p className="text-red-500" >{errors.email.message}</p>
                            )
                        }                    
                    </div>

                    <div>
                    <input type="password" {...register('password', { required: {
                        value: 'true',
                        message: 'password is required'
                    },
                    minLength: {
                        value: 8,
                        message: 'Your password need minimun 8 characters'
                    }
                    })}
                    className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md my-2" placeholder='password'
                    />
                        {
                            errors.password && (
                                <p className="text-red-500">password is Required</p>
                            )
                        }                
                    </div>
                    <div className='flex items-center justify-center py-3'>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 border border-blue-700 rounded">Register</button>
                    </div>
                </form>
                <p className="flex gap-x-2 justify-between my-2">
                        You have account? <Link to={'/login'} className="text-red-500">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage
