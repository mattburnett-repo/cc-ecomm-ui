

export const setCurrentProductCategory = (categoryId) => {
    return {
        type: "productCategories/setCurrentProductCategory",
        payload: categoryId
    }
}