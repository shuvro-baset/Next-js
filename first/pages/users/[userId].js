import {useRouter} from 'next/router'

const userDetails = () => {

    const router = useRouter()
    const userId = router.query.userId
    return (
        <div>
            <h2>User information: {userId} </h2>
        </div>
    )
}
export default userDetails
