import farmsLocation from "/farms/farms-location.svg";

export const FarmsContactUs = () => {
  return (
    <section className="farms"
    >
      <div className="farms__text">
        <div className="farms__slogan">Location</div>
        <div className="farms__title">Our Farms</div>
        <div className="farms__desc">
          Established fact that a reader will be distracted by the readable
          content of a page when looking a layout. The point of using.
        </div>
        <div className="farms-items">
          <a href="https://maps.app.goo.gl/ojvfkpSJEJy7pKuB7" target="_blank" className="farms-item">
            <div className="farms-item__location">
              <img src={farmsLocation} alt="Location" />
            </div>
            <div className="farms-item__text">
              <div className="farms-item__title">New York, USA:</div>
              <div className="farms-item__desc">
                299 Park Avenue New York, New York 10171
              </div>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/yNC17Q5QFf5aUarB9" target="_blank" className="farms-item">
            <div className="farms-item__location">
              <img src={farmsLocation} alt="Location" />
            </div>
            <div className="farms-item__text">
              <div className="farms-item__title">London, UK:</div>
              <div className="farms-item__desc">
                30 Stamford Street, London SE1 9LQ
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
