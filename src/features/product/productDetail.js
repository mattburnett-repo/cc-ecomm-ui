import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

import { selectProducts } from '../products/productsSlice'

export default function ProductDetail ( props ) {
    let { productId } = props

    CheckLoginStatus()

    function handleAddToCart () {
        alert('handleAddToCart')
    }

    const products = useSelector(selectProducts)
    // eslint-disable-next-line
    const productById = products.filter(item => item.id == productId) 

    return <ProductDetailDisplay data={productById} handleAddToCart={ handleAddToCart }/>
}

