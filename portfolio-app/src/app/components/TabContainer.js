"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import post from "../styles/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
const Tab = ({ number, tab, text, handleTab, isMobile, icon }) => {
    return isMobile ? (
        <button
            className={`${tab === number ? post.active : post.inactive}`}
            onClick={() => handleTab(number)}
        >
            {icon}
        </button>
    ) : (
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
    const numberOfTabs = contentTabs.length;
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // TODO if 768 top tabs, remove dynamic style, replace non active tabs with icons to shorten space
    const dynamicStyle = {
        height: `${numberOfTabs * 300}px`,
        // position: pinBox ? "sticky" : "relative",
        // top: pinBox ? boxY : "auto",
        // bottom: pinBox ? "auto" : 0,
    };

    const mobileTabLayout = isMobile
        ? {
              gridTemplateColumns: `repeat(${numberOfTabs}, minmax(50px, 300px))`,
          }
        : {};
    return (
        <motion.div className={post.container} style={dynamicStyle}>
            <div className={post.tabs} style={mobileTabLayout}>
                {/* add hint to click tabs */}
                {contentTabs.map((tabInfo, index) => (
                    <Tab
                        key={index}
                        number={index + 1}
                        tab={tab}
                        text={tabInfo.title}
                        handleTab={handleTab}
                        isMobile={isMobile}
                        icon={tabInfo.icon}
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
                        ${tab === 1 ? post.firstDescription : ""} 
                        ${
                            tab === contentTabs.length
                                ? post.lastDescription
                                : ""
                        }
                    `}
                    >
                        {content.content}
                    </div>
                ))}
        </motion.div>
    );
};

export default TabContainer;
