import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

export default function HomepageHero(): ReactNode {
    const screenshotUrl = useBaseUrl('/img/laptop-screen.png');

    return (
        <header className={styles.hero}>
            <div className={`${styles.container} ${styles.heroLayout}`}>
                <div className={styles.heroCopy}>
                    <p className={styles.eyebrow}>Enterprise web control plane</p>
                    <h1>Your application environment.<br/><span>One interface.</span></h1>
                    <p>
                        Give developers, QA and support teams controlled access to files, logs,
                        APIs, mocks and services &mdash; without direct infrastructure access.
                    </p>
                    <div className={styles.actions}>
                        <Link className={styles.primaryButton} to="https://demo.pacos.dev">
                            Explore Demo
                        </Link>
                        <Link className={styles.secondaryButton} to="/docs/user/installation">
                            Get Started
                        </Link>
                    </div>
                </div>
                <figure className={styles.productFigure}>
                    <Link to="https://demo.pacos.dev" aria-label="Explore the live PacOS demo">
                        <img
                            className={styles.productImageNoFrame}
                            src={screenshotUrl}
                            alt="Real PacOS desktop with Explorer, logs, database and MockServer application windows"
                            width={1260}
                            height={756}
                            fetchPriority="high"
                        />
                    </Link>
                    <figcaption>
                        Real PacOS UI. Explore it in the live demo &rarr;
                    </figcaption>
                </figure>
            </div>
        </header>
    );
}
