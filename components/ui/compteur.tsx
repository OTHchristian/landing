"use client";

import { useEffect, useRef, useState } from "react";

interface CompteurProps {
  valeurFinale: number;   // nombre final à afficher
  duree?: number;         // durée de l'animation en ms
  className?: string;     // pour styliser avec Tailwind
}

export default function Compteur({ valeurFinale, duree = 2000, className }: CompteurProps) {
  const [valeur, setValeur] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);

            let start: number | null = null;
            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duree, 1);
              setValeur(Math.floor(progress * valeurFinale));
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [valeurFinale, duree, started]);

  return (
    <div ref={ref} className={` ${className || ""}`}>
      {valeur.toLocaleString()}
    </div>
  );
}
