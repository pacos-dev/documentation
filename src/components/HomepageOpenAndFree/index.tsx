import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.css';
import Link from "@docusaurus/Link";

export default function HomepageOpenAndFree() {

    return (
        <section className="feature-border">
            <div className="container text--center">
                <div className="row" style={{padding: 40}}>
                    <h2 className={styles.widthFull}>Open & Free to Use</h2>
                    <p className={styles.center}>
                        PacOS is free to use in both personal and commercial environments.
                        The platform is transparent and publicly accessible — but cannot be resold or repackaged as a
                        paid
                        product.
                    </p>

                    <br/>

                    <ul className={styles.listLeft}>
                        <li>Free for personal and business use without usage limits.</li>
                        <li>Source code is publicly available for inspection and learning.</li>
                        <li>Not open-source for redistribution — selling or repackaging is prohibited.</li>
                        <li>Ideal for organizations that want a transparent platform without vendor lock-in.</li>
                    </ul>

                    <br/>

                    <div className={styles.widthFull}>
                        <Link
                            className="button button--lg primary-btn"
                            to="https://github.com/pacos-dev/pacos">
                            View Code
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}