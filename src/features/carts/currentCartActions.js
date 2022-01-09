
// https://www.youtube.com/watch?v=MNs_7avLIJ4

// FIXME: doesn't add quantity, when user selects quantity other than 1
//      this happens in ProductsListingDisplay during add to cart
export const addItemToCurrentCart = (itemData) => {
    return {
        type: "carts/addItemToCurrentCart",
        payload: {
            data: itemData
        }
    }
}

export const removeItemFromCurrentCart = (itemId) => {
    return {
        type: "carts/removeItemFromCurrentCart",
        payload: {
            id: itemId // TODO: reducer doesn't see action.payload.id, but rather only action.payload. ???
        }
    }
}

export const changeCurrentCartItemQuantity = (itemId, value) => {
    return {
        type: "carts/changeCurrentCartItemQuantity",
        payload: {
            id: itemId,
            quantity: value
        }
    }
}

export const loadItem = (item) => {
    return {
        type: "carts/loadItem",
        payload: item
    }
}

export const clearCurrentCart = () => {
    return {
        type: 'carts/clearCurrentCart',
        payload: []
    }
}