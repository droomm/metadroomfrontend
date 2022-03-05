import React, { } from "react";
import AccountSVG from '../../../assets/icons/account';
import SidePanelStructure from '../index';
import { SVGContainer } from './style';
import Image from "next/image"
import AvatarBox from '../../avatars';

const RightSidePanel = () => {
    return (

        <SidePanelStructure left={false} >
            <div className='relative w-full flex flex-col items-center gap-y-5 py-5'>

                <SVGContainer className='w-full flex justify-center'>
                    <AccountSVG width='25' height='25' />
                </SVGContainer>
                {Array(3).fill(0).map((data, index) => {
                    return <AvatarBox image="/images/avatar.png" name="name" key={index} />
                })}
            </div>
        </SidePanelStructure>
    )
}

export default RightSidePanel;
