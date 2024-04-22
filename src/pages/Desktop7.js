import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop7.css";

const Desktop7 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  const onFurnitureTextClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onSecurityTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  return (
    <div className="desktop-6">
      <div className="desktop-6-child" />
      <div className="desktop-6-item" />
      <img
        className="empty-chairs-by-table-room-1-icon7"
        alt=""
        src="/emptychairsbytableroom-1@2x.png"
      />
      <div className="rectangle-parent75">
        <div className="group-child138" />
        <img className="image-2-icon17" alt="" src="/image-2@2x.png" />
      </div>
      <div className="group-parent62">
        <div className="chrysalis-nova-parent">
          <b className="chrysalis-nova16">Chrysalis Nova</b>
          <b className="chrysalis-nova-motorized">
            Chrysalis Nova motorized beds are a range of seven function fully
            motorized patient care beds, which are CE certified and built to
            promise : patient comfort, caregiver convenience, unparalleled
            safety, ease of mobility and ease of maintenance. Additionally, they
            incorporate a wide range of value-added features, compatibility with
            multiple accessories, elegant aesthetics and flexibly designed to
            match the needs of intensive care.
          </b>
        </div>
        <div className="rectangle-parent76" onClick={onGroupContainer1Click}>
          <div className="group-child139" />
          <b className="know-more">know more</b>
        </div>
      </div>
      <div className="rectangle-parent77">
        <div className="group-child140" />
        <div className="group-parent63">
          <div className="furniture-parent6">
            <b className="furniture8" onClick={onFurnitureTextClick}>
              Furniture
            </b>
            <b className="security8" onClick={onSecurityTextClick}>
              Security
            </b>
            <b className="green-panel8">Green Panel</b>
          </div>
          <div className="profile-user-2-parent6">
            <img
              className="profile-user-2-icon8"
              alt=""
              src="/profileuser-2.svg"
            />
            <img
              className="shopping-cart-1-icon8"
              alt=""
              src="/shoppingcart-1.svg"
            />
          </div>
          <div className="group-wrapper80">
            <div className="group-wrapper81">
              <div className="group-wrapper81">
                <div className="group-wrapper81">
                  <div className="group-wrapper81">
                    <img
                      className="group-child141"
                      alt=""
                      src="/group-8@2x.png"
                    />
                    <img
                      className="group-child142"
                      alt=""
                      src="/group-91.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent78">
            <div className="group-child143" />
            <div className="search-1-parent6">
              <img className="search-1-icon8" alt="" src="/search-1.svg" />
              <b className="search8">SEARCH</b>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent79">
        <div className="group-child144" />
        <div className="labhdayak-interior-solutions-c-parent5">
          <div className="labhdayak-interior-solutions7">
            © LABHDAYAK INTERIOR SOLUTIONS Copyright 2024
          </div>
          <div className="group-wrapper84">
            <div className="rectangle-parent80">
              <div className="group-child145" />
              <div className="group-wrapper85">
                <div className="group-wrapper86">
                  <div className="group-wrapper86">
                    <div className="group-wrapper86">
                      <div className="authorized-dealer7">
                        authorized dealer
                      </div>
                      <div className="godrej-interio7">
                        <span className="godrej7">Godrej</span>
                        <span>{` `}</span>
                        <b>interio</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-parent5">
            <div className="about7">About</div>
            <div className="about-us-career-container7">
              <p className="about-us7">About Us</p>
              <p className="about-us7">Career</p>
            </div>
          </div>
          <div className="policy-parent5">
            <div className="about7">Policy</div>
            <div className="about-us-career-container7">
              <p className="about-us7">{`Terms & Conditions`}</p>
              <p className="about-us7">Privacy Policy</p>
            </div>
          </div>
          <div className="contact-parent5">
            <div className="about7">Contact</div>
            <div className="div7">
              <p className="about-us7">98 812 08837</p>
            </div>
          </div>
          <div className="rectangle-parent81">
            <div className="group-child146" />
            <div className="registered-member-parent5">
              <div className="registered-member7">
                <span className="r7">R</span>
                <span className="egistered7">{`egistered `}</span>
                <span className="r7">M</span>
                <span className="egistered7">EMBER</span>
              </div>
              <img
                className="px-gem-logo-1-icon7"
                alt=""
                src="/2560pxgemlogo-1@2x.png"
              />
            </div>
          </div>
          <div className="facebook-1-parent5">
            <img className="facebook-1-icon7" alt="" src="/facebook-1.svg" />
            <img className="whatsapp-1-icon7" alt="" src="/whatsapp-1.svg" />
            <img className="youtube-1-icon7" alt="" src="/youtube-1.svg" />
            <img className="linkedin-1-icon7" alt="" src="/linkedin-1.svg" />
            <img className="instagram-1-icon7" alt="" src="/instagram-1.svg" />
          </div>
          <div className="mumbai-pune-road7">
            43 Mumbai Pune Road, Jasraj Complex, Pune, Maharashtra 411 003
          </div>
          <div className="group-parent65">
            <img className="group-child147" alt="" src="/group-8@2x.png" />
            <img className="group-child148" alt="" src="/group-9.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop7;
