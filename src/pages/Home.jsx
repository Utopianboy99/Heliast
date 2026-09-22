import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import ConversionSystem from '../components/ConversionSystem';
import ProcessSection from '../components/ProcessSection';
import ComparisonSection from '../components/ComparisonSection';
import OutcomesSection from '../components/OutcomesSection';
import FeedbackLoop from '../components/FeedbackLoop';
import IdealClient from '../components/IdealClient';
import HeliastLab from '../components/HeliastLab';
import LeadMagnet from '../components/LeadMagnet';
import About from '../components/About';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ConversionSystem />
        <ProcessSection />
        <ComparisonSection />
        <OutcomesSection />
        <FeedbackLoop />
        <IdealClient />
        <HeliastLab />
        <LeadMagnet />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
