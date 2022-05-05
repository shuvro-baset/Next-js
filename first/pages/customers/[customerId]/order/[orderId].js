import {useRouter} from 'next/router'

const orderDetails = () => {

    const router = useRouter()
    const {customerId, orderId} = router.query
    return (
        <div>
            <h2> {customerId} customer information: {orderId} </h2>
        </div>
    )
}
export default orderDetails
