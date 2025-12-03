import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.css';
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function HomepageCarousel() {
    const slides = [
        {
            src: '/img/screens/coupler-desktop.png',
            caption: 'Desktop-like Web-OS interface with windowed modules',
        },
        {
            src: '/img/screens/coupler-automation.png',
            caption: 'Business process automation with BPMN editor and Camunda engine',
        },
        {
            src: '/img/screens/coupler-plugin-management.png',
            caption: 'Plugin management panel for installing and updating modules',
        },
        {
            src: '/img/screens/coupler-marketplace.png',
            caption: 'Coupler Marketplace for browsing and installing extensions',
        },
        {
            src: '/img/screens/coupler-explorer.png',
            caption: 'Built-in Explorer module for file management and navigation',
        },
        {
            src: '/img/screens/coupler-logs.png',
            caption: 'Logs viewer for real-time application and system monitoring',
        },
    ];


    return (
            <section className="shade-row">
            <div className={styles.wrapper}>
                <BrowserOnly>
                    {() => (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={styles.slide}>
                                <img src={slide.src} className={styles.image} alt={slide.caption}/>
                                <p className={styles.caption}>{slide.caption}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                        )}
                </BrowserOnly>
            </div>
            </section>

    );
}