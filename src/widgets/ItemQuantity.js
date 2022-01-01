
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentCart } from '../features/carts/cartsSlice';

import { changeCurrentCartItemQuantity } from '../features/carts/currentCartActions' 

export default function ItemQuantity (props) {
    const itemId = props.itemId
    const theArray = [1,2,3,4,5,6,7,8,9,10]; // FIXME there has to be a cleaner way to do this
    
    const dispatch = useDispatch()

    const currentCartItems = useSelector(selectCurrentCart)
    const theItem = currentCartItems.find(item => item.id === props.itemId)
    
    let theSelectedOption = 0
    if(theItem) {
        theSelectedOption = theItem.quantity
    } 

    return (
        <>
            <label htmlFor="item-quantity-selector">Quantity:</label>
            <select role="presentation" id="item-quantity-selector" name="itemQuantity" aria-label="item-quantity-selector" 
                    defaultValue={theSelectedOption} onChange={(e) => dispatch(changeCurrentCartItemQuantity(itemId, parseInt(e.target.value)))}>
                {theArray.map(i => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </select>
        </>
    )
}
