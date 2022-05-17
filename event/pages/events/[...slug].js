import { useRouter } from 'next/router';


function FilteredEventsPage(){
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData)
    return(
        <div>
            <h3>Filtered Events</h3>
        </div>
    )
}
export default FilteredEventsPage;