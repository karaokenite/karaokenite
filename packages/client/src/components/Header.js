import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={cx('navbar-link', {
          'navbar-link__home': href === '/',
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

export const Header = () => {
  return (
    <header role="banner" className="header">
      <nav className="navbar">
        <div className="navbar-section navbar-section__left">
          <a className="navbar-link__home" href="/">
            <h1 className="brand-logo">
              KARAOKE NITE
              <span className="brand-betatag">beta</span>
            </h1>
          </a>
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
            <li className="navbar-item">
              <NavLink href="/about">About</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink href="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
