import React from 'react';
import clsx from 'clsx';

const PreFooter = () => {
    const dividerClass = clsx(
        'absolute top-0 left-1/4 w-1/2 border-t border-transparent',
        'border-t-[1px] border-gradient-gray shadow-[0_1px_10px_rgba(76,44,164,0.8)]',
        'before:block before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#8a2be2] before:to-transparent'
    );

    const containerClass = clsx(
        'bg-[radial-gradient(145%_105%_at_45%_20%,_transparent_40%,_#63e_75%,_#c8c8ff_95%)]',
        'h-[250px] flex items-center justify-center rounded-lg p-5 shadow-[0_20px_20px_rgba(76,44,164,0.2)]'
    );

    return (
        <>
            <div className="relative my-5">
            <div className={dividerClass} />
                <div className="relative ">
                    <div className={containerClass}>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreFooter;
