
import { useDispatch } from 'react-redux'
import { addItemToCurrentCart } from '../features/carts/cartsSlice'

// TODO: implement me if/when we have time. right now it fails in the reducer, but I don't see why...
//      not using this until we figure it out. dispatch action instead zB ProductsListingDisplay, for now

export default function AddToCurrentCartButton ( item ) {
    const dispatch = useDispatch()

    console.log('cart button item', item)

    return <button aria-label="add-to-cart-button" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
}
    