import EcoFriendlyLandingImage from '/public/eco-friendly-landing-photo.jpg';

export const EcoFriendlyLanding = () => {
    return (
      <div className="eco-friendly-landing">
          <img className="eco-friendly-landing__photo" src={EcoFriendlyLandingImage} alt="eco-friendly-landing-photo" />
          <div className="eco-friendly-landing__container">
            <div className="eco-friendly-landing__header">Eco Friendly</div>
            <h2 className="eco-friendly-landing__title">Econis is a Friendly Organic Store</h2>
            <div className="eco-friendly-landing__point">
              <a href="/" className="eco-friendly-landing__link">Start with Our Company First</a>
              <p className="eco-friendly-landing__desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
            <div className="eco-friendly-landing__point">
              <a href="/" className="eco-friendly-landing__link">Learn How to Grow Yourself</a>
              <p className="eco-friendly-landing__desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
            <div className="eco-friendly-landing__point">
              <a href="/" className="eco-friendly-landing__link">Farming Strategies of Today</a>
              <p className="eco-friendly-landing__desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
          </div>
      </div>
    );
  }