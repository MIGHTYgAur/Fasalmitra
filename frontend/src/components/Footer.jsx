import React from 'react';
// import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <div className="cropin-footer">
      <div className="container-box">
        <div className="cropin-footer_wrap df sb">
          <div className="cropin-footer_col cropin-footer_col0">
            <div className="cropin-footer_logo">
              <img
                src="https://www.cropin.com/hs-fs/hubfs/cropin_2021/cropin-logo.png?width=200&height=85&name=cropin-logo.png"
                alt="cropin-logo"
                loading="lazy"
                width="200"
                height="85"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="footer-connect__list">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/CropInTech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/CropInTech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/cropin-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCvlca6utL2wBUIvUlKlgObg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-badget-logo">
              <img src="https://www.cropin.com/hubfs/b-crop-logo.png" alt="badge-logo" />
            </div>
          </div>

          <div className="cropin-footer_col cropin-footer_col1">
            <div className="cropin-footer_col--inner">
              <div className="cropin-footer_col--title">
                <h3>SOLUTIONS</h3>
              </div>
              <div className="cropin-footer_col--menu">
                <ul>
                  <li><a href="https://www.cropin.com/intelligent-agriculture-cloud">Cropin Cloud</a></li>
                  <li><a href="https://www.cropin.com/intelligent-agriculture-cloud/cropin-apps">Cropin Apps</a>
                    <ul>
                      <li><a href="https://www.cropin.com/intelligent-agriculture-cloud/cropin-apps/farm-management-solution">Cropin Grow</a></li>
                      <li><a href="https://www.cropin.com/intelligent-agriculture-cloud/cropin-apps/farmer-engagement-solution">Cropin Connect</a></li>
                      <li><a href="https://www.cropin.com/intelligent-agriculture-cloud/cropin-apps/seed-to-shelf-traceability-solution">Cropin Trace</a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.cropin.com/intelligent-agriculture-cloud/cropin-data-hub">Cropin Data Hub</a></li>
                  <li><a href="https://www.cropin.com/intelligent-agriculture-cloud/cropin-intelligence">Cropin Intelligence</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cropin-footer_col cropin-footer_col2">
            <div className="cropin-footer_col--inner">
              <div className="cropin-footer_col--title">
                <h3>COMPANY</h3>
              </div>
              <div className="cropin-footer_col--menu">
                <ul>
                  <li><a href="https://www.cropin.com/about">About Us</a></li>
                  <li><a href="https://www.cropin.com/developmental-agencies-and-government-projects">Dev. Agencies and Government Projects</a></li>
                  <li><a href="https://www.cropin.com/partner-with-us">Partner with us</a></li>
                  <li><a href="https://www.cropin.com/careers">Careers</a></li>
                  <li><a href="https://www.cropin.com/events">Events</a></li>
                  <li><a href="https://www.cropin.com/connect">Contact</a></li>
                  <li><a href="https://www.cropin.com/cropin-aws">Cropin and AWS</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cropin-footer_col cropin-footer_col3">
            <div className="cropin-footer_col--inner">
              <div className="cropin-footer_col--title">
                <h3>RESOURCES</h3>
              </div>
              <div className="cropin-footer_col--menu">
                <ul>
                  <li><a href="https://www.cropin.com/blogs">Blogs</a></li>
                  <li><a href="https://www.cropin.com/newsroom">Newsroom</a></li>
                  <li><a href="https://www.cropin.com/thought-leadership">Thought Leadership</a></li>
                  <li><a href="https://www.cropin.com/webinars">Webinars</a></li>
                  <li><a href="https://www.cropin.com/our-work">Case Studies</a></li>
                  <li><a href="https://www.cropin.com/whitepaper">Whitepapers</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cropin-footer_col cropin-footer_col4">
            <div className="cropin-footer_col--inner">
              <div className="cropin-footer_col--title">
                <h3>OTHER RESOURCES</h3>
              </div>
              <div className="cropin-footer_col--menu">
                <ul>
                  <li><a href="https://www.cropin.com/farming-apps">Farming Apps</a></li>
                  <li><a href="https://www.cropin.com/iot-in-agriculture">IoT in Agriculture</a></li>
                  <li><a href="https://www.cropin.com/precision-agriculture">Precision Agriculture</a></li>
                  <li><a href="https://www.cropin.com/digital-farming">Digital Farming</a></li>
                  <li><a href="https://www.cropin.com/smart-farming">Smart Farming</a></li>
                  <li><a href="https://www.cropin.com/agriculture-technology">Agriculture Technology</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
