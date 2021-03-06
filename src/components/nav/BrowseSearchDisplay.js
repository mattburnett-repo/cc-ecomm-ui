
import { StyledBrowseSearch } from "../styles/BrowseSearch.styled";

export default function BrowseSearchDisplay (props) {
    const { handleChange, handleSearch } = props.handlers;
    const { data } = props

    return (
        <StyledBrowseSearch>
            <div className='browse-search-container' role="presentation" aria-label="browse-search">
                <div role="presentation" aria-label="browse">
                    <label className='browse' htmlFor="product-categories">Product Categories: </label>
                    <select role="presentation" id="product-categories" name="productCategories" aria-label="product-categories" defaultValue="0" onChange={handleChange}>
                        <option key="0" value="0">Show all products</option>
                        {data.map(item => (
                            <option key={item.category_id} value={item.category_id}>{item.description}</option>
                        ))}                    
                    </select>
                </div>
                <div className="search" role="presentation" aria-label="search">
                    <form onSubmit={handleSearch} method="post">
                        <div>
                            <label htmlFor="searchTerms">Search: </label>
                            <input name="searchTerms" id="searchTerms" aria-label="search-terms" placeholder="Search Products"></input>
                        {/* </div>
                        <div> */}
                            <button type="submit" aria-label="search-button">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </StyledBrowseSearch>
    )           
}