import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const { asPath } = useRouter();
  const isHome = href === '/';
  return (
    <Link href={href}>
      <a
        className={cx({
          'navbar-link': !isHome,
          'navbar-link__home': isHome,
          'navbar-link__active': asPath === href,
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

const navlinks = [
  { href: '/about', children: 'About' },
  { href: '/blog', children: 'Blog' },
  { href: '/faq', children: 'FAQ' },
];

export const Header = () => {
  return (
    <header role="banner" className="header">
      <nav className="navbar">
        <div className="navbar-section navbar-section__left">
          <NavLink href="/">
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
            {navlinks.map((navlink) => (
              <li className="navbar-item">
                <NavLink href={navlink.href}>{navlink.children}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
