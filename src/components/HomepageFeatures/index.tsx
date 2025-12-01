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
    title: 'Web-OS for Your Business',
    image: '/img/feature1.png',
    description: (
      <>
          Coupler brings together tools, processes, and automation inside a
          desktop-like environment designed for engineering teams..
      </>
    ),
  },
  {
    title: 'Modularity',
    image: '/img/feature2.png',
    description: (
      <>
          Install modules like apps. Extend Coupler with your own tools or
          integrate existing ones through a simple plugin model.
      </>
    ),
  },
  {
    title: 'Interface',
    image: '/img/feature3.png',
    description: (
      <>
          Work in windows, switch between modules, and manage multiple tasks
          at once — all inside a flexible, desktop-style UI..
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
