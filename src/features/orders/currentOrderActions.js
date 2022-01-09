

export const setCurrentOrder = (orderData) => {
    return {
        type: "orders/setCurrentOrder",
        payload: orderData
    }
}

export const clearCurrentOrder = () => {
    return {
        type: 'orders/clearCurrentOrder',
        payload: []
    }
}