import React, { useState } from "react";
import { Container, ImageContainer } from './style';

const WaitingList = () => {
    const [email, setEmail] = useState<any>({
        value: "",
        error: false,
        errorMessage: ""
    });

    return <Container className='flex justify-center  px-2 sm:pl-16 lg:pl-24 sm:pr-4  '>
        <div className='w-full sm:w-11/12 lg:w-5/6 3xl:w-8/12 h-96 sm:max-h-80 absolute z-0 '>
            <div className=' absolute bg-waitingList rounded-2xl mx-auto waitingListBackground' >
                <div className='absolute w-72 h-2/3 bottom-0 left-0 z-10 '>
                    <ImageContainer
                        src={`/images/waitingList1.webp`}
                        alt="waitingList"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={`/images/waitingList1.webp`}
                        quality={100}
                        layout="fill"
                    />
                </div>
                <div className='absolute w-40 h-2/3 top-0 right-0 z-10 '>
                    <ImageContainer
                        src={`/images/waitingList2.webp`}
                        alt="waitingList"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={`/images/waitingList2.webp`}
                        quality={100}
                        layout="fill"
                    />
                </div>
            </div>
            <div className='absolute w-40 h-40 top-5 left-5 hidden md:flex'>
                <ImageContainer
                    src={`/images/open.webp`}
                    alt="open"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/images/open.webp`}
                    quality={100}
                    layout="fill"
                />
            </div>
            <div className='absolute w-14 h-14 bottom-0 right-0 z-10 '>
                <ImageContainer
                    src={`/icons/send.svg`}
                    alt="send"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/icons/send.svg`}
                    quality={100}
                    layout="fill"
                />
            </div>
        </div>
        <div className='w-full sm:w-11/12 lg:w-5/6 3xl:w-8/12 h-96 sm:max-h-80 flex  justify-center items-center flex-col px-4 sm:px-8 md:px-16 xl:px-28 z-20'>
            <p className='text-center font-thin text-lg sm:text-xl lg:text-2xl '>
                Wanna connect with the founders, hear more about the vision, join our team, or have a causal chat...
            </p>
            <p className='text-center font-thin text-lg sm:text-xl lg:text-2xl mt-5 '>
                Just drop us your mail. We will get back to you asap!
            </p>
            <div id="waitingList" className='w-full flex flex-wrap justify-center items-center mt-4 sm:mt-6 gap-2 gap-y-4'>
                <div className='w-full sm:w-64 md:w-72 lg:w-96'>
                    <input
                        id="waitingListInput"
                        onChange={(event: any) => {
                            setEmail({
                                value: event.target.value,
                                error: false,
                                errorMessage: "firstName.errorMessage"
                            })
                        }}
                        value={email.value}
                        placeholder={'Your Email'}
                        className=" appearance-none  py-3 px-4  leading-tight border rounded-lg text-md  block w-full  bg-white placeholder-black/50  text-third focus:outline-none "
                        type="email"
                        style={{ borderColor: email.error ? "#ED7C7C" : "transparent" }}
                    />

                </div>
                <button className='w-full sm:w-48 join-button px-5 text-white sm:px-10 font-M-Bold h-12 text-lg rounded-full'>
                    Contact Us
                </button>

            </div>
            {email.error && <p className="text-red-500 text-xs">{email.errorMessage}</p>}
        </div>
        {/* <div className='w-full px-5 sm:px-0 relative z-10 text-white  py-10 flex flex-col gap-2 pb-20'>
            <div className='w-full lg:w-10/12 2xl:w-1/2 3xl:w-7/2 flex flex-col justify-center gap-y-5 '>
                
            </div>
        </div> */}
    </Container >
}

export default WaitingList;
