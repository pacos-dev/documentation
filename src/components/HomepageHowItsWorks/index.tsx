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
                            <h1 className={styles.center}>How It Works</h1>
                            Coupler functions as a “Web Operating System”, where each internal tool or extension runs
                            inside
                            its own window.
                            The core engine manages:
                            <br/><br/>
                            <ul className={styles.listLeft}>
                                <li>module loading</li>
                                <li>plugin lifecycle</li>
                                <li>dependencies</li>
                                <li>orchestration</li>
                                <li>auto update</li>
                                <li>layout management</li>
                                <li>permissions (in Group Mode)</li>
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
                                <li>A single unified workspace instead of a scattered toolchain.</li>
                                <li>Ideal for DevOps, QA, automation engineers, and internal tools teams.</li>
                                <li>Extend functionality by installing plugins or adding custom modules.</li>
                                <li>Works locally or in shared server mode for team-wide collaboration.</li>
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
