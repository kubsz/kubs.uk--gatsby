import React from 'react';

import Layout from '../components/Layout';

import personal from '../data/personal';
import dantoo from '../data/dantoo';

const IndexPage = () => {
  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>My Work</h2>
            <p>View my work below.</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <h3 className="major">Personal Projects</h3>
            <p>
              Below you can find a list of some of the personal projects that I
              have worked on between 2018-{new Date().getFullYear()}, alongside
              my education which was completed in 2020.
            </p>
            <section className="features">
              {personal.map(cur => (
                <article>
                  <a target="_blank" href={cur.url} className="image">
                    <img src={cur.image} alt="HytaleGuide - Community Wiki" />
                  </a>
                  <h3 className="major">{cur.name}</h3>
                  <p>{cur.description}</p>
                  <a
                    target="_blank"
                    href="https://hytaleguide.net"
                    className="special"
                  >
                    View more
                  </a>
                </article>
              ))}
            </section>
          </div>
          <div className="inner">
            <h3 className="major">Dantoo Projects</h3>
            <p>
              Below are a compilation of projects that I have worked on from
              2020-
              {new Date().getFullYear()} during employment by Dantoo.
            </p>
            <section className="features">
              {dantoo.map(cur => (
                <article>
                  <a target="_blank" href={cur.url} className="image">
                    <img src={cur.image} alt="HytaleGuide - Community Wiki" />
                  </a>
                  <h3 className="major">{cur.name}</h3>
                  <p>{cur.description}</p>
                  <a
                    target="_blank"
                    href="https://hytaleguide.net"
                    className="special"
                  >
                    View more
                  </a>
                </article>
              ))}
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
