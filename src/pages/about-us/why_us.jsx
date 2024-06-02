import { Ellipse } from "../../shared/icons/ellipse"
import AboutWhyUsImage from "/public/about_why-us-photo.jpg";
import AboutWhyUsReturnIcon from "/public/about_why-us_return-icon.svg";
import AboutWhyUsFreshIcon from "/public/about_why-us_fresh-icon.svg";
import AboutWhyUsSecuredIcon from "/public/about_why-us_secured-icon.svg";
import AboutWhyUsSupportIcon from "/public/about_why-us_support-icon.svg";
export const WhyUsAboutUs = () => {
    return (
      <div className="why-us">
        <div className="why-us__main">
          <div className="why-us__main-contact">
            <div className="why-us__main-contact-header">Why Choose us?</div>
            <h2 className="why-us__main-contact-title">We do not buy from the open market & traders.</h2>
            <p className="why-us__main-contact-main-desc">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
            <div className="why-us__main-contact-point">
              <div className="why-us__main-contact-point-icon"><Ellipse /></div>
              <div className="why-us__main-contact-point-title">100% Natural Product</div>
            </div>
            <p className="why-us__main-contact-description with-margin-bottom">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <div className="why-us__main-contact-point">
              <div className="why-us__main-contact-point-icon"><Ellipse /></div>
              <div className="why-us__main-contact-point-title"> Increases resistance</div>
            </div>
            <p className="why-us__main-contact-description">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
          </div>
          <img className="why-us__main-image" src={AboutWhyUsImage} alt="AboutWhyUsImage" />
        </div>
        <div className="why-us__container">
          <div className="why-us__container-elements">
            <div className="why-us__container-elements-info">
              <div className="why-us__container-elements-info-icon">
                <img className="why-us__container-elements-info-icon-photo" src={AboutWhyUsReturnIcon} alt="AboutWhyUsReturnIcon" />
              </div>
              <h6 className="why-us__container-elements-info-title">Return Policy</h6>
              <div className="why-us__container-elements-info-desc">
                <p className="why-us__container-elements-info-desc-text">Simply dummy text of the printintypesetting industry.</p>
              </div>
            </div>

            <div className="why-us__container-elements-info">
              <div className="why-us__container-elements-info-icon">
                <img className="why-us__container-elements-info-icon-photo" src={AboutWhyUsFreshIcon} alt="AboutWhyUsReturnIcon" />
              </div>
              <h6 className="why-us__container-elements-info-title">100% Fresh</h6>
              <div className="why-us__container-elements-info-desc">
                <p className="why-us__container-elements-info-desc-text">Simply dummy text of the printintypesetting industry.</p>
              </div>
            </div>

            <div className="why-us__container-elements-info">
              <div className="why-us__container-elements-info-icon">
                <img className="why-us__container-elements-info-icon-photo" src={AboutWhyUsSupportIcon} alt="AboutWhyUsReturnIcon" />
              </div>
              <h6 className="why-us__container-elements-info-title">Support 24/7</h6>
              <div className="why-us__container-elements-info-desc">
                <p className="why-us__container-elements-info-desc-text">Simply dummy text of the printintypesetting industry.</p>
              </div>
            </div>

            <div className="why-us__container-elements-info secured">
              <div className="why-us__container-elements-info-icon">
                <img className="why-us__container-elements-info-icon-photo" src={AboutWhyUsSecuredIcon} alt="AboutWhyUsReturnIcon" />
              </div>
              <h6 className="why-us__container-elements-info-title">Secured Payment</h6>
              <div className="why-us__container-elements-info-desc">
                <p className="why-us__container-elements-info-desc-text">Simply dummy text of the printintypesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  