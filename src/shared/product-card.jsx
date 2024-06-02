/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { RatingStar } from './rating';
import '../styles/shared/_product-card.scss';

export const ProductCard = ({ item }) => {

    return (
        <Link to={`/shop/shop-item/${item.id}`}>
            <div className='card' style={{backgroundImage: `url(${item.image.src})`}}>
                <label>{item.item.type}</label>
                <div className='card__panel'>
                    <p className='card__name'>{item.item.name}</p>
                    <div className='card__panel-bottom'>
                        <div className='card__panel-price'>
                            <span className='card__fullprice'>{item.price.fullprice}</span>
                            <span className='card__discountprice'>{item.price.discountprice}</span>
                        </div>
                        <div className='card__panel-rating'>
                            <RatingStar length={5} count={item.item.rating} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};