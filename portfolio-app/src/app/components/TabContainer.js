"use client";
import { useState } from "react";

import post from "../styles/post.module.css";

const Tab = ({ number, tab, text, handleTab }) => {
    return (
        <button
            className={`${tab === number ? post.active : post.inactive}`}
            onClick={() => handleTab(number)}
        >
            {text}
        </button>
    );
};

const TabContainer = ({ contentTabs }) => {
    const [tab, setTab] = useState(1);
    const handleTab = (newTab) => setTab(newTab);

    return (
        <div className={post.container}>
            <div className={post.tabs}>
                {contentTabs.map((tabInfo, index) => (
                    <Tab
                        key={index}
                        number={index + 1}
                        tab={tab}
                        text={tabInfo.title}
                        handleTab={handleTab}
                    />
                ))}
            </div>

            {contentTabs
                .filter((_, index) => index + 1 === tab)
                .map((content, index) => (
                    <>{content.content}</>
                ))}
        </div>
    );
};

export default TabContainer;
