import router from 'next/router';
import React, { useState } from "react";
import AccountSVG from '../../../assets/icons/account';
import CallSVG from '../../../assets/icons/call';
import DashboardSVG from '../../../assets/icons/dashboard';
import DesignSVG from '../../../assets/icons/design';
import ListSVG from '../../../assets/icons/list';
import NotificationSVG from '../../../assets/icons/notification';
import RewardSVG from '../../../assets/icons/reward';
import SoundSVG from '../../../assets/icons/sound';
import { useNavBar } from '../../../contexts/navbar';
import SidePanelStructure from '../index';
import { BottomSVGContainer, SVGContainer } from './style';

const LeftSidePanel = () => {

    const { icons, updateLeftPanel, leftPanelTab } = useNavBar();
    return (
        <SidePanelStructure left={true}>
            <div className='relative h-full flex flex-col gap-y-4 py-5 '>
                {icons.map((data, index) => {
                    return <SVGContainer
                        onClick={() => {
                            // updateLeftPanel(index)
                            router.push(`/${data.path}`, undefined, { shallow: true });
                        }}
                        className='cursor-pointer w-full flex justify-center py-3' active={index === leftPanelTab} key={index}>
                        {data.icon}
                    </SVGContainer>
                })}
                {/* <div className='absolute bottom-7 w-full flex items-center flex-col gap-y-7 bottom-left-side-panel'>
                    <BottomSVGContainer active={true}>
                        <NotificationSVG width="25" height="25" />
                    </BottomSVGContainer>
                    <BottomSVGContainer active={false}>
                        <SoundSVG width="25" height="25" />
                    </BottomSVGContainer>

                </div> */}
            </div>
        </SidePanelStructure>
    )
}

export default LeftSidePanel;
