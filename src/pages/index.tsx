import Layout from '../components/layout'
import HeroSection from '../section/hero'
import HighLight from '../section/highlight'
import SectionContainer from '../section/sectionContainer'

const Home = () => {

    return (
        <Layout>
            <HeroSection />
            <HighLight />
            <SectionContainer />
        </Layout>
    )
}

export default Home
