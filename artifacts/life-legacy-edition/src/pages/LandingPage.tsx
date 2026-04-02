import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import SystemRequirements from "@/components/SystemRequirements";
import PatchNotes from "@/components/PatchNotes";
import FAQSection from "@/components/FAQSection";
import MediaSection from "@/components/MediaSection";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";

export default function LandingPage() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#080608] overflow-x-hidden">
      <Navbar onDownload={() => setShowDownloadModal(true)} />
      <HeroSection onDownload={() => setShowDownloadModal(true)} />
      <StatsBar />
      <AboutSection />
      <FeaturesSection />
      <MediaSection />
      <ReviewsSection />
      <SystemRequirements />
      <PatchNotes />
      <FAQSection />
      <Footer onDownload={() => setShowDownloadModal(true)} />
      <DownloadModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
    </div>
  );
}
