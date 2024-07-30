import React from 'react'
import clsx from 'clsx'

const PreFooter = () => {
   
    const dividerClass = clsx(
        'absolute top-0 left-1/2 w-1/2 border-t border-transparent',
        'border-gradient-gray shadow-[0_1px_10px_rgba(76,44,164,0.8)] z-0',
    )

    const containerClass = clsx(
        'bg-[radial-gradient(145%_105%_at_45%_20%,_transparent_40%,_#63e_75%,_#c8c8ff_95%)]',
        'h-[300px] flex items-center justify-center rounded-lg p-5 shadow-[0_20px_20px_rgba(76,44,164,0.2)]',
    )

    return (
        <>
            <div className="relative">
                <div className={dividerClass} />
                <div className="relative px-12 py-5">
                    <div className={dividerClass} />
                    <div className={containerClass}>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreFooter
