import PreFooter from '@/components/ui/footer/PreFooter'
import MainBanner from './mainBanner'
import Container from '@/components/ui/container/Container'
import { sponsorData } from '@/json/sponsor'
import MarqueeUI from '../ui/marquee/Marquee'
import HomePageContainer from '@/components/ui/container/HomePageContainer'
import MainBento from '../themeBento/bento'

const HomePage = () => {
    return (
        <>
            <HomePageContainer>
                <MainBanner />
                <MarqueeUI data={sponsorData} />
            </HomePageContainer>
            <Container>
                <MainBento />
                <PreFooter />
            </Container>
        </>
    )
}

export default HomePage
