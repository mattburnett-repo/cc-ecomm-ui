

export const setCurrentAddress = (addressData) => {
    return {
        type: "addresses/setCurrentAddress",
        payload: addressData
    }
}