
import { useDispatch } from 'react-redux'
import { addItemToCurrentCart } from '../features/carts/cartsSlice'

// TODO: implement me if/when we have time. right now it fails in the reducer, but I don't see why...

export default function AddToCurrentCartButton ( item ) {
    const dispatch = useDispatch()

    console.log('cart button item', item)

    return <button aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
}
    
 