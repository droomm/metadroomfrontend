import React, { useState } from "react";
import { Container, ImageContainer } from './style';

const TeamMemberSection = () => {
    const teamMembers = [
        {
            image: "/images/avatar.webp",
            title: "Rakesh S",
            detail: "CEO & Co-Founder"
        },
        {
            image: "/images/avatar.webp",
            title: "Preetham S",
            detail: 'Product & Co-Founder'
        },
        {
            image: "/images/avatar.webp",
            title: "Suvesh",
            detail: 'Tech & Co-Founder'
        },
        {
            image: "/images/avatar.webp",
            title: "Uday Allu",
            detail: 'AI & Co-Founder'
        }
    ]
    const advisors = [
        {
            image: "/images/avatar.webp",
            title: "Manish Goyal",
            detail: "Strategic Advisor Ex IDC, F&S"
        },
        {
            image: "/images/avatar.webp",
            title: "Varun Sharma",
            detail: 'Strategic Advisor - BlockChain Investor, Mentor @ ETHDenver'
        },
    ]

    return <Container id="teamMember" className='select-none' >
        <div>
            <div className='px-2 sm:px-24 w-screen h-full relative z-20 text-lg'>
                <div className='w-full '>
                    <p className='capitalize content-header text-xl text-center' >
                        The Team
                    </p>
                    <p className='text-4xl sm:text-5xl uppercase mt-6 font-bold text-center'>
                        Meat The Team
                    </p>
                    <div className='flex mt-10  flex-wrap w-full justify-center gap-y-5'>
                        {teamMembers.map((data, index) => {
                            return (
                                <div className='w-full md:w-1/2 lg:w-1/4 rounded-md overflow-hidden px-4 content-card ' key={index}>
                                    <div className=' rounded-md flex flex-col p-4 justify-center ' >
                                        <div className='w-full h-44 flex justify-center '  >
                                            <div className='overflow-hidden w-44 h-44  rounded-full border-2 avatar-box relative'>
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
                                        <div className=' flex justify-center  w-full'>
                                            <p className='text-4xl lg:text-3xl font-bold my-3'>
                                                {data.title}
                                            </p>
                                        </div>
                                        <div className='flex justify-center mt-3 items-start  w-full'>
                                            <p className='text-2xl lg:text-lg text-center'>
                                                {data.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div><p className='text-4xl sm:text-5xl uppercase mt-20 font-bold text-center '>
                        Advisor Board
                    </p>
                    <div className='flex mt-10 flex-wrap w-full justify-center gap-y-5'>
                        {advisors.map((data, index) => {
                            return (
                                <div className='w-full md:w-1/2 lg:w-1/3  rounded-md overflow-hidden px-4 content-card ' key={index}>
                                    <div className=' rounded-md flex flex-col p-4 justify-center ' >
                                        <div className='w-full h-44 flex justify-center '  >
                                            <div className='overflow-hidden w-44 h-44  rounded-full border-2 avatar-box relative'>
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
                                        <div className=' flex justify-center  w-full'>
                                            <p className='text-3xl md:text-2xl xl:text-3xl font-bold my-3'>
                                                {data.title}
                                            </p>
                                        </div>
                                        <div className='flex justify-center  items-start  w-full'>
                                            <p className='text-lg text-center'>
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

export default TeamMemberSection;
