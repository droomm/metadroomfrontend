import React, { useState } from "react";
import { Container, ImageContainer } from './style';
import axios from "axios";
import Image from "next/image";


const WaitingList = () => {
    const [email, setEmail] = useState<any>({
        value: "",
        error: false,
        errorMessage: ""
    });

    const [successful, setSuccessful] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

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
                            setSuccessful(false);
                            if (email.error && (!email.value.includes("@") || !email.value.includes(".")))
                                setEmail({
                                    value: event.target.value,
                                    error: email.error,
                                    errorMessage: email.errorMessage
                                })
                            else setEmail({
                                value: event.target.value,
                                error: false,
                                errorMessage: ""
                            })
                        }}
                        value={email.value}
                        placeholder={'Your Email'}
                        className=" appearance-none  py-3 px-4  leading-tight border rounded-lg text-md  block w-full  bg-white placeholder-black/50  text-third focus:outline-none "
                        type="email"
                        style={{ borderColor: email.error ? "#ED7C7C" : "transparent" }}
                    />

                </div>
                <button
                    disabled={loading}
                    onClick={async () => {
                        if (!email.value.includes("@") || !email.value.includes(".")) {
                            setEmail({
                                value: email.value,
                                error: true,
                                errorMessage: "Please provide a valid email."
                            })
                            return;
                        }
                        setLoading(true);
                        try {
                            let res = await axios(
                                {
                                    method: 'post',
                                    url: 'https://197d1dc0.sibforms.com/serve/MUIEADhkGNeXbzlo2_-VeFgTz0MCwF2kADbNA2bKzHkRWiEZOqF2bAQ2aT-QwKEMk5XveHh8sGrfa4zXXxCjPiRTBXZXTBc_QndgjtkUnJsqs_ZULheacTVUgDhv0QHN6O9HJrep-pmtrCRlhyDErc_Nb6FC_AJN0OXJWiR184pbXNwMkNuBmM-6eq19i-YL20pHoeB6U0yKm0Sy?isAjax=1',
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                    },
                                    data: `EMAIL=${email.value}`
                                }
                            );
                            if (res.data.success) setSuccessful(true);
                            setLoading(false);
                        }
                        catch (e) {
                            console.error(e);
                            setLoading(false);
                        }
                    }}
                    className='w-full flex sm:w-48 items-center justify-center join-button text-white  font-M-Medium h-12 text-md rounded-full'>

                    {loading && <div className='relative w-10 h-10'>
                        <Image src="/icons/spinner.svg" alt="icon" layout='fill' />
                    </div>}
                    Contact Us
                </button>

            </div>
            {email.error && <p className="text-red-500 text-md mt-5">{email.errorMessage}</p>}
            {successful && <p className="text-success text-md mt-5 font-M-Bold">Your subscription has been successful.</p>}
        </div>
    </Container >
}

export default WaitingList;
