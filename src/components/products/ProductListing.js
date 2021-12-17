import BrowseSearch from "../nav/BrowseSearch";

export default function ProductListing () {
    return (
        <div>
            <div role='presentation' aria-label="product-category">product category goes here</div>
            <BrowseSearch />

            <div role="presentation" aria-label="product-listing">
                <div>product 01</div>
                <div>product 02</div>
                <div>product 03</div>
            </div>
        </div>
    )
}