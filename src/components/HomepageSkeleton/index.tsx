import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function HomepageSkeleton(): ReactNode {
    return (
        <div className={styles.developerCallout}>
            <p>
                Build a plugin in Java with the ready-to-use skeleton project.
                Bring your own APIs, UI and application-specific operations into PacOS.
            </p>
            <Link className={styles.textLink} to="/docs/developers/plugins/skeleton">
                Build your plugin &rarr;
            </Link>
        </div>
    );
}
