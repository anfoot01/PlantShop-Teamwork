import { Star } from "../../../public/assets/img/testimonial/Star";
import Reviewer from "/reviewer.png"
import BG from "/testimonial_bg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialLanding = () => {
  const reviews = [
    {
      photo: Reviewer,
      name: "Sara Taylor",
      occupation: "Consumer",
      desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },

    {
      photo: Reviewer,
      name: "Hannah Lake",
      occupation: "Consumer",
      desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },

    {
      photo: Reviewer,
      name: "Nellie Lynch",
      occupation: "Consumer",
      desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const sectionBG = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="testimonial" style={sectionBG}>
      <p className="testimonial__pretitle">Testimonial</p>
      <h2 className="testimonial__title">What Our Customers Are Saying?</h2>

      <div className="testimonial__slider-container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="testimonial__review">
              <div className="reviewer">
                <img src={review.photo} alt={review.name} className="reviewer__img" />
                <div className="reviewer__rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="reviewer__desc">{review.desc}</p>
                <h3 className="reviewer__name">{review.name}</h3>
                <p className="reviewer__occupation">{review.occupation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="testimonial__separator"></div>
      <div className="testimonial__group">
        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">100%</h2>
                <p className="testimonial__rating-desc">Organic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">285</h2>
                <p className="testimonial__rating-desc">Active Product</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">350+</h2>
                <p className="testimonial__rating-desc">Organic Orchads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">25+</h2>
                <p className="testimonial__rating-desc">Years of Farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
