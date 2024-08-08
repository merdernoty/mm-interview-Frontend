import PreFooter from '@/components/ui/footer/PreFooter'
import MainBanner from './mainBanner'
import Container from '@/components/ui/container/Container'

import dynamic from 'next/dynamic'
import HomePageContainer from '@/components/ui/container/HomePageContainer'

const ThemeList = dynamic(() => import('@/components/homePage/themeList'), {
    ssr: false,
})
const HomePage = () => {
    return (
        <>
            <HomePageContainer>
                <MainBanner />
            </HomePageContainer>
            <Container>
                <ThemeList />
                <PreFooter />
            </Container>
        </>
    )
}

export default HomePage
