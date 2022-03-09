import React, { useEffect, useState } from "react";
import { Container, ImageContainer } from './style';
import LogoSVG from '../../assets/icons/logo';
import InfinitySVG from '../../assets/icons/infinity';
import RightArrowSVG from '../../assets/icons/rightArrow';
import DownloadSVG from '../../assets/icons/download';


const HeroSection = () => {

    return <Container id="welcome">
        <div className='pb-20 px-2 sm:px-24 xl:px-28 w-screen flex pt-20 flex-col h-full'>
            <div className='hidden md:flex w-full  py-2 gap-x-3 items-center mb-1'>
                <LogoSVG width="70" height='70' />
                <p className='text-3xl font-M-Black'>
                    VirtualWide
                </p>
            </div>
            <div className='flex md:hidden w-full  py-2 gap-x-3 items-center mb-5'>
                <LogoSVG width="50" height='50' />
                <p className='text-2xl font-M-Black'>
                    VirtualWide
                </p>
            </div>
            <div className='w-full mt-5 sm:mt-2 relative font-M-Bold'>
                <p className='topText'>
                    The social passport
                </p>
                <div className='flex box-left'  >
                    <p className='text-8xl topText'>
                        <span>
                            to
                        </span>
                        <span className='motdGradient font-M-Black text-9xl bottomTextBig'>
                            {""} Metaverse
                        </span>
                    </p>
                </div>
            </div>

            <div className='w-5/12 mt-6 sm:mt-10 xl:ml-5 minor-text'>
                <p className='font-M-Medium text-xl sm:text-justify'>
                    Build your social network on web3. Search and interact in virtual worlds. Play games, attend events, crash parties with friends and shop with your favourite global brands.
                </p>
            </div>
            <Listing />
            <Buttons />
            <div className='w-full flex justify-center  mt-24'>
                <div className='w-full flex px-1 sm:px-5 font-M-Bold justify-center rounded-3xl md:w-2/3 welcome-box py-12 sm:py-16  '>
                    <p className="text-2xl  md:text-3xl lg:text-5xl text-center text-dark" >
                        Welcome To The Future
                    </p>
                </div>
            </div>

        </div>
    </Container>

}

export default HeroSection;



const Buttons = () => {
    return (
        <div className='flex flex-wrap justify-center md:justify-start mt-10 sm:mt-16  gap-x-4 gap-y-6'>
            <button className='w-11/12 md:w-5/12 xl:w-4/12 py-1 sm:py-2 px-2 h-16 sm:h-20 items-center flex justify-center gap-x-5  left-button relative'>
                <p className='text-center text-xl xl:text-3xl font-M-Bold'>
                    Join Wait list
                </p>
                <div className='bg-white rounded-full p-3'>

                    <RightArrowSVG width="26" height="26" />
                </div>
            </button>
            <button className='w-11/12 md:w-5/12 lg:w-5/12 xl:w-4/12 py-1 sm:py-2 px-2 h-16  sm:h-20 items-center flex justify-center gap-x-5 right-button relative'>
                <p className='text-center text-xl xl:text-3xl font-M-Bold'>
                    Pitch Deck
                </p>
                <div className=' rounded-full '>
                    <DownloadSVG width="35" height="35" />
                </div>
            </button>
        </div>
    )
}
const Listing = () => {
    return (
        <div className='flex mt-10 sm:mt-16 xl:ml-4  justify-evenly  md:justify-start gap-x-1 md:gap-x-4'>
            <div className='flex flex-col gap-y-3 justify-center items-center'>
                <div className='h-12 sm:h-16 flex items-center justify-center w-full'>
                    <p className=' text-3xl md:text-6xl text-center'>
                        15+
                    </p>

                </div>
                <p className='font-M-Thin text-sm sm:text-md  md:text-xl text-center'>
                    Meta-Stores
                </p>
            </div>
            <div className='h-12 mt-2 bg-white/25 rounded-full mx-0 sm:mx-2 md:mx-4' style={{ width: 4 }} />
            <div className='h-full flex flex-col gap-y-3 items-center'>
                <div className='h-12 sm:h-16  flex items-center '>
                    <InfinitySVG width='80' height='25' />
                </div>
                <p className='font-M-Thin text-sm sm:text-md  md:text-xl text-center'>
                    Digital Avatars
                </p>
            </div>
            <div className='h-12 mt-2 bg-white/25 rounded-full mx-0 sm:mx-2 md:mx-4' style={{ width: 4 }} />
            <div className=' flex flex-col gap-y-3 justify-center items-center'>
                <div className='h-12 sm:h-16  flex items-center justify-center'>
                    <p className=' text-3xl md:text-5xl text-center'>
                        1000+
                    </p>

                </div>
                <p className='font-M-Thin text-sm sm:text-md md:text-xl text-center'>
                    Event Hours
                </p>
            </div>

        </div>
    )
}