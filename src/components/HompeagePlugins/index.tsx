import React, {ReactNode} from 'react';
import styles from './styles.module.css';
import clsx from "clsx";

export default function HomepagePlugins(): ReactNode {
    return (

        <section className={styles.features}>
            <div className="container text--center">


                <div className="row">
                    <div className={clsx('col feature-border')}>
                        <h1 className={styles.center}>Plugins</h1>
                        <div className={styles.codeBlock}>
                            Coupler Web-OS offers a rich ecosystem of plugins that extend the platform in real time.
                            Manage your files with the Explorer, monitor and search logs instantly with Glogg, test APIs
                            with ApiNity, or create mock REST and SOAP servers with MockServer — all without leaving the
                            workspace. Every plugin runs in an isolated context and is synchronized across all user
                            sessions, allowing multiple users to collaborate seamlessly while configuring or interacting
                            with the same modules. The dynamic variable system lets users adjust plugin behavior on the
                            fly, so you can customize your workspace instantly without restarting or reloading
                            configurations.

                        </div>
                    </div>

                </div>


            </div>
        </section>


    );
}
