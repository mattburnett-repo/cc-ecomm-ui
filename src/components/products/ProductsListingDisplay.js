
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ProductDetailDisplay from '../product/ProductDetailDisplay';

// import { addItemToCurrentCart } from "../../features/carts/currentCartActions"

// import ItemQuantity from '../../widgets/ItemQuantity'

import { StyledProductsListingDisplay } from '../styles/ProductsListing.styled'

export default function ProductListingDisplay ( props ) {
    const { data } = props;

    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <StyledProductsListingDisplay>
            <div>
                <div role="presentation" aria-label="products">
                    <h2>ProductsListingDisplay</h2>
                    {data.map((item) => (
                        <ProductDetailDisplay item={item} />
                    ))}     
                </div>
            </div>
        </StyledProductsListingDisplay>
    )
}