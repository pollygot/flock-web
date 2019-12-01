/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Single point of entry</>,
    imageUrl: "img/undraw_directions_x53j.svg",
    description: (
      <>
        Use your favourite RESTful library, rather than installing many
        third-party libraries.
      </>
    )
  },
  {
    title: <>Extended features</>,
    imageUrl: "img/undraw_Stability_ball_b4ia.svg",
    description: (
      <>
        Convenience functions for extending some services (for example, bulk
        sending of messages).
      </>
    )
  },
  {
    title: <>Mocks and Tests</>,
    imageUrl: "img/undraw_personal_settings_kihd.svg",
    description: (
      <>
        Mock & test responses for testing your code without triggering expensive
        services.
      </>
    )
  },
  {
    title: <>Well documented</>,
    imageUrl: "img/undraw_right_places_h9n3.svg",
    description: (
      <>Standardized interface for communicating with many services.</>
    )
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col text--center", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="All of your external systems in one easy to use RESTful API."
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container text--left">
          <h1 className="hero__title">One API, many services.</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--lg button--secondary",
                styles.getStarted
              )}
              to={useBaseUrl("docs/about")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
