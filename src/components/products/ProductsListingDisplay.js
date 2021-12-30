
import { useHistory } from 'react-router-dom'

export default function ProductListingDisplay ( props ) {
    const { data } = props;
    const { handleGoToProductDetailClick, handleAddToCart } = props.handlers
    const history = useHistory()

    return (
        <div>
            <div role="presentation" aria-label="products">
                <h2>ProductsListingDisplay</h2>
                {/* Object.keys(posts).map(key => <Post key={key} body={posts[key]} />)  */}
                {data.map((item, index) => (
                    <div role="presentation" aria-label='product' key={index}>
                        <label htmlFor='product-id'>Product ID:</label>
                        <div role='presentation' aria-label='product-id'>{item.id}</div>
                        <label htmlFor='product-name'>Product Name:</label>
                        <div role='presentation' aria-label='product-name'>{item.name}</div>
                        <label htmlFor='product-description'>Product Description:</label>
                        <div role='presentation' aria-label='product-description'>{item.description}</div>
                        <label htmlFor='product-image-url'>Image:</label>

                        <div role="img" id="product-image-url" aria-label='product-image-url'> 
                            {/* <img src={item.image_url} alt={item.name} id={item.id} onClick={handleGoToProductDetailClick}/> */}
                            <img src={item.image_url} alt={item.name} id={item.id} onClick={() => history.push('/product-detail/' + item.id)}/>
                        </div>

                        <label htmlFor='product-price'>Product Price:</label>
                        <div role='presentation' aria-label='product-price'>{item.price}</div>
                        <label htmlFor={item.id}>Quantity:</label>
                        <input id={item.id} name="quantity" aria-label='quantity' key={item.id} placeholder="Enter product quantity" />
                        <button aria-label="add-to-cart" id={item.id} onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                ))}     
            </div>
        </div>
    )
}