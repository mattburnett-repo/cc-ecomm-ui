export default function NavBar (props) {
    let { calledFrom } = props;

    return (
        <div role="presentation" aria-label="nav-bar">
            <div role="presentation" aria-label="header-message">header message</div>
            if({calledFrom} !== 'landing') {
                <>
                    <button aria-label="home">Home</button>
                    <button aria-label="show-cart">Show Cart</button>
                </>
            };
            if({calledFrom} === 'cart') {
                <button aria-label="checkout">Checkout</button>
            }
            if({calledFrom} === 'shippingInfo' || calledFrom === 'paymentInfo') {
                <button aria-label="cancel">Cancel</button>
            }
            <button aria-label="logout">Log Out</button>
        </div>
    )
}