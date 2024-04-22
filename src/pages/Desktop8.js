import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop8.css";

const Desktop8 = () => {
  const navigate = useNavigate();

  const onFurnitureTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSecurityTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  return (
    <div className="desktop-7">
      <div className="desktop-7-child" />
      <div className="desktop-7-item" />
      <img
        className="empty-chairs-by-table-room-1-icon8"
        alt=""
        src="/emptychairsbytableroom-1@2x.png"
      />
      <div className="rectangle-parent82">
        <div className="group-child149" />
        <img className="image-2-icon18" alt="" src="/image-2@2x.png" />
      </div>
      <div className="specifications-parent">
        <b className="specifications">Specifications</b>
        <div className="dimensions-w-x-container">
          <p className="dimensions-w-x">Dimensions W x H x D (cm)</p>
          <p className="x-425-775-x">220.6 x 42.5-77.5 x 101</p>
          <p className="dimensions-w-x">Primary Material</p>
          <p className="x-425-775-x">Mild Steel</p>
          <p className="dimensions-w-x">Finish Color</p>
          <p className="x-425-775-x">Multiple Color Options</p>
          <p className="x-425-775-x">Frame Material</p>
          <p className="x-425-775-x">Mild Steel</p>
          <p className="x-425-775-x">Certifications</p>
          <p className="x-425-775-x">
            ISO 13485 : 2016, ISO 9001, CE, ISO 50001, ISO 45001
          </p>
          <p className="x-425-775-x">Sales Package</p>
          <p className="x-425-775-x">1 Hospital Bed</p>
          <p className="x-425-775-x">Delivery Condition</p>
          <p className="x-425-775-x">Knockdown</p>
          <p className="x-425-775-x">Warranty</p>
          <p className="dimensions-w-x">
            <b>1 Year Standard Healthcare Warranty.</b>
          </p>
        </div>
      </div>
      <div className="rectangle-parent83">
        <div className="group-child150" />
        <div className="group-parent66">
          <div className="furniture-parent7">
            <div className="furniture9" onClick={onFurnitureTextClick}>
              Furniture
            </div>
            <div className="security9" onClick={onSecurityTextClick}>
              Security
            </div>
            <div className="green-panel9">Green Panel</div>
          </div>
          <div className="profile-user-2-parent7">
            <img
              className="profile-user-2-icon9"
              alt=""
              src="/profileuser-2.svg"
            />
            <img
              className="shopping-cart-1-icon9"
              alt=""
              src="/shoppingcart-1.svg"
            />
          </div>
          <div className="group-wrapper88">
            <div className="group-wrapper89">
              <div className="group-wrapper89">
                <div className="group-wrapper89">
                  <div className="group-wrapper89">
                    <img
                      className="group-child151"
                      alt=""
                      src="/group-8@2x.png"
                    />
                    <img
                      className="group-child152"
                      alt=""
                      src="/group-91.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent84">
            <div className="group-child153" />
            <div className="search-1-parent7">
              <img className="search-1-icon9" alt="" src="/search-1.svg" />
              <div className="search9">SEARCH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent85">
        <div className="group-child154" />
        <div className="labhdayak-interior-solutions-c-parent6">
          <div className="labhdayak-interior-solutions8">
            © LABHDAYAK INTERIOR SOLUTIONS Copyright 2024
          </div>
          <div className="group-wrapper92">
            <div className="rectangle-parent86">
              <div className="group-child155" />
              <div className="group-wrapper93">
                <div className="group-wrapper94">
                  <div className="group-wrapper94">
                    <div className="group-wrapper94">
                      <div className="authorized-dealer8">
                        authorized dealer
                      </div>
                      <div className="godrej-interio8">
                        <span className="godrej8">Godrej</span>
                        <span>{` `}</span>
                        <b>interio</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-parent6">
            <div className="about8">About</div>
            <div className="about-us-career-container8">
              <p className="dimensions-w-x">About Us</p>
              <p className="dimensions-w-x">Career</p>
            </div>
          </div>
          <div className="policy-parent6">
            <div className="about8">Policy</div>
            <div className="about-us-career-container8">
              <p className="dimensions-w-x">{`Terms & Conditions`}</p>
              <p className="dimensions-w-x">Privacy Policy</p>
            </div>
          </div>
          <div className="contact-parent6">
            <div className="about8">Contact</div>
            <div className="div8">
              <p className="dimensions-w-x">98 812 08837</p>
            </div>
          </div>
          <div className="rectangle-parent87">
            <div className="group-child156" />
            <div className="registered-member-parent6">
              <div className="registered-member8">
                <span className="r8">R</span>
                <span className="egistered8">{`egistered `}</span>
                <span className="r8">M</span>
                <span className="egistered8">EMBER</span>
              </div>
              <img
                className="px-gem-logo-1-icon8"
                alt=""
                src="/2560pxgemlogo-1@2x.png"
              />
            </div>
          </div>
          <div className="facebook-1-parent6">
            <img className="facebook-1-icon8" alt="" src="/facebook-1.svg" />
            <img className="whatsapp-1-icon8" alt="" src="/whatsapp-1.svg" />
            <img className="youtube-1-icon8" alt="" src="/youtube-1.svg" />
            <img className="linkedin-1-icon8" alt="" src="/linkedin-1.svg" />
            <img className="instagram-1-icon8" alt="" src="/instagram-1.svg" />
          </div>
          <div className="mumbai-pune-road8">
            43 Mumbai Pune Road, Jasraj Complex, Pune, Maharashtra 411 003
          </div>
          <div className="group-parent68">
            <img className="group-child157" alt="" src="/group-8@2x.png" />
            <img className="group-child158" alt="" src="/group-9.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop8;
