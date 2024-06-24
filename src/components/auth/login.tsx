import Link from 'next/link'
import React from 'react'

function LoginFrom() {
    return (
        <section className="bg-gray-900 z-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className=" border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                    placeholder="name@company.com"
                                ></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                ></input>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                                        ></input>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className=" text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    href="/"
                                    className="text-sm font-medium text-primary-600 hover:underline text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-indigo-400 hover:bg-primary-700  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light  text-gray-400">
                                Don’t have an account yet?{' '}
                                <Link
                                    href="/"
                                    className="font-medium  hover:underline text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginFrom
