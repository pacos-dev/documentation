import type {ReactNode} from 'react';
import styles from './styles.module.css';


export default function HomepageAbout(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row feature-border">
                    <div className={styles.content}>
                        <h1 className={styles.center}>Why Coupler?</h1>
                        <ul>
                            <li>Coupler OS brings all your tools, data, and workflows together in one seamless
                                workspace.
                                Work more efficiently by automating repetitive tasks and integrating your environment
                                instantly.
                            </li>
                            <li>Its modular design allows you to extend functionality as your team grows, while the
                                OS-like
                                interface keeps everything intuitive and easy to use.
                            </li>
                            <li>Focus on building value, not juggling apps — Coupler OS keeps your development and
                                testing
                                workflow streamlined, connected, and under control.
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
