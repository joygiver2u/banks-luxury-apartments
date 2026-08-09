import AboutHero from "@/components/About/AboutHero";
import BestRates from "@/components/About/BestRates";
import BestService from "@/components/About/BestService";
import JoinBanksList from "@/components/About/JoinBanksList";


const AboutPage = () => {
  return (
    <main>
      <AboutHero/>

      <BestService/>

      <BestRates/>

      <JoinBanksList/>
    </main>
  );
};

export default AboutPage;