import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection as Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    if (text) {
      navigator.clipboard?.writeText(text);
      setToastMessage(`${label} copied to clipboard!`);
    } else {
      setToastMessage(label);
    }

    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FC] text-[#151B2E] font-sans selection:bg-[#7C4DDB] selection:text-white relative overflow-x-hidden">
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onCopyText={handleCopyText} />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>

      {/* Footer / Contact Section */}
      <ContactFooter onCopyText={handleCopyText} />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
