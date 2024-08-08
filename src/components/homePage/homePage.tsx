import PreFooter from '@/components/ui/footer/PreFooter'
import MainBanner from './mainBanner'
import Container from '@/components/ui/container/Container'

import dynamic from 'next/dynamic'

const ThemeList = dynamic(() => import('@/components/homePage/themeList'), {
    ssr: false,
})
const HomePage = () => {
    return (
        <>

                <MainBanner />
            <MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner /><MainBanner />
            <Container>
                <ThemeList />
                <PreFooter />
            </Container>
        </>
    )
}

export default HomePage
