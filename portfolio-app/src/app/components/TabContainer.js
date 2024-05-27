"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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
    const { scrollY } = useScroll();
    const ref = useRef(null);
    const numberOfTabs = contentTabs.length;
    const [pinBox, setPinBox] = useState(false);
    const boxY = useTransform(
        scrollY,
        [0, window.innerHeight + 0],
        [0, window.innerHeight]
    );
    const dynamicStyle = {
        height: `${numberOfTabs * 300}px`,
        // position: pinBox ? "sticky" : "relative",
        // top: pinBox ? boxY : "auto",
        // bottom: pinBox ? "auto" : 0,
    };
    const isInView = useInView(ref, { amount: 0.9 }); // tabs
    // useEffect(() => {
    //     setPinBox(isInView)
    //     console.log(isInView)
    // },[isInView])

    return (
        <motion.div className={post.container} style={dynamicStyle} ref={ref}>
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
