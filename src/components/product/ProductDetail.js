export default function ProductDetail (props) {

    return (
        <div>
            <h2 aria-label="product-detail-heading">{props.name} Details</h2>
            <img aria-label="product-image" src={props.image_url} alt={props.name}/>
            <div role="presentation" aria-label="description">Description: {props.description}</div>
            <div role="presentation" aria-label="price">Price: {props.price}</div>
            <input aria-label='quantity' placeholder="Enter product quantity" />
            <button aria-label="add-to-cart">Add To Cart</button>
        </div>
    )
}
