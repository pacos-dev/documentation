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
                        <h3>Run with Docker</h3>
                        <CodeBlock language="bash">
                            {`docker run --name webos \\
  -e JAVA_OPTS="-Djava.rmi.server.hostname=127.0.0.1" \\
  --platform linux/amd64 \\
  -p 127.0.0.1:8086:8086 \\
  -ti pacosdev/webos:latest`}
                        </CodeBlock>
                        <p>
                            Open <Link to="http://localhost:8086">localhost:8086</Link> to complete
                            the initial setup. This command is for a local trial; see the guide
                            for persistent storage and shared deployment configuration.
                        </p>
                        <Link className={styles.textLink} to="/docs/user/installation/container">
                            Docker / Podman installation &rarr;
                        </Link>
                    </div>
                    <div>
                        <h3>Prefer a standalone application?</h3>
                        <p>
                            Run the PacOS starter JAR with Java 21.
                            The installation guide covers the download and configuration.
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
