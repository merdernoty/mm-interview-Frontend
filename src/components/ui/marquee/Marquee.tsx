'use client'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

interface ImageData {
    image: string
}

function MarqueeUI({ data }: { data: ImageData[] }) {
    return (
        <Marquee>
            {data.map((item, index) => (
                <Image
                    alt="photo"
                    src={item.image}
                    key={index}
                    width={100}
                    height={100}
                />
            ))}
        </Marquee>
    )
}

export default MarqueeUI
