"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: "content",
    label: "Content Creation",
    icon: "services/content.svg"
  },
  {
    id: "app",
    label: "App Development",
    icon: "services/app.svg"
  },
  {
    id: "digital",
    label: "Digital Strategy",
    icon: "services/digital.svg"
  },
  {
    id: "brand",
    label: "Brand Transformation",
    icon: "services/brand.svg"
  },
];

export const Filters = () => {
  const [active, setActive] = useState("content");

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 lg:mb-12 px-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`px-3.5 py-1.5 rounded-full border text-[8px] md:text-sz-16 font-medium flex items-center gap-2 group
            ${active === cat.id 
              ? "border-white/80" 
              : "border-foreground/40 text-foreground/40 hover:border-foreground/70 hover:text-foreground/70"
            }`}
        >
          <Image
            src={cat.icon}
            alt={cat.label}
            width={16}
            height={16}
            aria-hidden="true"
            className={`${active === cat.id ? "opacity-100" : "opacity-40 group-hover:opacity-70"}`}
          />
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
};