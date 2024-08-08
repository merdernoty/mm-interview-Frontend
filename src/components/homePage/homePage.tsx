import PreFooter from '@/components/ui/footer/PreFooter'
import MainBanner from './mainBanner'
import Container from '@/components/ui/container/Container'
import { sponsorData } from '@/json/sponsor'
import dynamic from 'next/dynamic'
import MarqueeUI from '../ui/marquee/Marquee'

const ThemeList = dynamic(() => import('@/components/homePage/themeList'), {
    ssr: false,
})

const HomePage = () => {
    return (
        <>
            <Container>
                <MainBanner />
                <MarqueeUI data={sponsorData} />
                <ThemeList />
                <PreFooter />
            </Container>
        </>
    )
}

export default HomePage
