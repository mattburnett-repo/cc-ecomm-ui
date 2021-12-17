export default function BrowseSearch () {
    const mockProductCategories = [
        {
            "category_id": 4,
            "description": "Auto"
        },
        {
            "category_id": 3,
            "description": "Health"
        },
        {
            "category_id": 1,
            "description": "Pets"
        },
        {
            "category_id": 2,
            "description": "Tech"
        }
    ];

    return (
        <div role="presentation" aria-label="browse-search">
            <select role="presentation" aria-label="product-categories">
                {mockProductCategories.map(item => (
                    <option key={item.category_id} value={item.category_id}>{item.description}</option>
                ))}                    
            </select>

            <input aria-label="search-terms" placeholder="Enter search terms"></input>
            <button aria-label="search-button">Search</button>
        </div>
    )           
}