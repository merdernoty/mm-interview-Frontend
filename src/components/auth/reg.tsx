'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const SignUpForm = () => {
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const handlePasswordChange = (e: any) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        setIsButtonDisabled(newPassword !== repeatPassword)
    }

    const handleRepeatPasswordChange = (e: any) => {
        const newRepeatPassword = e.target.value
        setRepeatPassword(newRepeatPassword)
        setIsButtonDisabled(password !== newRepeatPassword)
    }

    return (
        <section className="bg-blackUI z-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full  rounded-3xl shadow md:mt-0 sm:max-w-2xl p-0  bg-mainBlack border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex pt-8  justify-center">
                            <h1 className="text-xl justify-center text-center font-bold leading-tight tracking-tight  md:text-3xl text-white">
                                Create account
                                <div className="text-base mt-2 font-light text-gray-400">
                                    Your your personal interviewer
                                </div>
                            </h1>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className="mx-10 md:mx-20">
                                <label className="block mb-2 text-sm font-medium  text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className=" border rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white "
                                    placeholder="name@company.com"
                                ></input>
                            </div>
                            <div className="mx-10 md:mx-20">
                                <label className="block mb-2 text-sm font-medium  text-white">
                                    Your username
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className=" border   rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                    placeholder="herobrine"
                                ></input>
                            </div>

                            <div className="mx-10 md:mx-20">
                                <label className="block mb-2 text-sm font-medium  text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className=" border   rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                    value={password}
                                    onChange={handlePasswordChange}
                                ></input>
                            </div>
                            <div className="mx-10 md:mx-20">
                                <label className="block mb-2 text-sm font-medium  text-white">
                                    Repeat Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className=" border   rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                                    value={repeatPassword}
                                    onChange={handleRepeatPasswordChange}
                                ></input>
                            </div>
                            <div className="mx-10 md:mx-20">
                                <button
                                    type="submit"
                                    className={`w-full w-text-white bg-indigo-400 hover:bg-indigo-300 font-medium rounded-xl text-md px-5 py-2.5 text-center  text-black  ${isButtonDisabled ? 'bg-indigo-400 cursor-not-allowed' : ''}`}
                                    disabled={isButtonDisabled}
                                >
                                    Create
                                </button>
                            </div>
                            <p className="text-sm text-center pb-8 font-light text-gray-500 dark:text-gray-400">
                                I already have an account{' '}
                                <Link
                                    href="/auth/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpForm
