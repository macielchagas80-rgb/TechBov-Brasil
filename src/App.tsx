/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Features from './components/Features';
import WeightEstimation from './components/WeightEstimation';
import CompatibleAnimals from './components/CompatibleAnimals';
import InteractiveShowcase from './components/InteractiveShowcase';
import Benefits from './components/Benefits';
import Transparency from './components/Transparency';
import Plans from './components/Plans';
import Authority from './components/Authority';
import FAQ from './components/FAQ';
import ConversionCTA from './components/ConversionCTA';
import LegalPages from './components/LegalPages';
import Footer from './components/Footer';

import { ActivePage, CompanyInfo } from './types';
import { INITIAL_COMPANY_INFO } from './data';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(INITIAL_COMPANY_INFO);

  // Scroll to top on page routing change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activePage]);

  const handleNavigateToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans flex flex-col justify-between selection:bg-brand-neon selection:text-brand-dark relative overflow-hidden">
      
      {/* Sleek Theme Tech Background Blobs & Grid overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[100px]" />
      </div>
      {/* Sticky Header Sticky Nav Menu blur */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        companyInfo={companyInfo}
      />

      <main className="flex-grow">
        {activePage === 'home' ? (
          <>
            {/* Step 2: Hero section with mockup smartphone */}
            <Hero companyInfo={companyInfo} />

            {/* Step 6: Как Funciona line timeline */}
            <Timeline companyInfo={companyInfo} />

            {/* Step 3: features list zootecnia */}
            <Features />

            {/* Step 4: Weight estimation image walk stepper guide */}
            <WeightEstimation companyInfo={companyInfo} />

            {/* Step 5: Multi-species compatible profiles */}
            <CompatibleAnimals />

            {/* Step 11: visual showcase interactive dashboard tabs */}
            <InteractiveShowcase />

            {/* Step 7: Benefits cards grid */}
            <Benefits />

            {/* Step 8: Ethics transparency positioning disclosures */}
            <Transparency />

            {/* Step 10: Tiers details configurable */}
            <Plans companyInfo={companyInfo} />

            {/* Step 12: Organization zootecnia authority and future reviews check */}
            <Authority />

            {/* Step 13: FAQ full */}
            <FAQ companyInfo={companyInfo} />

            {/* Step 14: Conversion block callout */}
            <ConversionCTA 
              companyInfo={companyInfo} 
              onNavigateToPlans={handleNavigateToPlans}
            />
          </>
        ) : (
          /* Step 16-18: Legal Privacy pages container */
          <LegalPages
            type={activePage}
            onBackToHome={() => setActivePage('home')}
            companyInfo={companyInfo}
          />
        )}
      </main>

      {/* Step 15: Rodapé completa with real-time variables config pane */}
      <Footer
        activePage={activePage}
        setActivePage={setActivePage}
        companyInfo={companyInfo}
        setCompanyInfo={setCompanyInfo}
      />

    </div>
  );
}

