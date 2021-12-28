export default function ProductDetailDisplay (props) {
    const { name, description, price, image_url } = props.data[0] // FIXME: this [0] is going to be a problem. fix it in the calling propu
    const { handleAddToCart } = props

    return (
        <div>
            <h3>ProductDetailDisplay</h3>
            <h4>you want one!!! add to cart for better happiments!</h4>
            <img aria-label="product-image" src={image_url} alt={name}/>
            <label htmlFor="name">Name:</label>
            <div id="name" role="presentation" aria-label="name">{name}</div>
            {/* <label htmlFor="product-id">ID:</label>
            <div id="product-id" role="presentation" aria-label="product-id">{id}</div> */}
            <label htmlFor="description">Description:</label>
            <div id="description" role="presentation" aria-label="description">{description}</div>
            <label htmlFor="price">Price:</label>
            <div id="price" role="presentation" aria-label="price">{price}</div>
            <label htmlFor="quantity">Quantity:</label>
            <input id="quantity" aria-label='quantity' placeholder="Enter product quantity" />
            <button aria-label="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
        </div>
    )
}
