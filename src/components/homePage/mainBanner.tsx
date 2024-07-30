import React from 'react'
//import Spline from '@splinetool/react-spline/next'

const MainBanner = () => {
    return (
        <div className="h-96 w-full bg-violet-300 flex rounded-md my-5">
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold text-white">Заголовок</h1>
                <p className="text-white mt-2">
                    Описание или другая информация.
                </p>
            </div>

            <div className="flex-1">
                {/* <Spline scene="https://prod.spline.design/hu4zPKRYKZVlbKNB/scene.splinecode" /> */}
            </div>
        </div>
    )
}

export default MainBanner
