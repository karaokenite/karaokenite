import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GithubLogo } from '../components/GithubLogo';

export function Home() {
  return (
    <div className="dark">
      <style jsx global>{`
        :root {
          --hero-height: calc(540px - var(--header-height));
          --hero-bg-height: calc(((var(--banner-height) + 10rem) / 2) + 100%);

          --banner-height: 320px;
          --color-background: var(--color-midnight);
          --color-divider: var(--color-opaque-white);
        }

        @media screen and (min-width: 768px) {
          :root {
            --banner-height: 500px;
          }
        }

        .layout__fluid {
          overflow-x: hidden;
          margin-top: calc((-1 * var(--header-height)) - 4px);
          padding-top: var(--header-height);
        }

        .header:not(.header__revealed) .navbar-toggle {
          color: var(--color-text);
        }

        .header:not(.header__revealed) .navbar-section {
          background-color: transparent;
          transition: background-color 250ms ease-in, max-height 250ms linear;
        }

        .header.header__revealed .navbar-section {
          background-color: transparent;
          transition: max-height 100ms linear;
        }

        .header:not(.header__revealed) .navbar-link__home {
          transition: opacity 200ms ease 200ms;
        }

        .header.header__expanded:not(.header__revealed) .navbar-section {
          background: var(--color-seafloor);
        }

        .header.header__expanded {
          border-bottom: 1px solid var(--color-opaque-white);
        }

        @media screen and (min-width: 768px) {
          .header:not(.header__revealed) .navbar-section {
            transition: max-height 250ms linear;
          }

          .header.header__expanded:not(.header__revealed) .navbar-section {
            background: transparent;
          }
          .header.header__expanded {
            border: none;
          }
        }

        .header__revealed {
          --color-background: var(--color-linen);
          --color-text: var(--color-midnight);
        }

        .navbar-link__home {
          opacity: 0;
        }

        .header__revealed .navbar-link__home,
        .header__expanded .navbar-link__home {
          opacity: 1;
        }

        .hero {
          padding: 0;
          position: relative;
          min-height: var(--hero-height);
          align-items: flex-start;
        }

        .hero-bg {
          overflow: hidden;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: calc(-1 * var(--header-height));
          height: var(--hero-bg-height);
          width: 100%;
          background: -moz-linear-gradient(
            176deg,
            rgba(5, 4, 34, 1) 0px,
            rgba(28, 14, 140, 1) 80%
          );
          background: -webkit-linear-gradient(
            176deg,
            rgba(5, 4, 34, 1) 0px,
            rgba(28, 14, 140, 1) 80%
          );
          background: linear-gradient(
            175deg,
            rgba(5, 4, 34, 1) 0px,
            rgba(28, 14, 140, 1) 80%
          );
          z-index: 0;
        }

        .hero-images {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .hero-imageFrame {
          position: relative;
          z-index: 0;
          display: inline-block;
        }

        .join-callout {
          position: relative;
        }
        .hero-container {
          width: 100%;
          max-width: 49rem;
          height: 100%;
          padding-top: 5rem;
          margin: 0 auto;
          right: 0px;
          left: 0px;
          position: absolute;
        }

        @media screen and (max-width: 768px) {
          .hero-container--overflow {
            height: 100%;
            position: relative;
            width: 100%;
          }
        }

        .hero-bg-img {
          position: absolute;
          z-index: 0;
          user-select: none;
        }

        .star1 {
          top: 100%;
          right: 100%;
        }

        .star2 {
          right: 100%;
          bottom: 100%;
        }

        .star3 {
          top: 115%;
          left: 80%;
        }

        .star4 {
          width: 80%;
          bottom: 45%;
          left: 15%;
          max-width: 100%;
        }

        .star5 {
          top: 100%;
          left: 165%;
        }

        .mic {
          top: 50%;
          max-width: 50%;
          right: 0%;
        }

        @media screen and (min-width: 1024px) {
          .star1 {
            top: 100%;
            right: 100%;
          }

          .star2 {
            right: 100%;
            bottom: 100%;
          }

          .star3 {
            top: 115%;
            left: 80%;
          }

          .star4 {
            left: 0;
            bottom: 100%;
            right: 15%;
            max-width: 100%;
          }

          .star5 {
            top: 100%;
            left: 165%;
          }

          .mic {
            top: 50%;
            right: 0;
          }
        }

        .hero-logo {
          width: 130%;
          left: -22px;
          position: relative;
        }

        .hero-tagline {
          display: none;
          font-size: 1.2em;
          color: var(--color-linen);
          margin-bottom: 1rem;
        }

        @media screen and (min-width: 1024px) {
          .hero-tagline {
            display: block;
          }
        }

        .hero--content {
          padding: var(--vertical-space) var(--page-padding);
        }

        @media (min-width: 68rem) {
          .hero--content {
            padding-left: 0;
            padding-right: 0;
          }
        }

        @keyframes floating {
          0% {
            transform: translate(0, 0px);
          }
          50% {
            transform: translate(0, 9px);
          }
          100% {
            transform: translate(0, -0px);
          }
        }

        .floating {
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          margin-left: 30px;
          margin-top: 5px;
        }

        .floating--short {
          animation-duration: 4s;
        }

        .floating--long {
          animation-duration: 9s;
        }

        /* Custom radio buttons to create/join a room*/

        .custom-radios-hosting-joining {
          width: 100%;
          min-height: 0;
          display: flex;
          align-items: center;
          margin: 0 0 0.5rem;
          height: 100%;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: 0;
          height: 100%;
          position: relative;
          cursor: pointer;
        }

        .input-radio {
          height: 10px;
          min-height: 0;
          position: absolute;
          width: 10px;
          visibility: hidden;
        }

        .custom-checkmark {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
          display: inline-block;
          background-color: var(--color-dirty-linen);
          border: 2.4px var(--color-linen) solid;
          border-radius: 100%;
        }

        .custom-radios-hosting-joining:hover input ~ .custom-checkmark {
          background-color: var(--color-smoke);
        }

        .custom-radios-hosting-joining input:checked ~ .custom-checkmark {
          background-color: var(--color-pretty-in-pink);
        }

        /* Section: Options */

        .options-container {
          padding: var(--vertical-space) 0;
        }

        .options-diagonal {
          background-color: var(--color-pretty-in-pink);
          height: var(--banner-height);
          transform: rotate(-3deg);
          z-index: 0;
          display: flex;
          justify-content: center;
          margin-left: -10vw;
          width: 120vw;
          left: 0;
        }

        .options-content {
          padding: 1rem 0;
          margin: 0;
          display: flex;
          height: 100%;
          max-width: 100vw;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transform: rotate(3deg);
          position: relative;
        }

        .options-content > * {
          position: relative;
          z-index: 1;
        }

        .options-content::after {
          bottom: 75%;
        }

        .options-content::before {
          top: 75%;
        }

        @media screen and (min-width: 32rem) {
          .options-content::before {
            top: 100%;
          }
        }

        .options-grid {
          position: relative;
          position: relative;
          display: grid;
          align-items: center;
          padding: 1rem 0;
          justify-content: center;
          grid-template-columns: minmax(0, 1fr) max-content minmax(0, 1fr);
        }

        .options--description {
          font-size: var(--font-size-sm);
          font-weight: var(--weight-title);
        }

        .options--visual {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .options--visual img {
          width: 75%;
          max-width: 80%;
          user-select: none;
        }

        .options--or {
          text-align: center;
          font-weight: var(--weight-heavy);
          font-size: var(--page-subtitle-size);
          color: var(--color-red-hots);
        }

        .options-description {
          font-weight: var(--weight-title);
          padding: 1rem;
          text-align: center;
          font-size: var(--font-size-md);
        }

        /* Section: How it works */

        section#steps {
          color: var(--color-linen);
        }

        .steps {
          list-style-type: none;
          padding-left: 0;
          margin: auto;
          max-width: 40rem;
        }

        .steps-step {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }

        .steps--visual {
          align-items: center;
          display: flex;
          flex-direction: column;
        }

        .steps--visual img {
          width: 200px;
          padding: 20px;
        }

        .steps-description {
          margin: 0 auto;
          max-width: 15rem;
          text-align: left;
          line-height: var(--line-height-text);
        }

        .steps--label {
          display: block;
          font-size: var(--section-title-size);
          font-weight: var(--weight-title);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        @media screen and (min-width: 60rem) {
          .steps-step {
            grid-template-columns: 1fr 1fr;
          }

          .steps-description {
            text-align: center;
          }
        }

        /* Section: Recap */

        .recap {
          position: relative;
          background: none;
        }

        .recap::before {
          content: '';
          background: var(--color-toxic-avenger);
          width: calc(100% - 60px);
          max-width: 60rem;
          margin: auto;
          position: absolute;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          z-index: 0;
          border-radius: 20px;
          transform: skew(0deg, 1.4deg);
        }

        .recap-contents {
          width: calc(100% - 80px);
          text-align: center;
          z-index: 1;
          position: relative;
        }

        .recap-description {
          margin: auto;
          font-size: var(--font-size-md);
          max-width: 30rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .recap-link {
          margin-top: 1rem;
        }

        @media screen and (min-width: 768px) {
          .recap-description {
            font-size: var(--font-size-xl);
          }

          .recap-contents {
            width: calc(100% - 120px);
          }
        }

        /* Special Footer style */

        @media screen and (max-width: 768px) {
          .hero {
            text-align: center;
          }

          .hero .hero-logo {
            width: 100%;
            left: -24px;
            position: relative;
          }
          .options--visual img {
            padding: 0.25rem;
            width: 65%;
          }
        }

        .newsletter--description {
          margin: 2rem auto;
          max-width: 18rem;
          text-align: center;
          line-height: var(--line-height-text);
        }

        .copyWrapper {
          display: flex;
          border: 3px solid var(--color-midnight);
          border-radius: 8px;
          max-width: 400px;
          margin: auto;
          flex-direction: row;
        }

        .tooltip {
          position: relative;
          display: inline-block;
        }

        .tooltip .tooltiptext {
          visibility: hidden;
          width: 140px;
          background-color: var(--color-smoke);
          color: var(--color-linen);
          text-align: center;
          border-radius: 6px;
          padding: 5px;
          position: absolute;
          z-index: 1;
          bottom: 150%;
          left: 50%;
          margin-left: -75px;
          opacity: 0;
          transition: opacity 0.3s;
          font-size: var(--font-size-xs);
        }

        .tooltip .tooltiptext::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: var(--color-smoke) transparent transparent;
        }

        .tooltip:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
        }

        #copy {
          padding-left: var(--page-padding);
          padding-right: var(--page-padding);
          font-size: var(--font-size-sm);
          margin-right: 0px;
          display: inline-block;
          border: 0px;
          border-radius: 0px 5px 5px 0px;
          border-left: 3px solid var(--color-midnight);
          outline: 0;
        }

        .join-form {
          position: relative;
          width: 520px;
          max-width: 100%;
          padding-top: 2rem;
        }

        .join-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        @media (min-width: 1024px) {
          .hero {
            padding-top: 5rem;
          }

          .join-container {
            flex-direction: row;
            align-items: flex-start;

            justify-content: space-between;
          }

          .hero-tagline {
            text-align: left;
            margin-bottom: 0;
          }

          .join-form {
            width: 320px;
          }

          .join-image {
            position: relative;
            left: -1rem;
          }
        }

        @media (max-width: 60rem) {
          .hero {
            padding-top: 1rem;
          }
        }
      `}</style>
      <GithubLogo />
      <Header />
      <main className="layout layout__fluid">
        <section className="hero" id="hero">
          <div className="hero-bg"></div>
          <div className="section--content join-container hero--content">
            <div className="join-callout">
              <div className="hero-imageFrame">
                <img
                  alt=""
                  className="hero-bg-img star1 floating floating--short"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fstar1.png?v=1591917657267"
                />
                <img
                  alt=""
                  className="hero-bg-img star2 floating floating--long"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fstar2.png?v=1591917657953"
                />
                <img
                  alt=""
                  className="hero-bg-img star4 floating floating--short"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fstar4.png?v=1596993367347"
                />
                <img
                  alt=""
                  className="hero-bg-img star3 floating floating--long"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fstar3.png?v=1591917657757"
                />
                <img
                  alt=""
                  className="hero-bg-img star5 floating floating--long"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fstar5.png?v=1591917657427"
                />
                <img
                  alt=""
                  className="hero-bg-img mic"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fmicrophone.png?v=1591917657878"
                />
                <img
                  className="join-image"
                  alt="Karaoke Nite"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Flogo.svg?v=1595981204360"
                  id="hero-logo"
                />
              </div>
              <p className="hero-tagline">
                Get your friends together during quarantine!
              </p>
            </div>
            <div className="join-form" id="now">
              <h2 className="page-subtitle text__center">JOIN A ROOM (FREE)</h2>
              <form action="/scene.html" method="GET">
                <div>
                  <input
                    className="input"
                    id="room"
                    name="room"
                    placeholder="Choose a room name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input"
                    id="username"
                    name="username"
                    placeholder="Choose a username"
                    type="text"
                    required
                  />
                </div>
                <input
                  className="input button button-bold"
                  type="submit"
                  value="Enter Room"
                />
                <div className="text__left" id="radio-buttons-testing">
                  <label
                    for="hosting"
                    className="label custom-radios-hosting-joining"
                  >
                    <input
                      type="radio"
                      name="host"
                      id="hosting"
                      value="true"
                      className="input input-radio"
                      checked
                    />
                    <span className="custom-checkmark"></span>
                    I'm hosting a new room
                  </label>
                  <label
                    for="joining"
                    className="label custom-radios-hosting-joining"
                  >
                    <input
                      type="radio"
                      name="host"
                      id="joining"
                      className="input input-radio"
                      value="false"
                    />
                    <span className="custom-checkmark"></span>
                    I'm joining a friend's room
                  </label>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="options" className="options-container">
          <div className="options-diagonal">
            <div className="section--content options-content section__wide">
              <h2 className="page-subtitle text__center options-title">
                Karaoke with your friends...
              </h2>
              <div className="options-grid">
                <div className="options--visual">
                  <img
                    alt="Placeholder2"
                    id="browser"
                    src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FLaptop.svg?v=1591917657224"
                  />
                  <label
                    for="browser"
                    className="text__center options--description"
                  >
                    In the browser
                  </label>
                </div>
                <span className="options--or">OR</span>
                <div className="options--visual">
                  <img
                    alt="Placeholder3"
                    id="headset"
                    src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FVR.svg?v=1591917657319"
                  />
                  <label
                    for="headset"
                    className="text__center options--description"
                  >
                    With a VR headset
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="diagonal-bg--mobile diagonal-bg--mobile-bottom"></div>
        </section>

        <section id="steps" className="section--content">
          <h2 className="page-subtitle text__center">How it works:</h2>
          <ol className="steps layout-grid layout-grid__sm">
            <li className="steps-step">
              <div className="steps--visual">
                <img
                  id="create-a-room"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FRoom.svg?v=1591917657658"
                />
              </div>
              <div className="flex flex__centered">
                <p className="steps-description">
                  <label className="steps--label yellow" for="create-a-room">
                    Create a room
                  </label>
                  Make your own private karaoke room (but bring your own drinks
                  and snacks!)
                </p>
              </div>
            </li>
            <li className="steps-step">
              <div className="steps--visual">
                <img
                  id="invite-friends"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FFriends.svg?v=1591917657149"
                />
              </div>
              <div className="flex flex__centered">
                <p className="steps-description">
                  <label className="steps--label magenta" for="invite-friends">
                    Invite friends
                  </label>
                  Share the room 🔑 with your friends so they can join the
                  party!
                </p>
              </div>
            </li>
            <li className="steps-step">
              <div className="steps--visual">
                <img
                  id="sing-together"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FSing.svg?v=1591917657376"
                />
              </div>
              <div className="flex flex__centered">
                <p className="steps-description">
                  <label
                    className="steps--label pink__dark"
                    for="sing-together"
                  >
                    Have a good time
                  </label>
                  Choose from a collection of hit songs and sing with your
                  friends in real-time!
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="recap" className="recap light">
          <div className="section--content recap-contents">
            <p className="recap-description text__center">
              Looking for something to do with friends during quarantine?
            </p>
            <p className="recap-description text__center">
              Have a Karaoke Nite!
            </p>
            <a className="recap-link button" href="#top">
              Create a Room
            </a>
          </div>
        </section>

        <section id="newsletter" className="newsletter section--content">
          <h2 className="page-subtitle text__center">
            Keep up with the party!
          </h2>
          <p className="newsletter--description">
            Join our newsletter to get Karaoke Nite updates from our team.
          </p>

          <form
            className="copyWrapper"
            action="https://karaokenite.us17.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="998b28b4763f0038b456eece0" />
            <input type="hidden" name="id" value="649cfa059e" />
            <input
              type="email"
              placeholder="your@email.here"
              name="MERGE0"
              id="myInput"
              required
            />
            <div className="tooltip">
              <button
                className="button button-bold"
                id="copy"
                onclick="myFunction()"
                onmouseout="outFunc()"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
