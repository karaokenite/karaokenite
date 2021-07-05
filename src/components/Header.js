import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';

const NavLink = ({ href, children, active, logo }) => {
  return (
    <Link href={href}>
      <a
        className={cx({
          'navbar-link': !logo,
          'navbar-link__logo': logo,
          'navbar-link__active': active,
        })}
      >
        {children}
        <span className="navbar-linkIcon">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <use href="#arrow" />
          </svg>
        </span>
      </a>
    </Link>
  );
};

const links = [
  { path: '/about', text: 'About' },
  { path: '/blog', text: 'Blog' },
  { path: '/faq', text: 'FAQ' },
];

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <header role="banner" className="header">
      <nav className="navbar">
        <div className="navbar-section navbar-section__left">
          <NavLink href="/" logo>
            <h1 className="brand-logo">
              KARAOKE NITE
              <span className="brand-betatag">beta</span>
            </h1>
          </NavLink>
          <button className="navbar-toggle">
            <svg
              className="navbar-toggleIcon navbar-toggleIcon__open"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="#menu" />
            </svg>
            <svg
              className="navbar-toggleIcon navbar-toggleIcon__close"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="#close" />
            </svg>
          </button>
        </div>
        <div className="navbar-section navbar-section__right">
          <ul className="navbar-list">
            {links.map(({ path, text }) => (
              <li key={path} className="navbar-item">
                <NavLink href={path} active={asPath === path}>
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
