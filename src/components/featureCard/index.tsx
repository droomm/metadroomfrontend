import React, { } from "react";
import { Container } from './style';
import Image from "next/image";
import CallSVG from '../../assets/icons/call';
import LeftArrowSVG from '../../assets/icons/left';
import RightArrowSVG from '../../assets/icons/rightArrow';

const DetailCard = ({ leftAction, rightAction, title, detail }: { title: string, detail: string, leftAction: Function, rightAction: Function }) => {
    return <Container className='w-full flex justify-center relative pb-5 select-none'>

        <div className='w-full px-5 sm:px-0   lg:w-8/12 py-2 flex flex-col gap-5'>
            <div className='flex gap-8 justify-between flex-wrap'>
                <div className='flex items-center gap-x-4'>
                    <p className='lightText text-3xl sm:text-5xl font-thin'>
                        {title}
                    </p>
                </div>
                <div className='flex items-center'>
                    <div className='px-6 py-2 active:border-4 border-2 flex justify-evenly items-center gap-2 rounded-md text-xs sm:text-sm glass-border cursor-pointer'>
                        You are Here
                    </div>
                </div>
            </div>
            <div className='divider w-full' />
            <div className='flex flex-wrap justify-center gap-y-7'>
                <div className='w-full  sm:px-4'>
                    <p className='text-sm sm:text-md sm:text-justify '>
                        {detail}
                    </p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div
                    onClick={() => {
                        leftAction();
                    }
                    }
                    className=' lg:absolute bg-white/90 active:bg-white w-12 h-12 flex justify-center items-center rounded-full top-full lg:top-1/3 left-5 md:left-0  lg:left-12 xl:left-24  arrow-box cursor-pointer'
                >
                    <LeftArrowSVG width="20" height="20" />
                </div>

                <div
                    onClick={() => {
                        rightAction();
                    }
                    }
                    className='lg:absolute bg-white/90 active:bg-white w-12 h-12 flex justify-center items-center rounded-full top-full  lg:top-1/3 right-5 md:right-0 lg:right-12 xl:right-24  arrow-box cursor-pointer'
                >
                    <RightArrowSVG width="20" height="20" />
                </div>
            </div>
        </div>

    </Container>
}

export default DetailCard;
