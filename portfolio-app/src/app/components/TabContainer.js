"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
                {/* add hint to click tabs */}
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
            {/* <motion
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            ></motion> */}
            {contentTabs
                .filter((_, index) => index + 1 === tab)
                .map((content, index) => (
                    <div
                        key={index}
                        className={`
                        ${post.description} 
                        ${tab === 1 ? post.firstDescription: ""} 
                        ${tab === contentTabs.length ? post.lastDescription: ""}
                    `}
                    >
                        {content.content}
                    </div>
                ))}
        </div>
    );
};

export default TabContainer;
