import React from "react";
import { Link } from "gatsby";

export default function Layout({ children }: any) {
  let year = new Date().getFullYear();
  return (
    <div id="home" className="home">
      <header className="home__header">
        <h1 className="header__title">
          <Link to="/">css Portfolio</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer className="home__footer">
        <nav className="footer__nav">
          <h6 className="footer__title">try it!</h6>
          <ul>
            <li>
              <Link to="https://flexboxfroggy.com/#ko" target="_blank">
                flexbox froggy
              </Link>
            </li>
            <li>
              <Link to="https://cssgridgarden.com/#ko" target="_blank">
                grid garden
              </Link>
            </li>
            <li>
              <Link to="https://flukeout.github.io/" target="_blank">
                css diner
              </Link>
            </li>
          </ul>
        </nav>
        <address className="footer__address">
          <h6 className="footer__title">contact</h6>
          <div className="address__links">
            <Link
              to="https://github.com/sonyun247/css-portfolio"
              target="_blank"
            >
              github
            </Link>
            <Link to="mailto:sonyun24@gmail.com">email</Link>
          </div>
        </address>
        <p className="footer__copyright">
          &copy; {year} by
          <Link
            to="https://github.com/sonyun247"
            target="_blank"
            className="copyright__name"
          >
            sonyun247
          </Link>
          . All rights reversed.
        </p>
      </footer>
    </div>
  );
}
