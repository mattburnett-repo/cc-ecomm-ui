
import { useDispatch } from 'react-redux'

import { addItemToCurrentCart } from "../../features/carts/currentCartActions"
import ItemQuantity from '../../widgets/ItemQuantity'

import { StyledProductDetailDisplay } from "../styles/ProductDetail.styled"

export default function ProductDisplay (props) {
    const { item } = props

    const dispatch = useDispatch()

    return (
        <StyledProductDetailDisplay>
            <h3>{item.name}</h3>
            <div role="presentation" aria-label='product' key={item.id}>
                <div role="img" id="product-image-url" aria-label='product-image-url'> 
                    {/* <img src={item.image_url} alt={item.name} id={item.id} onClick={() => history.push('/product-detail/' + item.id)}/> */}
                    <img src={item.image_url} alt={item.name} id={item.id} />
                </div>

                <label htmlFor='product-description'>Description:</label>
                <div role='presentation' aria-label='product-description'>{item.description}</div>

                <div role="presentation" aria-label='product-order-controls'>
                    <label htmlFor='product-price'>Price:</label>
                    <div role='presentation' aria-label='product-price'>{item.price}</div>

                    <div role="presentation" aria-label='product-item-quantity'>
                        <ItemQuantity itemId={item.id}/>
                    </div>
                    <button aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
                </div>
            </div>
        </StyledProductDetailDisplay>
    )
}
