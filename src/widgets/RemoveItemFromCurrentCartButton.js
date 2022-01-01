
import { useDispatch } from 'react-redux'
import { removeItemFromCurrentCart } from '../features/carts/cartsSlice'

// TODO: implement me if/when we have time. right now it fails in the reducer, but I don't see why...

export default function RemoeItemFromCurrentCartButton ( itemId ) {
    const dispatch = useDispatch()

    console.log('remoe item from cart button', itemId)

    return <button aria-label="add-to-cart" onClick={() => dispatch(removeItemFromCurrentCart(itemId))}>Add To Cart</button>
}
    
