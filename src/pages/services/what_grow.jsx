import whatGrowPoster from '/service/what_grow_poster.png';
import delivery from '/service/service-icons/delivery.png';
import leaves from '/service/service-icons/leaves.png';
import milkBottle from '/service/service-icons/milk_bottle.png';
import radish from '/service/service-icons/radish.png';
import store from '/service/service-icons/store.png';
import vegetBag from '/service/service-icons/veget_bag.png';

export const WhatGrowService = () => {
    return (
      <section className="what-grow">
        <div className="what-grow__chapter-name">What we Grow</div>
        <div className="what-grow__title">Better Agriculture for Better Future</div>
        <div className="what-grow__content">
          <div className="what-grow-list">
            <div className="what-grow-list__left">
              <div className="what-grow-list__item">
                <div className="what-grow-list__item-ico">
                  <img src={milkBottle} alt="milk bottle" />
                </div>
                <div className="what-grow-list__item-title">Dairy Products</div>
                <div className="what-grow-list__item-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</div>
              </div>
              <div className="what-grow-list__item">
                <div className="what-grow-list__item-ico">
                  <img src={store} alt="store" />
                </div>
                <div className="what-grow-list__item-title">Store Services</div>
                <div className="what-grow-list__item-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</div>
              </div>
              <div className="what-grow-list__item">
                <div className="what-grow-list__item-ico">
                  <img src={delivery} alt="car" />
                </div>
                <div className="what-grow-list__item-title">Delivery Services</div>
                <div className="what-grow-list__item-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</div>
              </div>
            </div>
            <div className="what-grow__image">
              <img src={whatGrowPoster} alt="What Grow Poster Pistachios" />
            </div>
            <div className="what-grow-list__right">
              <div className="what-grow-list__item">
                  <div className="what-grow-list__item-ico">
                    <img src={leaves} alt="leaves" />
                  </div>
                  <div className="what-grow-list__item-title">Agricultural Services</div>
                  <div className="what-grow-list__item-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</div>
              </div>
              <div className="what-grow-list__item">
                  <div className="what-grow-list__item-ico">
                    <img src={vegetBag} alt="vegetable bag" />
                  </div>
                  <div className="what-grow-list__item-title">Organic Products</div>
                  <div className="what-grow-list__item-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</div>
              </div>
              <div className="what-grow-list__item">
                  <div className="what-grow-list__item-ico">
                    <img src={radish} alt="radish" />
                  </div>
                  <div className="what-grow-list__item-title">Fresh Vegetables</div>
                  <div className="what-grow-list__item-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</div>
              </div>
            </div>
          </div>
          <div className="what-grow__image-tablet">
            <img src={whatGrowPoster} alt="What Grow Poster Pistachios" />
          </div>
        </div>
        <div className="what-grow__button">
                <p className="btn-text">Explore More</p>
                <div className="btn-arrow">
                  <svg width="1em" height="1em" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
      </section>
    )
  }
  