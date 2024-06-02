import Food from "/about/food.svg"
import Mailbox from "/about/mailbox.svg"
import Arrow from "/about/arrow.svg"
export const AboutUsLanding = () => {
  return (
    <div className="about__container">
      <div className="about__img">
        <img src="/about/fruit.png" alt="Photo" />
      </div>
      <div className="about__box">
        <div className="about__title">About Us</div>
        <h2 className="about__desc">
          We Believe in Working Accredited Farmers{" "}
        </h2>
        <p className="about__paragraph">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&#39;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="about__item">
          <div className="about__icon">
            <img src={Food} alt="vegan food" />
          </div>
          <div className="about__smalldesc">
            <h6 className="about__smalltitle">Organic Foods Only</h6>{" "}
            <p className="about__paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <div className="about__item">
          <div className="about__icon">
            <img src={Mailbox} alt="Mailbox" />
          </div>
          <div className="about__smalldesc">
            <h6 className="about__smalltitle">Quality Standards</h6>{" "}
            <p className="about__paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <a href="/Shop" className="about_us__btn" type="submit">
          Explore More <img src={Arrow} alt="arrow" />
        </a>
      </div>
    </div>
  )
}
