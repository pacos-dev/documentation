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
function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={styles.header}>
            <div className="container">
                <img src="/img/logo.png" alt="Coupler WEB-OS Logo" className="logo center"/>
                <p className="hero__subtitle center">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            <Head>
                <meta name="description" content="Coupler is a modular Web-OS for workflow automation."/>
                <meta name="keywords" content="Coupler, Web OS, modular, workflow automation, plugins"/>
            </Head>
            <Layout
                title={`${siteConfig.title}`}
                description="Coupler WEB-OS — modular Web-OS for engineering teams, automation & devtools">
                <HomepageHeader/>
                <main>

                    <HomepageFeatures/>
                    <HomepageHero/>
                    <HomepageOverview/>
                    <HomepageHowItsWorks/>
                    <HomepageCarousel/>
                    <HomepageQuickStart/>
                    <HomepageOpenAndFree/>
                    <HomepageSkeleton/>

                </main>
            </Layout>
        </>
    );
}
