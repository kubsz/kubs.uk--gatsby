import React from 'react';

import Layout from '../components/Layout';

import squat from '../assets/images/me2.jpg';

import personal from '../data/personal';
import config from '../../config';
import WebsiteCard from '../components/WebsiteCard';

const IndexPage = () => {
  let sites = personal.filter(el => el.showOnIndex == true);
  console.log(personal);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            <span className="icon fas fa-magic"></span>
          </div>
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
        </div>
      </section>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a className="image">
              <img src={squat} alt="Kubs K headshot" />
            </a>
            <div className="content">
              <h2 className="major">A little bit about me</h2>
              <p>
                I have a profound passion for web development, specialising in{' '}
                <strong>react.js</strong>, <strong>UI</strong>/
                <strong>UX</strong> principles &{' '}
                <strong>SEO optimization</strong>. Dismissing the boring nerdy
                stuff, I also love music, travelling, and lifting weights! Get
                in touch with me at <a href="mailto:me@kubs.uk">me@kubs.uk</a>.
              </p>
              <a href="/my-work" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">My Work</h2>
            <p>
              Below you can find my favorite pieces of that I have created over
              the years. I have no doubt this list will expand and improve over
              time, and I am excited to see the projects I have ahead of me.
            </p>
            <section className="features">
              {sites.map(cur => (
                <WebsiteCard
                  name={cur.name}
                  url={cur.url}
                  image={cur.image}
                  description={cur.description}
                />
              ))}
            </section>
            <ul className="actions">
              <li>
                <a href="/my-work" className="button">
                  Browse All
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default IndexPage;
