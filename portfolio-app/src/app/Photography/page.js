"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Masonry } from "react-plock";
import { webpImages } from "../../../public/photos/webpImages";
import { useState } from "react";
const Page = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState(null);
    const openModal = (item) => {
        setCurrentItem(item);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const navigateImage = (direction) => {
        const currentIndex = webpImages.indexOf(currentItem);
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = webpImages.length - 1;
        if (newIndex >= webpImages.length) newIndex = 0;
        setCurrentItem(webpImages[newIndex]);
    };

    const Modal = () => {
        if (!currentItem) return null;

        return (
            <div
                className={`${styles.modal} ${
                    modalOpen ? styles.modalOpen : ""
                }`}
                onClick={closeModal}
            >
                <div className={styles.modalContent}>
                    <button
                        className={styles.closeButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            closeModal();
                        }}
                    >
                        &times;
                    </button>
                    <button
                        className={styles.navButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage(-1);
                        }}
                    >
                        &lt;
                    </button>
                    <Image
                        src={`/photos/${currentItem}`}
                        alt={currentItem}
                        width={1000}
                        height={1600}
                        layout="responsive"
                        onClick={(e) => e.stopPropagation()}
                        className={styles.modalImage}
                    />
                    <button
                        className={styles.navButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage(1);
                        }}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.masonry}>
            <Masonry
                items={webpImages}
                config={{
                    columns: [1, 2, 3],
                    gap: [24, 12, 6],
                    media: [640, 768, 1024],
                }}
                render={(item, index) => (
                    <div onClick={() => openModal(item)} key={index}>
                        <Image
                            src={`/photos/${item}`}
                            alt={item}
                            width={1000}
                            height={1600}
                            layout="responsive"
                            loading="lazy"
                        />
                    </div>
                )}
            />
            <Modal />
        </div>
    );
};

export default Page;
