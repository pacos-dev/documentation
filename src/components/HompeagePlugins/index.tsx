import type {ReactNode} from 'react';
import HomepageSkeleton from '@site/src/components/HomepageSkeleton';
import styles from '@site/src/pages/index.module.css';

const plugins = [
    {resource: 'Files', name: 'Explorer'},
    {resource: 'Logs', name: 'Glogg'},
    {resource: 'APIs', name: 'ApiNity'},
    {resource: 'Mocks', name: 'MockServer'},
    {resource: 'Databases', name: 'Database'},
    {resource: 'Custom tools', name: '+ Your Plugin'},
];

export default function HomepagePlugins(): ReactNode {
    return (
        <section className={styles.section} aria-labelledby="plugins-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Adapt to your environment</p>
                    <h2 id="plugins-title">Extend PacOS for your environment.</h2>
                    <p>
                        One interface for different operational tools. Start with existing plugins,
                        then add the tools specific to your application.
                    </p>
                </div>
                <ul className={styles.pluginList}>
                    {plugins.map(({resource, name}, index) => (
                        <li key={name} className={index === plugins.length - 1 ? styles.customPlugin : undefined}>
                            <span>{resource}</span>
                            <strong>{name}</strong>
                        </li>
                    ))}
                </ul>
                <HomepageSkeleton/>
            </div>
        </section>
    );
}
