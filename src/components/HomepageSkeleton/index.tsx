import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function HomepageSkeleton(): ReactNode {
    return (
        <div className={styles.developerCallout}>
            <div>
                <h3>Build tools for your environment</h3>
                <p>
                    Custom Java plugins expose environment-specific tools and workflows through
                    the same interface. Build it once. Install it alongside your other PacOS tools.
                </p>
            </div>
            <Link className={styles.textLink} to="/docs/developers/plugins/skeleton">
                Start with the skeleton project &rarr;
            </Link>
        </div>
    );
}
