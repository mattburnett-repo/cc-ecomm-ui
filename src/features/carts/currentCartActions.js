
export const addItemToCurrentCart = (itemId) => {
    return {
        type: "carts/addItemToCurrentCart",
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: "carts/removeItemFromCurrentCart",
        payload: {
            id: itemId
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