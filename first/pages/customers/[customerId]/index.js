import {useRouter} from 'next/router'

const customerDetails = () => {

    const router = useRouter()
    const customerId = router.query.customerId
    return (
        <div>
            <h2>Customer information: {customerId} </h2>
        </div>
    )
}
export default customerDetails
