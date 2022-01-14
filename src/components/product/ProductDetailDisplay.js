
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ItemQuantity from '../../widgets/ItemQuantity'
import { addItemToCurrentCart } from '../../features/carts/currentCartActions'

import { StyledProductDetailDisplay } from '../styles/ProductDetailDisplay.styled'

// USE THIS COMPONENT TO BREAK OUT AND SHOW INFO ABOUT ONE PRODUCT
//      use ProductDisplay to display products in ProductsListingDisplay

export default function ProductDetailDisplay ( props ) {
    const { item } = props

    // const history = useHistory()
    const dispatch = useDispatch()

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
                <div id='product-order-controls' role="presentation" aria-label='product-order-controls'>
                    <div id="product-price" role='presentation' aria-label='product-price'>Price: {item.price}</div>
                    <div id='product-item-quantity' role="presentation" aria-label='product-item-quantity'>
                        <ItemQuantity itemId={item.id}/>
                    </div>                     
                    <button id="add-to-cart-button" aria-label="add-to-cart-button" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
                </div>                  
            </StyledProductDetailDisplay>
        </>
    )
}