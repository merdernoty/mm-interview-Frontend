import React from 'react'
import Spline from '@splinetool/react-spline'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })

const MainBanner = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div
                className="h-[450px] w-full flex rounded-md my-5"
                style={{
                    backgroundImage:
                        'linear-gradient(100deg, #A28CF2, #B5A7EE)',
                }}
            >
                <div
                    className={`flex flex-col justify-between h-full p-4 pl-14 py-16  ${quicksand.className}`}
                >
                    <div className="text-black sm:text-white">
                        <h1 className="text-5xl">MeowMentor</h1>
                        <p className="text-3xl pt-5">
                            AI-Powered Resource created for
                        </p>
                        <p className="text-3xl">mastering Interview</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <p className="text-[32px]">&#123;</p>
                        <button className="bg-[#ffffff] text-[24px] text-[#8F75ED] px-4 py-2 rounded-[8px] shadow-lg">
                            <p className="text-nowrap">
                                Start mastering with AI
                            </p>
                        </button>
                        <p className="text-[24px] text-black"> && </p>
                        <button className="text-[24px]">
                            <p className="text-black sm:text-white text-nowrap">
                                Watch real interviews
                            </p>
                        </button>
                        <p className="text-[32px] ">&#125;</p>
                    </div>
                </div>

                <div className=" z-1 absolute top-0 right-0 h-[500px] w-[50%]">
                    <Spline scene="https://prod.spline.design/x4WR8KAckagUmF9o/scene.splinecode" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner
