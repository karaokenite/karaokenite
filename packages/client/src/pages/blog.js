import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GithubLogo } from '../components/GithubLogo';

export function Blog() {
  return (
    <div>
      <style jsx global>{`
        .member-list {
          display: inline-flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .member-item {
          text-align: center;
          margin: 10px 10px;
        }

        .member-avatar {
          width: 150px;
          border-radius: 50%;
          border: 3px solid var(--color-midnight);
        }
      `}</style>
      <GithubLogo />
      <Header />

      <main className="layout layout__small layout-grid">
        <section className="layout-grid">
          <article>
            <h4>April 7th, 2021</h4>
            <h2 className="page-subtitle">💨 v0.2 Update Coming Soon</h2>

            <p>
              We just released the most recent build v0.1.3 which includes a FAQ
              page and a massive cleanup of the codebase in preparation of the
              v0.2 launch end of next month.
            </p>

            <p>
              We are beyond excited and cannot wait to show you the new Karaoke
              Nite.
            </p>

            <p>
              P.S. Take a look here for a
              <a
                className="link"
                href="https://twitter.com/karaoke_nite/status/1369729297779486726?s=20"
                target="_blank"
              >
                sneak peak
              </a>
              !
            </p>
          </article>
          <article>
            <h4>March 20th, 2021</h4>
            <h2 className="page-subtitle">🚀 Product Hunt and 2,500 Users</h2>

            <p>
              March has been an absolutely crazy month for us. We launched on
              Product Hunt and ended up being a runner-up for the Product of the
              Day!
            </p>

            <p>
              Shoutout to everyone who voted, shared with friends, and gave us
              feedback.
            </p>

            <p>Because of you, we hit a new milestone! Let's gooo.</p>

            <ul className="list">
              <li>
                <b>Users:</b> 2,500
              </li>
              <li>
                <b>Sessions:</b> 3,800
              </li>
            </ul>

            <a
              href="https://www.producthunt.com/posts/karaoke-nite?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-karaoke-nite"
              target="_blank"
              className="link__plain"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=287216&theme=light"
                alt="Karaoke Nite - Karaoke with friends together on the web or in VR | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </article>

          <article>
            <h4>March 5th, 2021</h4>
            <h2 className="page-subtitle">📝 User Research Wrap-Up</h2>

            <p>
              After chatting with 40 users from around the world and testing it
              with friends and family over the holidays, we are super excited
              about the new direction we are taking with Karaoke Nite.
            </p>

            <p>
              Special shoutout to the following peeps for the hour-long video
              calls:
            </p>

            <ul className="list">
              <li>
                <a
                  className="link"
                  href="https://twitter.com/jesslynnrose"
                  target="_blank"
                >
                  @jesslynnrose
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/campyampire"
                  target="_blank"
                >
                  @campyampire
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/illathekilla"
                  target="_blank"
                >
                  @illathekilla
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/catherinezh"
                  target="_blank"
                >
                  @catherinezh
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/jay_yow07"
                  target="_blank"
                >
                  @jay_yow07
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/supermandota2"
                  target="_blank"
                >
                  @supermandota2
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/hueypriest"
                  target="_blank"
                >
                  @hueypriest
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/catheryn_li"
                  target="_blank"
                >
                  @catheryn_li
                </a>
              </li>
            </ul>

            <p>
              And countless others who gave us ample feedback via Typeform,
              DM's, emails over the past few months.
            </p>
          </article>

          <article>
            <h4>February 28th, 2021</h4>
            <h2 className="page-subtitle">👯‍♂️ #DreamTeam</h2>

            <p>
              The journey of finding product-market fit isn't easy. Just wanted
              to take a moment and give a big thank you to the old v0.1 team for
              getting us here.
            </p>

            <div id="members" className="member-list">
              <div className="member-item">
                <img
                  className="member-avatar"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsonny.png?v=1596248195534"
                  alt="@sonnynomnom<"
                />
                <a
                  className="link"
                  href="https://twitter.com/sonnynomnom"
                  target="_blank"
                >
                  <div className="memberlabel">@sonnynomnom</div>
                </a>
              </div>
              <div className="member-item">
                <img
                  className="member-avatar"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fjackieliu.jpg?v=1596248186734"
                  alt="@jackieis_online"
                />
                <a
                  className="link"
                  href="https://twitter.com/jackieis_online"
                  target="_blank"
                >
                  <div className="memberlabel">@jackieis_online</div>
                </a>
              </div>
              <div className="member-item">
                <img
                  className="member-avatar"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fjosh.jpg?v=1596248189591"
                  alt="@joshuakgoldberg"
                />
                <a
                  className="link"
                  href="https://twitter.com/JoshuaKGoldberg"
                  target="_blank"
                >
                  <div className="memberlabel">@joshuakgoldberg</div>
                </a>
              </div>
              <div className="member-item">
                <img
                  className="member-avatar"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Firlfede.jpg?v=1596248192436"
                  alt="@irlfede<"
                />
                <a
                  className="link"
                  href="https://twitter.com/irlfede"
                  target="_blank"
                >
                  <div className="memberlabel">@irlfede</div>
                </a>
              </div>
              <div className="member-item">
                <img
                  className="member-avatar"
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fmicaela.jpg?v=1596248304793"
                  alt="@micaelars"
                />
                <a
                  className="link"
                  href="https://www.behance.net/micaelars"
                  target="_blank"
                >
                  <div className="memberlabel">@micaelars</div>
                </a>
              </div>
            </div>

            <p>
              And our friend
              <a
                className="link"
                href="https://twitter.com/HaydenLee37"
                target="_blank"
              >
                @haydenlee37
              </a>
              for all the debugging help! 🔎
            </p>
          </article>
        </section>
        <section className="layout-grid layout-grid__sm">
          <article>
            <h4>Release Build v0.1.3</h4>
            <ul className="list list__dense">
              <li>🆕 Added a /faq page.</li>
              <li>🏗 Updated /about page.</li>
              <li>🏗 Cleaned up the codebase in preparation of v0.2.</li>
              <li>💸 Compiled the pre-seed pitch deck.</li>
            </ul>
          </article>
          <article>
            <h4>Release Build v0.1.2</h4>
            <ul className="list list__dense">
              <li>🆕 Added a Privacy Policy. Thanks, Min-Kyu!</li>
              <li>🆕 Added demo video.</li>
              <li>🆕 Added release notes.</li>
              <li>🆕 Added blog posts.</li>
              <li>🏗 Removed Patreon links.</li>
              <li>🐛 Fixed the "Let's Get It On" autoplay bug.</li>
            </ul>
          </article>
          <article>
            <h4>Release Build v0.1.1</h4>
            <ul className="list list__dense">
              <li>
                🆕 Added floating animation to the stars on the landing page.
              </li>
              <li>🆕 Added hover effects to anchor links.</li>
              <li>🆕 Added a /blog page.</li>
              <li>🐛 Fixed social channel links bug in the footer.</li>
            </ul>
          </article>
        </section>
        <section>
          <blockquote>
            "Just might want to warn your roommate first." Product Hunt
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
