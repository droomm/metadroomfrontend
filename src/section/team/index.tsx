import React, { useState } from "react";
import QuoteSVG from '../../assets/icons/quote';
import OverViewSection from '../../components/overView';
import { useNavBar } from '../../contexts/navbar';
import { Container, ImageContainer, MemberContainer } from './style';

const TeamMemberSection = () => {
    const { teamMembers, updateSelected, selected } = useNavBar();

    return <Container id="teamMember" className='select-none' >
        <div className='px-2 sm:px-24 w-screen h-full relative pt-5 text-lg'>
            <p className='text-3xl  mt-6 font-bold text-center'>
                The team building you the future
            </p>
            <div className='flex mt-10 flex-wrap w-full justify-center gap-y-5'>
                {teamMembers.map((data, index) => {
                    return (
                        <div className={'w-full member sm:px-2 cursor-pointer'} id={data.id} key={index} onClick={() => {
                            updateSelected(data.id)
                            console.log("ine", index)
                        }}

                        >
                            <MemberContainer selected={data.id === selected} className={(data.id === selected ? "mt-0" : " xl:mt-14 ") + ' rounded-lg w-full transition-all duration-1000 xl:duration-700 flex flex-col items-center py-16'}>
                                <div className='w-24 h-24 bg-slate-600 rounded-full  relative'>
                                    <div className='relative h-24 w-24'>
                                        <ImageContainer
                                            src={data.image}
                                            alt="feature"
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={data.image}
                                            quality={100}
                                            layout="fill"
                                        />
                                    </div>
                                    <div className={(data.id === selected ? "bg-secondary" : "bg-primary") + ' border-2 border-third quote flex justify-center items-center absolute right-0 bottom-0 w-8 h-8 rounded-full'}>
                                        <QuoteSVG width="12" height='10' />
                                    </div>
                                </div>
                                <div className='mt-10 w-full flex flex-col items-center'>
                                    <p className='font-M-Bold text-2xl'>
                                        {data.name}
                                    </p>
                                    <p className='font-M-Medium mt-2 text-sm text-white/60 member-detail text-center' >
                                        {data.position}
                                    </p>
                                    <p className='font-M-Medium mt-5 text-md text-center member-detail' >
                                        "{data.aboutMe}"
                                    </p>
                                </div>
                            </MemberContainer>

                        </div>
                    )
                })}
            </div>
            <div className='flex gap-x-10 gap-y-4 justify-evenly flex-wrap px-10 mt-12'>
                {Array(5).fill(0).map((data, index) => {
                    return <div className='relative h-24 w-36' key={index}>
                        <ImageContainer
                            src={`/icons/logo${index + 1}.svg`}
                            alt="feature"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={`/icons/logo${index + 1}.svg`}
                            quality={100}
                            layout="fill"
                        />
                    </div>
                })
                }

            </div>
        </div>



    </Container >

}

export default TeamMemberSection;
