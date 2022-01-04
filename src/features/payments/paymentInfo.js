
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setCurrentPayment } from './currentPaymentActions'
import { selectPaymentTypes } from '../../features/payments/paymentsSlice'

import PaymentInfoDisplay from '../../components/payments/PaymentInfoDisplay'

export default function PaymentInfo() {
    const dispatch = useDispatch()
    const history = useHistory()

    const paymentTypes = useSelector(selectPaymentTypes)

    function handleFinishOrder(e) {
        e.preventDefault()

        console.log('e ', e)
        /* eslint-disable */
        let userId = 'todo'
        let cartId = 'todo'
        let paymentTypeId = e.target.paymentTypes.selectedIndex
        let nameOnCard = e.target.nameOnCard.value
        let cardNumber = e.target.cardNumber.value
        let expDate = e.target.expDate.value
        /* eslint-enable */
        
        dispatch(setCurrentPayment( { userId, cartId, nameOnCard, paymentTypeId, cardNumber, expDate } ))

        history.push('/process-order')
    }

    function handlers() {
        return {
            handleFinishOrder: handleFinishOrder       
        }
    }

    return <PaymentInfoDisplay paymentTypes={paymentTypes} handlers={handlers()} />
}