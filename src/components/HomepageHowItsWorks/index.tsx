import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function HomepageHowItsWorks(): ReactNode {
    return (
        <section className={styles.section} aria-labelledby="architecture-title">
            <div className={`${styles.container} ${styles.split}`}>
                <div>
                    <p className={styles.eyebrow}>How it works</p>
                    <h2 id="architecture-title">Above your application environment. Not instead of your infrastructure.</h2>
                    <p>
                        Keep Docker, Kubernetes and your existing infrastructure and monitoring tools.
                        PacOS adds a user-facing layer for working with application resources;
                        it does not replace your orchestration or infrastructure management.
                    </p>
                    <p>
                        Run PacOS locally or as a shared server. Plugins expose the resources you
                        configure through a desktop-like web interface, with access managed through
                        PacOS permissions.
                    </p>
                    <Link className={styles.textLink} to="/docs/developers/plugins">
                        Explore the plugin architecture &rarr;
                    </Link>
                </div>
                <ol className={styles.architectureFlow} aria-label="Layers from infrastructure to team access">
                    <li>Infrastructure</li>
                    <li>Containers / Services</li>
                    <li>Application Environment</li>
                    <li className={styles.architecturePacos}>PacOS / Controlled web interface</li>
                    <li>Developers / QA / Support</li>
                </ol>
            </div>
        </section>
    );
}
