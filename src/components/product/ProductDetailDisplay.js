
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ItemQuantity from '../../widgets/ItemQuantity'
import { addItemToCurrentCart } from '../../features/carts/currentCartActions'

import { StyledProductDetailDisplay } from '../styles/ProductDetailDisplay.styled'

// USE THIS COMPONENT TO BREAK OUT AND SHOW INFO ABOUT ONE PRODUCT
//      use ProductDisplay to display products in ProductsListingDisplay

export default function ProductDetailDisplay ( props ) {
    const { item } = props

    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <>
            <header>
            <h4>Product Detail Display</h4>
            </header>
        
            <StyledProductDetailDisplay>
                <div id="productImage" role="presentation" aria-label="product-image">
                    <div role="presentation" aria-label='product' key={item.id}></div>
                    <div role="img" id="product-image-url" aria-label='product-image-url'> 
                        <img src={item.image_url} alt={item.name} id={item.id} />
                    </div>                
                </div>
                <div id="productInfo" role="presentation" aria-label='product-info'>
                    <label htmlFor='product-name'>Product Name:</label>
                    <div id="product-name" role='presentation' aria-label='product-name'>{item.name}</div>
                    <label htmlFor='product-description'>Product Description:</label>
                    <div id="product-description" role='presentation' aria-label='product-description'>{item.description}</div>

                    <div role="presentation" aria-label='product-order-controls'>
                        <label htmlFor='product-price'>Price:</label>
                        <div role='presentation' aria-label='product-price'>{item.price}</div>

                        <div role="presentation" aria-label='product-item-quantity'>
                            <ItemQuantity itemId={item.id}/>
                        </div>
                        <button aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
                        <button aria-label="go-back-button" onClick={() => history.goBack()}>Go Back</button>
                    </div>              
                </div>
            </StyledProductDetailDisplay>
        </>
    )
}