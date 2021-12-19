import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

import { mockProduct } from '../../utils/mockData';

export default function ProductDetail (props) {
    // data should come from API / Redux
    
    return <ProductDetailDisplay data={ mockProduct } />
}