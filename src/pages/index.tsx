import Layout from '../components/layout'
import ContentSection from '../section/content'
import FeatureSection from '../section/features'
import HeroSection from '../section/hero'

const Home = () => {

    return (
        <Layout>
            <HeroSection />
            <FeatureSection />
            <ContentSection />
        </Layout>
    )
}

export default Home
