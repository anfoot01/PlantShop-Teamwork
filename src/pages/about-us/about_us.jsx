import Plant from "/about/plant.svg"
import Tractor from "/about/tractor.svg"
import Arrow from "/about/arrow.svg"
import Plate from "/about/Plate.png"


export const AboutUsAboutUs = () => {

  return (
    <div className="about_us__container">
      <div className="about_us__img">
        <img src={Plate} alt="Vegetable Plate" />
      </div>
      <div className="about_us__box">
        <div className="about_us__title">About Us</div>
        <h2 className="about_us__desc">
          We do Creative <br /> Things for Success
        </h2>
        <p className="about_us__paragraph">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&#39;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <p className="about_us__paragraph">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&#39;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>

        <div className="about_us__item">
          <div className="about_us__icon">
            <img src={Tractor} alt="vegan food" />
          </div>
          <div className="about_us__smalldesc">
            {" "}
            <h6 className="about_us__smalltitle">
              Modern Agriculture Equipment
            </h6>
          </div>
          <div className="about_us__icon">
            <img src={Plant} alt="Mailbox" />{" "}
          </div>
          <div className="about_us__smalldesc">
            <h6 className="about_us__smalltitle">
              No growth hormones are used
            </h6>
          </div>
        </div>
        <a href="/Shop" className="about_us__btn" type="submit">
          Explore More <img src={Arrow} alt="arrow" />
        </a>
      </div>
    </div>
  )
}
