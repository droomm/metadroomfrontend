import React, { useEffect, useState } from "react";
import { Container, ImageContainer } from './style';
import { motion } from "framer-motion";
import Image from 'next/image';

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

let title1 = "The Social Passport";
let title2 = "To The Metaverse";
const HeroSection = () => {

    return <Container id="welcome" >
        <div className='sm:px-24 w-screen pt-8 sm:pt-18 flex items-center flex-col h-full'>
            <div className='flex flex-col items-center justify-center w-full mt-4'>
                <p className=' text-xl sm:text-2xl mb-4 font-bold'>
                    VirtualWide Inc.
                </p>
                <motion.span
                    className='row-title sm:mb-2 flex'
                    variants={banner}
                    initial='initial'
                    animate='animate'>
                    {[...title1.split("")].map((letter, index) => {
                        if (letter === " ")
                            return <div className='mx-2' key={index} />
                        else return (
                            <motion.span
                                key={index}
                                className='row-letter font-thin top-text text-6xl md:text-7xl lg:text-8xl'
                                variants={letterAni}>
                                {letter}
                            </motion.span>)
                    })}
                </motion.span>
                <motion.span
                    className='row-title flex gap-x-2 items-center mt-2'
                    variants={banner1}
                    initial='initial'
                    animate='animate'>
                    <motion.span
                        className='row-letter font-thin bottom-text text-5xl lg:text-6xl'
                        variants={letterAni1}>
                        {title2}
                    </motion.span>
                    <motion.div
                        variants={letterAni1}
                        className='overflow-hidden w-14 h-14 relative'>
                        <Image
                            src={"/images/passport.webp"}
                            layout='fill'
                            alt="avatar"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={"/images/avatar.webp"}
                            quality={100}
                        />
                    </motion.div>

                </motion.span>

            </div>
            <div
                className='flex w-full flex-wrap gap-y-4 mt-8 sm:mt-10 justify-center'>
                <motion.div
                    variants={leftButtonAni}
                    initial='initial'
                    animate='animate'
                    className='w-10/12 sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2'>
                    <button className='w-full py-2 rounded-lg left-button text-xl font-black'>
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
                    <button className=' w-full py-2 rounded-lg right-button text-xl font-black'>
                        Grab Our Pitch Deck
                    </button>
                </motion.div>
            </div>
        </div>
    </Container>

}

export default HeroSection;

