import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div id="footer-name">KARAOKE NITE</div>
          <div>
            Made with{' '}
            <span aria-label="love" role="img">
              💖
            </span>{' '}
            in Brooklyn, NY
          </div>
        </div>

        <div className="footer-icons">
          <div className="column">
            <a href="https://www.facebook.com/karaokenite2021" target="_blank">
              <img
                className="social"
                src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ffacebook-logo.svg?v=1597727187930"
              />
            </a>
          </div>

          <div className="column">
            <a href="https://www.instagram.com/karaokenite" target="_blank">
              <img
                className="social"
                src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Finstagram-logo.svg?v=1597727187949"
              />
            </a>
          </div>

          <div className="column">
            <a href="https://www.twitter.com/karaoke_nite" target="_blank">
              <img
                className="social"
                src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftwitter-logo.svg?v=1597727187978"
              />
            </a>
          </div>

          <div className="column">
            <a href="https://www.github.com/karaokenite" target="_blank">
              <img
                className="social"
                src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fgithub-logo.svg?v=1597727187892"
              />
            </a>
          </div>

          <div className="column">
            <a href="https://discord.gg/xUc8m25" target="_blank">
              <img
                className="social"
                src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fdiscord%20logo.svg?v=1599600184242"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
