import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

// import { getProductCategories } from '../../__tests__/mockApi';

// export default async function BrowseSearch () {
export default function BrowseSearch () {
    // TODO: this should be an API call, mocked in the test/s
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

    // const mockProductCategories = await getProductCategories();

    return <BrowseSearchDisplay  data={ mockProductCategories } />
}