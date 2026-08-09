import Hero from "@/components/Home/Hero/Hero";
import BookingSteps from "@/components/Home/Luxury/BookingSteps";
import ContactlessCheckIn from "@/components/Home/Luxury/ContactlessCheckIn";
import DownloadApp from "@/components/Home/Luxury/DownloadApp";
import FAQ from "@/components/Home/Luxury/FAQ";
import GuestSelection from "@/components/Home/Luxury/GuestSelection";
import ListYourProperty from "@/components/Home/Luxury/ListYourProperty";
import LuxuryExperience from "@/components/Home/Luxury/LuxuryExperience";
import LuxuryValues from "@/components/Home/Luxury/LuxuryValues";
import PropertyLocations from "@/components/Home/Luxury/PropertyLocations";
import Reviews from "@/components/Home/Luxury/Reviews";
import ServicesAmenities from "@/components/Home/Luxury/ServicesAmenities";

export default function Home() {
  return (
    <main>
      <Hero/>

      <LuxuryExperience/>

      <LuxuryValues/>

      <ListYourProperty/>

      <PropertyLocations/>

      <ServicesAmenities/>

      <BookingSteps/>

      <ContactlessCheckIn/>

      <FAQ/>

      <Reviews/>

      <GuestSelection/>

      <DownloadApp/>
    </main>
  );
}