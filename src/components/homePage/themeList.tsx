import React, { useEffect } from 'react'
import { useGetThemesQuery } from '@/generated/types'
import Link from 'next/link'

const ThemeList = () => {
    const { loading, error, data } = useGetThemesQuery()

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <div className="container mx-auto py-6">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data?.themes.map((item, index) => {
                        if (item.__typename !== 'Theme') return null
                        return (
                            <div
                                key={index}
                                className="relative bg-[#18181b] shadow-md rounded-md p-4 hover:shadow-lg"
                            >
                                <div className="absolute inset-0 bg-noise-light opacity-20 rounded-md"></div>
                                <div className="relative z-10">
                                    <Link href={`/theme/${item.title}`}>
                                        <a>
                                            <h2 className="text-lg font-semibold mb-2">
                                                {item.title}
                                            </h2>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ThemeList
