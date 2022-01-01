
// handler function declarations

function handleSaveCart(e) { 
    alert('handleSaveCart inside utils ')
} 

function handleGoToPaymentInfo(e) { 
    alert('handleGoToPaymentInfo inside utils ')
} 


function handleSaveShippingInfo(e) { 
    e.preventDefault()

    const shippingInfo = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        address1: e.target.address1.value,
        address2: e.target.address2.value,
        city: e.target.city.value,
        stateProvince: e.target.stateProvince.value,
        postalCode: e.target.postalCode.value,
        country: e.target.country.value
    }
    console.log('handleSaveShippingInfo asdf', shippingInfo)
    // alert('handle save shipping info inside utils ')
} 

function handleQuantityChange(e, itemId) { 
    alert('handleQuantityChange inside utils ' + e.target.value + ' id: ' + itemId)
} 

function handleSearch(e) {
    e.preventDefault()
    // let searchTerms = e.target.value
    alert('handleSearch for search term/s ' + e.target.searchTerms.value + '. \nneed to figure out how to get dispatch() to work from here')
}

function handleOrderClick(e) {
    e.preventDefault()

    let order_id = e.target.order_id.value
    alert('go to order detail component ' + order_id)
}

function handleHomeClick() {
    console.log('handleHomeClick')
}
function handleShowCartClick() {
    console.log('handleShowCartClick')
}
function handleCheckoutClick() {
    console.log('handleCheckoutClick')
}
function handleCancelClick() {
    console.log('handleCanceClick')
}

module.exports = {
    handleSaveCart: handleSaveCart,
    handleHomeClick: handleHomeClick,
    handleShowCartClick: handleShowCartClick,
    handleCheckoutClick: handleCheckoutClick,
    handleCancelClick: handleCancelClick,
    handleQuantityChange: handleQuantityChange,
    handleSaveShippingInfo: handleSaveShippingInfo,
    handleGoToPaymentInfo: handleGoToPaymentInfo,
    handleSearch: handleSearch,
    handleOrderClick: handleOrderClick
} // end module.exports