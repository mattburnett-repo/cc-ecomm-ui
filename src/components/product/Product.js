export default function Product (props) {
    const { img, name, description, price } = props;
    return (
        <div>
            <h2>{name} Details</h2>
            <img aria-label="product-image" src={img} alt={name}/>
            <div role="presentation" aria-label="description">Description: {description}</div>
            <div role="presentation" aria-label="price">Price: {price}</div>
            <input aria-label='quantity' placeholder="Enter product quantity" />
            <button aria-label="add-to-cart">Add To Cart</button>
        </div>
    )
}
