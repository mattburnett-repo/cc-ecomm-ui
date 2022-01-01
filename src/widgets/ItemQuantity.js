
import { useDispatch } from 'react-redux'

import { changeCurrentCartItemQuantity } from '../features/carts/currentCartActions' 

// TODO: pass the whole item from state in. then we can select correct option value for current quantity

export default function ItemQuantity (props) {
    const theArray = [1,2,3,4,5,6,7,8,9,10]; // FIXME there has to be a cleaner way to do this
    const itemId = props.itemId
    const dispatch = useDispatch()

    // FIXME: connect item quantity to options so that quanity in store selects option
    return (
        <>
            <label htmlFor="item-quantity-selector">Quantity:</label>
            <select role="presentation" id="item-quantity-selector" name="itemQuantity" aria-label="item-quantity-selector" 
                    defaultValue="0" onChange={(e) => dispatch(changeCurrentCartItemQuantity(itemId, parseInt(e.target.value)))}>
                {theArray.map(i => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </select>
        </>
    )
}
