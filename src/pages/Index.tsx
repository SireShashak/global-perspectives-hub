import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TopicsSection from "@/components/TopicsSection";
import DiscussionSection from "@/components/DiscussionSection";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <DiscussionSection />
      <ScheduleSection />
      <Footer />
    </div>
  );
};

export default Index;
