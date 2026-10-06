import type {ReactNode} from 'react';
import HomepageSkeleton from '@site/src/components/HomepageSkeleton';
import AppIcon, {type AppIconName} from '@site/src/components/HomepageAppIcon';
import styles from '@site/src/pages/index.module.css';

const plugins = [
    {resource: 'Files', name: 'Explorer', icon: 'files'},
    {resource: 'Logs', name: 'Glogg', icon: 'logs'},
    {resource: 'APIs', name: 'ApiNity', icon: 'api'},
    {resource: 'Mocks', name: 'MockServer', icon: 'mocks'},
    {resource: 'Databases', name: 'Database', icon: 'database'},
    {resource: 'Custom tools', name: 'Your Plugin', icon: 'tools'},
] satisfies {resource: string; name: string; icon: AppIconName}[];

export default function HomepagePlugins(): ReactNode {
    return (
        <section className={styles.section} aria-labelledby="plugins-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Adapt to your environment</p>
                    <h2 id="plugins-title">Extend PacOS for your environment.</h2>
                    <p>
                        PacOS provides the common interface. Add the tools specific to your environment.
                    </p>
                </div>
                <ul className={styles.pluginList}>
                    {plugins.map(({resource, name, icon}, index) => (
                        <li key={name} className={index === plugins.length - 1 ? styles.customPlugin : undefined}>
                            <span className={styles.appIcon}><AppIcon name={icon}/></span>
                            <strong>{name}</strong>
                            <span>{resource}</span>
                        </li>
                    ))}
                </ul>
                <HomepageSkeleton/>
            </div>
        </section>
    );
}
