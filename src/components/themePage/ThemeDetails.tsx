"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import useThemeData from '@/lib/stores/themeDataStore'
import Subtheme from './Subtheme'
import SpinnerUI from '../ui/spinner/spinner'

const ThemeDetails = () => {
    const { data, fetchThemeData } = useThemeData()
    const { themeTitle } = useParams<{ themeTitle: string }>()

    useEffect(() => {
        fetchThemeData(themeTitle)
    }, [themeTitle, fetchThemeData])

    if (!data || !data.subthemes) {
        return <SpinnerUI />
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
            <div className="flex">
                <div className="flex-grow mr-8">
                    {data.subthemes.map(
                        (
                            subtheme: any, // eslint-disable-line @typescript-eslint/no-explicit-any
                        ) => (
                            <Subtheme
                                data={data}
                                key={subtheme.title}
                                subtheme={subtheme}
                            />
                        ),
                    )}
                </div>
                <div className="w-1/3 mt-12">
                    <ul>
                        <li>
                            <h2 className="text-xl font-semibold mb-2">
                                Description
                            </h2>
                            <p>{data.description}</p>
                        </li>
                        <li className="text-xl font-semibold mt-32">
                            <h2 className="text-xl font-semibold mb-2">
                                Award
                            </h2>
                            {data.award.image}
                        </li>
                        <li className="mt-20">
                            <h2 className="text-xl font-semibold">Related</h2>
                            <ul className="mt-2 space-y-2">
                                {data.relatedThemes.map(
                                    (
                                        theme: any, // eslint-disable-line @typescript-eslint/no-explicit-any
                                        index: any, // eslint-disable-line @typescript-eslint/no-explicit-any
                                    ) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            {theme.title}
                                            <p>123</p>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ThemeDetails
