

import ProductDisplay from '../product/ProducDisplay';

import { StyledProductsListingDisplay } from '../styles/ProductsListing.styled'

export default function ProductListingDisplay ( props ) {
    const { data } = props;

    return (
        <>
            <header>
                {/*  TODO: add product category description to h2 */}
                <h2>Products</h2>            
            </header>
            <StyledProductsListingDisplay>

                <br />
                {/* <div role="presentation" aria-label="products"> */}
                    {data.map((item) => (
                        <ProductDisplay item={item} />
                    ))}     
                {/* </div> */}
            </StyledProductsListingDisplay>
        </>
    )
}