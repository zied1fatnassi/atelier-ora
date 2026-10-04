import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#060608] text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="font-mono text-xs text-amber-500 uppercase tracking-widest">
          ERREUR 404 • PLAN NON TROUVÉ
        </div>
        <h1 className="text-6xl sm:text-8xl font-display font-extrabold text-white">
          404
        </h1>
        <p className="text-sm text-[#a0a0ab] leading-relaxed">
          Cette scène ou page semble avoir été déplacée ou n&apos;existe plus dans notre découpage.
        </p>
        <div className="pt-4">
          <Link
            href="/fr"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retourner à l&apos;accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
