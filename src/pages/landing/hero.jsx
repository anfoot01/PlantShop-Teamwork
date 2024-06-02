import heroDishImage from '/hero/hero_dish.png';
import heroDecorFigs from '/hero/hero_decor_figs.svg';
import heroDecorLeaves1 from '/hero/hero_decor_leaves_1.svg';
import heroDecorLeaves2 from '/hero/hero_decor_leaves_2.svg';
import heroDecorLeaves3 from '/hero/hero_decor_leaves_3.svg';
import heroDecorLeaves4 from '/hero/hero_decor_leaves_4.svg';
import heroDecorLeaves5 from '/hero/hero_decor_leaves_5.svg';
import heroDecorStrawberry from '/hero/hero_decor_strawberry.svg';

export const HeroLanding = () => {
    return (
      <div className="hero">
          <div className="hero__container">
            <div className="hero__info">
              <div className="hero__slogan">100% Natural Food</div>
              <div className="hero__title">Choose the best healthier way of life</div>
              <div className="hero__button">
                <p className="btn-text">Explore Now</p>
                <div className="btn-arrow">
                  <svg width="1em" height="1em" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hero__image">
              <img src={heroDishImage} alt="Hero Dish" />
            </div>
            <div className="hero-decor-figs">
              <img src={heroDecorFigs} alt="Hero Decor Figs" />
            </div>
            <div className="hero-decor-leaves-5">
              <img src={heroDecorLeaves5} alt="Hero Decor Leaves" />
            </div>
            <div className="hero-decor-strawberry">
              <img src={heroDecorStrawberry} alt="Hero Decor Strawberry" />
            </div>
            <div className="hero-decor-leaves-4">
              <img src={heroDecorLeaves4} alt="Hero Decor Leaves" />
            </div>
            <div className="hero-decor-leaves-3">
              <img src={heroDecorLeaves3} alt="Hero Decor Leaves" />
            </div>
            <div className="hero-decor-leaves-2">
              <img src={heroDecorLeaves2} alt="Hero Decor Leaves" />
            </div>
            <div className="hero-decor-leaves-1">
              <img src={heroDecorLeaves1} alt="Hero Decor Leaves" />
            </div>
          </div>
      </div>
    );
  } 