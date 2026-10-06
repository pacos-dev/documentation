import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function HomepageOpenAndFree(): ReactNode {
    return (
        <section className={`${styles.section} ${styles.closing}`} aria-labelledby="documentation-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Take the next step</p>
                    <h2 id="documentation-title">See the product. Then make it yours.</h2>
                    <p>
                        Explore the live demo, or read the documentation to install PacOS,
                        configure your environment and build your own tools.
                    </p>
                    <div className={styles.actions}>
                        <Link className={styles.primaryButton} to="https://demo.pacos.dev">Explore Demo</Link>
                        <Link className={styles.secondaryButton} to="/docs/user">Read Documentation</Link>
                    </div>
                </div>
                <p className={styles.licenseNote}>
                    Free for personal and commercial use. Redistribution and resale are restricted.
                    {' '}<Link className={styles.textLink} to="/docs/license">Read the license</Link>
                    {' '}&middot;{' '}
                    <Link className={styles.textLink} to="https://github.com/pacos-dev/pacos">View source</Link>
                </p>
            </div>
        </section>
    );
}
