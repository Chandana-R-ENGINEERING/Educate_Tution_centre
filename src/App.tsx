import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ClassesSection } from './components/ClassesSection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { EnquiryModal } from './components/EnquiryModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TeachingApproach } from './components/TeachingApproach';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClassLevel } from './config/businessConfig';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassLevel | ''>('');

  const handleOpenEnquiry = (classLevel: ClassLevel | '' = '') => {
    setSelectedClass(classLevel);
    setEnquiryModalOpen(true);
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenEnquiry('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#172B4D]">
      <Header onEnquireClick={() => handleOpenEnquiry('')} />

      <main>
        <HeroSection onEnquireClick={() => handleOpenEnquiry('')} />
        <TrustSection />
        <AboutSection />
        <ClassesSection onEnquireClass={(level) => handleOpenEnquiry(level)} />
        <TeachingApproach />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection onContactClick={handleScrollToContact} />
        <ContactSection />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        initialClass={selectedClass}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}
