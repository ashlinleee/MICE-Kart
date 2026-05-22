import React from "react";
import { PhoneCall } from "../Icons";
import { company } from "../../data/siteContent";

export default function CallNowButton() {
  return (
    <a
      href={`tel:${company.phoneTel}`}
      className="btn-orange fixed bottom-5 right-5 z-50 rounded-full px-4 py-3 sm:bottom-6 sm:right-6"
      aria-label={`Call now ${company.phone}`}
    >
      <PhoneCall size={18} />
      <span>Call Now</span>
    </a>
  );
}
