import Layout from '../components/layout'
import ContentSection from '../section/content'
import FeatureSection from '../section/features'
import HeroSection from '../section/hero'
import TeamMemberSection from '../section/team'

const Home = () => {

    return (
        <Layout>
            <HeroSection />
            <ContentSection />
            <FeatureSection />
            <TeamMemberSection />
        </Layout>
    )
}

export default Home
