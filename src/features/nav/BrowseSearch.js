import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { mockProductCategories } from '../../utils/mockData'; 

export default function BrowseSearch () {
    // TODO: this should be an API call, mocked in the test/s
    const productCategories = mockProductCategories;

    return <BrowseSearchDisplay  data={ productCategories } />
}