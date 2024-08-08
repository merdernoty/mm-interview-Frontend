'use client'
import React, { useEffect } from 'react'

import Link from 'next/link'
import useThemeList from '@/lib/stores/themeListStore'

const ThemeList = () => {
    const { data, isLoading, fetchThemes } = useThemeList()

    useEffect(() => {
        fetchThemes()
    }, [fetchThemes])

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-[#18181b] shadow-md rounded-md p-4 hover:shadow-lg"
                    >
                        <div className="absolute inset-0 bg-noise-light opacity-20 rounded-md"></div>
                        <div className="relative z-10">
                            <Link href={`/theme/${item.title}`} passHref>
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ThemeList
