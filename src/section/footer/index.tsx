import React, { useState } from "react";
import LogoSVG from '../../assets/icons/logo';
import { Container } from './style';


const Footer = () => <Container className='flex w-screen px-2 sm:px-10 '>
    <div className='footerDivider absolute w-11/12 left-4 sm:left-10 ' />


    <div className="py-5 gap-1 text-sm flex gap-x-2  gap-y-3 items-center w-full justify-center sm:justify-start text-gray-700 flex-wrap ">
        <div className='flex  flex-wrap  justify-center gap-y-3 items-center gap-x-2'>
            <div className='flex gap-x-2 items-center'>
                <LogoSVG width="25" height='25' />
                <p className='text-lg font-M-Bold'>
                    Metaphy
                </p>
            </div>
            <p className='text-sm font-thin '>
                © {new Date().getFullYear()} Copyright by Metaphy Inc.

            </p>
        </div>
    </div>
</Container>

export default Footer;