import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Lenis from "lenis";
import { Download } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { captureUtm, track } from "./lib/track";
import Home from "./pages/Home";
import Poker from "./pages/Poker";
import Predictions from "./pages/Predictions";
import Promotions from "./pages/Promotions";
import HowItWorks from "./pages/HowItWorks";
import DownloadPage from "./pages/Download";
import About from "./pages/About";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const StickyMobileCTA = () => {
  const { pathname } = useLocation();
  if (pathname === "/download" || pathname === "/contact") return null;
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden" data-testid="sticky-mobile-cta">
      <Link
        to="/download"
        onClick={() => track("download_cta_click", { source: "sticky_mobile" })}
        className="btn-gold w-full !py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
      >
        <Download size={15} strokeWidth={2.5} />
        Download NextZGames
      </Link>
    </div>
  );
};

const Shell = () => (
  <div className="min-h-screen bg-[#254F1F] text-white">
    <ScrollToTop />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poker" element={<Poker />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<Legal slug="terms-and-conditions" />} />
        <Route path="/privacy-policy" element={<Legal slug="privacy-policy" />} />
        <Route path="/payment-policy" element={<Legal slug="payment-policy" />} />
        <Route path="/promotion-terms" element={<Legal slug="promotion-terms" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
    <StickyMobileCTA />
  </div>
);

function App() {
  useEffect(() => {
    captureUtm(window.location.search);
    const lenis = new Lenis({ lerp: 0.16, wheelMultiplier: 1.05 });
    let rafId;
    const raf = (t) => {
      lenis.raf(t);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Shell />
      <Toaster theme="dark" position="top-center" />
    </BrowserRouter>
  );
}

export default App;
