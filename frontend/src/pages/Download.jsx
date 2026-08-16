import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Apple, Monitor, BellRing } from "lucide-react";
import { Reveal, PageHero } from "../components/bits";
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

  const Badge = () => (
    <span className="absolute right-4 top-4 rounded-full bg-[#122A0E] px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-widest text-[#EFE35F]">
      Your device
    </span>
  );

  const Card = ({ id, icon: Icon, title, note, primary }) => (
    <div
      data-testid={`download-card-${id}`}
      className={`card-light relative h-full p-5 ${primary ? "!border-[#122A0E]" : ""}`}
    >
      {primary && <Badge />}
      <span className="icon-chip !h-12 !w-12 !rounded-xl">
        <Icon size={22} />
      </span>
      <h2 className="mt-4 font-heading text-lg font-extrabold text-[#122A0E]">{title}</h2>
      <p className="mt-1.5 text-sm text-[#122A0E]/60">{note}</p>
      <button
        data-testid={`download-btn-${id}`}
        onClick={() => track("download_store_click", { store: id })}
        className="btn-outline-dark mt-6 w-full cursor-not-allowed opacity-80"
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
        title={<>Get NextZGames <span className="text-gold-gradient">on Your Phone</span></>}
        sub="Poker and Predictions. One app. One experience."
      />
      <section className="section-light py-8 md:py-12" data-testid="download-options">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <Card id="android" icon={Smartphone} title="Download for Android" note="The official Android app will be available at launch." primary={device === "android"} />
            </Reveal>
            <Reveal delay={0.1}>
              <Card id="ios" icon={Apple} title="Download on the App Store" note="The iOS app is on its way. Check back soon." primary={device === "ios"} />
            </Reveal>
            <Reveal delay={0.2}>
              <div data-testid="download-card-qr" className={`card-light relative h-full p-5 ${device === "desktop" ? "!border-[#122A0E]" : ""}`}>
                {device === "desktop" && <Badge />}
                <span className="icon-chip !h-12 !w-12 !rounded-xl">
                  <Monitor size={22} />
                </span>
                <h2 className="mt-4 font-heading text-lg font-extrabold text-[#122A0E]">Scan to Download</h2>
                <p className="mt-1.5 text-sm text-[#122A0E]/60">Point your phone camera at the code to open this page on your device.</p>
                <div className="mt-6 flex justify-center">
                  <div className="rounded-2xl border border-[#122A0E]/15 bg-white p-4 shadow-[0_10px_30px_rgba(24,43,23,0.08)]" data-testid="download-qr">
                    <QRCodeSVG value={downloadUrl} size={140} bgColor="#ffffff" fgColor="#122A0E" level="M" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-plum py-8 md:py-12" data-testid="download-showcase">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              The Table Is Set. <span className="text-gold-gradient">Your Seat Is Waiting.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm md:text-base text-white/70">
              Be among the first to play. The download links on this page activate the moment the NextZGames app goes live.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mx-auto">
            <img src="/creative-predictions.jpg" alt="NextZGames app predictions screen" loading="lazy" className="w-[230px] rounded-[1.8rem] border border-white/15 rotate-2 shadow-[0_30px_60px_rgba(0,0,0,0.45)]" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
