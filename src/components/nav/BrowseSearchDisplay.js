export default function BrowseSearchDisplay (props) {
    const { data, handleChange, handleSearch } = props;

    // TODO: handleChange should dispatch a call to products, with the category id

    // TODO: search should dispatch a look through all products for the search term/s

    return (
        <div role="presentation" aria-label="browse-search">
            <label htmlFor="product-categories">Product Categories: </label>
            <select role="presentation" id="product-categories" aria-label="product-categories" defaultValue="0" onChange={handleChange}>
                <option key="0" value="0">Please select a product category</option>
                {data.map(item => (
                    <option key={item.category_id} value={item.category_id}>{item.description}</option>
                ))}                    
            </select>
            <label htmlFor="search">Search: </label>
            <input id="search" aria-label="search-terms" placeholder="Enter search terms"></input>
            <button aria-label="search-button" onClick={handleSearch}>Search</button>
        </div>
    )           
}