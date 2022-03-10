import React, { useState } from "react";
import { Container, ImageContainer } from './style';

const WaitingList = () => {
    const [email, setEmail] = useState<any>({
        value: "",
        error: false,
        errorMessage: ""
    });

    return <Container id="WaitingList" className='flex justify-center  px-2 sm:pl-24 sm:pr-4  '>
        <div className='w-2/3 h-72 absolute z-0'>
            <div className='relative w-full h-full'>
                {/* <ImageContainer 

/> */}

            </div>
        </div>
        <div className='w-full justify-center px-5 sm:px-0 relative z-10 text-white items-center py-2 flex flex-col gap-2 pb-20'>
            <div className='w-full lg:w-10/12 2xl:w-1/2 3xl:w-7/2 flex flex-col justify-center gap-y-5 '>
                <p className='text-center font-thin text-lg sm:text-xl lg:text-2xl '>
                    Wanna connect with the founders, hear more about the vision, join our team, or have a causal chat...
                </p>
                <p className='text-center font-thin text-lg sm:text-xl lg:text-2xl '>
                    Just drop us your mail. We will get back to you asap!
                </p>
            </div>
            <div className='w-full flex flex-wrap justify-center items-center mt-4 sm:mt-6 gap-2 gap-y-4'>
                <div className='w-full sm:w-96'>
                    <input
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
    </Container >
}

export default WaitingList;
