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
    teamMembers: {
        id: string,
        image: string,
        name: string,
        position: string,
        aboutMe: string,
    }[],
    selected: string,
    updateLeftPanel: Function,
    updateSelected: Function
} = {
    icons: [],
    leftPanelTab: 0,
    selected: "",
    teamMembers: [],
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
            icon: <DashboardSVG width="27" height="27" key={0} />,
        },
        {
            path: "#content",
            icon: <ContentSVG width="27" height="27" key={2} />,
        },
        {
            path: "#features",
            icon: <FeatureSVG width="27" height="27" key={1} />,
        },
        {
            path: "#teamMember",
            icon:
                <TeamSVG width="27" height="27" key={3} />,
        },
        {
            path: "#whitelist",
            icon:
                <WhiteListSVG width="27" height="27" key={4} />,
        },

    ]


    const advisor = [
    ];
    const teamMembers = [
        {
            id: "Rakesh_S",
            image: "/images/avatar1.webp",
            name: "Rakesh S",
            position: "CEO & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."
        },
        {
            id: "Preetham_S",
            image: "/images/avatar2.webp",
            name: "Preetham S",
            position: "Product & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."
        },
        {
            id: "Suvesh",
            image: "/images/avatar3.webp",
            name: "Suvesh",
            position: "Tech & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. "
        },
        {
            id: "Uday_Allu",
            image: "/images/avatar3.webp",
            name: "Uday Allu",
            position: "AI & Co-Founder",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."
        },
        {
            id: "Manish_Goyal",
            image: "/images/avatar1.webp",
            name: "Manish Goyal",
            position: "Strategic Advisor Ex IDC, F&S", aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."

        },
        {
            id: "Varun_Sharma",
            image: "/images/avatar2.webp",
            name: "Varun Sharma",
            position: "Strategic Advisor - BlockChain Investor, Mentor @ ETHDenver", aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."

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

