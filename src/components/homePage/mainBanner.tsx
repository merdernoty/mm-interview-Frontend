import React from 'react'
import Spline from '@splinetool/react-spline'

const MainBanner = () => {
    return (
        <div className="h-96 w-full bg-violet-300 flex rounded-md my-5">
            <div className="flex-1 p-4">
                <h1 className=" font-bold text-white text-5xl pt-10">
                    mm-interview
                </h1>
                <p className="text-white   text-3xl mt-4">Best site for</p>
                <p className="text-white   text-3xl mt-4">
                    Описание или другая информация.
                </p>
                <button className="bg-[#5b2fd0] px-10 py-3 rounded-md">
                    <p className=" text-nowrap">
                        Get Started
                    </p>
                </button>
            </div>

            <div className="flex-1">
                <Spline scene="https://prod.spline.design/x4WR8KAckagUmF9o/scene.splinecode"/>
            </div>
        </div>
    )
}

export default MainBanner
