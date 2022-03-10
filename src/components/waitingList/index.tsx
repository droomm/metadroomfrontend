import React, { useState } from "react";
import { Container } from './style';
import { useTheme } from 'styled-components';

const WaitingList = () => {
    const [email, setEmail] = useState<any>({
        value: "",
        error: false,
        errorMessage: ""
    });

    const theme: any = useTheme();

    return <Container className='w-full flex justify-center relative pb-5 select-none '>


    </Container>
}

export default WaitingList;

