

// handler function declarations

// function handleAddToCart(e){ 
//     alert('handleAddToCart inside utils product_id: ' + e.target.id + ' quantity: ' + e.quantity)
//     // {() => dispatch(addItemToCurrentCart(id))}
//     // can't useDispatch here.
// } 

function handleCheckout(e){ 
    alert('handleCheckout inside utils ')
} 

function handleSearch(e){
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
    handleHomeClick: handleHomeClick,
    handleShowCartClick: handleShowCartClick,
    handleCheckoutClick: handleCheckoutClick,
    handleCancelClick: handleCancelClick,
    // handleAddToCart: handleAddToCart,
    handleCheckout: handleCheckout,
    handleSearch: handleSearch,
    handleOrderClick: handleOrderClick
} // end module.exports