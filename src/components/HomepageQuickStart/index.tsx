import React, {ReactNode} from 'react';
import styles from './styles.module.css';
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from "@docusaurus/Link";

export default function HomepageQuickStart(): ReactNode {
    return (

        <section className={styles.features}>
            <div className="container text--center">


                <div className="row">
                    <div className={clsx('col feature-border')}>
                        <h1 className={styles.center}>Quick start</h1>
                        <div className={styles.codeBlock}>
                            Run PacOS in seconds using Docker or Podman
                            <CodeBlock language="bash" className={styles.alignLeft}>
                                {`docker run --name webos 
  --mount type=bind,source=/opt/pacos,target=/.pacos 
  -p 8090:8086 
  -ti pacosdev/webos:latest 
`}
                            </CodeBlock>
                            <Link
                                aria-label="Go to Docker/Podman installation guide"
                                className="button button--lg green-invert-btn"
                                to="/docs/user/installation/container">
                                Docker/Podman installation
                            </Link>
                        </div>


                        <div className={styles.codeBlock} style={{marginLeft: 40}}>
                            Run in Standalone Mode (JAR)
                            <CodeBlock language="bash" className={styles.alignLeft}>
                                {`java -jar pacos.jar -DworkingDir=/path/to/config    
                                
                                
                                    `}
                            </CodeBlock>
                            <Link
                                aria-label="Go to Standalone mode installation guide"
                                className="button button--lg green-invert-btn"
                                to="/docs/user/installation/standalone">
                                Standalone installation
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </section>


    );
}
