import React, { useState, lazy, Suspense } from "react";
import Image from "next/image";
import { Container } from './style';
import LeftArrowSVG from '../../assets/icons/left';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
const BackGroundVideo = dynamic(() => import('./backgroundVideo'));

const FeatureSection = () => {


    const [tab, setTabs] = useState<number>(0);
    return <Container id="features"
    >
        <div className='w-full flex justify-center absolute z-20 -top-20 mt-4'>
            <div className='w-full flex px-1 sm:px-5 font-M-Bold justify-center rounded-3xl sm:w-10/12 2xl:w-2/3 welcome-box py-12 sm:py-16  '>
                <p className="text-2xl  md:text-3xl lg:text-5xl text-center text-dark" >
                    Welcome To The Future
                </p>
            </div>
        </div>
        <BackGroundVideo />
        <div className='glass w-full h-full absolute z-10'>

        </div>
        <div className='px-2 pr-4 sm:pl-24 sm:pr-4 pb-10 w-screen min-h-screen pt-5 flex flex-col relative  z-20'>

            <div className='flex flex-1 relative h-full '>
                <Feature1 />
                <Feature2 />
                <Feature3 />
            </div>

        </div>
        <div className='bottom-16 px-2 pr-4 sm:pl-24 sm:pr-4 justify-center sm:justify-start absolute w-full flex '>

            <div className='shadow-sm shadow-shadow w-10/12 sm:w-64 flex rounded-full items-center justify-between controller bg-white z-20'>
                <div
                    onClick={() => {
                        if (tab === 0) {
                            gsap.fromTo("#feature1", { x: "0" }, { x: "100vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-300vw" }, { x: "-200vw", duration: 0.5 })
                            setTabs(2)
                        }
                        else if (tab === 1) {
                            gsap.fromTo("#feature1", { x: "-100vw" }, { x: "0", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "-100vw" }, { x: "0", duration: 0.5 })
                            setTabs(0)
                        }
                        else if (tab === 2) {
                            gsap.fromTo("#feature2", { x: "-200vw" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-200vw" }, { x: "-100vw", duration: 0.5 })
                            setTabs(1)
                        }
                    }}
                    className='arrow w-1/2 flex justify-center cursor-pointer py-3 active:border-shadow hover:border-black/25 border-white transition-all duration-500  rounded-l-full'>
                    <div className='rotate-180'>
                        <LeftArrowSVG width="22" height="22" />
                    </div>
                </div>
                <div
                    onClick={() => {
                        if (tab === 0) {
                            gsap.fromTo("#feature1", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            setTabs(1)
                        }
                        else if (tab === 1) {
                            gsap.fromTo("#feature2", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            setTabs(2)
                        }
                        else if (tab === 2) {
                            gsap.fromTo("#feature1", { x: "100vw" }, { x: "0", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-200vw" }, { x: "-300vw", duration: 0.5 })
                            setTabs(0)
                        }
                    }}
                    className='arrow w-1/2 flex justify-center cursor-pointer py-3 active:border-shadow hover:border-black/25 border-white transition-all duration-500  rounded-r-full'>
                    <LeftArrowSVG width="22" height="22" />
                </div>
            </div>
        </div>
    </Container >

}

export default FeatureSection;



const Feature1 = () => {
    return (<div id="feature1" className=' absolute w-full h-full items-center ' >
        <div className='relative w-full h-full '>
            <div className='w-full absolute lg:w-10/12 2xl:w-8/12 flex flex-col gap-y-5 h-full justify-center pb-28 z-10'>
                <p className='text-2xl sm:text-4xl font-M-Medium text-left'>
                    Engage in
                </p>
                <p className=' text-6xl sm:text-7xl md:text-8xl 4xl:text-8xl   font-M-Bold text-left text-dark'>
                    World Building
                </p>
                <p className='text-md sm:w-2/3 2xl:w-6/12 font-M-Medium mt-5  text-white'>
                    Build and explore incredible ecosystems tied to your smart contracts. Host events, sports, games an online classes.
                </p>
            </div>
            <div className='absolute right-0 w-full h-full py-20 lg:py-10 hidden sm:flex  lg:justify-end items-center'>
                <div className={'w-full lg:w-5/12 2xl:w-4/12  relative lg:mr-10 2xl:mr-20 h-full '}>
                    <Image
                        src={"/images/feature1.webp"}
                        layout='fill'
                        alt="feature"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={"/images/feature1.webp"}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    </div>)
}

const Feature2 = () => {
    return (<div id="feature2" className='absolute w-full h-full items-center ' style={{ marginLeft: "100vw" }}>
        <div className='relative w-full h-full '>
            <div className='w-full absolute lg:w-10/12 2xl:w-8/12 flex flex-col gap-y-5 h-full justify-center pb-28 z-10'>
                <p className='text-lg  md:text-3xl lg:text-4xl font-M-Medium text-left'>
                    Harness the all new Crypto powered
                </p>
                <p className=' text-5xl sm:text-7xl md:text-8xl 4xl:text-8xl   font-M-Bold text-left text-dark'>
                    Social-Networking
                </p>
                <p className='text-md sm:w-2/3 2xl:w-6/12 font-M-Medium mt-5  text-white'>
                    Experience life like social interactions. Mint and shared NFT powered content. Monetize your creativity.
                </p>
            </div>
            <div className='absolute right-5 w-full md:w-5/12  h-full   justify-center lg:justify-end items-center hidden sm:flex'>
                <div className={'w-full relative  h-5/6'}>
                    <Image
                        src={"/images/feature2.webp"}
                        layout='fill'
                        alt="feature"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={"/images/feature2.webp"}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    </div>)
}
const Feature3 = () => {
    return (<div id="feature3" className='absolute w-full h-full items-center ' style={{ marginLeft: "200vw" }}>
        <div className='relative w-full h-full '>
            <div className='w-full h-full absolute  lg:w-10/12 2xl:w-8/12 flex flex-col gap-y-5 justify-center pb-28 z-10'>
                <p className='text-xl  md:text-3xl lg:text-4xl font-M-Medium text-left'>
                    Pioneer in Web3.0 economy
                </p>
                <p className=' text-5xl sm:text-7xl md:text-8xl 4xl:text-8xl  font-M-Bold text-left text-dark'>
                    Social-Networking
                </p>
                <p className='text-md sm:w-2/3 2xl:w-6/12 font-M-Medium mt-5  text-white'>
                    Shop from your favorite brands on metaverse. Gather the assets powering the future.Trade NFTs, crypto tokens and much more. Even buy digital assets online from peers and ecosystem vendors.
                </p>
            </div>
            <div className='absolute right-0 w-full h-full py-20 lg:py-10 hidden sm:flex  sm:justify-end items-center'>
                <div className={'w-full sm:w-8/12 md:w-5/12 2xl:w-4/12  relative lg:mr-10 2xl:mr-20 h-full '}>
                    <Image
                        src={"/images/feature3.webp"}
                        layout='fill'
                        alt="feature"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={"/images/feature3.webp"}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    </div>)
}