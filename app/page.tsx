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
import ContactUs from './components/HomePage/ContactUs';
import Footer from './components/Footer';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Electric Scooter & Bike Loans | Easy Online Finance for Electric Vehicles',
  description: 'Get fast, hassle-free online loans for electric bikes and scooters with flexible repayment options. Apply now for easy financing and drive into a greener future',
}

export default function Home() {
  return (
  <div className="">
    <Navbar />
    <FirstSection />
    {/* <StatsBar /> */}
    <ThirdSection />
    <ForthSection />
    {/* <FifthSection /> */}
    <SixthSection />
    <SeventhSection />
    {/* <EightSection /> */}
    <TenthSection />
    <NinthSection />
    <EleventhSection />
    <TwelfthSection />
    <ContactUs />
    <Footer />
  </div>
  );
}
