import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

export default function HomepageSharedEnvironment(): ReactNode {
    const screenshotUrl = useBaseUrl('/img/screens/mock.jpg');

    return (
        <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="shared-title">
            <div className={`${styles.container} ${styles.split}`}>
                <div>
                    <p className={styles.eyebrow}>Built for shared environments</p>
                    <h2 id="shared-title">One environment.<br/>One shared state.</h2>
                    <p>
                        PacOS lets teams interact with shared application resources and test state
                        through a single interface. Not separate copies of the same setup.
                    </p>
                    <ol className={styles.sharedFlow}>
                        <li><strong>A tester changes a mock</strong><span>Configure a response in MockServer.</span></li>
                        <li><strong>The shared environment changes</strong><span>The mock state is shared across active sessions.</span></li>
                        <li><strong>A developer sees the same state</strong><span>Investigate and test against the same resources.</span></li>
                    </ol>
                </div>
                <figure className={styles.productFigure}>
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
            </div>
        </section>
    );
}
