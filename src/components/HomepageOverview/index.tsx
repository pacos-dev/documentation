import type {ReactNode} from 'react';
import styles from '@site/src/pages/index.module.css';

const resources = ['Service A', 'Service B', 'Database', 'Mock server', 'Logs', 'Files', 'APIs', 'Test tools'];

export default function HomepageOverview(): ReactNode {
    return (
        <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="problem-title">
            <div className={`${styles.container} ${styles.split}`}>
                <div>
                    <p className={styles.eyebrow}>The problem</p>
                    <h2 id="problem-title">Modern applications are not one application.</h2>
                    <p>
                        They are services, files, databases, APIs and test resources spread across
                        an environment. Working with them often means switching tools or asking for
                        server and container access.
                    </p>
                    <p>
                        PacOS puts the resources your team works with behind one controlled web
                        interface. Your infrastructure stays where it is.
                    </p>
                </div>
                <div className={styles.flow} role="group" aria-label="Application resources exposed through PacOS to one controlled web interface">
                    <ul className={styles.resources}>
                        {resources.map(resource => <li key={resource}>{resource}</li>)}
                    </ul>
                    <span className={styles.connector} aria-hidden="true"/>
                    <div className={styles.controlPlane}>
                        <strong>PacOS</strong>
                        <span>Application resources, made accessible</span>
                    </div>
                    <span className={styles.connector} aria-hidden="true"/>
                    <strong className={styles.flowEnd}>One controlled web interface</strong>
                </div>
            </div>
        </section>
    );
}
