import DiscountImageBlock1 from '/discount-image-block1.png'
import DiscountImageBlock2 from '/discount-image-block2.png'

export const DiscountLanding = () => {
    return (
      <div className='discount'>
          <div className="discount__image-block">
            <img src={DiscountImageBlock1} alt="DiscountImageBlock1" />
          </div>
          <div className="discount__image-block">
            <img src={DiscountImageBlock2} alt="DiscountImageBlock2" />
          </div>
      </div>
    );
  }