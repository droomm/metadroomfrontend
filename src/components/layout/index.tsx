import Head from 'next/head';
import React, { useRef, useState } from "react";
import { useNavBar } from '../../contexts/navbar';
import BackgroundVideo from '../background';
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
            <LayoutContainer background={background} onScroll={() => {
                const welcome: any = document.querySelector('#welcome');
                const welcomePosition = welcome.getBoundingClientRect();
                const feature: any = document.querySelector('#features');
                const featurePosition = feature.getBoundingClientRect();

                if (welcomePosition.top < window.innerHeight && welcomePosition.bottom >= 0) {
                    updateLeftPanel(0);
                }
                if (featurePosition.top < window.innerHeight && featurePosition.bottom >= 0) {
                    updateLeftPanel(1);
                }
            }} >
                <BackgroundVideo />
                <LeftSidePanel />
                <RightSidePanel />
                <HeaderComponent />
                {/* <div className='fixed background w-full h-full ' /> */}
                <main className=''>
                    <div style={{ height: "8vh", width: "100vw" }} />
                    {children}
                </main>
            </LayoutContainer>
        </React.Fragment>
    );
}
