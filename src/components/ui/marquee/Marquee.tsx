'use client'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

interface ImageData {
    image: string
}

function MarqueeUI({ data }: { data: ImageData[] }) {
    return (
        <div className="bg-zinc-200">
            <Marquee pauseOnHover>
                {data.map((item, index) => (
                    <Image
                        className="mx-12"
                        alt="photo"
                        src={item.image}
                        key={index}
                        width={150}
                        height={150}
                    />
                ))}
            </Marquee>
            <Marquee direction="right" pauseOnHover>
                {data.map((item, index) => (
                    <Image
                        className="mx-12"
                        alt="photo"
                        src={item.image}
                        key={index}
                        width={150}
                        height={150}
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueeUI
