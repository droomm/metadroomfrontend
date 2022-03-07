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
                {Array(4).fill(0).map((data, index) => {
                    return <AvatarBox image="/images/avatar.webp" name="name" key={index} />
                })}
            </div>
        </SidePanelStructure>
    )
}

export default RightSidePanel;
