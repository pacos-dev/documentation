import type {ReactNode} from 'react';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";


export default function HomepageOverview(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className={styles.centerCol}>
                        <h1>
                            See Coupler in action!
                        </h1>
                        <div>
                            <Link
                                className="button button--lg green-btn"
                                to="https://demo.coupler.best">
                                GO TO DEMO
                            </Link>
                        </div>
                    </div>

                    <div className={styles.perspective}>
                        <img src="/img/perspective.png" className={styles.featureSvg} alt="perspective"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
