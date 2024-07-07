import Link from 'next/link'
import React from 'react'

function LoginFrom() {
    return (
        <section className="bg-blackUI z-10">
            <div className="flex flex-col items-center justify-center py-8 mx-auto h-screen lg:py-0">
                <div className="w-full  rounded-3xl shadow md:mt-0 sm:max-w-2xl p-0  bg-mainBlack border-gray-700">
                    <div className=" space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex  pt-10 justify-center">
                            <h1 className="text-xl  justify-center text-center font-bold leading-tight tracking-tight  md:text-3xl text-white">
                                Sign in
                                <div className="text-base mt-4 font-light text-gray-400">
                                    Your your personal interviewer
                                </div>
                            </h1>
                        </div>
                        <form className="space-y-4 md:space-y-6" >
                            <div className="md:px-20 px-10">
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className=" border rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                    placeholder="name@company.com"
                                ></input>
                            </div>
                            <div className="md:px-20 px-10">
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="border rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                ></input>
                            </div>
                            <div className="flex items-center md:px-20 px-10 justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border  rounded-xl  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
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
                            <div className="md:px-20 px-10 ">
                                <button
                                    type="submit"
                                    className="w-full text-mainBlack bg-indigo-400  active:bg-indigo-300 font-medium rounded-xl text-md  py-2.5 text-center"
                                >
                                    Sign in
                                </button>
                            </div>
                            <p className="text-sm text-center font-light pb-16 px-20 text-gray-400">
                                Don’t have an account yet?{' '}
                                <Link
                                    href="/auth/reg"
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
