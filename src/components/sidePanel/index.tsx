import React, { } from "react";
import { Container } from './style';

const SidePanelStructure = ({ children, left }: { children: any, left: boolean }) => {
    return <Container className={(left ? "left-5 " : "right-5 ") + ' hidden sm:block fixed z-30 w-16 h-screen '}>
        <div className='w-full side-panel rounded-2xl' style={{ height: "94vh", marginTop: "3vh" }}>
            {children}
        </div>
    </Container>
}

export default SidePanelStructure;
