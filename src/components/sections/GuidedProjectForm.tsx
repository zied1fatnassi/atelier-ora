"use client";

import { useState, useEffect } from "react";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GuidedProjectFormProps {
  locale: Locale;
  dict: Dictionary;
}

interface FormState {
  businessType: string;
  services: string[];
  budget: string;
  details: string;
  timeline: string;
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  consent: boolean;
}

export function GuidedProjectForm({ locale, dict }: GuidedProjectFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    businessType: "",
    services: [],
    budget: "",
    details: "",
    timeline: "",
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    consent: true,
  });

  // Restore partial progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aura-prod-form-progress");
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save partial progress
  useEffect(() => {
    try {
      localStorage.setItem("aura-prod-form-progress", JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const steps = dict.contact.steps;

  const handleServiceToggle = (srv: string) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv],
      });
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (res.ok) {
        setSubmitted(true);
        localStorage.removeItem("aura-prod-form-progress");
      }
    } catch {
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-14 rounded-3xl bg-[#101016] border border-amber-500/40 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-display font-bold text-white">
          {dict.contact.thankYou.title}
        </h3>
        <p className="text-sm text-[#a0a0ab] leading-relaxed max-w-md mx-auto">
          {dict.contact.thankYou.subtitle}
        </p>

        <div className="pt-6 border-t border-white/10 space-y-4">
          <p className="text-xs text-white/70">
            {dict.contact.thankYou.whatsAppPrompt}
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors text-sm shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp ({siteConfig.contact.phoneDisplay})</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#111119] border border-white/10 shadow-2xl max-w-3xl mx-auto">
      {/* Step Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-[#a0a0ab] mb-3">
          <span className="uppercase text-amber-400 font-bold">
            {locale === "ar" ? `المرحلة 0${currentStep} / 05` : `STEP 0${currentStep} / 05`}
          </span>
          <span>{Math.round((currentStep / 5) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* STEP 1: Business Type */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-2xl font-display font-semibold text-white">
                {steps.step1.title}
              </h3>
              <p className="text-xs text-[#a0a0ab] mt-1">
                {steps.step1.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.step1.options.map((opt) => {
                const isSelected = formData.businessType === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: opt })}
                    className={cn(
                      "p-4 rounded-2xl border text-start transition-all flex items-center justify-between",
                      isSelected
                        ? "bg-amber-500/15 border-amber-500 text-white font-medium"
                        : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20 hover:bg-white/[0.04]"
                    )}
                  >
                    <span className="text-xs sm:text-sm">{opt}</span>
                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Services */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-2xl font-display font-semibold text-white">
                {steps.step2.title}
              </h3>
              <p className="text-xs text-[#a0a0ab] mt-1">
                {steps.step2.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.step2.options.map((opt) => {
                const isSelected = formData.services.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleServiceToggle(opt)}
                    className={cn(
                      "p-4 rounded-2xl border text-start transition-all flex items-center justify-between",
                      isSelected
                        ? "bg-amber-500/15 border-amber-500 text-white font-medium"
                        : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20 hover:bg-white/[0.04]"
                    )}
                  >
                    <span className="text-xs sm:text-sm">{opt}</span>
                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Timeline */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-2xl font-display font-semibold text-white">
                {steps.step3.title}
              </h3>
              <p className="text-xs text-[#a0a0ab] mt-1">
                {steps.step3.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {steps.step3.options.map((opt) => {
                const isSelected = formData.timeline === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: opt })}
                    className={cn(
                      "p-4 rounded-2xl border text-start transition-all flex items-center justify-between",
                      isSelected
                        ? "bg-amber-500/15 border-amber-500 text-white font-medium"
                        : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20 hover:bg-white/[0.04]"
                    )}
                  >
                    <span className="text-xs sm:text-sm">{opt}</span>
                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Project Details */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-2xl font-display font-semibold text-white">
                {steps.step4.title}
              </h3>
              <p className="text-xs text-[#a0a0ab] mt-1">
                {steps.step4.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <textarea
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder={steps.step4.placeholderDetails}
                className="w-full p-4 rounded-2xl bg-[#0b0b10] border border-white/10 text-white text-xs sm:text-sm placeholder:text-white/30 focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        )}

        {/* STEP 5: Contact Details */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-2xl font-display font-semibold text-white">
                {steps.step5.title}
              </h3>
              <p className="text-xs text-[#a0a0ab] mt-1">
                {steps.step5.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#a0a0ab] uppercase mb-1.5">
                  {steps.step5.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={steps.step5.namePlaceholder}
                  className="w-full p-3.5 rounded-xl bg-[#0b0b10] border border-white/10 text-white text-xs sm:text-sm placeholder:text-white/30 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a0a0ab] uppercase mb-1.5">
                  {steps.step5.businessNameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  placeholder={steps.step5.businessPlaceholder}
                  className="w-full p-3.5 rounded-xl bg-[#0b0b10] border border-white/10 text-white text-xs sm:text-sm placeholder:text-white/30 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a0a0ab] uppercase mb-1.5">
                  {steps.step5.phoneLabel} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={steps.step5.phonePlaceholder}
                  className="w-full p-3.5 rounded-xl bg-[#0b0b10] border border-white/10 text-white text-xs sm:text-sm placeholder:text-white/30 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a0a0ab] uppercase mb-1.5">
                  {steps.step5.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={steps.step5.emailPlaceholder}
                  className="w-full p-3.5 rounded-xl bg-[#0b0b10] border border-white/10 text-white text-xs sm:text-sm placeholder:text-white/30 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="pt-2 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="consent-checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40 text-amber-500 focus:ring-amber-500"
              />
              <label htmlFor="consent-checkbox" className="text-xs text-white/60 leading-relaxed cursor-pointer">
                {locale === "fr"
                  ? "J'accepte que AURA PROD traite mes coordonnées pour me recontacter concernant ce projet conformément à la Politique de Confidentialité."
                  : locale === "ar"
                  ? "أوافق على معالجة AURA PROD لبيانات الاتصال للرد بخصوص هذا المشروع وفقاً لسياسة الخصوصية."
                  : "I consent to AURA PROD processing my contact details to reply regarding this project inquiry in accordance with the Privacy Policy."}
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{dict.common.back}</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-colors shadow-md"
            >
              <span>{dict.common.next}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-colors shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <span>{dict.common.submitting}</span>
              ) : (
                <>
                  <span>{steps.step5.submitButton}</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
