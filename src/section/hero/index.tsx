import React, { useEffect, useState } from "react";
import { Container, ImageContainer } from './style';
import { motion } from "framer-motion";
import Image from 'next/image';
import WhiteListSVG from '../../assets/icons/whitelist';
import ArrowDownSVG from '../../assets/icons/arrowDown';
import DownloadSVG from '../../assets/icons/download';

const banner = {
    animate: {
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.05,
        },
    },
};

const letterAni = {
    initial: { y: 100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0.75,
        },
    },
};


const leftButtonAni = {
    initial: { x: -150, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            delay: 1.5,
            duration: 1,
        },
    },
};

const rightButtonAni = {
    initial: { x: 150, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            delay: 1.5,
            duration: 1,
        },
    },
};
const ImageAni = {
    initial: { y: 350, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1.2,
        },
    },
};

const letterAni1 = {
    initial: { y: 50, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0.75,
        },
    },
};

const banner1 = {
    animate: {
        transition: {
            delayChildren: 1.35,
            // staggerChildren: 0.15,
        },
    },
};

let title1 = "The Social Passport To";
let title2 = "The Metaverse";
const HeroSection = () => {

    return <Container id="welcome">
        <div className='sm:px-24 w-screen pt-28  flex items-center flex-col h-full'>
            <div className='flex flex-col items-center justify-center w-full '>
                <p className='text-2xl mb-4 font-bold'>
                    VirtualWide Inc.
                </p>
                <motion.div
                    className='row-title flex flex-col w-full gap-x-2 items-center mt-2 justify-center'
                    variants={banner1}
                    initial='initial'
                    animate='animate'>
                    <motion.div
                        className=' top-text text-5xl md:text-6xl font-medium lg:text-8xl'
                        variants={letterAni1}>
                        {title1}
                    </motion.div>
                    <motion.div
                        className='row-letter flex pb-1 items-end gap-x-2 font-thin top-text text-5xl md:text-6xl lg:text-8xl mt-3'
                        variants={letterAni1}>
                        {title2}
                        <div
                            className='overflow-hidden w-11 h-11 md:w-14 md:h-14 lg:w-20 lg:h-20 relative'>
                            <Image
                                src={"/images/passport.webp"}
                                layout='fill'
                                alt="avatar"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={"/images/avatar.webp"}
                                quality={100}
                            />
                        </div>
                    </motion.div>

                </motion.div>

            </div>
            <div
                className='flex w-full flex-wrap gap-y-10 mt-20 justify-center'>
                <motion.div
                    variants={leftButtonAni}
                    initial='initial'
                    animate='animate'
                    className='w-10/12 sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2'>
                    <button className='w-full flex gap-x-4 justify-center items-center py-2 rounded-lg left-button text-2xl font-thin'>
                        <WhiteListSVG width="30" height='30' />
                        <p>
                            Join Whitelist
                        </p>
                    </button>
                </motion.div>
                <motion.div
                    variants={rightButtonAni}
                    initial='initial'
                    animate='animate'
                    className='w-10/12 sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2'>
                    <button className='w-full flex gap-x-4 justify-center items-center py-2 rounded-lg right-button text-2xl font-thin'>
                        <DownloadSVG width="30" height='30' />
                        <p>
                            Grab Our Pitch Deck
                        </p>
                    </button>
                </motion.div>
            </div>
            <div className='absolute bottom-0 cursor-pointer animate-bounce down-arrow' onClick={() => {
                let highLight = document.getElementById('highLight');
                let topPos = 0;
                if (highLight)
                    highLight.scrollIntoView();
            }}>
                <ArrowDownSVG width="50" height="50" />
            </div>
        </div>
    </Container>

}

export default HeroSection;

