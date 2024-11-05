import './styles.scss';

import { Link } from 'react-router-dom';

import Logo from '@/components/logo/Logo';

import MaxWidthWrapper from '../max-width-wrapper/MaxWidthWrapper';

const Footer = () => {
  const pathsToMinimize = ['verify-email', 'sign-in', 'sign-up'];
  return (
    <footer className="footer">
      <MaxWidthWrapper>
        <div className="footer__wrapper">
          {pathsToMinimize.includes('') ? null : (
            <div className="footer__logo-section">
              <Logo />
            </div>
          )}

          {pathsToMinimize.includes('') ? null : (
            <div className="footer__seller-section">
              <div
                className="footer__seller-section-background"
                aria-hidden="true"
              />
              <div className="footer__seller-section-content">
                <h3 className="footer__seller-section-content-title">
                  Become a seller
                </h3>
                <p className="footer__seller-section-content-text">
                  If you&apos;d like to sell high-quality digital products, you
                  can do so in minutes.{' '}
                  <Link
                    to="/sign-in"
                    className="footer__seller-section-content-text-link"
                  >
                    Get started &rarr;
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="footer__bottom-section">
          <div className="footer__bottom-section-text">
            <p className="footer__bottom-section-text">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="footer__bottom-section-links">
            <div className="footer__bottom-section-links">
              <Link to="#" className="footer__bottom-section-links-link">
                Terms
              </Link>
              <Link to="#" className="footer__bottom-section-links-link">
                Privacy Policy
              </Link>
              <Link to="#" className="footer__bottom-section-links-link">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
