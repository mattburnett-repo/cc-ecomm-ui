export default function ProductDetail (props) {
    const { name, description, price, image_url } = props.data;

    return (
        <div>
            <div role="presentation" aria-label="name">{name}</div>
            <img aria-label="product-image" src={image_url} alt={name}/>
            <div role="presentation" aria-label="description">Description: {description}</div>
            <div role="presentation" aria-label="price">Price: {price}</div>
            <input aria-label='quantity' placeholder="Enter product quantity" />
            <button aria-label="add-to-cart">Add To Cart</button>
        </div>
    )
}
