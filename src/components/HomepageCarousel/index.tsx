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
            caption: 'The Application button in the top bar provides quick access to all installed modules. Click to launch any plugin directly, giving a familiar OS-like experience.',
        },
        {
            src: '/img/screens/coupler-plugin-management.png',
            caption: 'Plugin Management lets users view, configure, and remove installed plugins safely. Each plugin runs in its own context and can be managed without restarting.',
        },
        {
            src: '/img/screens/coupler-marketplace.png',
            caption: 'The App Store is the central hub to discover and install plugins. Browse available modules and extend PacOS instantly with a single click.',
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
        <section className="feature-border">
            <div className="container text--center">
                <div className={clsx('col')}>
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
                                        delay: 5000,
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