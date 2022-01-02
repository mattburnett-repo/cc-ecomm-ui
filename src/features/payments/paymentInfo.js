
import PaymentInfoDisplay from '../../components/payments/PaymentInfoDisplay'

export default function PaymentInfo() {

    function handleFinishOrder() {
        alert('handle finish order in paymentInfo.js')
    }
    function handlers() {
        return {
            handleFinishOrder: handleFinishOrder       
        }
    }

    return <PaymentInfoDisplay handlers={handlers()} />
}