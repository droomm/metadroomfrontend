import React, { } from "react";
import { Container } from './style';

const SidePanelStructure = ({ children, left }: { children: any, left: boolean }) => {
    return <Container className={(left ? "left-5 " : "right-5 ") + ' hidden sm:block fixed z-30 w-14 h-screen '}>
        <div className='w-full side-panel rounded-2xl' style={{ height: "91vh", marginTop: "7.5vh" }}>
            {children}
        </div>
    </Container>
}

export default SidePanelStructure;
