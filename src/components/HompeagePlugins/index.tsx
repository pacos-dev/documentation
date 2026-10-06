import React, {ReactNode} from 'react';
import styles from './styles.module.css';
import clsx from "clsx";

export default function HomepagePlugins(): ReactNode {
    return (

        <section className={styles.features}>
            <div className="container text--center">


                <div className="row">
                    <div className={clsx('col feature-border')}>
                        <h1 className={styles.center}>Extend PacOS with plugins</h1>
                        <div className={styles.codeBlock} >
                            <p>
                                PacOS is designed to adapt to the environment around it.
                                Plugins turn application infrastructure and development tools
                                into accessible web interfaces.
                            </p>
                            <ul className={styles.listLeft} style={{ listStyle: 'none', textAlign: 'left', marginLeft: '10%' }}>
                                <li><strong>Explorer</strong> — browse and manage files.</li>
                                <li><strong>Glogg</strong> — inspect and search large log files.</li>
                                <li><strong>ApiNity</strong> — work with APIs.</li>
                                <li><strong>MockServer</strong> — create and manage REST and SOAP mocks.</li>
                                <li><strong>Database</strong> — browse and manage all your databases.</li>
                            </ul>
                            <p>
                                Plugins run in isolated contexts and can share their configuration
                                and state across user sessions, making PacOS suitable for
                                collaborative development and testing environments.
                            </p>
                            <p>
                                Build your own plugins and integrate the tools specific to your
                                application environment.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </section>


    );
}
