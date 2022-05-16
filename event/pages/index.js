import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log("all events: ", featuredEvents)
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  )
}

export default HomePage;