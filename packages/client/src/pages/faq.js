import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GithubLogo } from '../components/GithubLogo';

export function FAQ() {
  return (
    <div>
      <style jsx global>{`
        :root {
          --color-link-underline: var(--color-moray-teal);
        }

        .container__md > * {
          margin-bottom: 2rem;
        }

        .collapsible {
          background-color: var(--color-dirty-linen);
          color: var(--color-industry);
          padding: 18px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          font-size: var(--font-size-md);
          font-family: var(--font-brand);
          font-weight: var(--weight-title);
          border-radius: 10px;
        }

        .collapsible:hover {
          cursor: pointer;
        }

        .active,
        .collapsible:hover {
          background-color: var(--color-old-laundry);
        }

        .content {
          padding: 1rem;
          display: none;
          overflow: hidden;
          background-color: var(--color-cloud-nine);
        }

        .collapsible:after {
          color: var(--color-linen);
          font-weight: var(--weight-heavy);
          float: right;
          margin-left: 5px;
        }

        .collapsible.active:after {
        }
      `}</style>
      <GithubLogo />
      <Header />

      <main className="layout layout__small layout-grid layout-grid__sm">
        <h1 className="page-subtitle">💬 Frequently Asked Questions</h1>
        <section className="layout-grid layout-grid__sm collapse">
          <div className="collapse-area">
            <button type="button" className="collapse-button collapsible">
              Do I need a microphone for Karaoke Nite?
            </button>

            <div className="collapse-content content">
              <p>
                While you don't need a handheld microphone for Karaoke Nite, it
                certainly makes the experience better!
              </p>

              <p>Here are some microphones that we recommend:</p>

              <ul className="list">
                <li>
                  $49.99
                  <a
                    className="link"
                    href="https://www.amazon.com/Singing-Machine-Bluetooth-Microphone-CPK545/dp/B07SLFVGSC/"
                    target="_blank"
                  >
                    Carpool Karaoke Mic
                  </a>
                </li>
                <li>
                  $16.99
                  <a
                    className="link"
                    href="https://www.amazon.com/Handheld-Microphone-Nintendo-Singing-Compatible/dp/B08K6WXR29"
                    target="_blank"
                  >
                    USB Handheld Microphone
                  </a>
                </li>
              </ul>
              <p>
                P.S. We are working on a new and innovative way to sing without
                using a professional microphone (*cough QR code and mobile),
                keep on the look out for a feature update!
              </p>
            </div>
          </div>
          <div className="collapse-area">
            <button type="button" className="collapse-button collapsible">
              How do I connect my microphone to the PC?
            </button>
            <div className="collapse-content content">
              <p>You can do this in three simple steps:</p>
              <ol className="list">
                <li>
                  Charge the microphone unit or make sure there's battery.
                </li>
                <li>
                  Plug the other end of the cable into computer USB port or AUX
                  port.
                </li>
                <li>
                  Go to audio settings on your computer and set as input device.
                </li>
              </ol>

              <p>
                <b>Please note:</b>
              </p>

              <p>
                Due to Covid-19, we discourage all users from sharing
                microphones with friends & hope everyone adopt a good microphone
                hygiene routine!
              </p>
            </div>
          </div>
          <div className="collapse-area">
            <button type="button" className="collapse-button collapsible">
              How do I hear myself through the speakers?
            </button>

            <div className="collapse-content content">
              <p>Windows users:</p>
              <ol className="list">
                <li>Click on "Spearkers" in the taskbar.</li>
                <li>
                  Click on "Sound" and make sure your microphone is set as the
                  default.
                </li>
                <li>Click on "Recording".</li>
                <li>Check the "Listen to this device" box.</li>
              </ol>

              <p>Mac users:</p>
              <ol className="list">
                <li>Open QuickTime Player.</li>
                <li>Click "File" ➡ "New Audio Recording".</li>
                <li>
                  Move the volume bar higher and higher until you can hear
                  yourself.
                </li>
              </ol>
            </div>
          </div>
          <div className="collapse-area">
            <button type="button" className="collapsible collapse-button">
              What are the new updates?
            </button>

            <div className="content collapse-content">
              <h3>v0.2 is currently in production! Scoped to launch in May.</h3>
              <h4>Release Build v0.1.3</h4>
              <ul className="list list__dense">
                <li>🆕 Added a /faq page.</li>
                <li>🏗 Updated /about page.</li>
                <li>🏗 Cleaned up the codebase in preparation of v0.2.</li>
                <li>💸 Compiled the pre-seed pitch deck.</li>
              </ul>

              <h4>Release Build v0.1.2</h4>
              <ul className="list list__dense">
                <li>🆕 Added a Privacy Policy. Thanks, Min-Kyu!</li>
                <li>🆕 Added demo video.</li>
                <li>🆕 Added release notes.</li>
                <li>🆕 Added blog posts.</li>
                <li>🏗 Removed Patreon links.</li>
                <li>🐛 Fixed the "Let's Get It On" autoplay bug.</li>
              </ul>

              <h4>Release Build v0.1.1</h4>
              <ul className="list list__dense">
                <li>
                  🆕 Added floating animation to the stars on the landing page.
                </li>
                <li>🆕 Added hover effects to anchor links.</li>
                <li>🆕 Added a /blog page.</li>
                <li>🐛 Fixed social channel links bug in the footer.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <p>
            Let us know if you have other questions
            <a className="link" href="mailto: sonnynomnom@gmail.com">
              here
            </a>
            .
          </p>
        </section>

        <script jsx>
          {`var coll = document.getElementsByClassName('collapsible');
        var i;

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
              content.style.display = 'none';
            } else {
              content.style.display = 'block';
            }
          });
        }`}
        </script>

        <div className="shoutout-embed" data-wall="karaoke_nite"></div>
        <script
          className="shoutout-script"
          src="https://embed.shoutout.so/embed.js"
          defer
        ></script>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;
