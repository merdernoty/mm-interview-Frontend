import React from 'react'
import Spline from '@splinetool/react-spline'

const FlexBentos = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-5 grid-rows-10 sm:grid-rows-4 gap-6 py-6 ">
            <div className="col-span-1 row-span-1 sm:col-start-1 sm:row-start-1 sm:row-end-2 lg:col-span-1 lg:row-span-2 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">More users each day</h2>
                <p>123123 users</p>
            </div>
            <div className="col-span-1 row-span-1 sm:col-span-1 sm:row-start-3 sm:row-end-5 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Join us</h2>
                <p>tg</p>
                <p>ds</p>
            </div>
            <div className="col-span-1 row-span-1 sm:col-start-2 sm:row-start-1 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">100 Themes</h2>
            </div>
            <div className="col-span-1 row-span-1 sm:col-start-2 sm:row-start-2 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">777 interviews Base</h2>
            </div>
            <div className="col-span-1 row-span-1 sm:col-start-3 sm:col-end-6 sm:row-start-1 sm:row-end-3 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">AI integration</h2>
                <p>get experience of real interview by talking to AI</p>
            </div>
            <div className="col-span-1 row-span-2 sm:col-start-2 sm:col-end-5 sm:row-start-3 sm:row-end-5 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Share</h2>
                <p>
                    share ur interview expirience All aspects of the interview
                    will be <span className="text-[#DA8AF6]">anonymous</span>,
                    and no identifying details will be shared
                </p>
            </div>

            <div className="col-span-1 row-span-1 sm:col-start-5 sm:row-start-3 bg-gray-800 text-white p-6 rounded-lg shadow-lg relative">
                <div>
                    <p className="text-2xl font-bold mb-4 z-10">
                        Subscribe <br /> for only{' '}
                        <span className="text-[#DA8AF6]">5$</span>
                    </p>
                </div>
                <Spline
                    scene="https://prod.spline.design/HbZ45ogN6WiroZoB/scene.splinecode"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '80%',
                        transform: 'translate(-50%, -50%) scale(0.8)',
                        width: '50%',
                        height: '50%',
                    }}
                />
            </div>
            <div className="col-span-1 row-span-1 sm:col-start-5 sm:row-start-4 bg-gray-800 text-white p-6 rounded-lg shadow-lg relative">
                <div>
                    <p className="text-2xl font-bold mb-4 z-10">
                        Get new <span className="text-[#DA8AF6]">habit</span>{' '}
                        <br />{' '}
                        <span className="text-grayViolet text-lg">
                            Crack the interview
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlexBentos
