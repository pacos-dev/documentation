import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageOverview from '@site/src/components/HomepageOverview';
import HomepageHowItsWorks from "@site/src/components/HomepageHowItsWorks";
import HomepageCarousel from "@site/src/components/HomepageCarousel";
import HomepageHero from "@site/src/components/HomepageHero";
import HomepageOpenAndFree from "@site/src/components/HomepageOpenAndFree";
import HomepageQuickStart from "@site/src/components/HomepageQuickStart";
import styles from './index.module.css';
import HomepageSkeleton from "@site/src/components/HomepageSkeleton";
import HomepagePlugins from "@site/src/components/HompeagePlugins";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <section className="feature-border">
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerContainer}>

                            <img src="/img/logo2.png" alt="PacOS Logo" width="300px"/>

                        <div style={{lineHeight: "30px", marginLeft: "20px", textAlign: "center"}}>
                            <p className="hero__subtitle"> An application that connects your tools, data, and workflows
                                in one unified workspace</p>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            <Head>
                <meta name="description" content="PacOS is a modular Web-OS for workflow automation."/>
                <meta name="keywords" content="PacOS, Web OS, modular, workflow automation, plugins"/>
            </Head>
            <Layout
                title={`${siteConfig.title}`}
                description="PacOS — modular Web-OS for engineering teams, automation & devtools">
                <HomepageHeader/>
                <main>
                    <HomepageOverview/>
                    <HomepageHero/>
                    <HomepageFeatures/>


                    <HomepageHowItsWorks/>
                    <HomepagePlugins/>
                    <HomepageCarousel/>
                    <HomepageQuickStart/>
                    <HomepageOpenAndFree/>
                    <HomepageSkeleton/>

                </main>
            </Layout>
        </>
    );
}
