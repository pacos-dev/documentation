import type {ReactNode} from 'react';
import AppIcon, {type AppIconName} from '@site/src/components/HomepageAppIcon';
import styles from '@site/src/pages/index.module.css';

const resources: {name: string; icon: AppIconName}[] = [
    {name: 'Services', icon: 'services'},
    {name: 'Files', icon: 'files'},
    {name: 'Database', icon: 'database'},
    {name: 'Logs', icon: 'logs'},
    {name: 'APIs', icon: 'api'},
    {name: 'Mocks', icon: 'mocks'},
    {name: 'Test tools', icon: 'tools'},
];

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
                    <div className={styles.resourceCloud}>
                        <p className={styles.diagramLabel}>Application environment</p>
                        <ul className={styles.resources}>
                            {resources.map(({name, icon}) => <li key={name}><AppIcon name={icon}/>{name}</li>)}
                        </ul>
                    </div>
                    <span className={styles.connector} aria-hidden="true"/>
                    <div className={styles.controlPlane}>
                        <strong>PacOS</strong>
                        <span>Controlled web interface</span>
                    </div>
                    <span className={styles.connector} aria-hidden="true"/>
                    <strong className={styles.flowEnd}>Developers <span>/</span> QA <span>/</span> Support</strong>
                </div>
            </div>
        </section>
    );
}
