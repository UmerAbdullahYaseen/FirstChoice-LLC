import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">First Choice</h1>
                <p className="footer-text">
                  Visit our First Choice Automotive Shop Address{" "}
                  <a
                    href="https://maps.app.goo.gl/QtTwqdDtnQhddaSR9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Maps
                  </a>{" "}
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">Firstchoicebr1@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">WhatsApp no: 050 150 9291</Link>
                  </li>
                  <li>
                    <Link to="#">Land Line: 0097125597107</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <Link to="#">Facebook</Link>
                  </li>
                  <li>
                    <Link to="#">Twitter</Link>
                  </li>
                  <li>
                    <Link to="#">Instagram</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}
export default Footer;
