"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/profile-v2";

interface CertificationsGridProps {
  certifications: Certification[];
  maxItems?: number;
}

export function CertificationsGrid({ certifications, maxItems = 12 }: CertificationsGridProps) {
  const displayCertifications = certifications.slice(0, maxItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {displayCertifications.map((cert, index) => {
        const cardClass =
          "relative block h-full overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm hover:border-cyanx/50 transition-all";
        const content = (
          <>
            {/* Top accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyanx/10 to-transparent rounded-bl-full" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyanx/20 to-emeraldx/20 border border-cyanx/30 mb-4">
                <Award className="w-6 h-6 text-cyanx" />
              </div>

              {/* Certificate Info */}
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyanx transition-colors">
                {cert.name}
              </h3>

              <p className="text-sm text-emeraldx font-medium mb-3">{cert.issuer}</p>

              {/* Date and Credential */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{cert.date}</span>
                {cert.credentialUrl && (
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyanx transition-colors" />
                )}
              </div>

              {cert.credentialId && (
                <p className="text-xs text-slate-500 mt-2 font-mono break-all">
                  ID: {cert.credentialId}
                </p>
              )}
            </div>

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyanx/20 to-emeraldx/20 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
          </>
        );

        return (
          <motion.div
            key={`${cert.issuer}-${cert.name}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group"
          >
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {content}
              </a>
            ) : (
              <div className={cardClass}>{content}</div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
