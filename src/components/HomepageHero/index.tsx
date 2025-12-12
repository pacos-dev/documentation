import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.css';

export default function HomepageHero() {

    return (
        <section className="feature-border">
            <div className="container text--center" style={{padding: 20}}>
                A unified, extensible environment for building, running and managing workflow-driven tools.
                <br/>
                Install locally or in containers, extend with plugins, and orchestrate business processes using a clean, desktop-like Web-OS interface.
            </div>
        </section>
    );
}