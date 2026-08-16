import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Clock, Instagram, Facebook, Youtube, Twitter, Send, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Chapter, Reveal, PageHero } from "../components/bits";
import { track } from "../lib/track";
import { usePageMeta } from "../lib/meta";

const API = process.env.REACT_APP_BACKEND_URL;

const CATEGORIES = [
  ["general", "General"],
  ["poker", "Poker"],
  ["predictions", "Predictions"],
  ["account", "Account"],
  ["payments", "Payments"],
  ["app", "App"],
  ["responsible-gaming", "Responsible Gaming"],
  ["other", "Other"],
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
  { icon: Twitter, label: "X" },
];

const initial = { name: "", email: "", mobile: "", category: "general", subject: "", message: "" };

export default function Contact() {
  usePageMeta("Contact — NextZGames", "Get in touch with the NextZGames support team.");
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/api/contact`, form);
      toast.success("Request submitted. Our support team will get back to you soon.");
      setForm(initial);
      track("contact_form_submit", { category: form.category });
    } catch (err) {
      const msg = err?.response?.data?.detail;
      toast.error(typeof msg === "string" ? msg : "Could not send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        chapter="@"
        label="Contact"
        title={<>Talk to <span className="text-gold-gradient">Us</span></>}
        sub="Poker, predictions, payments or your account — ask us anything. A real person reads every message."
      />
      <section className="section-light py-8 md:py-12" data-testid="contact-section">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Chapter n="01" label="Support" tone="light" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#122A0E] text-[#EFE35F]"><Mail size={18} /></span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Support Email</p>
                    <a href="mailto:support@nextzgames.com" data-testid="contact-email" className="mt-1 block font-heading font-bold text-[#122A0E] hover:text-[#122A0E]">support@nextzgames.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#122A0E] text-[#EFE35F]"><Clock size={18} /></span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Support Hours</p>
                    <p className="mt-1 font-heading font-bold text-[#122A0E]">Mon – Sun, 9:00 – 21:00 IST</p>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Follow Us</p>
                  <div className="mt-3 flex gap-3">
                    {SOCIALS.map(({ icon: Icon, label }) => (
                      <a key={label} href="#" aria-label={label} data-testid={`contact-social-${label.toLowerCase()}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#122A0E]/20 text-[#122A0E]/60 transition-colors duration-300 hover:border-[#122A0E] hover:bg-[#EFE35F] hover:text-[#122A0E]">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#122A0E]/60">
                  Looking for quick answers? Visit our <Link to="/faq" data-testid="contact-faq-link" className="font-semibold text-[#122A0E] underline underline-offset-4">FAQ page</Link>.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={submit} className="card-light p-8 md:p-10" data-testid="contact-form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Name</label>
                  <input id="cf-name" data-testid="contact-name" required minLength={2} value={form.name} onChange={set("name")} className="input-light" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="cf-email" className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Email</label>
                  <input id="cf-email" data-testid="contact-email-input" required type="email" value={form.email} onChange={set("email")} className="input-light" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="cf-mobile" className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Mobile Number</label>
                  <input id="cf-mobile" data-testid="contact-mobile" required minLength={8} value={form.mobile} onChange={set("mobile")} className="input-light" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="cf-category" className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Category</label>
                  <select id="cf-category" data-testid="contact-category" value={form.category} onChange={set("category")} className="input-light">
                    {CATEGORIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-subject" className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Subject</label>
                  <input id="cf-subject" data-testid="contact-subject" required minLength={3} value={form.subject} onChange={set("subject")} className="input-light" placeholder="What is this about?" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-[#122A0E]/50">Message</label>
                  <textarea id="cf-message" data-testid="contact-message" required minLength={10} rows={5} value={form.message} onChange={set("message")} className="input-light resize-none" placeholder="Tell us how we can help..." />
                </div>
              </div>
              <button type="submit" data-testid="contact-submit-btn" disabled={sending} className="btn-gold mt-6 w-full disabled:opacity-60 sm:w-auto">
                {sending ? <LoaderCircle size={15} className="animate-spin" /> : <Send size={15} />}
                {sending ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
