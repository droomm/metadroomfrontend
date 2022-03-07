import React, { useState } from "react";
import OverViewSection from '../../components/overView';
import { useNavBar } from '../../contexts/navbar';
import { Container, ImageContainer } from './style';

const TeamMemberSection = () => {
    const { teamMembers, advisor, selected } = useNavBar();

    return <Container id="teamMember" className='select-none' >
        <video
            className='team-video'
            autoPlay loop muted preload="auto"
        >
            <source src='/videos/team.mp4' type="video/mp4" />
        </video>
        <div className='px-2 sm:px-24 w-screen h-full relative  text-lg'>
            <div className='w-full '>
                <p className='capitalize content-header text-xl text-center' >
                    The Team
                </p>
                <p className='text-4xl sm:text-5xl uppercase mt-6 font-bold text-center'>
                    Meet The Team
                </p>
                <div className='flex mt-10 flex-wrap w-full justify-center gap-y-5'>
                    {teamMembers.map((data, index) => {
                        return (
                            <div className='w-full xl:w-1/2 sm:px-2' id={data.id} key={index}>
                                <OverViewSection data={data} selected={data.id === selected} />
                            </div>
                        )
                    })}
                </div><p className='text-4xl sm:text-5xl uppercase mt-20 font-bold text-center '>
                    Advisor Board
                </p>
                <div className='flex mt-10 flex-wrap w-full justify-center gap-y-5'>
                    {advisor.map((data, index) => {
                        return (
                            <div className='w-full xl:w-1/2 px-2' id={data.id} key={index}>
                                <OverViewSection data={data} selected={false} />
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>


    </Container >

}

export default TeamMemberSection;
