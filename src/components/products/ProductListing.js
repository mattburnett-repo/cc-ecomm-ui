export default function ProductListing () {
    return (
        <div>
            <div role="presentation" aria-label="product-category">Product category</div>
            <div role="presentation" aria-label="product-categories">select product categories</div>
            <input aria-label="search-terms" placeholder="Enter search terms"></input>
            <button aria-label="search">Search</button>
            <div role="presentation" aria-label="product-listing">
                <div>product 01</div>
                <div>product 02</div>
                <div>product 03</div>
            </div>
        </div>
    )
}