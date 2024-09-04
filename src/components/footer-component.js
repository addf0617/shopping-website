import React from "react";

const FooterComponent = () => {
  return (
    <footer>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 footer-logo">
            <div className="row flex-column g-3">
              <h1>FASHION</h1>
              <p>Complete your style with awesome clothes from us.</p>
              <div className="icon-container">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 footer-links">
            <div className="row g-4">
              <div className="col-6 col-lg-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#">Company</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Contact us</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Support</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#">Quick Link</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Share Location</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Size Guide</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#">Legal</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Terms & conditions</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
