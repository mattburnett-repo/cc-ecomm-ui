
// handler function declarations

function handleSaveCart(e) { 
    alert('handleSaveCart inside utils ')
} 

function handleCheckout(e) { 
    alert('handleCheckout inside utils ')
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
    handleCheckout: handleCheckout,
    handleSearch: handleSearch,
    handleOrderClick: handleOrderClick
} // end module.exports