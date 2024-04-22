import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onHospitalTextClick = useCallback(() => {
    navigate("/Desktop-5");
  }, [navigate]);

  const onEducationTextClick = useCallback(() => {
    navigate("/desktop-8");
  }, [navigate]);

  const onSecurityTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);
  

  return (
    <div className="desktop-2">
      <img
        className="empty-chairs-tables-cafe-1-icon"
        alt=""
        src="/emptychairstablescafe-1@2x.png"
      />
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
      <div className="rectangle-div" />
      <img
        className="empty-chairs-by-table-room-1-icon"
        alt=""
        src="/emptychairsbytableroom-1@2x.png"
      />
      <div className="vector-parent">
        <img className="group-child" alt="" src="/vector-4.svg" />
        <div className="best-sellers">BEST SELLERS</div>
      </div>
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
      <img className="mask-group-icon2" alt="" src="/mask-group@2x.png" />
      <img className="mask-group-icon3" alt="" src="/mask-group@2x.png" />
      <div className="rectangle-parent">
        <div className="group-item" />
        <div className="group-wrapper">
          <div className="group-container">
            <img className="group-inner" alt="" src="/group-22@2x.png" />
          </div>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="group-wrapper">
          <div className="group-container">
            <img className="group-inner" alt="" src="/group-22@2x.png" />
          </div>
        </div>
      </div>
      <img className="mask-group-icon4" alt="" src="/mask-group@2x.png" />
      <div className="vector-group">
        <img className="vector-icon" alt="" src="/vector-3.svg" />
        <div className="view-by-category">view BY CATEGORY</div>
      </div>
      <div className="your-premier-partner-container">
        <p className="your-premier-partner-for-godre">
          <span className="your-premier-partner-for-godre1">
            <span className="your-premier-partner-for-godre2">
              <span className="span">{` `}</span>
              <span className="your-premier-partner">
                Your Premier Partner for Godrej Interio Since 1998
              </span>
            </span>
          </span>
          <span>
            <span className="your-premier-partner-for-godre1">
              <span className="your-premier-partner-for-godre2">{` `}</span>
            </span>
            <span>
              <span className="your-premier-partner-for-godre1">{` `}</span>
            </span>
          </span>
        </p>
        <p className="your-premier-partner-for-godre">
          <span>
            <span>
              <span className="at-labhdayak-we">
                At Labhdayak, we specialize in comprehensive interior solutions
                for homes and offices. With a strong focus on storage solutions
                for various sectors including industry, homes, offices,
                hospitals, and educational institutes, we are committed to
                enhancing your spaces. Our in-house design support team is here
                to help you transform your offices and homes into functional and
                aesthetically pleasing environments. We take pride in our
                registration on GeM and our association with various Central
                Government agencies, such as OFDR, DRDO, and Defense
                establishments. Partner with Labhdayak for all your interior
                needs and experience quality, innovation, and excellence in
                every project
              </span>
            </span>
          </span>
        </p>
      </div>
      <div className="one-stop-solution-container">
        <p className="your-premier-partner-for-godre">One stop solution</p>
        <p className="your-premier-partner-for-godre">{` for GODREJ Office and `}</p>
        <p className="your-premier-partner-for-godre">
          home modular furniture and Interior Solutions
        </p>
      </div>
      <img
        className="empty-chairs-by-table-room-2-icon"
        alt=""
        src="/emptychairsbytableroom-2@2x.png"
      />
      <img
        className="empty-chairs-by-table-room-2-icon1"
        alt=""
        src="/emptychairsbytableroom-2@2x.png"
      />
      <img
        className="home-automation-with-tablet-2-icon"
        alt=""
        src="/homeautomationwithtablet-2@2x.png"
      />
      <img
        className="home-automation-with-tablet-3-icon"
        alt=""
        src="/homeautomationwithtablet-2@2x.png"
      />
      <div className="rectangle-container">
        <div className="group-child2" />
        <div className="group-wrapper1">
          <div className="hospital-parent">
            <div className="hospital" onClick={onHospitalTextClick}>hospital</div>
            <div className="education" onClick={onEducationTextClick}>
              education
            </div>
            <div className="laboratories">Laboratories</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child3" />
        <div className="labhdayak-interior-solutions-c-parent">
          <div className="labhdayak-interior-solutions">
            © LABHDAYAK INTERIOR SOLUTIONS Copyright 2024
          </div>
          <div className="group-wrapper2">
            <div className="rectangle-parent2">
              <div className="group-child4" />
              <div className="group-wrapper3">
                <div className="authorized-dealer-parent">
                  <div className="authorized-dealer-parent">
                    <div className="authorized-dealer-parent">
                      <div className="authorized-dealer">authorized dealer</div>
                      <div className="godrej-interio">
                        <span className="godrej">Godrej</span>
                        <span>{` `}</span>
                        <b>interio</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-parent">
            <div className="about">About</div>
            <div className="about-us-career-container">
              <p className="your-premier-partner-for-godre">About Us</p>
              <p className="your-premier-partner-for-godre">Career</p>
            </div>
          </div>
          <div className="policy-parent">
            <div className="about">Policy</div>
            <div className="about-us-career-container">
              <p className="your-premier-partner-for-godre">{`Terms & Conditions`}</p>
              <p className="your-premier-partner-for-godre">Privacy Policy</p>
            </div>
          </div>
          <div className="contact-parent">
            <div className="about">Contact</div>
            <div className="div">
              <p className="your-premier-partner-for-godre">98 812 08837</p>
            </div>
          </div>
          <div className="rectangle-parent3">
            <div className="group-child5" />
            <div className="registered-member-parent">
              <div className="registered-member">
                <span className="r">R</span>
                <span className="egistered">{`egistered `}</span>
                <span className="r">M</span>
                <span className="egistered">EMBER</span>
              </div>
              <img
                className="px-gem-logo-1-icon"
                alt=""
                src="/2560pxgemlogo-1@2x.png"
              />
            </div>
          </div>
          <div className="facebook-1-parent">
            <img className="facebook-1-icon" alt="" src="/facebook-1.svg" />
            <img className="whatsapp-1-icon" alt="" src="/whatsapp-1.svg" />
            <img className="youtube-1-icon" alt="" src="/youtube-1.svg" />
            <img className="linkedin-1-icon" alt="" src="/linkedin-1.svg" />
            <img className="instagram-1-icon" alt="" src="/instagram-1.svg" />
          </div>
          <div className="mumbai-pune-road">
            43 Mumbai Pune Road, Jasraj Complex, Pune, Maharashtra 411 003
          </div>
          <div className="group-parent">
            <img className="group-child6" alt="" src="/group-8@2x.png" />
            <img className="group-child7" alt="" src="/group-9.svg" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child8" />
        <div className="group-parent1">
          <div className="furniture-parent">
            <div className="about">Furniture</div>
            <div className="security" onClick={onSecurityTextClick}>
              Security
            </div>
            <div className="green-panel">Green Panel</div>
          </div>
          <div className="profile-user-2-parent">
            <img
              className="profile-user-2-icon"
              alt=""
              src="/profileuser-2.svg"
            />
            <img
              className="shopping-cart-1-icon"
              alt=""
              src="/shoppingcart-1.svg"
            />
          </div>
          <div className="group-wrapper6">
            <div className="group-wrapper7">
              <div className="group-wrapper7">
                <div className="group-wrapper7">
                  <div className="group-wrapper7">
                    <img
                      className="group-child9"
                      alt=""
                      src="/group-8@2x.png"
                    />
                    <img className="group-child10" alt="" src="/group-91.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent5">
            <div className="group-child11" />
            <div className="search-1-parent">
              <img className="search-1-icon" alt="" src="/search-1.svg" />
              <div className="search">SEARCH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
