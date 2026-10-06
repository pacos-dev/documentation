import type {ReactNode} from 'react';
import HomepageCarousel from '@site/src/components/HomepageCarousel';
import styles from '@site/src/pages/index.module.css';

const capabilities = [
    {
        title: 'Files',
        description: 'Browse, search, upload, download, pack and unpack files through the browser.',
    },
    {
        title: 'Logs',
        description: 'Inspect large log files and application data without direct server or container access.',
    },
    {
        title: 'APIs & Services',
        description: 'Interact with application APIs and services from one interface.',
    },
    {
        title: 'Database',
        description: 'Connect to any database to browse schemas, inspect tables and run queries from PacOS.',
    },
    {
        title: 'Shared Test Environments',
        description: 'Manage shared mocks, test resources and environment state with your team.',
    },
    {
        title: 'Tools',
        description: 'Expose application-specific tools through plugins, alongside the resources they work with.',
    },
];

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.section} aria-labelledby="capabilities-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>What you can do</p>
                    <h2 id="capabilities-title">Everything your team needs.</h2>
                    <p>Work with the resources behind your application, not the infrastructure behind them.</p>
                </div>
                <div className={styles.capabilities}>
                    {capabilities.map(({title, description}) => (
                        <article key={title} className={styles.capability}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </article>
                    ))}
                </div>
                <HomepageCarousel/>
            </div>
        </section>
    );
}
