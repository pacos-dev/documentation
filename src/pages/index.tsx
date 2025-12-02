import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageOverview from '@site/src/components/HomepageOverview';
import HomepageAbout from "@site/src/components/HomepageAbout";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header>
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
            <meta name="description" content="Coupler is a modular Web-OS for workflow automation." />
            <meta name="keywords" content="Coupler, Web OS, modular, workflow automation, plugins" />
        </Head>
        <Layout
            title={`${siteConfig.title}`}
            description="Coupler WEB-OS — modular Web-OS for engineering teams, automation & devtools">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <HomepageOverview/>
                <HomepageAbout/>
            </main>
        </Layout>
        </>
    );
}
