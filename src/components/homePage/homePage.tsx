import React, { useEffect } from 'react'
import { useGetThemesQuery } from '@/generated/types'
import ThemeList from '@/components/homePage/themeList'
import Link from 'next/link'
import PreFooter from '@/components/ui/footer/PreFooter'
import Spline from '@splinetool/react-spline/next'
const HomePage = () => {


    return (
        <>
        <div className="h-96 w-full bg-violet-300">
        <Spline
                    scene="https://prod.spline.design/hu4zPKRYKZVlbKNB/scene.splinecode"
                />
                </div>
            <ThemeList/>
            <PreFooter></PreFooter>
        </>
    )
}

export default HomePage
