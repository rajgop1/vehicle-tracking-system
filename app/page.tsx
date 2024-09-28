import HomeComponent from "@/components/home";
import getPostMetaData, { getSinglePostMetaData } from "@/getPostMetaData";

export default function Home() {
  const postMetaData = getSinglePostMetaData('markdown_files', 'basic_data.md')
  const truckCards = getPostMetaData('markdown_files/truck_cards')
  const tripStatus = getSinglePostMetaData('markdown_files/trip_status', 'trip_status.md')
  const fleetStatus = getSinglePostMetaData('markdown_files/fleet_status', 'fleet_status.md')
  const timeLimitStatus = getSinglePostMetaData('markdown_files/time_limit_status', 'time_limit_status.md')
  const vendorPerformance  = getSinglePostMetaData('markdown_files/vendor_performance', 'vendor_performance.md')
  const alertStatus  = getSinglePostMetaData('markdown_files/alert_status', 'alert_status.md')
  console.log("truckCards",truckCards)
  return (
    <div className="">
      <HomeComponent data={postMetaData} truckCards={truckCards} tripStatus={tripStatus} fleetStatus={fleetStatus} timeLimitStatus={timeLimitStatus} vendorPerformance={vendorPerformance} alertStatus={alertStatus}/>
    </div>
  );
}
