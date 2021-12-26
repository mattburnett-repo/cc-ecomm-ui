import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

import { selectProduct } from '../products/productsSlice'

function handleAddToCart(){
    alert('handleAddToCart')
}

export default function ProductDetail () {
    CheckLoginStatus()
    
    const productData = useSelector(selectProduct)
    
    return <ProductDetailDisplay data={ productData } handleAddToCart={ handleAddToCart }/>
}