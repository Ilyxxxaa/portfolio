import Social from '../Social/Social';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ilya Kotsur</h1>
        <ul className="footer__list">
          <li>
            <a className="footer__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="footer__link" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="footer__link" href="#about">
              About
            </a>
          </li>
        </ul>
        <Social divClassName="footer__social" linkClassName="footer__social-link" />
      </div>
    </footer>
  );
};

export default Footer;
