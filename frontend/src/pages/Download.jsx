import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Apple, Monitor, BellRing } from "lucide-react";
import { Reveal, PageHero } from "../components/bits";
import { PhoneMockup } from "../components/PhoneMockup";
import { track } from "../lib/track";
import { usePageMeta } from "../lib/meta";

const detectDevice = () => {
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "desktop";
};

export default function DownloadPage() {
  usePageMeta("Download the App — NextZGames", "Get NextZGames on your phone. Poker and Predictions. One app. One experience.");
  const [device, setDevice] = useState("desktop");
  useEffect(() => {
    setDevice(detectDevice());
    track("download_page_view");
  }, []);

  const downloadUrl = `${window.location.origin}/download`;

  const Card = ({ id, icon: Icon, title, note, primary }) => (
    <div
      data-testid={`download-card-${id}`}
      className={`card-green relative h-full p-8 ${primary ? "border-[#D4C942]/60" : ""}`}
    >
      {primary && (
        <span className="absolute right-5 top-5 rounded-full bg-[#D4C942] px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-widest text-[#1f361d]">
          Your device
        </span>
      )}
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4C942]/30 bg-[#D4C942]/10 text-[#D4C942]">
        <Icon size={24} />
      </span>
      <h2 className="mt-6 font-heading text-xl font-extrabold text-white">{title}</h2>
      <p className="mt-2 text-sm text-white/60">{note}</p>
      <button
        data-testid={`download-btn-${id}`}
        onClick={() => track("download_store_click", { store: id })}
        className="btn-outline mt-8 w-full cursor-not-allowed opacity-80"
      >
        <BellRing size={14} /> Coming Soon
      </button>
    </div>
  );

  return (
    <>
      <PageHero
        chapter="↓"
        label="Download"
        title={<>Get NextZGames <span className="text-[#D4C942]">on Your Phone</span></>}
        sub="Poker and Predictions. One app. One experience."
      />
      <section className="bg-[#1f361d] py-24 md:py-32" data-testid="download-options">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <Card id="android" icon={Smartphone} title="Download for Android" note="The official Android app will be available at launch." primary={device === "android"} />
            </Reveal>
            <Reveal delay={0.1}>
              <Card id="ios" icon={Apple} title="Download on the App Store" note="The iOS app is on its way. Check back soon." primary={device === "ios"} />
            </Reveal>
            <Reveal delay={0.2}>
              <div data-testid="download-card-qr" className={`card-green h-full p-8 ${device === "desktop" ? "border-[#D4C942]/60" : ""}`}>
                {device === "desktop" && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#D4C942] px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-widest text-[#1f361d]">
                    Your device
                  </span>
                )}
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4C942]/30 bg-[#D4C942]/10 text-[#D4C942]">
                  <Monitor size={24} />
                </span>
                <h2 className="mt-6 font-heading text-xl font-extrabold text-white">Scan to Download</h2>
                <p className="mt-2 text-sm text-white/60">Point your phone camera at the code to open this page on your device.</p>
                <div className="mt-8 flex justify-center">
                  <div className="rounded-2xl bg-white p-4" data-testid="download-qr">
                    <QRCodeSVG value={downloadUrl} size={150} bgColor="#ffffff" fgColor="#284525" level="M" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#284525] py-24" data-testid="download-showcase">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The Table Is Set. <span className="text-[#D4C942]">Your Seat Is Waiting.</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-white/70">
              Be among the first to play. The download links on this page activate the moment the NextZGames app goes live.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mx-auto">
            <PhoneMockup screen="home" className="w-[240px] rotate-2" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
