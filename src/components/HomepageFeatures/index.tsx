import {useRef, useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import HomepageCarousel from '@site/src/components/HomepageCarousel';
import AppIcon, {type AppIconName} from '@site/src/components/HomepageAppIcon';
import styles from '@site/src/pages/index.module.css';

const capabilities = [
    {
        title: 'Files',
        icon: 'files',
        application: 'Explorer',
        preview: 0,
        description: 'Browse and manage application files from the browser.',
    },
    {
        title: 'Logs',
        icon: 'logs',
        application: 'Glogg',
        preview: 1,
        description: 'Inspect and search application logs without server access.',
    },
    {
        title: 'APIs & Services',
        icon: 'api',
        application: 'ApiNity',
        preview: 2,
        description: 'Interact with application APIs and services from one interface.',
    },
    {
        title: 'Database',
        icon: 'database',
        application: 'Database',
        preview: 4,
        description: 'Browse schemas, inspect tables and run queries.',
    },
    {
        title: 'Shared Test Environments',
        icon: 'mocks',
        application: 'MockServer',
        preview: 3,
        description: 'Manage shared mocks and test resources with your team.',
    },
    {
        title: 'Tools',
        icon: 'tools',
        application: 'Your plugins',
        preview: null,
        description: 'Open environment-specific tools alongside your resources.',
    },
] satisfies {title: string; icon: AppIconName; application: string; preview: number | null; description: string}[];

export default function HomepageFeatures(): ReactNode {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const previewRef = useRef<HTMLDivElement>(null);
    return (
        <section className={styles.section} aria-labelledby="capabilities-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>What you can do</p>
                    <h2 id="capabilities-title">Everything your team needs.</h2>
                    <p>Work with the resources behind your application, not the infrastructure behind them.</p>
                </div>
                <div className={styles.capabilities}>
                    {capabilities.map(({title, description, icon, application, preview}) => (
                        <article key={title} className={styles.capability}
                                 data-active={preview === selectedIndex ? 'true' : undefined}>
                            <div className={styles.capabilityHeading}>
                                <span className={styles.appIcon}><AppIcon name={icon}/></span>
                                <h3>{title}</h3>
                            </div>
                            <p>{description}</p>
                            {preview === null
                                ? <Link className={styles.appLink} to="/docs/developers/plugins">{application} &rarr;</Link>
                                : <button type="button" className={styles.appLink}
                                          aria-controls="tool-preview"
                                          aria-pressed={preview === selectedIndex}
                                          onClick={() => {
                                              setSelectedIndex(preview);
                                              previewRef.current?.querySelector<HTMLButtonElement>(`#tool-tab-${preview}`)
                                                  ?.focus({preventScroll: true});
                                              previewRef.current?.scrollIntoView({
                                                  block: 'start',
                                                  behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                                                      ? 'auto' : 'smooth',
                                              });
                                          }}>
                                    Open {application} <span aria-hidden="true">&rarr;</span>
                                </button>}
                        </article>
                    ))}
                </div>
                <div ref={previewRef} className={styles.previewAnchor}>
                    <HomepageCarousel selectedIndex={selectedIndex} onSelect={setSelectedIndex}/>
                </div>
            </div>
        </section>
    );
}
