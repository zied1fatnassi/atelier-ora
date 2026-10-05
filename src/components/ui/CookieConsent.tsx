"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

interface CookieConsentProps {
  dict: {
    notice?: string;
    accept?: string;
    decline?: string;
    privacyLink?: string;
  };
}

export function CookieConsent({ dict }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aura-design-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aura-design-cookie-consent", "granted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("aura-design-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Consentement aux cookies"
      className="fixed bottom-6 start-6 end-6 md:start-auto md:end-8 md:max-w-md z-50 p-5 rounded-2xl bg-[#101016]/95 border border-white/15 backdrop-blur-xl shadow-2xl text-xs space-y-3 will-change-transform animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-white/80 leading-relaxed">
          {dict.notice ||
            "Nous respectons votre confidentialité. Nous utilisons des cookies strictement nécessaires pour garantir les performances et mesurer anonymement l'audience."}
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          onClick={handleDecline}
          className="px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors font-medium"
        >
          {dict.decline || "Refuser"}
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors shadow-sm"
        >
          {dict.accept || "Accepter"}
        </button>
      </div>
    </aside>
  );
}
