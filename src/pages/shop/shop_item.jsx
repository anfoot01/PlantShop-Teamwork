import { ShopItemCard } from './shop_item_card';
import { ShopItemAdditional } from './shop_item_additional';
import { ShopItemToggle } from './shop_item_toggle';
import { CommonBanner } from "../../shared/banner";
import ShopSingleBanner from "/banners/shop-single-bg.jpg"

export const ShopItem = () => {

    return(
        <div>
            <CommonBanner imgSrc={ShopSingleBanner} altText={'ShopSingleBanner'}/>
            <ShopItemCard />
            <ShopItemToggle />
            <ShopItemAdditional />
        </div>
    )
}