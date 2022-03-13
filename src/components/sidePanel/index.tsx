import router from 'next/router';
import React, { } from "react";
import { useNavBar } from '../../contexts/navbar';
import { Container, SVGContainer } from './style';

const SidePanelStructure = () => {

    const { icons, leftPanelTab } = useNavBar();
    return <Container active={leftPanelTab !== 1} className={'left-5 hidden sm:block fixed z-30 w-14 h-screen '}>
        <div className='w-full side-panel rounded-2xl' style={{ height: "94vh", marginTop: "3vh" }}>
            <div className='relative h-full flex flex-col gap-y-4 py-5 items-center justify-center'>
                {icons.map((data, index) => {
                    return <SVGContainer
                        onClick={() => {
                            router.push(`/${data.path}`, undefined, { shallow: true });
                        }}
                        className='z-20 cursor-pointer w-full flex justify-center py-3' active={index === leftPanelTab} key={index}>
                        {data.icon}
                    </SVGContainer>
                })}
            </div>
        </div>
    </Container>
}

export default SidePanelStructure;
