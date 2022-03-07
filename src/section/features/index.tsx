import React, { useState } from "react";
import DetailCard from '../../components/featureCard';
import { gsap } from "gsap";
import { Container, ImageContainer } from './style';

const FeatureSection = () => {
    const features = [
        {
            image: "/images/feature1.webp",
            title: "Central Discovery Feed",
            detail: 'Discover & monetize creativity. Earn from content sales, ads, digital merchandized and much more…'
        },
        {
            image: "/images/feature2.webp",
            title: "Wallet",
            detail: 'Multitoken wallets to help you trade and buy your favorite digital assets.'
        },
        {
            image: "/images/feature3.webp",
            title: "Meta-Commerce",
            detail: 'NFT powered social networking & meta-commerce. Mint and share your cherished moments on blockchain  forever.'
        },
        {
            image: "/images/feature4.webp",
            title: "Virtual Worlds",
            detail: 'Go Live on Metaverse instantly. Play games, attend classes and work interactively in virtual worlds'
        }
    ]

    const [tab, setTabs] = useState<number>(0);
    return <Container id="features" >
        <div>
            <div className='flex absolute w-screen h-screen '>
                {features.map((data, index) => {
                    return <div className='w-full h-full' id={`feature${index + 1}`} key={index}>
                        <div className='overflow-hidden w-screen h-screen relative'>
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
                })}
            </div>
            <div className='sm:px-24 w-screen flex justify-center items-center flex-col z-20 absolute bottom-5  '>
                <div className='top-padding' />
                <DetailCard title={features[tab]!.title} detail={features[tab]!.detail}
                    leftAction={() => {

                        if (tab === 0) {
                            gsap.fromTo("#feature1", { x: "0" }, { x: "100vw", duration: 0.5 })
                            gsap.fromTo("#feature4", { x: "-400vw" }, { x: "-300vw", duration: 0.5 })
                            setTabs(3)
                        }
                        else if (tab === 1) {
                            gsap.fromTo("#feature1", { x: "-100vw" }, { x: "0", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "-100vw" }, { x: "0", duration: 0.5 })
                            setTabs(0)
                        }
                        else if (tab === 2) {
                            gsap.fromTo("#feature2", { x: "-200vw" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-200vw" }, { x: "-100vw", duration: 0.5 })
                            setTabs(1)
                        }
                        else {
                            gsap.fromTo("#feature3", { x: "-300vw" }, { x: "-200vw", duration: 0.5 })
                            gsap.fromTo("#feature4", { x: "-300vw" }, { x: "-200vw", duration: 0.5 })
                            setTabs(2)
                        }
                    }}
                    rightAction={() => {

                        if (tab === 0) {
                            gsap.fromTo("#feature1", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            setTabs(1)
                        }
                        else if (tab === 1) {
                            gsap.fromTo("#feature2", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            setTabs(2)
                        }
                        else if (tab === 2) {
                            gsap.fromTo("#feature3", { x: "-200vw" }, { x: "-300vw", duration: 0.5 })
                            gsap.fromTo("#feature4", { x: "-200vw" }, { x: "-300vw", duration: 0.5 })
                            setTabs(3)
                        }
                        else {
                            gsap.fromTo("#feature1", { x: "100vw" }, { x: "0", duration: 0.5 })
                            gsap.fromTo("#feature4", { x: "-300vw" }, { x: "-400vw", duration: 0.5 })
                            setTabs(0)
                        }
                    }}
                />
            </div>
        </div>

    </Container >

}

export default FeatureSection;
