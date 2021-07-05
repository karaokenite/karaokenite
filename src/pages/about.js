import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GithubLogo } from '../components/GithubLogo';

const Info = ({ title, children }) => {
  return (
    <article>
      <h2 className="page-subtitle">{title}</h2>
      <p>{children}</p>
    </article>
  );
};

export function About() {
  return (
    <div>
      <style jsx global>{`
        :root {
          --color-link-underline: var(--color-pink-well);
        }

        .fancyLine {
          border-bottom: 5px solid var(--color-deep-blue-something);
          border-radius: 10px;
          width: 30%;
          margin: 0 auto var(--page-padding);
        }

        h1 {
          color: var(--color-deep-blue-something);
          font-size: 2.8em;
          text-align: center;
          font-weight: var(--weight-heavy);
        }

        .description {
          text-align: center;
          color: var(--color-frozen-blueberry);
          font-size: var(--font-size-md);
        }
      `}</style>

      <GithubLogo />
      <Header />

      <main className="layout layout__small layout-grid">
        <section className="layout-grid">
          <article>
            <h1 className="page-title">
              Karaoke Nite is a social app. Our north star is to create the
              next-gen <span className="orange">h</span>
              <span className="pink__light">o</span>
              <span className="pink">u</span>
              <span className="pink__dark">s</span>
              <span className="green">e</span> <span className="orange">p</span>
              <span className="yellow__light">a</span>
              <span className="green__light">r</span>
              <span className="teal">t</span>
              <span className="pink">y</span>.
            </h1>

            <hr className="fancyLine" />

            <p className="description">
              At Karaoke Nite, we believe that singing with friends is way more
              fun than humming by yourself, in the shower or on a mobile app.
            </p>

            <p className="description">
              Whether you are getting silly together because of a birthday or
              heartbreak, happy hour or a casual hang, we are here to help you
              have a good time.
            </p>
          </article>

          <Info title="Beta v0.1.3">
            <p>We are a small team of friends based in Brooklyn, NY.</p>
            <p>
              This is currently a Beta version of the app. We have a ton of
              features and goodies coming soon so stay tuned. In the meantime,
              please help us make the experience better by answering a quick{' '}
              <a
                className="link"
                href="https://karaokenite.typeform.com/to/SaHxnvyT"
                target="_blank"
              >
                feedback survey
              </a>
              .
            </p>
            <p>
              Karaoke Nite is also open-sourced. If you are a programmer,
              designer, 3d modeler, or game artist, you can find the project on
              our{' '}
              <a
                className="link"
                href="https://github.com/karaokenite"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
          </Info>

          <Info title="Record Labels & Artists">
            <p>
              If you are a indie record label or band/artist that's interested
              in having your music videos or lyric videos be featured in the
              app, please let us know via{' '}
              <a className="link" href="mailto: sonnynomnom@gmail.com">
                email
              </a>
              .
            </p>
          </Info>

          <Info title="Legal">
            <p>
              The Beta was soft launched in Q4 2020 with 50 karaoke soundtracks
              featured in the app. All soundtracks have been lawfully purchased
              (proof of purchase can be requested). If people enjoy the app and
              want to see it continue to grow, we will work with a copyright
              lawyer to purchase more licenses and add music videos to our
              collection.
            </p>

            <p>
              Privacy Policy can be found{' '}
              <a
                className="link"
                href="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FPrivacy%20Policy%20v1.pdf?v=1616300368184"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </Info>
        </section>
        <section>
          <blockquote>
            "Karaoke is probably the only correct use case for VR." Jenn
            Schiffer, Glitch
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
