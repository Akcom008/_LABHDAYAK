import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop5.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  const on1IconClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);


  const onGroupIconClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onFurnitureTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSecurityTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  return (
    <div className="desktop-5">
      <div className="desktop-5-child" />
      <img className="desktop-5-item" alt="" src="/vector-41.svg" />
      <div className="hospital3">Hospital</div>
      <div className="desktop-5-inner" />
      <img
        className="empty-chairs-by-table-room-1-icon5"
        alt=""
        src="/emptychairsbytableroom-1@2x.png"
      />
      <div className="rectangle-parent51">
        <div className="group-child90" />
        <div className="trolleys-and-carft-parent">
          <div className="patient-mobility-parent">
            <div className="patient-mobility1">patient mobility</div>
            <div className="products3">17 products</div>
          </div>
        </div>
      </div>
      <img
        className="desktop-5-child1"
        alt=""
        src="/group-158.svg"
        onClick={onGroupIconClick}
      />
      <img
        className="desktop-5-child2"
        alt=""
        src="/group-159@2x.png"
        onClick={onGroupIcon1Click}
      />
      <div className="group-parent28">
        <div className="group-parent29">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" onClick={on1IconClick} />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1" >Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent30">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent31">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent32">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
      </div>
      <div className="group-parent33">
        <div className="group-parent29">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent30">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent31">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
        <div className="group-parent32">
          <div className="rectangle-parent52">
            <div className="group-child91" />
            <img className="image-2-icon9" alt="" src="/image-2@2x.png" />
          </div>
          <div className="chrysalis-nova-wrapper6">
            <div className="patient-mobility1">Chrysalis Nova</div>
          </div>
        </div>
      </div>
      <div className="showing-all-products1">Showing all Products</div>
      <div className="rectangle-parent60">
        <div className="group-child90" />
        <div className="trolleys-and-carft-parent">
          <div className="trolleys-and-carft-container">
            <span className="trolleys">{`trolleys `}</span>
            <span className="a">A</span>
            <span className="trolleys">nd carft</span>
          </div>
          <div className="products3">17 products</div>
        </div>
      </div>
      <div className="desktop-5-inner1">
        <div className="rectangle-parent61">
          <div className="group-child90" />
          <div className="trolleys-and-carft-parent">
            <div className="patient-mobility-parent">
              <div className="patient-mobility1">Mattresses</div>
              <div className="products3">17 products</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent62">
        <div className="group-child101" />
        <div className="group-parent38">
          <div className="furniture-parent4">
            <div className="furniture6" onClick={onFurnitureTextClick}>
              Furniture
            </div>
            <div className="security6" onClick={onSecurityTextClick}>
              Security
            </div>
            <div className="green-panel6">Green Panel</div>
          </div>
          <div className="profile-user-2-parent4">
            <img
              className="profile-user-2-icon6"
              alt=""
              src="/profileuser-2.svg"
            />
            <img
              className="shopping-cart-1-icon6"
              alt=""
              src="/shoppingcart-1.svg"
            />
          </div>
          <div className="group-wrapper62">
            <div className="group-wrapper63">
              <div className="group-wrapper63">
                <div className="group-wrapper63">
                  <div className="group-wrapper63">
                    <img
                      className="group-child102"
                      alt=""
                      src="/group-8@2x.png"
                    />
                    <img
                      className="group-child103"
                      alt=""
                      src="/group-91.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent63">
            <div className="group-child104" />
            <div className="search-1-parent4">
              <img className="search-1-icon6" alt="" src="/search-1.svg" />
              <div className="search6">SEARCH</div>
            </div>
          </div>
        </div>
      </div>
      <img className="image-5-icon" alt="" src="/image-5@2x.png" />
      <img className="image-6-icon" alt="" src="/image-6@2x.png" />
      <img className="image-7-icon" alt="" src="/image-7@2x.png" />
      <div className="rectangle-parent64">
        <div className="group-child105" />
        <div className="labhdayak-interior-solutions-c-parent3">
          <div className="labhdayak-interior-solutions5">
            © LABHDAYAK INTERIOR SOLUTIONS Copyright 2024
          </div>
          <div className="group-wrapper66">
            <div className="rectangle-parent65">
              <div className="group-child106" />
              <div className="group-wrapper67">
                <div className="group-wrapper68">
                  <div className="group-wrapper68">
                    <div className="group-wrapper68">
                      <div className="authorized-dealer5">
                        authorized dealer
                      </div>
                      <div className="godrej-interio5">
                        <span className="godrej5">Godrej</span>
                        <span>{` `}</span>
                        <b>interio</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-parent3">
            <div className="about5">About</div>
            <div className="about-us-career-container5">
              <p className="about-us5">About Us</p>
              <p className="about-us5">Career</p>
            </div>
          </div>
          <div className="policy-parent3">
            <div className="about5">Policy</div>
            <div className="about-us-career-container5">
              <p className="about-us5">{`Terms & Conditions`}</p>
              <p className="about-us5">Privacy Policy</p>
            </div>
          </div>
          <div className="contact-parent3">
            <div className="about5">Contact</div>
            <div className="div5">
              <p className="about-us5">98 812 08837</p>
            </div>
          </div>
          <div className="rectangle-parent66">
            <div className="group-child107" />
            <div className="registered-member-parent3">
              <div className="registered-member5">
                <span className="r5">R</span>
                <span className="a">{`egistered `}</span>
                <span className="r5">M</span>
                <span className="a">EMBER</span>
              </div>
              <img
                className="px-gem-logo-1-icon5"
                alt=""
                src="/2560pxgemlogo-1@2x.png"
              />
            </div>
          </div>
          <div className="facebook-1-parent3">
            <img className="facebook-1-icon5" alt="" src="/facebook-1.svg" />
            <img className="whatsapp-1-icon5" alt="" src="/whatsapp-1.svg" />
            <img className="youtube-1-icon5" alt="" src="/youtube-1.svg" />
            <img className="linkedin-1-icon5" alt="" src="/linkedin-1.svg" />
            <img className="instagram-1-icon5" alt="" src="/instagram-1.svg" />
          </div>
          <div className="mumbai-pune-road5">
            43 Mumbai Pune Road, Jasraj Complex, Pune, Maharashtra 411 003
          </div>
          <div className="group-parent40">
            <img className="group-child108" alt="" src="/group-8@2x.png" />
            <img className="group-child109" alt="" src="/group-9.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop5;
