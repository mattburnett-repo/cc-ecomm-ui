import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'

import { addItemToCurrentCart } from "../../features/carts/currentCartActions"
import ItemQuantity from '../../widgets/ItemQuantity'

import { StyledProductDetailDisplay } from "../styles/ProductDetail.styled"

export default function ProductDetailDisplay (props) {
    const { item } = props

    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <StyledProductDetailDisplay>
            <h3>{item.name}</h3>
            <div role="presentation" aria-label='product' key={item.id}>
                <div role="img" id="product-image-url" aria-label='product-image-url'> 
                    <img src={item.image_url} alt={item.name} id={item.id} onClick={() => history.push('/product-detail/' + item.id)}/>
                </div>

                <label htmlFor='product-id'>Product ID:</label>
                <div role='presentation' aria-label='product-id'>{item.id}</div>
                <label htmlFor='product-name'>Product Name:</label>
                <div role='presentation' aria-label='product-name'>{item.name}</div>
                <label htmlFor='product-description'>Product Description:</label>
                <div role='presentation' aria-label='product-description'>{item.description}</div>

                <label htmlFor='product-price'>Product Price:</label>
                <div role='presentation' aria-label='product-price'>{item.price}</div>

                <div role="presentation" aria-label='product-item-quantity'>
                    <ItemQuantity itemId={item.id}/>
                </div>

                {/* FIXME: pass in quantity if user selects greater than 1 */}
                <button aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
                {/* <div aria-label="product-detail-go-back">
                    <button aria-label="product-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
                </div> */}
            </div>
        </StyledProductDetailDisplay>
    )
}
