import Link from 'next/link'
import React from 'react'

interface BentoBlockProps {
    imageSrc: string
    title: string
    className?: string
}

const BentoBlock: React.FC<BentoBlockProps> = ({
    imageSrc,
    title,
    className,
}) => {
    return (
        <div
            className={`relative overflow-hidden transform transition-transform duration-200 hover:scale-105 rounded-xl ${className}`}
        >
            <Link href={`/theme/${title}`} passHref>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold p-4">
                    {title}
                </div>
            </Link>
        </div>
    )
}

export default BentoBlock
