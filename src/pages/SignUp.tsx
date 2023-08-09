import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { createUser } from '../redux/features/user/userSlice';
import { useSignupMutation } from '../redux/features/user/userApi';


interface SignupFormInputs {
    email: string;
    password: string;
}

const SignUp = () => {
    const { user, isLoading, isError, error } = useAppSelector((state) => state.user)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const dispatch = useAppDispatch()
    const [signup, { isSuccess, data }] = useSignupMutation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormInputs>();


    const onSubmit = (data: SignupFormInputs) => {
        dispatch(createUser({ email: data.email, password: data.password }))
        const options = {
            data: { email: data.email }
        }
        signup(options)

    };

    useEffect(() => {
        if (user.email && !isLoading && data?.success) {
            const accessToken = data?.data?.accessToken
            localStorage.setItem('accessToken', accessToken)
            navigate(from, { replace: true })
        }
    }, [user.email, isLoading, from, navigate])

    // useEffect(() => {
    //     if (token) {
    //         navigate('/dashboard')
    //     }
    // }, [token, navigate])
    // if (user || googleUser) {
    //     navigate('/home')
    // }

    return (
        <div className="flex lg:h-screen justify-center items-center bg-gray-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center ">
                    <h2 className="card-title text-2xl">Sign Up</h2>

                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid email",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500 text-sm">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500 text-sm">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password should be contains 6 characters",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-500 text-sm">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-500 text-sm">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="mt-2 text-center">
                            {error && ( // Display the error message if present
                                <p className=" text-red-500 text-sm ">{error}</p>
                            )}
                        </div>
                        <input
                            type="submit"
                            className="btn btn-primary w-full mt-4 text-white"
                            value="Sign Up"
                        />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;