export default function BrowseSearchDisplay (props) {
    const { data } = props;

    return (
        <div role="presentation" aria-label="browse-search">
            Product Categories: 
            <select role="presentation" aria-label="product-categories">
                {data.map(item => (
                    <option key={item.category_id} value={item.category_id}>{item.description}</option>
                ))}                    
            </select>

            <input aria-label="search-terms" placeholder="Enter search terms"></input>
            <button aria-label="search-button">Search</button>
        </div>
    )           
}