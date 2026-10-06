import type {ReactNode} from 'react';
import styles from '@site/src/pages/index.module.css';

const teams = [
    {
        name: 'Developers',
        description: 'Inspect files, logs and services without switching between infrastructure tools.',
    },
    {
        name: 'QA & Testers',
        description: 'Mocks, test resources and shared environment state.',
    },
    {
        name: 'Support',
        description: 'Application diagnostics without direct server access.',
    },
    {
        name: 'Enterprise teams',
        description: 'Controlled access to operational resources.',
    },
];

export default function HomepageTeams(): ReactNode {
    return (
        <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="teams-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Built for teams</p>
                    <h2 id="teams-title">Different roles. The same environment.</h2>
                </div>
                <div className={styles.teamGrid}>
                    {teams.map(({name, description}) => (
                        <article key={name}>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
