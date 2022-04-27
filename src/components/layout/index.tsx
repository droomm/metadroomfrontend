import Head from 'next/head';
import React, { useEffect } from "react";
import { useNavBar } from '../../contexts/navbar';
import Background from '../background';
import SidePanel from '../sidePanel';
import { LayoutContainer } from './style';

export default function Layout({ children, background, header = "title" }: any) {
    const { updateLeftPanel } = useNavBar();
    return (
        <React.Fragment>
            <Head>
metaphy                <title style={{fontFamily: 'Zen Dots'}}>Metaphy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content='Create and discover interactive metaverses for your brand' />
                <meta property="og:title" content="Metaphy" />
                <meta property="og:description" content="Create and discover interactive metaverses for your brand" />
                <meta property="og:image" content="https://raw.githubusercontent.com/droomm/metadroomfrontend/main/src/assets/icons/meta-image-small.jpg" />
                <meta property="og:type" content="website" />

            </Head>
            <LayoutContainer background={background} id="layout" onScroll={(event: any) => {
                const welcome: any = document.querySelector('#welcome');
                const welcomePosition = welcome.getBoundingClientRect();
                const feature: any = document.querySelector('#features');
                const featurePosition = feature.getBoundingClientRect();
                const content: any = document.querySelector('#content');
                const contentPosition = content.getBoundingClientRect();
                const teamMember: any = document.querySelector('#teamMember');
                const teamMemberPosition = teamMember.getBoundingClientRect();
                const waitingList: any = document.querySelector('#waitingList');
                const waitingListPosition = waitingList.getBoundingClientRect();

                if (welcomePosition.top + 250 < window.innerHeight && welcomePosition.bottom >= 0) {
                    updateLeftPanel(0);
                }
                if (featurePosition.top + 250 < window.innerHeight && featurePosition.bottom >= 0) {
                    updateLeftPanel(1);
                }
                if (contentPosition.top + 250 < window.innerHeight && contentPosition.bottom >= 0) {
                    updateLeftPanel(2);
                }
                if (teamMemberPosition.top + 250 < window.innerHeight && teamMemberPosition.bottom >= 0) {
                    updateLeftPanel(3);
                }
                if (waitingListPosition.top + 0 < window.innerHeight && waitingListPosition.bottom >= 0) {
                    updateLeftPanel(4);
                }
            }} >
                <Background />
                <SidePanel />
                <main className=''>
                    {children}
                </main>
            </LayoutContainer>
        </React.Fragment>
    );
}
