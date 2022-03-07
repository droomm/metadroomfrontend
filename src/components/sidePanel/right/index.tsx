import React, { } from "react";
import AccountSVG from '../../../assets/icons/account';
import SidePanelStructure from '../index';
import { SVGContainer } from './style';
import Image from "next/image"
import AvatarBox from '../../avatars';
import { useNavBar } from '../../../contexts/navbar';

const RightSidePanel = () => {

    const { teamMembers, updateSelected } = useNavBar();
    return (

        <SidePanelStructure left={false} >
            <div className='relative w-full flex flex-col items-center gap-y-5 py-5'>
                {teamMembers.map((data, index) => {
                    return <div
                        className='cursor-pointer'
                        key={index} onClick={() => {
                            updateSelected(data.id)
                            let member = document.getElementById(data.id);
                            if (member) member.scrollIntoView();
                        }}>
                        <AvatarBox image={data.image} name={data.name} />
                    </div>
                })}
            </div>
        </SidePanelStructure>
    )
}

export default RightSidePanel;
