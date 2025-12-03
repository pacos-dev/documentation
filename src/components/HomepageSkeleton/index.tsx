import React, {ReactNode} from 'react';
import styles from './styles.module.css';
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from "@docusaurus/Link";

export default function HomepageSkeleton(): ReactNode {
    return (

        <section className={styles.features}>
            <div className="container text--center">


                <div className="row">
                    <div className={clsx('col feature-border')}>
                        <h1 className={styles.center}>Extensible by Any Java Developer</h1>
                        <div>
                            Coupler can be expanded with custom modules built by any Java developer, allowing teams to add exactly the tools they need in their environment.
                            Whether it’s Kafka utilities, AI-powered helpers, domain-specific business operations, or entirely new developer tools — Coupler adapts to your stack instead of the other way around.

                            Coupler provides a ready-to-use skeleton project that is always compatible with the latest release.
                            It includes examples for building modal windows, APIs, permissions, UI components, and background services — giving developers everything needed to create powerful extensions that install instantly and run like native modules.
                            <Link
                                aria-label="Go to skeleton project"
                                className="button button--lg green-invert-btn"
                                to="https://bitbucket.org/radekpakula/coupler-skeleton-app">
                                Skeleton project source code
                            </Link>
                        </div>



                    </div>

                </div>


            </div>
        </section>


    );
}
