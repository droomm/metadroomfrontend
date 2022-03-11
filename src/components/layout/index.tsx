import Head from 'next/head';
import React, { useEffect } from "react";
import { useNavBar } from '../../contexts/navbar';
import Background from '../background';
import LeftSidePanel from '../sidePanel/left';
import { LayoutContainer } from './style';

export default function Layout({ children, background, header = "title" }: any) {
    const { updateLeftPanel } = useNavBar();
    let url = "";
    useEffect(() => {
        url = `${window.location.origin}/_next/image?url=/images/screen.webp&w=1920&q=100`
    }, [])
    return (
        <React.Fragment>
            <Head>
                <title>VirtualWide</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="VirtualWide" />
                <meta property="og:description" content="Play games, party hard & meet your favorite people in life-like virtual worlds" />
                <meta property="og:image" content={url} />
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
                if (contentPosition.top + 250 < window.innerHeight && contentPosition.bottom >= 0) {
                    updateLeftPanel(1);
                }
                if (featurePosition.top + 250 < window.innerHeight && featurePosition.bottom >= 0) {
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
                <LeftSidePanel />
                <main className=''>
                    {children}
                </main>
            </LayoutContainer>
        </React.Fragment>
    );
}
