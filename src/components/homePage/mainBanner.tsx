import React from 'react'
import Spline from '@splinetool/react-spline'

const MainBanner = () => {
    return (
        <div className="flex justify-center items-center w-full">
        <div className="h-[500px] w-[95%] flex rounded-md my-5" style={{
            backgroundImage: 'linear-gradient(100deg, #A28CF2, #B5A7EE)'
        }}>
            <div className="flex-1 p-4">
                <h1 className=" font-bold text-white text-5xl pt-10">
                    mm-interview
                </h1>
                <p className="text-white   text-3xl mt-4">Best site for preparing to interview</p>

                <button className="bg-[#5b2fd0] px-10 py-3 rounded-md">
                    <p className=" text-nowrap">
                        Get Started
                    </p>
                </button>
            </div>

            <div className="flex-1">
                <Spline
                    scene="https://prod.spline.design/x4WR8KAckagUmF9o/scene.splinecode"
                />
            </div>
        </div>
        </div>
    )
}

export default MainBanner
