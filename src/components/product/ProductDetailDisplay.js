
import OrderControls from '../../widgets/OrderControls'

import { StyledProductDetailDisplay } from '../styles/ProductDetailDisplay.styled'

// USE THIS COMPONENT TO BREAK OUT AND SHOW INFO ABOUT ONE PRODUCT
//      use ProductDisplay to display products in ProductsListingDisplay

export default function ProductDetailDisplay ( props ) {
    const { item } = props

    return (
        <>        
            <StyledProductDetailDisplay>
                <div role="presentation" aria-label="product-image">
                    <img id="product-image" src={item.image_url} alt={item.name} />
                </div>
                <div id="product-info" role="presentation" aria-label='product-info'>
                    <label id="product-description-header" htmlFor='product-description'>Description:</label>
                    <div id="product-description" role='presentation' aria-label='product-description'>{item.description}</div>
                </div>    
                <OrderControls item={item} />
            </StyledProductDetailDisplay>
        </>
    )
}