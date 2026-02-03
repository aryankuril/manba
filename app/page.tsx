import Navbar from './components/Navbar';
import FirstSection from './components/HomePage/FirstSection';
import StatsBar from './components/HomePage/StatsBar';
import ThirdSection from './components/HomePage/ThirdSection';
import ForthSection from './components/HomePage/ForthSection';
import FifthSection from './components/HomePage/FifthSection';
import SixthSection from './components/HomePage/SixthSection';
import SeventhSection from './components/HomePage/SeventhSection';
import EightSection from './components/HomePage/EightSection';
import NinthSection from './components/HomePage/NinthSection';
import TenthSection from './components/HomePage/TenthSection';
import EleventhSection from './components/HomePage/EleventhSection';
import TwelfthSection from './components/HomePage/TwelfthSection';
import Footer from './components/Footer';

export default function Home() {
  return (
  <div className="">
    <Navbar />
    <FirstSection />
    <StatsBar />
    <ThirdSection />
    <ForthSection />
    {/* <FifthSection /> */}
    <SixthSection />
    <SeventhSection />
    <EightSection />
    <NinthSection />
    <TenthSection />
    <EleventhSection />
    <TwelfthSection />
    <Footer />
  </div>
  );
}
