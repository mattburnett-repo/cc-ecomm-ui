
// USE THIS COMPONENT TO DISPLAY PRODUCTS IN PRODUCTS LISTING DISPLAY 
//      use ProductDetailDisplay to break out and show info about one product

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addItemToCurrentCart } from "../../features/carts/currentCartActions"
import ItemQuantity from '../../widgets/ItemQuantity'

import { StyledProductDisplay } from "../styles/ProductDisplay.styled"

export default function ProductDisplay (props) {
    const { item } = props

    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <StyledProductDisplay>
            {/* <div role="presentation" aria-label='product' key={item.id}> */}
                <div role="img" id="product-image-url" aria-label='product-image-url'> 
                    <img src={item.image_url} alt={item.name} id={item.id} onClick={() => history.push('/product-detail/' + item.id)}/>
                    {/* <img src={item.image_url} alt={item.name} id={item.id} /> */}
                </div>

                <h3 role='presentation' aria-label='product-name'>{item.name}</h3>

                <div id="product-order-controls" role="presentation" aria-label='product-order-controls'>
                    <label htmlFor='product-price'>Price:</label>
                    <div role='presentation' aria-label='product-price'>{item.price}</div>

                    <div role="presentation" aria-label='product-item-quantity'>
                        <ItemQuantity itemId={item.id}/>
                    </div> &nbsp;&nbsp;
                    <button aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
                </div>
            {/* </div> */}
        </StyledProductDisplay>
    )
}
