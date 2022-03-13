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
        link: string,
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
            path: "#features",
            icon: <FeatureSVG width="27" height="27" key={1} />,
        },
        {
            path: "#content",
            icon: <ContentSVG width="27" height="27" key={2} />,
        },
        {
            path: "#teamMember",
            icon:
                <TeamSVG width="27" height="27" key={3} />,
        },
        {
            path: "#waitingList",
            icon:
                <WhiteListSVG width="27" height="27" key={4} />,
        },

    ]

    const teamMembers = [
        {
            id: "Rakesh_S",
            image: "/images/Rakesh.webp",
            name: "Rakesh S",
            position: "CEO & Co-Founder",
            link: "https://www.linkedin.com/in/s-rakesh07/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."
        },
        {
            id: "Preetham_S",
            image: "/images/Preetham.webp",
            name: "Preetham S",
            position: "Product & Co-Founder",
            link: "https://www.linkedin.com/in/preetham-sathyamurthy/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."
        },
        {
            id: "Suvesh",
            image: "/images/Suvesh.webp",
            name: "Suvesh",
            position: "Tech & Co-Founder",
            link: "https://www.linkedin.com/in/suvesh-baskar-3a8a8b108/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat. "
        },
        {
            id: "Uday_Allu",
            image: "/images/UdayAllu.webp",
            name: "Uday Allu",
            position: "AI & Co-Founder",
            link: "https://www.linkedin.com/in/udayallu/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."
        },
        {
            id: "Manish_Goyal",
            image: "/images/ManishGoyal.webp",
            name: "Manish Goyal",
            position: "Strategic Advisor Ex IDC, F&S",
            link: "https://www.linkedin.com/in/manishgoyal2222/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."

        },
        {
            id: "Varun_Sharma",
            image: "/images/VarunSharma.webp",
            name: "Varun Sharma",
            position: "Strategic Advisor - BlockChain Investor, Mentor @ ETHDenver",
            link: "https://www.linkedin.com/in/varun-sharma-74b6b013a/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."

        },
        {
            id: "Nav Sangameswaran",
            image: "/images/NavSangameswaran.webp",
            name: "Nav Sangameswaran",
            position: "Co-founder",
            link: "https://www.linkedin.com/in/navsang/",
            aboutMe: "Officia eu dolor cillum aute duis do nostrud commodo sint nisi pariatur adipisicing non. Deserunt minim occaecat labore duis proident. Laborum enim sint laborum veniam laboris. Exercitation laboris eiusmod occaecat sint sunt aliqua deserunt exercitation minim aute nisi anim. Lorem laborum anim proident et officia fugiat."

        },

    ]

    useEffect(() => {
        let count = 0;
        for (let icon of icons) {
            if (window.location.hash === icon.path) {
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

