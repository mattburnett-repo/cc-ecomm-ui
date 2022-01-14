
// USE THIS COMPONENT TO DISPLAY INDIVIDUAL PRODUCTS IN PRODUCTS LISTING DISPLAY 
//      use ProductDetailDisplay to break out and show info about one product

import { useHistory } from 'react-router-dom'

import OrderControls from '../../widgets/OrderControls'

import { StyledProductDisplay } from "../styles/ProductDisplay.styled"

export default function ProductDisplay (props) {
    const { item } = props

    const history = useHistory()

    return (
        <StyledProductDisplay>
                <div role="img" id="product-image-url" aria-label='product-image-url'> 
                    <img src={item.image_url} alt={item.name} id={item.id} onClick={() => history.push('/product-detail/' + item.id)}/>
                </div>

                <h3 role='presentation' aria-label='product-name'>{item.name}</h3>

                <OrderControls item={item} />
        </StyledProductDisplay>
    )
}
