import React, { useState, useContext, useEffect } from "react";
import DashboardSVG from '../../assets/icons/dashboard';
import TeamSVG from '../../assets/icons/team';
import FeatureSVG from '../../assets/icons/feature';
import WhiteListSVG from '../../assets/icons/whitelist';
import ContentSVG from '../../assets/icons/content';


const initialValues: {
    icons: {
        path: string,
        icon: any
    }[],
    leftPanelTab: number,
    advisor: {
        id: string,
        image: string,
        name: string,
        position: string,
    }[],
    teamMembers: {
        id: string,
        image: string,
        name: string,
        position: string,
        aboutMe: string,
        background: string,
        interest: string,
    }[]
    updateLeftPanel: Function
} = {
    icons: [],
    leftPanelTab: 0,
    teamMembers: [],
    advisor: [],
    updateLeftPanel: () => { },
};


const NavBarContext = React.createContext(initialValues);

const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC = ({ children }) => {
    const [leftPanelTab, setLeftPanelTab] = useState<number>(0);
    const icons = [
        {
            path: "#welcome",
            icon: <DashboardSVG width="25" height="25" key={0} />,
        },
        {
            path: "#features",
            icon: <FeatureSVG width="25" height="25" key={1} />,
        },
        {
            path: "#content",
            icon: <ContentSVG width="25" height="25" key={2} />,
        },

        {
            path: "#teamMember",
            icon:
                <TeamSVG width="25" height="25" key={3} />,
        },
        {
            path: "#whitelist",
            icon:
                <WhiteListSVG width="25" height="25" key={4} />,
        },

    ]


    const advisor = [
        {
            id: "Manish_Goyal",
            image: "/images/avatar.webp",
            name: "Manish Goyal",
            position: "Strategic Advisor Ex IDC, F&S",
        },
        {
            id: "Varun_Sharma",
            image: "/images/avatar.webp",
            name: "Varun Sharma",
            position: "Strategic Advisor - BlockChain Investor, Mentor @ ETHDenver",
        },
    ];
    const teamMembers = [
        {
            id: "Rakesh_S",
            image: "/images/avatar.webp",
            name: "Rakesh S",
            position: "CEO & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. Eu consectetur commodo proident est sunt voluptate proident pariatur magna ut id. Eiusmod irure do minim exercitation nostrud velit fugiat aliqua laboris nostrud aute nulla quis. Eu excepteur adipisicing aliqua culpa cupidatat reprehenderit occaecat velit. Laborum veniam laboris sunt cillum veniam. Commodo culpa voluptate duis veniam esse occaecat. Sunt velit elit dolore cillum veniam quis non quis in fugiat occaecat cupidatat officia fugiat. Proident nostrud esse ex id voluptate Lorem dolor sunt Lorem nulla.Sunt labore elit adipisicing do id aute ipsum amet anim sint. Elit ad irure minim aliquip.",
            interest: "Pariatur reprehenderit esse sit labore ad consequat laborum. Non laboris quis nisi ipsum nisi id irure eu exercitation consequat consequat duis exercitation. Lorem mollit ea ea minim eiusmod minim eiusmod quis ad consequat. Mollit duis ex esse tempor sint Lorem voluptate Lorem exercitation enim veniam consequat.Id laborum exercitation duis irure aliquip incididunt enim nulla proident. Elit fugiat cupidatat officia ullamco veniam culpa esse. Cillum fugiat veniam culpa cillum laboris quis veniam aute. Magna ex adipisicing veniam consectetur aliquip sint consectetur. Consectetur velit quis id incididunt reprehenderit aliquip ullamco amet enim ex enim.",
            background: "Minim dolor laboris aute sunt culpa culpa magna amet. Aliquip anim nostrud laboris ipsum cillum tempor ad mollit do Lorem fugiat nostrud consequat ipsum. Non laboris veniam magna est Lorem elit aliquip exercitation incididunt.Quis pariatur laborum cupidatat aliqua non tempor commodo Lorem proident esse non. In do minim nostrud dolor exercitation ipsum exercitation consectetur deserunt culpa. Ullamco deserunt duis officia excepteur quis ea. Adipisicing reprehenderit exercitation enim elit magna sit labore. Ea duis id velit laborum mollit ullamco aliquip dolore irure dolore. Proident ad enim sit irure mollit laboris proident excepteur officia non anim sit exercitation eiusmod. Deserunt ipsum id quis qui incididunt sit eiusmod anim in id aliquip voluptate nisi tempor."
        },
        {
            id: "Preetham_S",
            image: "/images/avatar.webp",
            name: "Preetham S",
            position: "Product & Co-Founder",
            aboutMe: "Eu cillum ad deserunt amet Lorem nostrud et ad ipsum reprehenderit officia. Nostrud in ad cillum dolore ex cupidatat ullamco sit eu laboris et laborum. Labore sint dolore sint in est deserunt aliquip pariatur culpa dolore ut ex deserunt.Et eu enim cillum quis consectetur. Sit velit culpa quis labore ullamco occaecat sunt. Cupidatat et cupidatat enim mollit proident anim nisi ullamco deserunt dolor anim ullamco exercitation anim. In minim aliqua aliquip mollit cillum sit. Id exercitation exercitation ex cupidatat aliqua minim tempor enim non culpa esse nostrud ullamco veniam. Non excepteur laboris exercitation excepteur qui irure irure voluptate. Ex sunt adipisicing commodo et ex do dolore consequat tempor non.",
            interest: "Aliquip laborum incididunt excepteur non ipsum pariatur culpa occaecat mollit labore. Adipisicing excepteur ipsum commodo fugiat velit dolor fugiat cupidatat id ullamco consectetur. Nisi Lorem ut cillum id veniam officia consequat sit velit irure exercitation deserunt.In id fugiat ipsum culpa laborum laborum proident. Lorem qui pariatur cillum dolore ex laborum excepteur ullamco minim labore esse mollit. Duis dolor quis nisi sunt incididunt proident ea nisi do. Cillum minim amet eu excepteur minim. Magna id ut adipisicing in ex qui culpa culpa in deserunt proident culpa cupidatat elit.",
            background: "In ex adipisicing consequat eu nulla cupidatat officia qui excepteur tempor sint. Consequat est enim non minim duis aliquip. Sit in aliqua exercitation dolore enim velit laboris ad ipsum dolor nostrud nulla in et. Incididunt elit et consequat duis nostrud ut incididunt dolore cillum id aute. Commodo amet ipsum voluptate veniam non irure reprehenderit dolore voluptate aliquip et qui minim. Labore et consectetur commodo mollit eu dolor consectetur sunt consequat. Qui dolor ut irure sint cupidatat est laboris id.Irure amet exercitation cupidatat et culpa esse ipsum. Tempor laborum sint nulla sit duis consectetur reprehenderit. Esse labore pariatur quis labore proident minim. Nulla esse veniam do eiusmod amet sint ad qui sint duis nisi elit. Mollit excepteur incididunt sit exercitation est cillum. Commodo consectetur id pariatur cillum nulla. Sunt commodo irure pariatur consectetur eiusmod aliqua nostrud amet ex mollit magna."
        },
        {
            id: "Suvesh",
            image: "/images/avatar.webp",
            name: "Suvesh",
            position: "Tech & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. Eu consectetur commodo proident est sunt voluptate proident pariatur magna ut id. Eiusmod irure do minim exercitation nostrud velit fugiat aliqua laboris nostrud aute nulla quis. Eu excepteur adipisicing aliqua culpa cupidatat reprehenderit occaecat velit. Laborum veniam laboris sunt cillum veniam. Commodo culpa voluptate duis veniam esse occaecat. Sunt velit elit dolore cillum veniam quis non quis in fugiat occaecat cupidatat officia fugiat. Proident nostrud esse ex id voluptate Lorem dolor sunt Lorem nulla.Sunt labore elit adipisicing do id aute ipsum amet anim sint. Elit ad irure minim aliquip.",
            interest: "Pariatur reprehenderit esse sit labore ad consequat laborum. Non laboris quis nisi ipsum nisi id irure eu exercitation consequat consequat duis exercitation. Lorem mollit ea ea minim eiusmod minim eiusmod quis ad consequat. Mollit duis ex esse tempor sint Lorem voluptate Lorem exercitation enim veniam consequat.Id laborum exercitation duis irure aliquip incididunt enim nulla proident. Elit fugiat cupidatat officia ullamco veniam culpa esse. Cillum fugiat veniam culpa cillum laboris quis veniam aute. Magna ex adipisicing veniam consectetur aliquip sint consectetur. Consectetur velit quis id incididunt reprehenderit aliquip ullamco amet enim ex enim.",
            background: "Minim dolor laboris aute sunt culpa culpa magna amet. Aliquip anim nostrud laboris ipsum cillum tempor ad mollit do Lorem fugiat nostrud consequat ipsum. Non laboris veniam magna est Lorem elit aliquip exercitation incididunt.Quis pariatur laborum cupidatat aliqua non tempor commodo Lorem proident esse non. In do minim nostrud dolor exercitation ipsum exercitation consectetur deserunt culpa. Ullamco deserunt duis officia excepteur quis ea. Adipisicing reprehenderit exercitation enim elit magna sit labore. Ea duis id velit laborum mollit ullamco aliquip dolore irure dolore. Proident ad enim sit irure mollit laboris proident excepteur officia non anim sit exercitation eiusmod. Deserunt ipsum id quis qui incididunt sit eiusmod anim in id aliquip voluptate nisi tempor."
        },
        {
            id: "Uday_Allu",
            image: "/images/avatar.webp",
            name: "Uday Allu",
            position: "AI & Co-Founder",
            aboutMe: "Eu cillum ad deserunt amet Lorem nostrud et ad ipsum reprehenderit officia. Nostrud in ad cillum dolore ex cupidatat ullamco sit eu laboris et laborum. Labore sint dolore sint in est deserunt aliquip pariatur culpa dolore ut ex deserunt.Et eu enim cillum quis consectetur. Sit velit culpa quis labore ullamco occaecat sunt. Cupidatat et cupidatat enim mollit proident anim nisi ullamco deserunt dolor anim ullamco exercitation anim. In minim aliqua aliquip mollit cillum sit. Id exercitation exercitation ex cupidatat aliqua minim tempor enim non culpa esse nostrud ullamco veniam. Non excepteur laboris exercitation excepteur qui irure irure voluptate. Ex sunt adipisicing commodo et ex do dolore consequat tempor non.",
            interest: "Aliquip laborum incididunt excepteur non ipsum pariatur culpa occaecat mollit labore. Adipisicing excepteur ipsum commodo fugiat velit dolor fugiat cupidatat id ullamco consectetur. Nisi Lorem ut cillum id veniam officia consequat sit velit irure exercitation deserunt.In id fugiat ipsum culpa laborum laborum proident. Lorem qui pariatur cillum dolore ex laborum excepteur ullamco minim labore esse mollit. Duis dolor quis nisi sunt incididunt proident ea nisi do. Cillum minim amet eu excepteur minim. Magna id ut adipisicing in ex qui culpa culpa in deserunt proident culpa cupidatat elit.",
            background: "In ex adipisicing consequat eu nulla cupidatat officia qui excepteur tempor sint. Consequat est enim non minim duis aliquip. Sit in aliqua exercitation dolore enim velit laboris ad ipsum dolor nostrud nulla in et. Incididunt elit et consequat duis nostrud ut incididunt dolore cillum id aute. Commodo amet ipsum voluptate veniam non irure reprehenderit dolore voluptate aliquip et qui minim. Labore et consectetur commodo mollit eu dolor consectetur sunt consequat. Qui dolor ut irure sint cupidatat est laboris id.Irure amet exercitation cupidatat et culpa esse ipsum. Tempor laborum sint nulla sit duis consectetur reprehenderit. Esse labore pariatur quis labore proident minim. Nulla esse veniam do eiusmod amet sint ad qui sint duis nisi elit. Mollit excepteur incididunt sit exercitation est cillum. Commodo consectetur id pariatur cillum nulla. Sunt commodo irure pariatur consectetur eiusmod aliqua nostrud amet ex mollit magna."
        },

    ]

    useEffect(() => {
        let count = 0;
        for (let icon of icons) {
            if (window.location.hash === icon.path) {
                // setTimeout(() => {
                //     router.push(`/${icon.path}`, undefined, { shallow: true });
                // }, 500)
                setLeftPanelTab(count);
            }
            count++;
        }
    }, [])
    const updateLeftPanel = (data: number) => {
        setLeftPanelTab(data);
    };


    return (
        <NavBarContext.Provider
            value={{
                icons,
                advisor,
                teamMembers,
                leftPanelTab,
                updateLeftPanel
            }}
        >
            {children}
        </NavBarContext.Provider>
    );
};



export { NavBarProvider, useNavBar };

