import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Files & Resources',
        image: '/img/feature2.png',
        description: (
            <>
                Browse, search, upload, download, pack and unpack files
                from your application environments through a web interface.
            </>
        ),
    },
    {
        title: 'Logs & Diagnostics',
        image: '/img/feature1.png',
        description: (
            <>
                Inspect large log files and application data without
                requiring direct access to servers or containers.
            </>
        ),
    },
    {
        title: 'Shared Test Environments',
        image: '/img/feature3.png',
        description: (
            <>
                Manage shared mocks, test resources and development tools
                interactively across multiple users and sessions.
            </>
        ),
    },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col feature-border')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
