import React, { useEffect } from 'react'
import { useGetThemesQuery } from '@/generated/types'
import ThemeList from '@/components/homePage/themeList'
import Link from 'next/link'
import PreFooter from '@/components/ui/footer/PreFooter'
import Spline from '@splinetool/react-spline/next'
import MainBanner from './mainBanner'
import Container  from '@/components/ui/container/Container'
const HomePage = () => {
    return (
        <>
        <Container>
            <MainBanner />
                <ThemeList/>
                <PreFooter/>
            </Container>
           
        </>
    );
}

export default HomePage
