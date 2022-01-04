

export const setCurrentPayment = (paymentData) => {
    return {
        type: "payments/setCurrentPayment",
        payload: paymentData
    }
}