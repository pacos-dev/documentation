import type {ReactNode} from 'react';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";


export default function HomepageOverview(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className={styles.centerCol}>
                        <h1 className="see">
                            Try PacOS in action!
                        </h1>
                        <div>
                            <Link
                                className="button button--lg primary-btn"
                                to="https://demo.pacos.dev">
                                View Demo
                            </Link>
                        </div>
                    </div>


                    <div className={styles.blockScreen}>
                        <img src="/img/laptop-screen.png" alt="perspective"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
