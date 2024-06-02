import { ProductCard } from "../../shared/product-card";
import productData from '../../data/products-items.json';

export const ShopShop = () => {
  const productList = productData;

    return (
      <section className="shop">
          <div className="shop__container">
            {productList.map((item, index) => (
                <ProductCard key={item.id || index} item={item} />
            ))}
          </div>
      </section>
    )
  }
  