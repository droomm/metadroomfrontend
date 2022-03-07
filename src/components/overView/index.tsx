import React, { useState } from "react";
import { Container } from './style';
import Image from "next/image";
import AccountSVG from '../../assets/icons/account';

const OverViewSection = ({ data, selected = false }: {
    data: {
        id: string;
        image: string;
        name: string;
        position: string;
        aboutMe?: string;
        background?: string;
        interest?: string;
    },
    selected: boolean
}) => {

    const [tab, setTab] = useState<number>(0);
    const tabs = [
        "About Me",
        "Interests",
        "Background"
    ]

    return <Container className='w-full h-full p-4 rounded-xl flex justify-center relative pb-5 select-none' selected={selected}>

        <div className='w-full  py-2 flex flex-col gap-2'>
            <div className='flex gap-8 justify-between flex-wrap'>
                <div className='flex items-center gap-x-4'>
                    <div className='w-32 h-32 relative'>
                        <div className='rounded-full overflow-hidden w-32 h-32 relative'>
                            <Image
                                src={"/images/avatar.webp"}
                                layout='fill'
                                alt="avatar"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={"/images/avatar.webp"}
                                quality={100}
                            />
                        </div>
                        <div className='w-10 h-10 bottom-0 right-2 badge z-10 absolute flex flex-col justify-center items-center'>
                            <div className='absolute rotate-45 rounded-md bg-black/75 z-0 w-10 h-10' />
                            <p className='z-10'>
                                <AccountSVG />
                            </p>
                            <div className='rotate-45  h-1 w-1 rounded-full' />
                        </div>
                    </div>
                    <div>
                        <p className='lightText text-2xl sm:text-5xl font-thin text-white/75'>
                            {data.name}
                        </p>
                        <p className='text-white/75 text-sm sm:text-md font-extrabold mt-1'>
                            {data.position}
                        </p>
                    </div>
                </div>
            </div>
            {data.aboutMe && data.interest && data.background && <>

                <div className='relative flex gap-x-4 flex-wrap  mt-5'>
                    {tabs.map((data, index) => {
                        return <p
                            onClick={() => {
                                setTab(index);
                            }}
                            className={(index === tab ? 'primaryText font-bold' : "text-white/75") + " cursor-pointer text-center w-20 sm:w-24 transition-colors duration-500 text-lg"}
                            key={index}>
                            {data}
                        </p>
                    })}
                </div>
                <div className='relative text-nav-bar '>
                    <div className="divider w-full absolute h-3" />
                    <div className={(tab === 0 ? 'ml-0' : tab === 1 ? 'ml-28' : "ml-56") + " absolute primaryBackground rounded-lg w-20 sm:w-24 transition-all duration-500 z-10"} style={{ height: 2 }} />
                </div>
                {tab === 0 && <p className='text-md text-justify'>
                    {data.aboutMe}
                </p>
                }
                {tab === 1 && <p>
                    {data.interest}
                </p>
                }
                {tab === 2 && <p>
                    {data.background}
                </p>
                }
            </>}

        </div>

    </Container>
}

export default OverViewSection;

