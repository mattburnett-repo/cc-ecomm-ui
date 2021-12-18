import NavBar from '../nav/NavBar';
import BrowseSearch from "../../features/nav/BrowseSearch";

export default function ProductListingDisplay ( props ) {
    const { data } = props;

    return (
        <div>
            {/* <div role='presentation' aria-label="product-category">product category goes here</div> */}
            <NavBar calledFrom="productListing" />
            <BrowseSearch />

            {/* FIXME: this doesn't render anything */}
            <div role="presentation" aria-label="products">
                {data.map((item, index) => (
                    // <div role="presentation" aria-label="order">order_id: {item.order_id} user_id: {item.user_id} order_date: {item.order_date} total_price: {item.total_price.sum}</div>
                    // <div role="presentation" aria-label="product-category-id">{mockProductData.category_id}</div>
                    // <div role="presentation" aria-label="product-image-url">{mockProductData.image_url}</div>
                    // <div role="presentation" aria-label="product-name">{mockProductData.name}</div>
                    // <div role="presentation" aria-label="product-description">{mockProductData.description}</div>
                    // <div role="presentation" aria-label="product-price">{mockProductData.price}</div> 
                    // <div role="presentation" aria-label='order' key={index}>order</div>
                    <div role="presentation" aria-label='product' key={index}>product</div>
                ))}     
            </div>
        </div>
    )
}