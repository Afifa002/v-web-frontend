import { useEffect } from 'react';
import Hero from "../components/Hero";
import FAQ from "../components/home/FAQ";
import OurServices from "../components/home/OurServices";
import PatientOpinions from "../components/home/PatientOpinions";
import ProcessFlow from "../components/home/ProcessFlow";
import HospitalCarousel from "../components/HospitalCarousel";
import ProcedureCost from "../components/ProcedureCost";
import Services from "../components/Services";
import Stats from "../components/Stats";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLanguage } from '../hooks/useLanguage';

export default function Home() {
  const [language] = useLanguage();
  // useEffect(() => {
  //   if (!language) {
  //     console.log('Language not yet available, skipping fetch');
  //     return;
  //   }
  //   console.log(language)
  // }, [language]);

  return (
    <div>
      <Hero />

      {/* Services */}

      <Stats />

      <Services />

      <HospitalCarousel />

      <ProcedureCost />
      <WhatsAppButton />

      <ProcessFlow />

      <OurServices />

      <PatientOpinions />

      <FAQ />



    </div>
  );
}
