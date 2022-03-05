import React, { } from "react";
import LogoSVG from '../../assets/icons/logo';
import SettingSVG from '../../assets/icons/setting';
import { Container } from './style';
import Image from "next/image";
import GridSVG from '../../assets/icons/grid';

const HeaderComponent = () => {
    return <Container className='fixed z-40 px-5 items-center flex overflow-hidden justify-between'>

        <LogoSVG height="50" width='50' />

        <div className='hidden sm:flex right-corner h-full items-center gap-x-3'>
            {/* <div className='divider  rounded-full' /> */}
            <div className=' flex items-center gap-x-4 ml-5'>
                {/* <p className='text-lg font-thin '>
                    SomeName
                </p> */}
                <div className='rounded-full overflow-hidden w-14 h-14 relative'>
                    <Image
                        src={"/images/avatar.webp"}
                        layout='fill'
                        alt="avatar"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={"/images/avatar.webp"}
                        quality={100}
                    />
                </div>

            </div>
            <div className='w-14 flex justify-center'>

                <SettingSVG width="30" height="30" />
            </div>
        </div>
        <div className='flex sm:hidden mobile-panel'>
            <GridSVG width="30" height='30' />
        </div>
    </Container>

}

export default HeaderComponent;
