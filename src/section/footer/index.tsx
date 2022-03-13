import React, { useState } from "react";
import LogoSVG from '../../assets/icons/logo';
import { Container } from './style';


const Footer = () => <Container className='flex w-screen px-2 sm:px-10 '>
    <div className='footerDivider absolute w-11/12 px-left-2 left-10 ' />


    <div className="py-5 gap-1 text-sm flex gap-x-2 items-center w-full justify-center sm:justify-start text-gray-700 flex-wrap ">
        <div className='flex  items-center gap-x-2'>
            <LogoSVG width="25" height='25' />
            <p className='text-md sm:text-lg font-M-Bold'>
                VirtualWide
            </p>
            <p className='text-sm font-thin '>
                © {new Date().getFullYear()} Copyright by VirtualWide Inc.

            </p>
        </div>
        <span className='text-sm font-thin '>
            Powered by {" "}
            <span
                onClick={() => {
                    // window.open("https://akn.et", "_blank");
                }}
                className=' cursor-pointer hover:text-gray-900 transition-all duration-1000 text-gray-800 underline underline-offset-2 hover:underline-offset-4'>
                Akn.et
            </span>
        </span>
    </div>
</Container>

export default Footer;