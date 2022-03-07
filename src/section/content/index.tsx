import React, { useState } from "react";
import { Container, ImageContainer } from './style';

const ContentSection = () => {
    const contents = [
        {
            image: "/images/feature1.webp",
            title: "World Building",
            detail: 'Build and explore incredible ecosystems tied to your smart contracts. Host events, sports, games an online classes. Aute eu reprehenderit duis elit. Sit excepteur eiusmod Lorem elit ea tempor ad esse sit eu proident sint deserunt. Anim eu laborum aliqua Lorem veniam mollit deserunt commodo deserunt labore eu labore adipisicing. Voluptate cillum laborum incididunt aute cupidatat tempor irure. Ullamco non enim enim cupidatat.'
        },
        {
            image: "/images/feature2.webp",
            title: "Social-Networking",
            detail: 'Experience life like social interactions. Mint and shared NFT powered content. Monetize your creativity.Pariatur pariatur do cupidatat nostrud velit cupidatat minim fugiat aute duis. Do ipsum veniam id officia. In nostrud labore sit in incididunt qui dolor minim adipisicing. Culpa culpa et non excepteur eiusmod eu magna officia cupidatat.'
        },
        {
            image: "/images/feature3.webp",
            title: "Meta-Commerce",
            detail: 'Trade NFTs, cryptos. Even buy products online from peers and ecosystem vendors. Voluptate esse qui nulla sunt consequat magna ut laboris laborum aute dolore incididunt. Ut qui duis occaecat labore. Qui sit cillum velit anim sit sint nulla fugiat est sunt velit. Consectetur officia quis voluptate enim cillum velit ullamco Lorem id. Minim ex sunt aliquip aliquip.'
        },
    ]

    return <Container id="content" className='select-none' >
        <div>
            <div className='px-2 sm:px-24 w-screen h-full relative z-20 text-lg'>
                <div className='w-full '>
                    <p className='capitalize content-header text-xl text-center' >
                        content
                    </p>
                    <p className='text-4xl sm:text-6xl uppercase mt-6 font-bold text-center'>
                        All this in a single platform
                    </p>
                    <div className='flex mt-10 md:mt-20 flex-wrap w-full justify-center gap-y-5'>
                        {contents.map((data, index) => {
                            return (
                                <div key={index} className={`w-full flex flex-wrap py-2 items-center ${index % 2 ? "flex-row" : "flex-row-reverse"}`}>
                                    <div className='overflow-hidden w-full xl:w-1/2 relative rounded-lg content-image-box' >
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
                                    <div className={`flex h-full flex-col  w-full xl:w-1/2 py-4 px-4`}>
                                        <p className='text-4xl sm:text-5xl font-bold text-center xl:text-left'>
                                            {data.title}
                                        </p>
                                        <p className='text-lg sm:text-xl font-thin sm:text-justify mt-5'>
                                            {data.detail}
                                        </p>
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



{/* <div className='w-full md:w-1/2 lg:w-1/3 rounded-md overflow-hidden px-4 content-card ' key={index}>
<div className=' background rounded-md flex flex-col p-4 justify-center  py-5' style={{ background: "#00000066" }}>
    
    <div className='h-14 flex justify-center  w-full'>
        <p className='text-3xl md:text-2xl xl:text-3xl my-3'>
            {data.title}
        </p>
    </div>
    <div className=' flex justify-center  items-start  w-full'>
        <p className='text-mg md:text-sm text-center'>
            {data.detail}
        </p>
    </div>
</div>
</div> */}