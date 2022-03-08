import React, { } from "react";
import LogoSVG from '../../assets/icons/logo';
import { Container } from './style';
import Image from "next/image";
import GridSVG from '../../assets/icons/menu';

const HeaderComponent = () => {
    return <Container className='fixed z-40 px-5 items-center flex overflow-hidden justify-between'>

        <div className='flex sm:hidden mobile-panel'>
            <LogoSVG height="50" width='50' />
            <GridSVG width="30" height='30' />
        </div>
    </Container>

}

export default HeaderComponent;
