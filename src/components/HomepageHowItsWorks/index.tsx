import type {ReactNode} from 'react';
import styles from './styles.module.css';
import clsx from "clsx";


export default function HomepageHowItsWorks(): ReactNode {
    return (

        <section className={styles.features}>
            <div className="container text--center">
                <div className="row">
                    <div className={clsx('col feature-border')}>
                        <div className="text--center">
                            <h1 className={styles.center}>How it Works</h1>
                            <p>
                                Coupler provides a modular, windowed Web-OS environment where each tool runs independently.
                                Configure workflows, automation tasks, and plugins locally, then seamlessly transfer them to a server.
                            </p>
                            <ul className={styles.listLeft}>
                                <li>Run locally or in shared server mode for team-wide collaboration.</li>
                                <li>All automation workflows and plugin configurations can be transferred to a server effortlessly.</li>
                                <li>Local work or automation created on one machine runs seamlessly on the server environment.</li>
                                <li>Fully scalable — supports multiple users, permissions, and shared resources without conflicts.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={clsx('col feature-border')}>
                        <div className="text--center">
                            <h1 className={styles.center}>Why Coupler?</h1>
                            A flexible platform built for teams who automate, integrate, and streamline work.
                            <br/><br/>
                            <ul className={styles.listLeft}>
                                <li>Modular Web-OS where tools run as independent windowed apps.</li>
                                <li>Unified workspace instead of a scattered toolchain.</li>
                                <li>Quickly automate workflows using the built-in BPMN editor and automation engine.</li>
                                <li>Extend functionality with plugins or custom modules via Marketplace.</li>
                                <li>Fully extensible: any Java developer can write their own extension based on the provided skeleton project and install it on-the-fly.</li>
                                <li>Works locally or in shared server mode for team-wide collaboration.</li>
                                <li>Free to use in both personal and business projects (with licensing restrictions).</li>
                            </ul>
                            This makes it easy to bundle multiple tools into one consistent experience, instead of
                            separate
                            services, UIs, and deployments.
                        </div>
                    </div>

                </div>
            </div>
        </section>


    );
}
