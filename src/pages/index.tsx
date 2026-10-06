import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageOverview from '@site/src/components/HomepageOverview';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSharedEnvironment from '@site/src/components/HomepageSharedEnvironment';
import HomepagePlugins from '@site/src/components/HompeagePlugins';
import HomepageTeams from '@site/src/components/HomepageTeams';
import HomepageHowItsWorks from '@site/src/components/HomepageHowItsWorks';
import HomepageQuickStart from '@site/src/components/HomepageQuickStart';
import HomepageOpenAndFree from '@site/src/components/HomepageOpenAndFree';
import styles from './index.module.css';

const title = 'PacOS — Enterprise Control Plane for Application Environments';

export default function Home(): ReactNode {
    return (
        <Layout
            title={title}
            description="PacOS provides a unified web interface for files, logs, APIs, mocks, services and tools across complex containerized application environments.">
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title}/>
                <meta
                    name="keywords"
                    content="PacOS, application environment, developer tools, QA tools, test environment, containerized applications, application management, logs, files, mocks, APIs, enterprise developer platform"
                />
            </Head>
            <main className={styles.home}>
                <HomepageHero/>
                <HomepageOverview/>
                <HomepageFeatures/>
                <HomepageSharedEnvironment/>
                <HomepagePlugins/>
                <HomepageTeams/>
                <HomepageHowItsWorks/>
                <HomepageQuickStart/>
                <HomepageOpenAndFree/>
            </main>
        </Layout>
    );
}
