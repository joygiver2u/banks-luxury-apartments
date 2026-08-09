import ApplySection from "@/components/list-property/ApplySection";
import HospitalityDriven from "@/components/list-property/HospitalityDriven";
import ListPropertyHero from "@/components/list-property/ListPropertyHero";

export default function ListYourPropertyPage() {
  return (
    <main>
      <ListPropertyHero />

      <HospitalityDriven/>

      <ApplySection/>
    </main>
  );
}