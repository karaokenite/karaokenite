import React from 'react';

const Icons = ({ href, src }) => {
  return (
    <div className="column">
      <a href={href} target="_blank">
        <img className="social" src={src} />
      </a>
    </div>
  );
};

const icons = [
  {
    href: 'https://www.facebook.com/karaokenite2021',
    src: 'https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ffacebook-logo.svg?v=1597727187930',
  },
  {
    href: 'https://www.instagram.com/karaokenite',
    src: 'https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Finstagram-logo.svg?v=1597727187949',
  },
  {
    href: 'https://www.twitter.com/karaoke_nite',
    src: 'https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftwitter-logo.svg?v=1597727187978',
  },
  {
    href: 'https://www.github.com/karaokenite',
    src: 'https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fgithub-logo.svg?v=1597727187892',
  },
  {
    href: 'https://discord.gg/xUc8m25',
    src: 'https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fdiscord%20logo.svg?v=1599600184242',
  },
];

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
          {icons.map((icon) => (
            <Icons href={icon.href} src={icon.src} />
          ))}
        </div>
      </div>
    </footer>
  );
};
