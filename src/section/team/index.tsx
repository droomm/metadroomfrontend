import React, { useEffect, useState } from "react";
import { useNavBar } from '../../contexts/navbar';
import { Container, ImageContainer, MarqueeContainer } from './style';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import LinkedinSVG from '../../assets/icons/linkedin';


const TeamMemberSection = () => {
    const { teamMembers, updateSelected, selected } = useNavBar();
    let team = teamMembers;
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let addData = 1;
        if (1408 >= window.innerWidth) {
            updateSelected(teamMembers[0].id)
        }
        if (1408 < window.innerWidth) {
            instanceRef.current?.moveToIdx(teamMembers.length - 1)
            updateSelected(teamMembers[0].id)
        };
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
                        <div className={(data.id === selected ? "gradient mt-0" : " glass md:mt-14 ") + ' rounded-lg w-full  duration-500 flex flex-col items-center py-16'}>
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
                                <div
                                    onClick={() => {

                                        window.open(data.link, "_blank")
                                    }}
                                    className={(data.id === selected ? "bg-secondary" : "bg-primary") + ' cursor-pointer transition-all duration-500 border-2 border-third quote flex justify-center items-center absolute right-0 bottom-0 w-8 h-8 rounded-full'}>
                                    <LinkedinSVG width="18" height='18' />
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
        </div>


        <MarqueeContainer >
            <div className='track1 flex gap-x-10'>

                {Array(12).fill(0).map((data, index) => {
                    return <img
                        key={index}
                        className="logo"
                        src={`/images/logo${index + 1}.webp`}
                        alt="logo"
                        loading="lazy"
                        placeholder="blur"
                    />
                })
                }
                {Array(12).fill(0).map((data, index) => {
                    return <img
                        key={index}
                        className="logo"
                        src={`/images/logo${index + 1}.webp`}
                        alt="logo"
                        loading="lazy"
                        placeholder="blur"
                    />
                })
                }
                {Array(12).fill(0).map((data, index) => {
                    return <img
                        key={index}
                        className="logo"
                        src={`/images/logo${index + 1}.webp`}
                        alt="logo"
                        loading="lazy"
                        placeholder="blur"
                    />
                })
                }
                {Array(12).fill(0).map((data, index) => {
                    return <img
                        key={index}
                        className="logo"
                        src={`/images/logo${index + 1}.webp`}
                        alt="logo"
                        loading="lazy"
                        placeholder="blur"
                    />
                })
                }
            </div>
        </MarqueeContainer>

    </Container >

}

export default TeamMemberSection;
