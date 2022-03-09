import Head from 'next/head';
import React from "react";
import { useNavBar } from '../../contexts/navbar';
import Background from '../background';
import HeaderComponent from '../header';
import LeftSidePanel from '../sidePanel/left';
import RightSidePanel from '../sidePanel/right';
import { LayoutContainer } from './style';

export default function Layout({ children, background, header = "title" }: any) {
    const { updateLeftPanel } = useNavBar();
    return (
        <React.Fragment>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            }} >
                <Background />
                <LeftSidePanel />
                {/* <RightSidePanel /> */}
                {/* <HeaderComponent /> */}
                <main className=''>
                    {children}
                </main>
            </LayoutContainer>
        </React.Fragment>
    );
}
