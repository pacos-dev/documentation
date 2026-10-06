import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

export default function HomepageHero(): ReactNode {
    const screenshotUrl = useBaseUrl('/img/laptop-screen.png');
    const logoUrl = useBaseUrl('/img/logo.png');

    return (
        <header className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroCopy}>
                    {/*<Link className={styles.heroBrand} to="/" aria-label="PacOS home">*/}
                    {/*    <img src={logoUrl} alt="PacOS — Web-based Operating System" width={680} height={220}/>*/}
                    {/*</Link>*/}
                    <p className={styles.eyebrow}>Enterprise web control plane</p>
                    <h1>Your application environment.<br/>One interface.</h1>
                    <p>
                        PacOS gives developers, QA and support teams controlled access to the
                        resources behind complex applications.
                    </p>
                    <p>
                        Files, logs, APIs, databases, services, mocks and tools.
                        Give your team the access they need, without direct access to the infrastructure.
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
                            alt="PacOS desktop with Explorer, log viewer, API client and mock server tools in the application menu"
                            width={1884}
                            height={1052}
                            fetchPriority="high"
                        />
                    </Link>
                    <figcaption>
                        Real PacOS UI. Your application tools, accessible from the browser.
                    </figcaption>
                </figure>
            </div>
        </header>
    );
}
