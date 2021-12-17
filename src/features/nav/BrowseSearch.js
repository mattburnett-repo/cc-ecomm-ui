import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

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

    return <BrowseSearchDisplay  data={ mockProductCategories } />
}