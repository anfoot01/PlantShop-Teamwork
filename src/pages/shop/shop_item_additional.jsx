import { ProductCard } from "../../shared/product-card";
import productData from '../../data/products-items.json';

export const ShopItemAdditional = () => {
  const productList = productData.slice(0, 4);

    return (
      <div className="shop__item-additional">
        <h2>Related Products</h2>
          <div className="shop__item-proposition">
            {productList.map((item, index) => (
                <ProductCard key={item.id || index} item={item} />
            ))}
          </div>
      </div>
    )
  }