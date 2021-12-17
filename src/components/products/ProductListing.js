import NavBar from '../nav/NavBar';
import BrowseSearch from "../nav/BrowseSearch";

export default function ProductListing () {
    const mockProductsData = [
        {
            "id": 1,
            "category_id": 1,
            "name": "product_name_01",
            "description": "product_desc_01",
            "image_url": "http://www.image.com/item/1",
            "price": "1.00"
        },
        {
            "id": 2,
            "category_id": 2,
            "name": "product_name_02",
            "description": "product_desc_02",
            "image_url": "http://www.image.com/item/2",
            "price": "2.00"
        },
        {
            "id": 3,
            "category_id": 3,
            "name": "product_name_03",
            "description": "product_desc_03",
            "image_url": "http://www.image.com/item/3",
            "price": "3.00"
        },
        {
            "id": 4,
            "category_id": 4,
            "name": "product_name_04",
            "description": "product_desc_04",
            "image_url": "http://www.image.com/item/4",
            "price": "4.00"
        }
    ];

    return (
        <div>
            {/* <div role='presentation' aria-label="product-category">product category goes here</div> */}
            <NavBar calledFrom="productListing" />
            <BrowseSearch />

            <div role="presentation" aria-label="products">
                {/* FIXME: test doesn't look right. only 4 items in mock array, but test receives 6 */}
                {mockProductsData.map((item, index) => (
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