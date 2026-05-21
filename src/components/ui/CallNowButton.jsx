import React from "react";
import { PhoneCall } from "lucide-react";
import { company } from "../../data/siteContent";

export default function CallNowButton() {
  return (
    <a
      href={`tel:${company.phoneTel}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-card-hover sm:bottom-6 sm:right-6"
      aria-label={`Call now ${company.phone}`}
    >
      <PhoneCall size={18} />
      <span>Call Now</span>
    </a>
  );
}
