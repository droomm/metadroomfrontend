import React, { useState } from "react";
import { Container, ImageContainer } from './style';

const ContentSection = () => {
    const contents = [
        {
            image: "/images/content1.webp",
            title: "Discovery Engine",
            detail: 'Discover & monetize your virtual world and creativity. Engage & earn from decentralized content sales, ads, digital merchandized and much mor'
        },
        {
            image: "/images/content2.webp",
            title: "Interactive Virtual Worlds",
            detail: 'Go Live on Metaverse instantly. Build interactive stores, play games, attend events and discover a lot more...'
        },
        {
            image: "/images/content3.webp",
            title: "Meta-Commerce",
            detail: 'Explore your favorite global brands. Our oracles help bridge real world entities with virtual assets. Anyone can now build meta-stores, trade artifacts and mint digital assets securely.'

        },
    ]

    return <Container id="content" className='select-none px-2 sm:pl-28 w-screen relative z-20 text-lg'>
        <div className='w-full flex justify-center h-16 mb-4 sm:mb-16 mt-10 py-2'>
            <p className='text-3xl sm:text-4xl md:text-5xl font-M-Bold text-center xl:text-left text-dark Font '>
                All this in a single platform :)
            </p>
        </div>
        <div className='flex flex-wrap w-full justify-center gap-y-5 py-2 items-center flex-row'>
            <div className='overflow-hidden w-full xl:w-1/2  relative rounded-lg content-image-box' >
                <ImageContainer
                    src={contents[0].image}
                    layout='fill'
                    alt="content"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={contents[0].image}
                    quality={100}
                />
            </div>
            <div className={`flex h-full flex-col  w-full xl:w-1/2 py-4 px-4 justify-center items-center`}>
                <div className=' w-full xl:w-10/12 '>
                    <p className='text-3xl sm:text-5xl font-M-Bold text-center xl:text-left text-dark Font '>
                        {contents[0].title}
                    </p>
                    <p className='text-md sm:text-xl font-M-Medium  text-center xl:text-left  mt-5 text-midDark'>
                        {contents[0].detail}
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-wrap w-full justify-center gap-y-5 py-2 items-center flex-row-reverse'>
            <div className='overflow-hidden w-full xl:w-7/12 relative rounded-lg content-image-box-1' >
                <ImageContainer
                    src={contents[1].image}
                    layout='fill'
                    alt="content"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={contents[1].image}
                    quality={100}
                />
            </div>
            <div className=' hidden xl:flex  w-full xl:w-5/12 ' />
            <div className={`flex-col hidden xl:flex absolute h-40 w-full left-40 xl:w-5/12 py-4 px-4 justify-center items-end`}>
                <div className='flex flex-col '>
                    <p className='text-3xl md:text-4xl sm:text-5xl font-M-Bold text-left text-dark Font '>
                        {contents[1].title}
                    </p>
                    <p className='w-full md:text-lg xl:w-10/12 text-md sm:text-xl font-M-Medium  text-center xl:text-left  mt-5 text-midDark'>
                        {contents[1].detail}
                    </p>
                </div>
            </div>
            <div className={`h-full flex-col flex xl:hidden  w-full xl:w-5/12 py-4 px-4 justify-center items-center`}>
                <div className='flex flex-col items-center '>
                    <p className='text-3xl md:text-4xl sm:text-5xl font-M-Bold text-center xl:text-left text-dark Font '>
                        {contents[1].title}
                    </p>
                    <p className='w-full xl:w-10/12 text-md md:text-lg sm:text-xl font-M-Medium  text-center xl:text-left  mt-5 text-midDark'>
                        {contents[1].detail}
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap w-full justify-center gap-y-5 py-2 items-center flex-row'>
            <div className='overflow-hidden w-full xl:w-1/2 relative rounded-lg content-image-box' >
                <ImageContainer
                    src={contents[2].image}
                    layout='fill'
                    alt="content"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={contents[2].image}
                    quality={100}
                />
            </div>
            <div className={`flex h-full flex-col  w-full xl:w-1/2 py-4 px-4 justify-center items-center`}>
                <div className=' w-full xl:w-10/12 '>
                    <p className='text-3xl sm:text-5xl font-M-Bold text-center xl:text-left text-dark Font '>
                        {contents[2].title}
                    </p>
                    <p className='text-md sm:text-xl font-M-Medium  text-center xl:text-left  mt-5 text-midDark'>
                        {contents[2].detail}
                    </p>
                </div>
            </div>
        </div>

    </Container >

}

export default ContentSection;