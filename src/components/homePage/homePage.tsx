import PreFooter from '@/components/ui/footer/PreFooter'
import MainBanner from './mainBanner'
import Container from '@/components/ui/container/Container'
import { sponsorData } from '@/json/sponsor'
import dynamic from 'next/dynamic'
import MarqueeUI from '../ui/marquee/Marquee'
import HomePageContainer from '@/components/ui/container/HomePageContainer'
import FlexBentos from '@/components/homePage/flexBentos'

const ThemeList = dynamic(() => import('@/components/homePage/themeList'), {
    ssr: false,
})

const HomePage = () => {
    return (
        <>
            <HomePageContainer>
                <MainBanner />
            </HomePageContainer>
            <MarqueeUI data={sponsorData} />
            <HomePageContainer>
                <FlexBentos/>
                <ThemeList />
                <PreFooter />
            </HomePageContainer>
        </>
    )
}

export default HomePage
