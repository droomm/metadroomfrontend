import React, { useState } from "react";
import CallSVG from '../../assets/icons/call';
import OverViewSection from '../../components/overView';
import { useNavBar } from '../../contexts/navbar';
import { Container, ImageContainer } from './style';

const HighLight = () => {
    const highLight = [
        {
            icon: "/",
            title: "Virtual World",
            detail: "Own virtual estates and future of workplaces"
        }, {
            icon: "/",
            title: "Working World",
            detail: "Blockchain powered social networking"
        }, {
            icon: "/",
            title: "Game World",
            detail: "Play games, attend classes, meet your favorite people in life-like virtual worlds"
        }
    ]
    return <Container id="highLight" className='select-none' >
        <div className='px-7 sm:px-24 w-screen h-full relative z-20 pt-10'>
            <div className='flex flex-wrap w-full justify-evenly gap-y-5 highligh-box'>
                {highLight.map((data, index) => {
                    return (
                        <div className='w-full lg:w-1/4 ' key={index}>
                            <div className='flex items-center my-2 gap-x-2 text-xl font-bold' >
                                <CallSVG height='50' width='50' />
                                <p>
                                    {data.title}
                                </p>
                            </div>
                            <p className='text-md font-thin text-white/60 w-2/3'>
                                {data.detail}
                            </p>

                        </div>
                    )
                })}
            </div>
        </div >



    </Container >

}

export default HighLight;
