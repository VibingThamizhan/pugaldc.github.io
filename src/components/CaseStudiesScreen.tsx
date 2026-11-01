import React, { useState } from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  ExternalLink, 
  FileText,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';

export const CaseStudiesScreen: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(CASE_STUDIES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
              AUDITED PORTFOLIO PROOFS
            </span>
            <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              ISO 9001 &amp; WSH VERIFIED
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            Case Studies &amp; Information Architecture Milestones
          </h1>
          <p className="text-xs text-slate-500">
            Engineered document control interventions across high-volume maritime terminal logistics, shift safety, and EPC project readiness.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
          <span className="px-2.5 py-1 bg-[#F8FAFC] border border-[#CBD5E1] rounded">
            4 Production Case Records
          </span>
        </div>
      </div>

      {/* Case Studies Grid - 4 Structured Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CASE_STUDIES.map((cs) => {
          const isExpanded = expandedCardId === cs.id;

          return (
            <div
              key={cs.id}
              className="bg-white border border-[#E2E8F0] rounded-lg shadow-xs hover:border-slate-400 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* SECTION 1: HEADER (Doc Classification Number + ISO Tag + Sector) */}
              <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0F172A] bg-white border border-slate-300 px-2.5 py-1 rounded shadow-2xs">
                    {cs.docClassNumber}
                  </span>
                  <span className="text-[#1E3A8A] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded text-[11px] font-semibold">
                    {cs.isoTag}
                  </span>
                </div>
                <span className="text-slate-500 text-[11px] font-medium tracking-tight">
                  {cs.sector}
                </span>
              </div>

              {/* SECTION 2: BODY (Project scale, role scope, EDMS ecosystem) */}
              <div className="p-5 space-y-4 flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-1">
                    <span>{cs.organization}</span>
                    <span>{cs.timeframe}</span>
                  </div>
                  <h2 className="text-base font-bold text-[#0F172A] leading-snug">
                    {cs.title}
                  </h2>
                </div>

                <div className="space-y-2 text-xs text-slate-600 leading-relaxed bg-[#F8FAFC] p-3.5 rounded border border-[#E2E8F0]">
                  <div>
                    <strong className="text-slate-900 font-mono uppercase text-[10px] block text-slate-500">
                      Role Scope:
                    </strong>
                    <span>{cs.roleScope}</span>
                  </div>

                  <div className="pt-1">
                    <strong className="text-slate-900 font-mono uppercase text-[10px] block text-slate-500">
                      Project Scale:
                    </strong>
                    <span className="font-mono text-slate-800">{cs.projectScale}</span>
                  </div>
                </div>

                {/* EDMS Ecosystem Badges */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                    EDMS Ecosystem Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.edmsEcosystem.map((eco, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-slate-700 border border-slate-300"
                      >
                        {eco}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collapsible Details */}
                {isExpanded && (
                  <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in text-xs">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 font-mono uppercase text-[11px]">
                        The Challenge:
                      </h4>
                      <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-200">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-1.5 font-mono uppercase text-[11px]">
                        Standardized Lifecycle Workflow:
                      </h4>
                      <ul className="space-y-1.5 text-slate-600">
                        {cs.standardizedWorkflow.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-blue-100 text-[#2563EB] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-1.5 font-mono uppercase text-[11px]">
                        Traceable Operational Outcomes:
                      </h4>
                      <div className="space-y-1">
                        {cs.verifiedImpact.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-1">
                  <button
                    onClick={() => toggleExpand(cs.id)}
                    className="text-xs font-semibold text-[#2563EB] hover:text-blue-800 flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse Workflow Detail' : 'Inspect Full Workflow & Outcomes'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* SECTION 3: FOOTER (Audited Metric Output) */}
              <div className="bg-[#ECFDF5] border-t border-[#A7F3D0] px-5 py-2.5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono font-semibold text-[#047857] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  Audited Metric Output:
                </span>
                <span className="font-bold text-[#047857] font-mono text-right text-xs">
                  {cs.auditedMetricOutput}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
