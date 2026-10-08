import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

export default function HomepageSharedEnvironment(): ReactNode {
    const screenshotUrl = useBaseUrl('/img/screens/desktop.jpg');

    return (
        <section className={`${styles.section} ${styles.sharedSection}`} aria-labelledby="shared-title">
            <div className={styles.container}>
                <div className={styles.sharedIntro}>
                    <p className={styles.eyebrow}>Built for shared environments</p>
                    <h2 id="shared-title">One environment.<br/>One shared state.</h2>
                    <p>
                        Teams interact with the same application environment, not isolated copies of tools.
                    </p>
                </div>
                <div className={`${styles.split} ${styles.sharedLayout}`}>
                    <figure className={styles.productFigure}>
                        <div className={styles.screenshotLabel}>Mocks <span>/ MockServer</span></div>
                        <img
                            className={styles.productImage}
                            src={screenshotUrl}
                            alt="PacOS MockServer with shared mock projects and configurable responses"
                            width={1884}
                            height={1052}
                            loading="lazy"
                        />
                        <figcaption>Shared REST and SOAP mocks, managed in the browser.</figcaption>
                    </figure>
                    <ol className={styles.sharedFlow} aria-label="A mock change shared between QA and developers">
                        <li><strong>QA / Tester</strong><span>Changes a mock in MockServer</span></li>
                        <li className={styles.sharedEnvironment}><strong>Shared PacOS<br/>Environment</strong><span>One shared state</span></li>
                        <li><strong>Developer</strong><span>Sees the same state</span></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
