import React, { useState } from "react";
import { Container } from './style';
import Image from "next/image";
import OverViewCard from '../overViewCard';
import { useTheme } from 'styled-components';

const WaitingList = () => {
    const [email, setEmail] = useState<any>({
        value: "",
        error: false,
        errorMessage: ""
    });

    const theme: any = useTheme();

    return <Container className='w-full flex justify-center relative pb-5 select-none '>

        <div className='w-full px-5 sm:px-0   lg:w-2/3 py-2 flex flex-col gap-2'>
            <div className='w-full flex flex-col justify-center gap-y-5'>
                <p className='text-center font-thin text-5xl sm:text-6xl '>
                    Join Our Waiting List
                </p>
                <p className='sm:px-20 text-center text-lg text-white/50'>
                    Sit dolore qui sunt cupidatat in fugiat incididunt duis voluptate et occaecat laboris amet. Ut deserunt mollit consequat sint non. Occaecat aliquip ex incididunt commodo.
                </p>
            </div>
            <div className='w-full flex flex-wrap justify-center items-center mt-6 gap-2'>
                <div className='w-8/12 sm:w-5/12'>
                    <input
                        onChange={(event: any) => {
                            setEmail({
                                value: event.target.value,
                                error: false,
                                errorMessage: "firstName.errorMessage"
                            })
                        }}
                        value={email.value}
                        placeholder={'Your Email Address'}
                        className=" appearance-none  py-3 px-4  leading-tight border rounded-lg text-md  block w-full  bg-gray-700 placeholder-slate-400 focus:outline-none "
                        type="email"
                        style={{ borderColor: email.error ? theme.colors.error : "transparent" }}
                    />

                </div>
                <button className='bg-slate-500/75 hover:bg-slate-500/90 active:bg-slate-500 px-5 sm:px-10 w-10/ h-12 text-lg rounded-md'>
                    Join Us
                </button>

            </div>
            {email.error && <p className="text-red-500 text-xs">{email.errorMessage}</p>}
        </div>

    </Container>
}

export default WaitingList;

