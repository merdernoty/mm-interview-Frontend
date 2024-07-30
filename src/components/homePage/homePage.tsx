import ThemeList from '@/components/homePage/themeList'
import PreFooter from '@/components/ui/footer/PreFooter'
import MainBanner from './mainBanner'
import Container from '@/components/ui/container/Container'
const HomePage = () => {
    return (
        <>
            <Container>
                <MainBanner />
                <ThemeList />
                <PreFooter />
            </Container>
        </>
    )
}

export default HomePage
