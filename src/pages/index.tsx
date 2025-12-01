import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
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
                <img src="/img/logo.png" alt="Coupler OS Logo" className="logo center"/>
                <p className="hero__subtitle center">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
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
    );
}
