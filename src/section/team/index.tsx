import React, { useEffect, useState } from "react";
import QuoteSVG from '../../assets/icons/quote';
import { useNavBar } from '../../contexts/navbar';
import { Container, ImageContainer } from './style';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const TeamMemberSection = () => {
    const { teamMembers, updateSelected, selected } = useNavBar();
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let addData = 1;
        if (1408 >= window.innerWidth) addData = 0;
        updateSelected(teamMembers[0 + addData].id)
    }, []);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        breakpoints: {
            "(max-width: 4248px)": {
                slides: {
                    perView: 3,
                    spacing: 15,
                },
            },
            "(max-width: 1408px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(max-width: 860px)": {
                slides: { perView: 1, spacing: 5 },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
            setTimeout(() => {
                let addData = 1;
                if (1408 >= window.innerWidth) addData = 0;
                updateSelected(teamMembers[slider.track.details.rel + addData >= teamMembers.length ? 0 : slider.track.details.rel + addData].id);
            }, 150);
        },
        created() {
            setLoaded(true)
        },
    })

    return <Container id="teamMember" className='select-none' >
        <div className='px-2 sm:pl-24 sm:pr-4 w-screen h-full relative pt-5 text-lg'>
            <p className='text-3xl  mt-6 font-bold text-center'>
                The team building you the future
            </p>
            <div ref={sliderRef} className="keen-slider mt-10 transition-all duration-100 xl:duration-1000 ">  {teamMembers.map((data, index) => {
                return (
                    <div className={'keen-slider__slide member sm:px-2 '} id={data.id} key={index}
                    >
                        <div className={(data.id === selected ? "gradient mt-0" : " glass md:mt-14 ") + ' cursor-move rounded-lg w-full  duration-500 flex flex-col items-center py-16'}>
                            <div className='w-24 h-24 bg-slate-600 rounded-full  relative'>
                                <div className='relative h-24 w-24 rounded-full overflow-hidden'>
                                    <ImageContainer
                                        src={data.image}
                                        alt="team member"
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={data.image}
                                        quality={100}
                                        layout="fill"
                                    />
                                </div>
                                <div className={(data.id === selected ? "bg-secondary" : "bg-primary") + ' transition-all duration-500 border-2 border-third quote flex justify-center items-center absolute right-0 bottom-0 w-8 h-8 rounded-full'}>
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
                        </div>

                    </div>
                )
            })}
            </div>
            <div className='flex  w-full justify-center gap-x-2 mt-5'>
                {teamMembers.map((data, index) => {
                    return (
                        <div className={(data.id === selected ? "bg-white" : "bg-white/50") + ' w-3 h-3 rounded-full cursor-pointer'} key={index} onClick={() => {

                            let subData = -1;
                            if (1408 >= window.innerWidth) subData = 0;
                            instanceRef.current?.moveToIdx(index + subData)
                        }} />
                    )
                })}
            </div>
            <div className='flex lg:px-14 2xl:px-52 gap-x-8  sm:gap-x-20  gap-y-14 sm:gap-y-10 justify-center items-center flex-wrap px-10 mt-12'>
                {Array(5).fill(0).map((data, index) => {
                    if (index === 0)
                        return <div className='flex logo0' key={index}>
                            <img
                                src={`/images/logo${index + 1}.webp`}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    else if (index === 1)
                        return <div className='flex logo1' key={index}>
                            <img
                                src={`/images/logo${index + 1}.webp`}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    else if (index === 3)
                        return <div className='flex logo2' key={index}>
                            <img
                                src={`/images/logo${index + 1}.webp`}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    else if (index === 5)
                        return <div className='flex logo4' key={index}>
                            <img
                                src={`/images/logo${index + 1}.webp`}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    else if (index === 7)
                        return <div className='flex logo6' key={index}>
                            <img
                                src={`/images/logo${index + 1}.webp`}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    else
                        return <div className='flex logo' key={index}>
                            <img
                                src={`/images/logo${index + 1}.webp`}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                })
                }

            </div>
        </div>



    </Container >

}

export default TeamMemberSection;
