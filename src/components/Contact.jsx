import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaWhatsapp,
  FaBolt,
} from "react-icons/fa";
import { personalData } from "../data/portfolioData";

const EMAILJS_SERVICE_ID = "service_rjpv0y8";
const EMAILJS_TEMPLATE_ID = "template_rmwhr8h";
const EMAILJS_AUTO_REPLY_ID = "template_m6exop3";
const EMAILJS_PUBLIC_KEY = "rBaytK4cEP_H3eF81";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleQuoteRequest = (e) => {
      const { message } = e.detail;
      setFormData((prev) => ({
        ...prev,
        message: message,
      }));
    };
    window.addEventListener("quote-request", handleQuoteRequest);
    return () => window.removeEventListener("quote-request", handleQuoteRequest);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTO_REPLY_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tell me about your project and get a free quote. I usually reply
            within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#0d1428] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Let&apos;s discuss your project
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you need a new web app, e-commerce store, or an API
              integration, I&apos;m here to help. Get a free, no-obligation
              quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={`https://wa.me/${personalData.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Hi Jogendra, I'd like a quote for a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp Me
              </a>
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    message:
                      "Hi Jogendra, I'd like a quote for a project. Here are my details:",
                  }));
                  const form = document.getElementById("quote-form");
                  form?.scrollIntoView({ behavior: "smooth", block: "center" });
                  const firstInput = form?.querySelector("input");
                  firstInput?.focus();
                }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer"
              >
                <FaBolt className="text-sm" /> Get a Free Quote
              </button>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:border-cyan-400/40 transition-colors">
                  <FaEnvelope className="text-indigo-400 text-lg" />
                </span>
                <span>{personalData.email}</span>
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:border-cyan-400/40 transition-colors">
                  <FaPhone className="text-indigo-400 text-lg" />
                </span>
                <span>{personalData.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 group">
                <span className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-indigo-400 text-lg" />
                </span>
                <span>{personalData.location}</span>
              </div>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:border-cyan-400/40 transition-colors">
                  <FaLinkedin className="text-indigo-400 text-lg" />
                </span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <form
            id="quote-form"
            className="bg-[#0d1428] border border-white/10 rounded-2xl p-8 space-y-4"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-bold text-white">
              Send a project enquiry
            </h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[#0a0f1e] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-[#0a0f1e] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, budget, and timeline..."
              required
              className="w-full px-4 py-3 bg-[#0a0f1e] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />

            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <FaCheckCircle /> Message sent successfully! I'll get back to
                you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <FaExclamationCircle /> Failed to send. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:from-indigo-500/50 disabled:to-cyan-500/50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              {sending ? "Sending..." : "Send Enquiry"}
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
