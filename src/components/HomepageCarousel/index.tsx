import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.css';

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
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    loop={true}
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
            </div>
            </section>

    );
}