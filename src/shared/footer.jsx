import Logo from "/logo.svg";
import Instagram from "/footer/instagram.svg";
import Facebook from "/footer/facebook.svg";
import Twitter from "/footer/twitter.svg";
import Pinterest from "/footer/pinterest.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <h6 className="footer-title footer-contact__title">Contact Us</h6>
          <div className="footer-contact__link">
            Email
            <a href="mailto:needhelp@Organia.com" target="_blank">
              needhelp@Organia.com
            </a>
          </div>
          <div className="footer-contact__link">
            Phone
            <a href="tel:666888888" target="_blank">
              666 888 888
            </a>
          </div>
          <div className="footer-contact__link">
            Address
            <a href="/" target="_blank">
              88 road, borklyn street, USA
            </a>
          </div>
        </div>
        <div className="footer-info">
          <a className="footer-info__logo" href="/">
            <img src={Logo} alt="logo" />
            <span>Organick</span>
          </a>
          <p className="footer-info__desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printin
          </p>
          <div className="footer-info__social">
            <a href="/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="/">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="/">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="/">
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </div>
        </div>
        <div className="footer-pages">
          <h6 className="footer-title footer-pages__title">Utility Pages</h6>
          <a className="footer-pages__link" href="/">
            Style Guide
          </a>
          <a className="footer-pages__link" href="/">
            404 Not Found
          </a>
          <a className="footer-pages__link" href="/">
            Password Protected
          </a>
          <a className="footer-pages__link" href="/">
            Licences
          </a>
          <a className="footer-pages__link" href="/">
            Changelog
          </a>
        </div>
      </footer>
      <p className="footer__copyright">
        Copyright &#169; <span>Organick</span>
      </p>
    </>
  );
};
