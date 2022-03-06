import React, { useEffect, useState } from "react";
import { Container, ImageContainer } from './style';
import { motion } from "framer-motion";
import DashboardSVG from '../../assets/icons/dashboard';

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
            delay: 2,
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
        <div className='sm:px-24 w-screen pt-8 sm:pt-10 flex items-center flex-col h-full'>
            <div className='flex flex-col items-center justify-center w-full mt-4'>
                <motion.span
                    className='row-title sm:mb-2'
                    variants={banner}
                    initial='initial'
                    animate='animate'>
                    {[...title1.split("")].map((letter, index) => {
                        if (letter === " ")
                            return <motion.span
                                key={index}
                                className='row-letter text-5xl sm:text-4xl md:text-4xl lg:text-7xl font-bold'
                                style={{ color: "transparent" }}
                                variants={letterAni}>
                                {"-"}
                            </motion.span>
                        else return (
                            <motion.span
                                key={index}
                                className='row-letter font-bold top-text text-6xl md:text-7xl lg:text-8xl'
                                variants={letterAni}>
                                {letter}
                            </motion.span>)
                    })}
                </motion.span>
                <motion.span
                    className='row-title '
                    variants={banner1}
                    initial='initial'
                    animate='animate'>
                    {[...title2.split("")].map((letter, index) => {
                        if (letter === " ")
                            return <span
                                key={index}
                                className='row-letter text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                                style={{ color: "transparent" }}>
                                {"-"}
                            </span>
                        else return (
                            <motion.span
                                key={index}
                                className='row-letter font-bold bottom-text text-5xl lg:text-6xl'
                                variants={letterAni1}>
                                {letter}
                            </motion.span>)
                    })}
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
            <motion.div
                variants={ImageAni}
                initial='initial'
                animate='animate'
                className=' overflow-hidden w-10/12 md:w-10/12  xl:w-7/12  relative mt-6 sm:mt-14 hero-Image ' >
                <ImageContainer
                    src={"/images/hero.webp"}
                    layout='fill'
                    alt="feature"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={"/images/hero.webp"}
                    quality={100}
                />
            </motion.div>
        </div>
    </Container>

}

export default HeroSection;

