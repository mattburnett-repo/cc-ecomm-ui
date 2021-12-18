import NavBar from '../nav/NavBar';
import BrowseSearch from "../../features/nav/BrowseSearch";

export default function ProductListingDisplay ( props ) {
    const { data } = props;

    // console.log(data);

    // probably some sort of array ref/deref here...
    return (
        <div>
            {/* <div role='presentation' aria-label="product-category">product category goes here</div> */}
            <NavBar calledFrom="productListing" />
            <BrowseSearch />

            <div role="presentation" aria-label="products">
                {data.map((item, index) => (
                    <div role="presentation" aria-label='product' key={index}>
                        <label htmlFor='product-name'>Product Name:</label>
                        <div role='presentation' aria-label='product-name'>{item.name}</div>
                        <label htmlFor='product-description'>Product Description:</label>
                        <div role='presentation' aria-label='product-description'>{item.description}</div>
                        <label htmlFor='product-image-url'>Image:</label>
                        <div role="img" id="product-image-url" aria-label='product-image-url'>
                            <img src="item.image_url" alt={item.name} />
                        </div>
                        <label htmlFor='product-price'>Product Price:</label>
                        <div role='presentation' aria-label='product-price'>{item.price}</div>
                    </div>
                ))}     
            </div>
        </div>
    )
}