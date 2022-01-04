
import PaymentInfoDisplay from '../../components/payments/PaymentInfoDisplay'

export default function PaymentInfo() {

    function handleFinishOrder(e) {
        e.preventDefault()

        /* eslint-disable */
        let userId = 'todo'
        let cartId = 'todo'
        let nameOnCard = e.target.nameOnCard.value
        let cardNumber = e.target.cardNumber.value
        let expDate = e.target.expDate.value
        /* eslint-enable */
        
        alert('handle finish order in paymentInfo.js')
        // import action
        // dispatch(???)
    }
    function handlers() {
        return {
            handleFinishOrder: handleFinishOrder       
        }
    }

    return <PaymentInfoDisplay handlers={handlers()} />
}