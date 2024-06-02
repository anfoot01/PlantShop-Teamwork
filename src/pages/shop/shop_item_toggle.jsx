import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../data/products-items.json';

export const ShopItemToggle = () => {
    const [activeContent, setActiveContent] = useState('info.info');
    const addInfo = 'We have good discounts for regular customers!';

    const { id } = useParams();
    const product = productData.find((item) => item.id === id);

    const describeInfo = () => {
        setActiveContent('info.info');
    };

    const additionalInfo = () => {
        setActiveContent(addInfo);
    };

    const toggleContent = () => {
        if (activeContent === 'info.info') {
            return <div className='shop__item_desc-info'>
                        <p className='shop__item_desc-text'>{product.info.info}</p>
                    </div>;
        } else if (activeContent === addInfo) {
            return <div className='shop__item-add'>
                    <p className='shop__item_desc-title'>{product.item.name}</p>
                    <p className='shop__item_add-info'>{addInfo}</p>
                 </div>;
        }
    };

    return(
            <div className='shop__item-info'>
                <div className='shop__item_info-btn'>
                    <button
                        className={`shop__item_info-btn1 ${activeContent === 'info.info' ? 'active' : ''}`}
                        onClick={describeInfo}
                    >
                        Product Description
                    </button>
                    <button 
                        className={`shop__item_info-btn2 ${activeContent === addInfo ? 'active' : ''}`}
                        onClick={additionalInfo}
                    >
                        Additional Info
                    </button>
                </div>
                <div className='shop__item_desc-content'>{toggleContent()}</div>
            </div>
        
    )
}