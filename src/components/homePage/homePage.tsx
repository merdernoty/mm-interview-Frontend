import React, { useEffect } from 'react'
import { useGetThemesQuery } from '@/generated/types'
import ThemeList from '@/components/homePage/themeList'
import Link from 'next/link'
import PreFooter from '@/components/ui/footer/PreFooter'
import Spline from '@splinetool/react-spline/next'
const HomePage = () => {
    const { loading, error, data } = useGetThemesQuery()

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
        <div className="h-96 w-full bg-violet-200">
                <Spline
                    scene="https://prod.spline.design/hu4zPKRYKZVlbKNB/scene.splinecode"
                />
                </div>
            <ThemeList/>
        </>
    )
}

export default HomePage
