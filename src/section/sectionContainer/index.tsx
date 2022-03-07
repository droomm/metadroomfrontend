import React from "react";
import ContentSection from '../content';
import FeatureSection from '../features';
import TeamMemberSection from '../team';
import { Container } from './style';

const SectionContainer = () => {

    return <Container >
        <FeatureSection />
        <ContentSection />
        <TeamMemberSection />
    </Container >

}

export default SectionContainer;
