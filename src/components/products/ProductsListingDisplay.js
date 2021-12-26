export default function ProductListingDisplay ( props ) {
    const { data } = props;

    return (
        <div>
            <div role="presentation" aria-label="products">
                <h2>ProductsListingDisplay</h2>
                {/* Object.keys(posts).map(key => <Post key={key} body={posts[key]} />)  */}
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