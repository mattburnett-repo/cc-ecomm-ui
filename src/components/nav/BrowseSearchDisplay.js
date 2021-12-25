export default function BrowseSearchDisplay (props) {
    const { data, handleChange, handleSearch } = props;

    // TODO: handleChange should dispatch a call to products, with the category id

    // TODO: search should dispatch a look through all products for the search term/s

    return (
        <div role="presentation" aria-label="browse-search">
            Product Categories: 
            <select role="presentation" aria-label="product-categories">
                {data.map(item => (
                    // <option key={item.categories.category_id} value={item.categories.category_id}>{item.categories.description}</option>
                    <option key={item.category_id} value={item.category_id}>{item.description}</option>
                ))}                    
            </select>

            <input aria-label="search-terms" placeholder="Enter search terms"></input>
            <button aria-label="search-button">Search</button>
        </div>
    )           
}