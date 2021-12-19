import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { mockProductCategories } from '../../utils/mockData';   // TODO: this should be an API call, mocked in the test/s

export default function BrowseSearch () {
   
    return <BrowseSearchDisplay  data={ mockProductCategories } />
}