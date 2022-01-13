
// https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/
import useCollapse from 'react-collapsed';

import BrowseSearch from '../../features/nav/BrowseSearch';
import ProductDisplay from '../product/ProducDisplay';

import { StyledProductsListingDisplay } from '../styles/ProductsListing.styled'

export default function ProductListingDisplay ( props ) {
    const { data } = props;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <>
            <header  {...getToggleProps()}>
                {/*  TODO: add product category description to h2 */}
                <h2>Click to {isExpanded ? 'Hide' : 'Show'} Products</h2>         
            </header>
            <div {...getCollapseProps()}>
                <BrowseSearch />
                <StyledProductsListingDisplay>
                    <br />
                    {data.map((item) => (
                        <ProductDisplay item={item} />
                    ))}     
                </StyledProductsListingDisplay>
            </div>
        </>
    )
}