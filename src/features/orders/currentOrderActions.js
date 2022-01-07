

export const setCurrentOrder = (orderData) => {
    return {
        type: "orders/setCurrentOrder",
        payload: orderData
    }
}