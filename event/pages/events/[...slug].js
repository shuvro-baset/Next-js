import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';

function FilteredEventsPage(){
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData)
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYears = +filteredYear;
    const numMonths = +filteredMonth;

    if (isNaN(numYears) || isNaN(numMonths) || numYears > 2030 || numYears < 2021 || numMonths < 1 || numMonths > 12) {
        return <p>Invalid filter. Please adjust your values!</p>
    }

    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYears,
        month: numMonths,
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p className="center">No events found for the chosen filter!</p>
    }
    const date = new Date(numYears, numMonths -1);
    return(
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents} />
        </Fragment>
    )
}
export default FilteredEventsPage;