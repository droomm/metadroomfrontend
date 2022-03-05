import React, { useState } from "react";
import DetailCard from '../../components/featureCard';
import { gsap } from "gsap";
import { Container, ImageContainer } from './style';

const FeatureSection = () => {
    const features = [
        {
            image: "/images/feature1.webp",
            title: "Title",
            detail: 'Dolore quis consequat magna qui aliqua veniam ut nostrud Lorem. Sint nisi laborum dolor est pariatur ex quis. Fugiat dolore id anim esse labore officia occaecat laboris dolore cillum commodo pariatur exercitation. Laborum labore ea anim pariatur. Occaecat mollit amet nostrud pariatur minim et tempor ea cillum nostrud adipisicing Lorem ad. Quis ullamco ut ex labore aliquip et culpa proident aliqua. Aliquip occaecat enim anim esse anim incididunt incididunt adipisicing. Duis aute ex et irure esse pariatur ut. Reprehenderit eiusmod magna cupidatat quis velit elit non eu elit officia esse consectetur. Do consectetur tempor duis exercitation duis do non irure. Officia mollit ad tempor eu occaecat amet pariatur ullamco laboris exercitation esse Lorem veniam.'
        },
        {
            image: "/images/feature2.webp",
            title: "Title 2",
            detail: 'Veniam consectetur in dolor id. Tempor nisi Lorem ut nostrud laborum laboris amet reprehenderit. Duis dolore tempor nisi sint incididunt in qui reprehenderit dolor amet aute commodo labore aliquip.Eiusmod consectetur ullamco minim eiusmod minim minim occaecat irure exercitation. Pariatur eiusmod irure enim tempor cupidatat qui ipsum. Ipsum mollit ad nostrud laborum in qui. Sint irure enim ex dolore ipsum.Qui ex amet officia dolor elit ipsum dolor sunt eu dolor laboris labore. Duis Lorem in quis dolor voluptate. Sint ex veniam ad incididunt pariatur ullamco duis velit tempor cillum. Excepteur esse dolor pariatur esse. Sint et non sit eu id commodo consequat pariatur esse Lorem sunt.'
        },
        {
            image: "/images/feature4.webp",
            title: "Title 3",
            detail: 'Nostrud minim do aute officia officia reprehenderit sunt sint elit do cupidatat tempor nisi qui. Elit est pariatur tempor non duis velit irure ut quis incididunt minim. Veniam aute amet veniam eu esse consectetur incididunt laborum adipisicing ipsum elit in mollit. Anim cupidatat officia voluptate magna irure consectetur in nostrud ad sunt voluptate velit ea.Non eu eiusmod ipsum pariatur consectetur ipsum reprehenderit qui anim reprehenderit eu ipsum. Est commodo ut voluptate do non eu ut proident velit. Ad cillum nulla dolore nostrud sit nulla sunt officia quis exercitation officia eiusmod consequat. Ex nulla reprehenderit exercitation deserunt consequat deserunt occaecat aliqua voluptate dolore ea aliqua consectetur voluptate. Anim quis esse aliquip fugiat ad sunt incididunt culpa ut anim. Quis nulla fugiat magna eiusmod ea non exercitation id reprehenderit qui consequat incididunt. Officia consectetur occaecat aute consequat laborum esse fugiat ipsum labore.'
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
            {/* <div className='absolute z-10 background w-full h-full ' /> */}
            <div className='sm:px-24 w-screen flex justify-center items-center flex-col z-20 absolute bottom-5  '>
                <div className='top-padding' />
                <DetailCard title={features[tab]!.title} detail={features[tab]!.detail}
                    leftAction={() => {

                        if (tab === 0) {
                            gsap.fromTo("#feature1", { x: "0" }, { x: "100vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-300vw" }, { x: "-200vw", duration: 0.5 })
                            setTabs(2)
                        }
                        else if (tab === 1) {
                            gsap.fromTo("#feature1", { x: "-100vw" }, { x: "0", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "-100vw" }, { x: "0", duration: 0.5 })
                            setTabs(0)
                        }
                        else {
                            gsap.fromTo("#feature2", { x: "-200vw" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-200vw" }, { x: "-100vw", duration: 0.5 })
                            setTabs(1)
                        }
                    }}
                    rightAction={() => {

                        if (tab === 0) {
                            gsap.fromTo("#feature1", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "0" }, { x: "-100vw", duration: 0.5 })
                            setTabs(1)
                        }
                        else if (tab === 1) {
                            gsap.fromTo("#feature1", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            gsap.fromTo("#feature2", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-100vw" }, { x: "-200vw", duration: 0.5 })
                            setTabs(2)
                        }
                        else {
                            gsap.fromTo("#feature1", { x: "100vw" }, { x: "0", duration: 0.5 })
                            gsap.fromTo("#feature3", { x: "-200vw" }, { x: "-300vw", duration: 0.5 })
                            setTabs(0)
                        }
                    }}
                />
            </div>
        </div>

    </Container >

}

export default FeatureSection;
