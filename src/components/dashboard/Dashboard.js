import BrowseSearch from '../nav/BrowseSearch';

export default function Dashboard () {
    return (
        <div>
            <div role="presentation" aria-label="user-greeting">Hello username</div>

            <BrowseSearch />

            <div role="presentation" aria-label="orders">
                <div>Order 01</div>
                <div>Order 02</div>
                <div>Order 03</div>
            </div>
            <div role="presentation" aria-label="carts">
                <div>Cart 01</div>
                <div>Cart 02</div>
                <div>Cart 03</div>
            </div>
        </div>
    )
}