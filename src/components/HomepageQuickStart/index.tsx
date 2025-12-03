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
                            Install using Docker/Podman
                            <CodeBlock language="bash" className={styles.alignLeft}>
                                {`docker run --name coupler 
  --mount type=bind,source=/opt/coupler,target=/.coupler 
  -p 8090:8086 
  -ti radekpakula/coupler:latest 
`}
                            </CodeBlock>
                            <Link
                                className="button button--lg green-invert-btn"
                                to="/docs/installation/container">
                                Docker/Podman installation
                            </Link>
                        </div>


                        <div className={styles.codeBlock} style={{marginLeft: 40}}>
                            Install in Standalone Mode (JAR)
                            <CodeBlock language="bash" className={styles.alignLeft}>
                                {`java -jar coupler.jar -DworkingDir=/path/to/config    
                                
                                
                                    `}
                            </CodeBlock>
                            <Link
                                className="button button--lg green-invert-btn"
                                to="/docs/installation/standalone">
                                Standalone installation
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </section>


    );
}
