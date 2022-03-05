import React, { useState } from "react";
import { Container, ImageContainer } from './style';

const ContentSection = () => {
    const contents = [
        {
            image: "/images/content1.webp",
            title: "World Building",
            detail: 'Build and explore incredible ecosystems tied to your smart contracts. Host events, sports, games an online classes.'
        },
        {
            image: "/images/content2.webp",
            title: "Social-Networking",
            detail: 'Experience life like social interactions. Mint and shared NFT powered content. Monetize your creativity.'
        },
        {
            image: "/images/content3.webp",
            title: "Meta-Commerce",
            detail: 'Trade NFTs, cryptos. Even buy products online from peers and ecosystem vendors'
        },
        {
            image: "/images/content2.webp",
            title: "Social-Networking",
            detail: 'Experience life like social interactions. Mint and shared NFT powered content. Monetize your creativity.'
        },
        {
            image: "/images/content3.webp",
            title: "Meta-Commerce",
            detail: 'Trade NFTs, cryptos. Even buy products online from peers and ecosystem vendors'
        }
    ]

    return <Container id="content" className='select-none' >
        <div>
            <div className='flex absolute w-screen' style={{ height: "100%" }}>
                <div className='w-full h-full' >
                    <div className='overflow-hidden w-screen  relative h-full'  >
                        <ImageContainer
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
            <div className='px-2 sm:px-24 w-screen h-full relative z-20 text-lg'>
                <div className='w-full '>
                    <p className='capitalize content-header text-xl text-center' >
                        content
                    </p>
                    <p className='text-4xl sm:text-5xl uppercase mt-6 font-bold text-center'>
                        All this in a single platform
                    </p>
                    <div className='flex mt-10 md:mt-20 flex-wrap w-full justify-center gap-y-5'>
                        {contents.map((data, index) => {
                            return (
                                <div className='w-full md:w-1/2 lg:w-1/3 rounded-md overflow-hidden px-4 content-card ' style={{ height: 300 }} key={index}>
                                    <div className=' background rounded-md flex flex-col p-4 justify-center ' style={{ background: "#00000066" }}>
                                        <div className='w-full h-36 flex justify-center '  >
                                            <div className='overflow-hidden w-36 h-36 relative'>
                                                <ImageContainer
                                                    src={data.image}
                                                    layout='fill'
                                                    alt="feature"
                                                    loading="lazy"
                                                    placeholder="blur"
                                                    blurDataURL={data.image}
                                                    quality={100}
                                                />
                                            </div>
                                        </div>
                                        <div className='h-14 flex justify-center  w-full'>
                                            <p className='text-3xl md:text-2xl xl:text-3xl my-3'>
                                                {data.title}
                                            </p>
                                        </div>
                                        <div className='h-14 flex justify-center  items-start  w-full'>
                                            <p className='text-mg md:text-sm text-center'>
                                                {data.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </div>

    </Container >

}

export default ContentSection;
