function Product (props) {
    const { img, name, description, price }  = props;
    return (
        <div>
            <h2>{name} Details</h2>
            <img aria-label="product-image" src={img} alt="product"/>
            <div role="presentation" aria-label="description">Description: {description}</div>
            <div role="presentation" aria-label="price">Price: {price}</div>
            <div role="select" aria-label="quantity-selector">Qty</div>
            <button aria-label="add-to-cart">Add To Cart</button>
        </div>
    )
}

export default Product;