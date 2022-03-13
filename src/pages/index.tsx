
import Footer from '../section/footer'
import Layout from '../components/layout'
import ContentSection from '../section/content'
import FeatureSection from '../section/features'
import HeroSection from '../section/hero'
import TeamMemberSection from '../section/team'
import WaitingList from '../section/waitingList'

const Home = () => {

    return (
        <Layout>
            <HeroSection />
            <FeatureSection />
            <ContentSection />
            <TeamMemberSection />
            <WaitingList />

            <Footer />
        </Layout>
    )
}

export default Home
