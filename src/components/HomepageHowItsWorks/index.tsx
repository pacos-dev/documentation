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
                            <h1 className={styles.center}>How it works</h1>
                            <p>
                                PacOS connects to the services and resources that make up your
                                application environment and exposes them through a controlled
                                web interface.
                            </p>
                            <ul className={styles.listLeft}>
                                <li>
                                    Connect PacOS to your containerized application environment.
                                </li>
                                <li>
                                    Expose files, logs, APIs, services and test tools through plugins.
                                </li>
                                <li>
                                    Give users access to resources without giving them direct
                                    infrastructure access.
                                </li>
                                <li>
                                    Share configuration and state across team members.
                                </li>
                                <li>
                                    Run PacOS locally or as a shared server environment.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={clsx('col feature-border')}>
                        <div className="text--center">
                            <h1 className={styles.center}>Built for teams</h1>

                            <ul className={styles.listLeft}>
                                <li>
                                    <strong>Developers</strong> — inspect files, logs and services
                                    without switching between infrastructure tools.
                                </li>
                                <li>
                                    <strong>QA & Testers</strong> — manage mocks and shared test
                                    resources interactively.
                                </li>
                                <li>
                                    <strong>Support teams</strong> — investigate application state
                                    without direct server access.
                                </li>
                                <li>
                                    <strong>Enterprise teams</strong> — control access to operational
                                    resources through a single interface.
                                </li>
                            </ul>

                            <p>
                                Extend PacOS with plugins and custom modules whenever your environment
                                requires additional tools.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    );
}
