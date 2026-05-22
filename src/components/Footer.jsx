import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
} from "./Icons";
import { company } from "../data/siteContent";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/clients", "Clients"],
  ["/contact", "Contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/30 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="page-container py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              MICEkart
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-200/90">
              {company.slogan}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 p-2 text-blue-200 transition hover:border-white/30 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 p-2 text-blue-200 transition hover:border-white/30 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 p-2 text-blue-200 transition hover:border-white/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-200">
              Explore
            </h4>
            <ul className="grid gap-2 text-sm text-blue-200">
              {links.map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group inline-flex items-center gap-1 transition hover:text-white"
                  >
                    {label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-200">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-blue-200">
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone size={16} /> {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail size={16} /> {company.email}
              </a>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {company.address}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="MICEkart office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                className="h-48 w-full border-0 sm:h-56"
                aria-label="MICEkart location map"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-blue-300/80">
          © {new Date().getFullYear()} {company.name} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
