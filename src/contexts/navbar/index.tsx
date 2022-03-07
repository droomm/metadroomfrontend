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
    }[],
    selected: string,
    updateLeftPanel: Function,
    updateSelected: Function
} = {
    icons: [],
    leftPanelTab: 0,
    selected: "",
    teamMembers: [],
    advisor: [],
    updateLeftPanel: () => { },
    updateSelected: () => { },
};


const NavBarContext = React.createContext(initialValues);

const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC = ({ children }) => {
    const [leftPanelTab, setLeftPanelTab] = useState<number>(0);
    const [selected, setSelected] = useState<string>("");
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
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. Eu consectetur commodo proident est sunt voluptate proident pariatur magna ut id. Eiusmod irure do minim exercitation nostrud velit fugiat aliqua laboris nostrud aute nulla quis. ",
            interest: "Pariatur reprehenderit esse sit labore ad consequat laborum. Non laboris quis nisi ipsum nisi id irure eu exercitation consequat consequat duis exercitation. Lorem mollit ea ea minim eiusmod minim eiusmod quis ad consequat. Mollit duis ex esse tempor sint Lorem voluptate Lorem exercitation enim veniam consequat.Id laborum exercitation duis irure aliquip incididunt enim nulla proident. ",
            background: "Minim dolor laboris aute sunt culpa culpa magna amet. Aliquip anim nostrud laboris ipsum cillum tempor ad mollit do Lorem fugiat nostrud consequat ipsum. Non laboris veniam magna est Lorem elit aliquip exercitation incididunt.Quis pariatur laborum cupidatat aliqua non tempor commodo Lorem proident esse non. In do minim nostrud dolor exercitation ipsum exercitation consectetur deserunt culpa. Ullamco deserunt duis officia excepteur quis ea. "
        },
        {
            id: "Preetham_S",
            image: "/images/avatar.webp",
            name: "Preetham S",
            position: "Product & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. Eu consectetur commodo proident est sunt voluptate proident pariatur magna ut id. Eiusmod irure do minim exercitation nostrud velit fugiat aliqua laboris nostrud aute nulla quis. ",
            interest: "Pariatur reprehenderit esse sit labore ad consequat laborum. Non laboris quis nisi ipsum nisi id irure eu exercitation consequat consequat duis exercitation. Lorem mollit ea ea minim eiusmod minim eiusmod quis ad consequat. Mollit duis ex esse tempor sint Lorem voluptate Lorem exercitation enim veniam consequat.Id laborum exercitation duis irure aliquip incididunt enim nulla proident. ",
            background: "Minim dolor laboris aute sunt culpa culpa magna amet. Aliquip anim nostrud laboris ipsum cillum tempor ad mollit do Lorem fugiat nostrud consequat ipsum. Non laboris veniam magna est Lorem elit aliquip exercitation incididunt.Quis pariatur laborum cupidatat aliqua non tempor commodo Lorem proident esse non. In do minim nostrud dolor exercitation ipsum exercitation consectetur deserunt culpa. Ullamco deserunt duis officia excepteur quis ea. "
        },
        {
            id: "Suvesh",
            image: "/images/avatar.webp",
            name: "Suvesh",
            position: "Tech & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. Eu consectetur commodo proident est sunt voluptate proident pariatur magna ut id. Eiusmod irure do minim exercitation nostrud velit fugiat aliqua laboris nostrud aute nulla quis. ",
            interest: "Pariatur reprehenderit esse sit labore ad consequat laborum. Non laboris quis nisi ipsum nisi id irure eu exercitation consequat consequat duis exercitation. Lorem mollit ea ea minim eiusmod minim eiusmod quis ad consequat. Mollit duis ex esse tempor sint Lorem voluptate Lorem exercitation enim veniam consequat.Id laborum exercitation duis irure aliquip incididunt enim nulla proident. ",
            background: "Minim dolor laboris aute sunt culpa culpa magna amet. Aliquip anim nostrud laboris ipsum cillum tempor ad mollit do Lorem fugiat nostrud consequat ipsum. Non laboris veniam magna est Lorem elit aliquip exercitation incididunt.Quis pariatur laborum cupidatat aliqua non tempor commodo Lorem proident esse non. In do minim nostrud dolor exercitation ipsum exercitation consectetur deserunt culpa. Ullamco deserunt duis officia excepteur quis ea. "
        },
        {
            id: "Uday_Allu",
            image: "/images/avatar.webp",
            name: "Uday Allu",
            position: "AI & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. Eu consectetur commodo proident est sunt voluptate proident pariatur magna ut id. Eiusmod irure do minim exercitation nostrud velit fugiat aliqua laboris nostrud aute nulla quis. ",
            interest: "Pariatur reprehenderit esse sit labore ad consequat laborum. Non laboris quis nisi ipsum nisi id irure eu exercitation consequat consequat duis exercitation. Lorem mollit ea ea minim eiusmod minim eiusmod quis ad consequat. Mollit duis ex esse tempor sint Lorem voluptate Lorem exercitation enim veniam consequat.Id laborum exercitation duis irure aliquip incididunt enim nulla proident. ",
            background: "Minim dolor laboris aute sunt culpa culpa magna amet. Aliquip anim nostrud laboris ipsum cillum tempor ad mollit do Lorem fugiat nostrud consequat ipsum. Non laboris veniam magna est Lorem elit aliquip exercitation incididunt.Quis pariatur laborum cupidatat aliqua non tempor commodo Lorem proident esse non. In do minim nostrud dolor exercitation ipsum exercitation consectetur deserunt culpa. Ullamco deserunt duis officia excepteur quis ea. "
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

    const updateSelected = (data: string) => {
        setSelected(data);
    };



    return (
        <NavBarContext.Provider
            value={{
                icons,
                advisor,
                teamMembers,
                selected,
                leftPanelTab,
                updateLeftPanel,
                updateSelected
            }}
        >
            {children}
        </NavBarContext.Provider>
    );
};



export { NavBarProvider, useNavBar };

