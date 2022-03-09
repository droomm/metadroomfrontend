import React, { } from "react";
import LogoSVG from '../../assets/icons/logo';
import { Container } from './style';
import Image from "next/image";
import GridSVG from '../../assets/icons/menu';

const HeaderComponent = () => {
    return <Container className='fixed z-40 px-3 items-center flex overflow-hidden justify-between'>

        <div className='flex sm:hidden mobile-panel justify-between items-center  w-full '>
            <div />
            <div className=' p-2 menu'>

                <GridSVG width="35" height='35' />
            </div>
        </div>
    </Container>

}

export default HeaderComponent;
