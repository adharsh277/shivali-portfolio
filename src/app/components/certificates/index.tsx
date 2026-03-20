"use client";
import { certificatesData } from "@/../utils/Data/certificates-data";
import type { Certificate } from "@/../src/Types/types";

const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
  <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-red-600/50 transition-all duration-500 shadow-xl hover:shadow-red-600/10 flex flex-col items-center">
    <img
      src={certificate.image}
      alt={certificate.name}
      className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
    />
    <h3 className="text-xl font-bold text-white mb-2 text-center">
      {certificate.name}
    </h3>
    <p className="text-slate-400 text-sm mb-2 text-center">
      {certificate.description}
    </p>
    <div className="text-red-500 font-semibold mb-4 text-center">
      {certificate.issuer}
    </div>
    <a
      href={certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-900 text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
    >
      View Certificate
    </a>
  </div>
);

import { useState } from "react";

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, 3);
  return (
    <section
      id="certificates"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-red-600"></span>
          <span className="bg-[#050505] border border-red-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-red-600"></span>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          <div className="text-center">
            <p className="text-red-500 text-sm font-bold uppercase tracking-[0.4em] mb-4">
              Achievements
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Certificates
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-slate-400 text-lg leading-relaxed font-medium mx-auto">
              A showcase of certifications earned for technical skills and
              professional growth.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {displayedCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
          {certificatesData.length > 3 && (
            <button
              className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-900 text-white font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
