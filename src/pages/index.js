import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { HomepageHeros } from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero banner', styles.heroBanner)}>
      <div className="container">
        <img src='./img/logo.png' height={100} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={'Main'}
      description='Welcome to Escape Simulator'>
      <HomepageHeader />
      <main>
        <HomepageHeros />
      </main>
    </Layout>
  );
}
