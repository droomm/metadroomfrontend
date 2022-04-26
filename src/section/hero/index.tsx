import React, { useEffect, useState } from "react";
import { Container, ImageContainer } from './style';
import LogoSVG from '../../assets/icons/logo';
import InfinitySVG from '../../assets/icons/infinity';
import RightArrowSVG from '../../assets/icons/rightArrow';
import DownloadSVG from '../../assets/icons/download';
import Image from "next/image";

const HeroSection = () => {

    return <Container id="welcome" className='pb-32'>

        <div className='w-full h-full absolute  z-10'>
            <div className='relative w-full h-full'>
                <div className='absolute customHeroImage'>

                    <div className='rounded-full overflow-hidden w-full h-full relative'>
                        <Image
                            src={"/icons/hero.svg"}
                            layout='fill'
                            alt="hero"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={"/icons/hero.svg"}
                            quality={100}
                        />
                    </div>
                </div>
            </div>

        </div>
        <div className='z-10 relative pb-10 px-2 sm:pl-24 xl:px-28 w-screen flex pt-2 sm:pt-16 flex-col h-full'>
            <div className='hidden md:flex w-full py-2 gap-x-3 items-center mb-1'>
                <LogoSVG width="70" height='70' />
                <p className='text-3xl font-M-Black' style={{fontFamily: 'Zen Dots'}}>
                    metaphy
                </p>
            </div>
            <div className='flex md:hidden w-full  py-2 gap-x-3 items-center mb-5'>
                <LogoSVG width="50" height='50' />
                <p className='text-2xl font-M-Black' style={{fontFamily: 'Zen Dots'}}>
                    metaphy
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

            <div className='w-5/12 mt-8  xl:ml-5 minor-text '>
                <p className='font-M-Medium text-xl sm:text-justify'>
                    Build your social network on web3. Search and interact in virtual worlds. Play games, attend events, crash parties with friends and shop with your favourite global brands.
                </p>
            </div>
            <Listing />
            <Buttons />

        </div>
    </Container>

}

export default HeroSection;



const Buttons = () => {
    return (
        <div className='flex flex-wrap justify-center md:justify-start mt-14 sm:mt-10 xl:mt-8 3xl:mt-16  gap-x-4 gap-y-6'>
            <button
                onClick={() => {

                    let waitingList = document.getElementById("waitingListInput");
                    if (waitingList) {
                        waitingList.scrollIntoView();
                        setTimeout(() => {
                            let waitingList = document.getElementById("waitingListInput");
                            if (waitingList) waitingList.focus();
                        }, 1000)
                    }
                }}
                className='w-11/12 sm:w-5/12 lg:w-6/12 xl:w-4/12 py-1 sm:py-2 px-2 h-16 sm:h-20 items-center flex justify-center gap-x-5 left-button relative'>
                <p className='text-center text-xl xl:text-3xl font-M-Bold textShadow'>
                    Join Wait list
                </p>
                <div className='bg-white rounded-full shadow p-3'>

                    <RightArrowSVG width="26" height="26" />
                </div>
            </button>
            <button
                onClick={() => {
                    window.open("https://www.dropbox.com/s/wp4adx0mesfrj4m/MVP%20Pitch%20Deck.pdf?dl=0");
                }}
                className='w-11/12 md:w-5/12 lg:w-5/12 xl:w-4/12 py-1 sm:py-2 px-2 h-16  sm:h-20 items-center flex justify-center gap-x-5 right-button relative'>
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
        <div className='flex mt-14 sm:mt-10 xl:mt-8 3xl:mt-12  xl:ml-4  justify-evenly  md:justify-start gap-x-1 md:gap-x-4'>
            <div className='flex flex-col gap-y-0 justify-center items-center'>
                <div className='h-12 sm:h-16 flex items-center justify-center w-full'>
                    <p className=' text-3xl md:text-4xl text-center font-M-Black'>
                        15+
                    </p>

                </div>
                <p className='font-M-Thin text-sm sm:text-md  md:text-xl text-center'>
                    Meta-Stores
                </p>
            </div>
            <div className='h-12 mt-2 bg-white/25 rounded-full mx-0 sm:mx-2 md:mx-4' style={{ width: 4 }} />
            <div className='h-full flex flex-col gap-y-0 items-center'>
                <div className='h-12 sm:h-16  flex items-center '>
                    <InfinitySVG width='80' height='25' />
                </div>
                <p className='font-M-Thin text-sm sm:text-md  md:text-xl text-center'>
                    Digital Avatars
                </p>
            </div>
            <div className='h-12 mt-2 bg-white/25 rounded-full mx-0 sm:mx-2 md:mx-4' style={{ width: 4 }} />
            <div className=' flex flex-col gap-y-0 justify-center items-center'>
                <div className='h-12 sm:h-16  flex items-center justify-center'>
                    <p className=' text-3xl md:text-4xl text-center font-M-Black'>
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