import router from 'next/router';
import React, { useState, useContext, useEffect } from "react";
import CallSVG from '../../assets/icons/call';
import DashboardSVG from '../../assets/icons/dashboard';
import DesignSVG from '../../assets/icons/design';
import ListSVG from '../../assets/icons/list';
import RewardSVG from '../../assets/icons/reward';


const initialValues: {
    icons: {
        path: string,
        icon: any
    }[],
    leftPanelTab: number,
    updateLeftPanel: Function
} = {
    icons: [],
    leftPanelTab: 0,
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
            icon: <DesignSVG width="25" height="25" key={1} />,
        },
        {
            path: "#content",
            icon: <CallSVG width="25" height="25" key={2} />,
        },

        {
            path: "#teamMember",
            icon:
                <ListSVG width="25" height="25" key={3} />,
        },
        {
            path: "#whitelist",
            icon:
                <RewardSVG width="25" height="25" key={4} />,
        },

    ]

    useEffect(() => {
        console.log("hash",)
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
                leftPanelTab,
                updateLeftPanel
            }}
        >
            {children}
        </NavBarContext.Provider>
    );
};



export { NavBarProvider, useNavBar };

