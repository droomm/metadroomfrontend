import router from 'next/router';
import React from "react";
import { useNavBar } from '../../../contexts/navbar';
import SidePanelStructure from '../index';
import { BottomSVGContainer, SVGContainer } from './style';

const LeftSidePanel = () => {

    const { icons, leftPanelTab } = useNavBar();
    return (
        <SidePanelStructure left={true}>
            <div className='relative h-full flex flex-col gap-y-4 py-5 items-center justify-center'>
                {icons.map((data, index) => {
                    return <SVGContainer
                        onClick={() => {
                            // updateLeftPanel(index)
                            router.push(`/${data.path}`, undefined, { shallow: true });
                        }}
                        className='z-20 cursor-pointer w-full flex justify-center py-3' active={index === leftPanelTab} key={index}>
                        {data.icon}
                    </SVGContainer>
                })}
            </div>
        </SidePanelStructure>
    )
}

export default LeftSidePanel;
