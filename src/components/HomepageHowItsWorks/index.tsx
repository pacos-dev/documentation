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
                        PacOS does not replace Docker, Kubernetes or infrastructure management.
                    </p>
                    <p>
                        Plugins expose your configured resources through a desktop-like web interface,
                        with access managed through PacOS permissions.
                    </p>
                    <Link className={styles.textLink} to="/docs/developers/plugins">
                        Explore the plugin architecture &rarr;
                    </Link>
                </div>
                <ol className={styles.architectureFlow} aria-label="Layers from infrastructure to team access">
                    <li><span className={styles.layerNumber}>01</span><strong>Infrastructure</strong><small>Docker / Kubernetes</small></li>
                    <li><span className={styles.layerNumber}>02</span><strong>Containers / Services</strong></li>
                    <li><span className={styles.layerNumber}>03</span><strong>Application Environment</strong></li>
                    <li className={styles.architecturePacos}><strong>PacOS</strong><small>Controlled web interface</small></li>
                    <li className={styles.architectureTeam}><strong>Developers / QA / Support</strong></li>
                </ol>
            </div>
        </section>
    );
}
