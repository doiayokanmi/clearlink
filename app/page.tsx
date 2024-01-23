import ClearAdv from "@/components/ClearAdv";
import Faqs from "@/components/sections/Faqs";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/sections/Sponsor";
import Testimony from "@/components/sections/Testimony";
import Layout from "@/layouts/Layout";
import ScreenMock from "@/components/sections/ScreenMock";
import QuickLinks from "@/components/sections/QuickLinks";
import Footer from "@/components/Footer";


export default function Home() {

  return (
    <Layout>
      <div className="lg:px-24 px-4 lg:h-screen">
        <div className="bg-bg flex flex-col py-4 h-full">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Sponsor />
      <ClearAdv />
      <Testimony />
      <Faqs />
      <ScreenMock />
      <QuickLinks />
      <Footer />
    </Layout>
  );
}
