
import OrderControls from '../../widgets/OrderControls'

import { StyledProductDetailDisplay } from '../styles/ProductDetailDisplay.styled'

// USE THIS COMPONENT TO BREAK OUT AND SHOW INFO ABOUT ONE PRODUCT
//      use ProductDisplay to display products in ProductsListingDisplay

export default function ProductDetailDisplay ( props ) {
    const { item } = props

    return (   
        <StyledProductDetailDisplay>
            <div className='product-detail-container' role="presentation" aria-label='product-detail-display'>
                <div>
                 <img className="product-image" src={item.image_url} alt={item.name} />                   
                </div>

                <div className="product-info" role="presentation" aria-label='product-info'>
                    <label htmlFor='product-description'>Description:</label>
                    <div className="product-description" role='presentation' aria-label='product-description'>{item.description}</div>
                </div>    
                <OrderControls item={item} />
            </div>
        </StyledProductDetailDisplay>
    )
}