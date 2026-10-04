"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
  QrCode,
  MessageCircle,
  Check,
  Plus,
  ArrowUpRight,
  MapPin,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DigitalMenuPreviewSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function DigitalMenuPreviewSection({
  locale,
  dict,
}: DigitalMenuPreviewSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [phoneLang, setPhoneLang] = useState<"FR" | "AR" | "EN">("FR");
  const [orderItems, setOrderItems] = useState<string[]>([]);
  const [showQrModal, setShowQrModal] = useState(false);

  const categories = dict.digitalMenu.categories;
  const items = dict.digitalMenu.sampleItems;

  const filteredItems =
    selectedCategory === "Tous" || selectedCategory === "All" || selectedCategory === "الكل"
      ? items
      : items.filter((it) => it.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const toggleItem = (name: string) => {
    if (orderItems.includes(name)) {
      setOrderItems(orderItems.filter((i) => i !== name));
    } else {
      setOrderItems([...orderItems, name]);
    }
  };

  const whatsappOrderMessage = encodeURIComponent(
    `Bonjour ! Je souhaite commander via votre menu digital :\n- ${orderItems.join(
      "\n- "
    )}\nMerci !`
  );

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#060608] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            tag={dict.digitalMenu.tag}
            title={dict.digitalMenu.title}
            subtitle={dict.digitalMenu.subtitle}
            className="mb-0"
          />

          <Button
            onClick={() => setShowQrModal(true)}
            variant="secondary"
            size="md"
            icon={<QrCode className="w-4 h-4 text-amber-500" />}
            iconPosition="left"
          >
            Scanner le QR Code Démo
          </Button>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Product Advantages */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {dict.digitalMenu.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-5 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-2 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <h3 className="font-display font-semibold text-white text-sm sm:text-base">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a0a0ab] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#111118] border border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                  FONCTIONNALITÉ STAR
                </span>
                <span className="text-sm font-medium text-white">
                  Commande envoyée directement sur votre WhatsApp
                </span>
              </div>
              <Link
                href={`/${locale}/digital-menu`}
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Voir la page produit complète</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Smartphone Interactive Simulator Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[42px] p-3 bg-[#1e1e28] border-4 border-[#2b2b3a] shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative">
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-end px-3">
                <span className="w-2 h-2 rounded-full bg-blue-900/60" />
              </div>

              {/* Inside Screen Content */}
              <div className="w-full rounded-[34px] bg-[#0c0c11] overflow-hidden text-white flex flex-col min-h-[580px] max-h-[620px] relative">
                {/* Simulator Header */}
                <div className="p-5 pt-8 bg-[#14141e] border-b border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-sm tracking-tight text-white">
                        L&apos;ARTISAN &amp; COFFEE
                      </h4>
                      <span className="text-[10px] text-amber-400 font-mono">
                        MENU DIGITAL OFFICIEL
                      </span>
                    </div>

                    {/* In-app Language Switcher */}
                    <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full text-[10px] font-mono">
                      {(["FR", "AR", "EN"] as const).map((l) => (
                        <button
                          key={l}
                          onClick={() => setPhoneLang(l)}
                          className={cn(
                            "px-2 py-0.5 rounded-full transition-colors",
                            phoneLang === l
                              ? "bg-amber-500 text-black font-bold"
                              : "text-white/60 hover:text-white"
                          )}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] text-white/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>07:30 - 23:00</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>La Marsa, Tunis</span>
                    </span>
                  </div>
                </div>

                {/* Categories Scrollable Strip */}
                <div className="p-3 overflow-x-auto flex items-center gap-2 border-b border-white/5 no-scrollbar bg-[#0f0f15]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-3 py-1 rounded-full text-[11px] whitespace-nowrap transition-colors",
                        selectedCategory === cat
                          ? "bg-amber-500 text-black font-semibold"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Menu Items List */}
                <div className="p-3 space-y-3 overflow-y-auto flex-1 text-start">
                  {filteredItems.map((item) => {
                    const isSelected = orderItems.includes(item.name);
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          "p-3 rounded-2xl border transition-all flex gap-3 items-center",
                          isSelected
                            ? "bg-amber-500/10 border-amber-500/40"
                            : "bg-[#14141d] border-white/5"
                        )}
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0 bg-neutral-800">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h5 className="font-display font-semibold text-xs text-white truncate">
                              {item.name}
                            </h5>
                            <span className="text-[11px] font-mono font-bold text-amber-400 shrink-0">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-[10px] text-[#a0a0ab] line-clamp-2 mt-0.5">
                            {item.desc}
                          </p>
                          <div className="flex items-center gap-1 mt-1.5">
                            {item.dietary.map((d) => (
                              <span
                                key={d}
                                className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-white/60 font-mono"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => toggleItem(item.name)}
                          className={cn(
                            "p-2 rounded-full transition-colors shrink-0",
                            isSelected
                              ? "bg-amber-500 text-black"
                              : "bg-white/10 text-white hover:bg-white/20"
                          )}
                          aria-label={`Ajouter ${item.name} à la commande`}
                        >
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom WhatsApp Order simulation bar */}
                {orderItems.length > 0 && (
                  <div className="p-3 bg-[#161622] border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="text-[11px]">
                      <span className="text-white/60">{orderItems.length} article(s)</span>
                    </div>
                    <a
                      href={`https://wa.me/21629888900?text=${whatsappOrderMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Commander sur WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal Demo */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-8 rounded-3xl bg-[#12121a] border border-white/15 max-w-sm w-full text-center space-y-6 animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-display font-bold text-white">
              Scannez le Menu Démo
            </h3>
            <p className="text-xs text-[#a0a0ab]">
              Pointez l&apos;appareil photo de votre smartphone pour ouvrir la démonstration interactive instantanée :
            </p>
            <div className="p-4 bg-white rounded-2xl inline-block shadow-xl">
              <QrCode className="w-44 h-44 text-black" />
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => setShowQrModal(false)}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
