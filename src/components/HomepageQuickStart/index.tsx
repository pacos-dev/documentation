import type {ReactNode} from 'react';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function HomepageQuickStart(): ReactNode {
    return (
        <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="quickstart-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Quick start</p>
                    <h2 id="quickstart-title">Bring your environment into view.</h2>
                    <p>Try PacOS locally, then configure the resources and access your team needs.</p>
                </div>
                <div className={styles.quickStart}>
                    <div>
                        <p className={styles.eyebrow}>Try PacOS</p>
                        <h3>Docker &middot; Quick local trial</h3>
                        <CodeBlock language="bash">
                            {`docker run --name webos \\
  -e JAVA_OPTS="-Djava.rmi.server.hostname=127.0.0.1" \\
  --platform linux/amd64 \\
  -p 127.0.0.1:8086:8086 \\
  -ti pacosdev/webos:latest`}
                        </CodeBlock>
                        <p>
                            Open <Link to="http://localhost:8086">localhost:8086</Link> to complete
                            the initial setup. Local trial only, not a production deployment.
                        </p>
                        <Link className={styles.textLink} to="/docs/user/installation/container">
                            Docker / Podman installation &rarr;
                        </Link>
                    </div>
                    <div>
                        <p className={styles.eyebrow}>Deploy PacOS</p>
                        <h3>Your shared environment</h3>
                        <p>Configure persistent storage and team access with the deployment guides.</p>
                        <Link className={styles.textLink} to="/docs/user/installation/container">
                            Docker / Podman deployment &rarr;
                        </Link>
                        <h4 className={styles.standaloneHeading}>Standalone Java</h4>
                        <p>
                            Run the PacOS starter JAR with Java 21.
                        </p>
                        <CodeBlock language="bash">{'java -jar pacos-starter.jar'}</CodeBlock>
                        <Link className={styles.textLink} to="/docs/user/installation/standalone">
                            Standalone installation &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
