export default function PaymentInfo () {
    return (
        <div>
            <div>
                <label htmlFor="name-on-card">Name on Card:</label>
                <input id="name-on-card" aria-label="name-on-card" />
            </div>
            <div>
                <label htmlFor="card-number">Card Number:</label>
                <input id="card-number" aria-label="card-number" />
            </div>
            <div>
                <label htmlFor="expiration-date">Exp. Date:</label>
                <input id="xpiration-date" aria-label="expiration-date" />
            </div>
            <button aria-label="finish-order">Finish Order</button>
        </div>
    )
}