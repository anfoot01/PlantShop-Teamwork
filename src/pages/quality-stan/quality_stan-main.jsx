import { Newsletter } from "../../shared/newsletter"
import { CommonBanner } from "../../shared/banner"
import QualityBanner from "/banners/quality-bg.jpg"
import Photo from "/public/quality/Photo.png"
import Seedlings from "/public/quality/seedlings.png"
import Pots from "/public/quality/pots.png"

export const QualityStandartPage = () => {
    return (
      <div className="quality_standart-page">
        <CommonBanner imgSrc={QualityBanner} altText={"QualityBanner"} />
        <img className="quality__img" src={Photo} alt="photo" />
        <div className="quality__title">
          <h2 className="quality__heading2">Organic Store Services</h2>

          <p className="quality__paragraph">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &#39;Content here, content here&#39;,
            making it look like readable English.{" "}
          </p>
          <p className="quality__paragraph">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
          <div className="quality__container">
            <div className="quality__item">
              <img className="quality-item__img" src={Seedlings} alt="Image" />
              <div className="quality-container__title">
                Why Organic
                <p className="quality__paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>
            <div className="quality__item">
              <img className="quality-item__img" src={Pots} alt="pots" />
              <div className="quality-container__title">
              Speciality Produce
                <p className="quality__paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>

            <h4 className="quality__heading4">We farm your land</h4>
            <p className="quality__paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &#39;Content here,
              content here&#39;, making it look like readable English.
            </p>
            <div className="quality__advantages-box">
              <div className="quality__advantages-item">
                <div className="quality__advantages-number">1</div>
                <div className="quality__advantages-desc">
                  <h6>Best quality support</h6>
                </div>
              </div>
              <div className="quality__advantages-item">
                <div className="quality__advantages-number">2</div>
                <div className="quality__advantages-desc">
                  <h6> Money back guarantee</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    )
  }
 


