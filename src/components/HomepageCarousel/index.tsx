import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.css';
import BrowserOnly from "@docusaurus/BrowserOnly";
import clsx from "clsx";

export default function HomepageCarousel() {
    const slides = [
        {
            src: '/img/screens/coupler-desktop.png',
            caption:
                'The Application button in the top system bar provides quick access to all installed modules in Coupler.\n' +
                'Clicking it opens a dropdown list where each module can be launched directly. This allows users to quickly ' +
                'start any plugin or tool without navigating through other menus, giving a familiar OS-like experience.',
        },
        {
            src: '/img/screens/coupler-plugin-management.png',
            caption: 'Plugin Management allows users to view, configure, and remove installed plugins.\n' +
                'Each plugin runs in its own isolated context, ensuring safe operation while giving full control over ' +
                'the workspace. Users can easily update settings, check status, or uninstall plugins without restarting ' +
                'the system.',
        },
        {
            src: '/img/screens/coupler-marketplace.png',
            caption: 'The App Store in Coupler is the central hub for discovering and installing plugins.\n' +
                'Users can browse available modules, read descriptions, and install new tools with a single click —' +
                ' instantly extending the functionality of their Coupler environment.',
        },
        {
            src: '/img/screens/coupler-explorer.png',
            caption: 'A powerful file manager that lets you browse, edit, archive, and transfer files across local and remote locations.',
        },
        {
            src: '/img/screens/coupler-logs.png',
            caption: 'A fast log viewer with real-time tailing and an integrated search engine — perfect for debugging and log analysis.',
        },
        {
            src: '/img/screens/coupler-mock.png',
            caption: 'A real-time synchronized REST & SOAP mock server. Lets you quickly create backend-free test environments shared across all active sessions.',
        },
        {
            src: '/img/screens/coupler-apinity.png',
            caption: 'A complete console for sending REST and SOAP requests. Ideal for working with integrations and testing APIs.',
        },
        {
            src: '/img/screens/coupler-variable.png',
            caption: 'A central configuration layer that allows plugins to change behavior dynamically — without reloads or configuration restarts.',
        }
    ];


    return (

        <section className={styles.features}>
            <div className="container text--center">
                <div className={clsx('col')}>
                    Explore the built-in plugins available for installation right after launching Coupler.
                    Each plugin opens as a separate window in your Web-OS workspace — just like apps in a traditional
                    operating system.
                    <div className={styles.wrapper}>
                        <BrowserOnly>
                            {() => (
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation
                                    pagination={{clickable: true}}
                                    autoplay={{
                                        delay: 8000,
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
                </div>
            </div>
        </section>

    );
}