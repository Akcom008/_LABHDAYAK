import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop4.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onFurnitureTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSecurityTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  return (
    <div className="desktop-4">
      <div className="desktop-4-child" />
      <img className="desktop-4-item" alt="" src="/vector-41.svg" />
      <div className="hospital2">Hospital</div>
      <div className="desktop-4-inner" />
      <img
        className="empty-chairs-by-table-room-1-icon4"
        alt=""
        src="/emptychairsbytableroom-1@2x.png"
      />
      <div className="rectangle-parent35">
        <div className="group-child70" />
        <div className="image-2-parent">
          <img className="image-2-icon" alt="" src="/image-2@2x.png" />
          <div className="hospital-beds-parent">
            <div className="hospital-beds">hospital beds</div>
            <div className="products">17 products</div>
          </div>
        </div>
      </div>
      <img
        className="desktop-4-child1"
        alt=""
        src="/group-158.svg"
        onClick={onGroupIconClick}
      />
      <img
        className="desktop-4-child2"
        alt=""
        src="/group-159@2x.png"
        onClick={onGroupIcon1Click}
      />
      <div className="group-parent14">
        <div className="group-parent15" onClick={onGroupContainerClick}>
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent16">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent17">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent18">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
      </div>
      <div className="group-parent19">
        <div className="group-parent20">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent16">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent17">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent18">
          <div className="rectangle-parent36">
            <div className="group-child71" />
            <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper">
            <div className="hospital-beds">Chrysalis Nova</div>
          </div>
        </div>
      </div>
      <div className="showing-all-products">Showing all Products</div>
      <div className="rectangle-parent44">
        <div className="group-child79" />
        <div className="lockers-and-cabinets-parent">
          <div className="hospital-beds">lockers and cabinets</div>
          <div className="products1">17 products</div>
        </div>
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      </div>
      <div className="group-parent24">
        <div className="rectangle-parent45">
          <div className="group-child80" />
          <div className="group-wrapper51">
            <div className="examination-couches-parent">
              <div className="hospital-beds">examination couches</div>
              <div className="products1">17 products</div>
            </div>
          </div>
        </div>
        <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      </div>
      <div className="rectangle-parent46">
        <div className="group-child81" />
        <div className="group-parent25">
          <div className="furniture-parent3">
            <div className="furniture5" onClick={onFurnitureTextClick}>
              Furniture
            </div>
            <div className="security5" onClick={onSecurityTextClick}>
              Security
            </div>
            <div className="green-panel5">Green Panel</div>
          </div>
          <div className="profile-user-2-parent3">
            <img
              className="profile-user-2-icon5"
              alt=""
              src="/profileuser-2.svg"
            />
            <img
              className="shopping-cart-1-icon5"
              alt=""
              src="/shoppingcart-1.svg"
            />
          </div>
          <div className="group-wrapper52">
            <div className="group-wrapper53">
              <div className="group-wrapper53">
                <div className="group-wrapper53">
                  <div className="group-wrapper53">
                    <img
                      className="group-child82"
                      alt=""
                      src="/group-8@2x.png"
                    />
                    <img className="group-child83" alt="" src="/group-91.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent47">
            <div className="group-child84" />
            <div className="search-1-parent3">
              <img className="search-1-icon5" alt="" src="/search-1.svg" />
              <div className="search5">SEARCH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent48">
        <div className="group-child85" />
        <div className="labhdayak-interior-solutions-c-parent2">
          <div className="labhdayak-interior-solutions4">
            © LABHDAYAK INTERIOR SOLUTIONS Copyright 2024
          </div>
          <div className="group-wrapper56">
            <div className="rectangle-parent49">
              <div className="group-child86" />
              <div className="group-wrapper57">
                <div className="group-wrapper58">
                  <div className="group-wrapper58">
                    <div className="group-wrapper58">
                      <div className="authorized-dealer4">
                        authorized dealer
                      </div>
                      <div className="godrej-interio4">
                        <span className="godrej4">Godrej</span>
                        <span>{` `}</span>
                        <b>interio</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-parent2">
            <div className="about4">About</div>
            <div className="about-us-career-container4">
              <p className="about-us4">About Us</p>
              <p className="about-us4">Career</p>
            </div>
          </div>
          <div className="policy-parent2">
            <div className="about4">Policy</div>
            <div className="about-us-career-container4">
              <p className="about-us4">{`Terms & Conditions`}</p>
              <p className="about-us4">Privacy Policy</p>
            </div>
          </div>
          <div className="contact-parent2">
            <div className="about4">Contact</div>
            <div className="div4">
              <p className="about-us4">98 812 08837</p>
            </div>
          </div>
          <div className="rectangle-parent50">
            <div className="group-child87" />
            <div className="registered-member-parent2">
              <div className="registered-member4">
                <span className="r4">R</span>
                <span className="egistered4">{`egistered `}</span>
                <span className="r4">M</span>
                <span className="egistered4">EMBER</span>
              </div>
              <img
                className="px-gem-logo-1-icon4"
                alt=""
                src="/2560pxgemlogo-1@2x.png"
              />
            </div>
          </div>
          <div className="facebook-1-parent2">
            <img className="facebook-1-icon4" alt="" src="/facebook-1.svg" />
            <img className="whatsapp-1-icon4" alt="" src="/whatsapp-1.svg" />
            <img className="youtube-1-icon4" alt="" src="/youtube-1.svg" />
            <img className="linkedin-1-icon4" alt="" src="/linkedin-1.svg" />
            <img className="instagram-1-icon4" alt="" src="/instagram-1.svg" />
          </div>
          <div className="mumbai-pune-road4">
            43 Mumbai Pune Road, Jasraj Complex, Pune, Maharashtra 411 003
          </div>
          <div className="group-parent27">
            <img className="group-child88" alt="" src="/group-8@2x.png" />
            <img className="group-child89" alt="" src="/group-9.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
