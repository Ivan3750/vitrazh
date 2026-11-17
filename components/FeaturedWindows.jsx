"use client";
import { useMemo, useState } from "react";
import { buildCatalog } from "@/lib/catalog";
import WindowCard from "./WindowCard";
import WindowQuickView from "./WindowQuickView";
import Modal from "./Modal";
import Reveal from "./Reveal";

const PICKS = [
  "lider-58-2tt-1300x1400",
  "76-ad-1t-800x1300",
  "ideal-4000-2tt-1300x1400",
  "neo-76-ad-2ft-1100x1300",
];

export default function FeaturedWindows() {
  const [quick, setQuick] = useState(null);
  const items = useMemo(() => {
    const all = buildCatalog();
    return PICKS.map((id) => all.find((i) => i.id === id)).filter(Boolean);
  }, []);
  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i, idx) => (
          <Reveal as="li" key={i.id} delay={idx * 80}><WindowCard item={i} onQuick={(it, g, c) => setQuick({ it, g, c })} /></Reveal>
        ))}
      </ul>
      <Modal open={!!quick} onClose={() => setQuick(null)} title={quick ? `${quick.it.profileName} · ${quick.it.configLabel} ${quick.it.width}×${quick.it.height}` : ""} wide>
        {quick && <WindowQuickView key={quick.it.id} item={quick.it} initialGlass={quick.g} initialColor={quick.c} onDone={() => setQuick(null)} />}
      </Modal>
    </>
  );
}
