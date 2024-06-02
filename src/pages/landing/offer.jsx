import { ProductCard } from '../../shared/product-card';
import productData from '../../data/products-items.json';
import { ArrowIcon } from '../../shared/icons/arrowIcon';


export const OfferLanding = () => {
  const productList = productData.slice(12, 17);
  return (
    <section className="offerLanding">

      <div className="offerInfo">

        <div className="offerText">
          <p className="offerText__title">Offer</p>
          <h2 className="offerText__desc">We Offer Organic For You</h2>
        </div>

        <div className="offerButton">
          <a href="/" className="offerButton__btn">View All Product <span className='offerButton__btnArrow'><ArrowIcon /></span></a>
        </div>

      </div>

      <div className="offerCards">

        {productList.map((item, index) => (
          <ProductCard key={item.id || index} item={item} />
        ))}

      </div>
    </section>
  );
}