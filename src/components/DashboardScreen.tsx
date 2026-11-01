import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Layers, 
  Download, 
  Clock, 
  Compass, 
  ExternalLink,
  Cpu,
  FileSpreadsheet,
  AlertCircle,
  Award,
  Sparkles
} from 'lucide-react';
import { CANDIDATE_PROFILE, CASE_STUDIES } from '../data/portfolioData';
import { NavTab } from './Navbar';

interface DashboardScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Hero Dossier Banner */}
      <section className="bg-white border border-[#E2E8F0] rounded-lg shadow-xs overflow-hidden">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#1E3A8A] text-white p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  ISO 9001:2015 &amp; ACONEX EDMS CERTIFIED
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-blue-500/20 text-blue-200 border border-blue-400/30 rounded">
                  UAE RESIDENT VISA • IMMEDIATE MOBILIZATION
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded">
                  AL DANAH, ABU DHABI
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                {CANDIDATE_PROFILE.fullName}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {CANDIDATE_PROFILE.summary}
              </p>
            </div>

            {/* Quick Actions Column */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 min-w-[220px]">
              <a
                href={CANDIDATE_PROFILE.resumePdfUrl}
                download="Pugazhenthi_Chandraboss_Document_Controller_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-xs rounded transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>

              <button
                onClick={() => onNavigate('mdr')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded border border-slate-700 transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>OPEN MASTER REGISTER (MDR)</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>DISPATCH INTERVIEW TRANSMITTAL</span>
              </button>
            </div>
          </div>
        </div>

        {/* Status Verification Ribbon */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-6 py-3 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4 font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Credentials:
            </span>
            <span className="text-slate-600">CPD UK (2026)</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">ACTVET Abu Dhabi (2026)</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">ITE Singapore Maritime (2018)</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">BCA Degree (2013)</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Notice Period: <strong className="text-slate-800">0 Days (Immediate)</strong></span>
          </div>
        </div>
      </section>

      {/* Audited Operational Metrics (4-up KPI Grid) */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0F172A] rounded-xs"></span>
            Operational Performance &amp; Audit Metrics
          </h2>
          <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            100% Verified Track Record
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CANDIDATE_PROFILE.kpis.map((kpi, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-lg p-5 hover:border-blue-400 hover:shadow-xs transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {kpi.badge}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-sans mb-1 tabular-numbers">
                {kpi.metric}
              </div>
              <div className="text-sm font-semibold text-slate-800 mb-1">
                {kpi.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {kpi.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Document Lifecycle & Quality Gate Architecture */}
      <section className="bg-white border border-[#E2E8F0] rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-[#0F172A] tracking-tight">
              Standardized Document Lifecycle Protocol (ISO 9001 / BS 1192)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Strict end-to-end configuration management pipeline enforced on every transmittal package
            </p>
          </div>
          <button
            onClick={() => onNavigate('lifecycle')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-blue-800 transition-colors font-mono cursor-pointer"
          >
            <span>Launch Interactive Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-4 relative group hover:border-blue-400 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-mono font-bold flex items-center justify-center">
                01
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">Intake &amp; Registration</span>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1">BS 1192 Codification</h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Automated document numbering verification across Project, Originator, Discipline, Type, and Sequential ID.
            </p>
            <div className="text-[11px] font-mono bg-white border border-slate-200 rounded px-2 py-1 text-slate-700">
              <code>PSA-ENG-DWG-CIV-0021</code>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-4 relative group hover:border-blue-400 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white text-xs font-mono font-bold flex items-center justify-center">
                02
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">QA / QC Gate</span>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1">Revision Stamping &amp; OCR</h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Adobe Acrobat Pro digital stamp verification, markups, redlines, title block validation, and metadata completeness.
            </p>
            <div className="text-[11px] font-mono bg-white border border-slate-200 rounded px-2 py-1 text-emerald-700 flex items-center justify-between">
              <span>STATUS: CHECKED</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-4 relative group hover:border-blue-400 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-mono font-bold flex items-center justify-center">
                03
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">Distribution</span>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1">Aconex Transmittal Issue</h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Official transmittal slip generation (`TR-PSA-2024-XXXX`), recipient matrix dispatch, and SLA response countdown.
            </p>
            <div className="text-[11px] font-mono bg-white border border-slate-200 rounded px-2 py-1 text-slate-700">
              <code>SLA: 5 DAYS TURNAROUND</code>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-4 relative group hover:border-blue-400 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-mono font-bold flex items-center justify-center">
                04
              </span>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase">Archival</span>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1">As-Built Master Register</h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Syncing Master Document Register (MDR), archiving superseded copies, and generating audit-ready compliance logs.
            </p>
            <div className="text-[11px] font-mono bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 flex items-center justify-between">
              <span>AUDIT READY</span>
              <span className="font-semibold text-emerald-600">100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout: Core Competencies & Case Studies Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Technical Ecosystem & Core Competencies (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#2563EB]" />
                EDMS &amp; Software Toolchain
              </h2>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Production Ready</span>
            </div>

            <div className="space-y-3">
              {CANDIDATE_PROFILE.tools.map((tool, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded border border-slate-100 bg-[#F8FAFC] hover:bg-white hover:border-slate-300 transition-colors text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${tool.highlight ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                    <span className="font-semibold text-[#0F172A]">{tool.name}</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {tool.proficiency}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-mono font-bold uppercase text-slate-500 mb-3 tracking-wider">
                ISO Standards &amp; Methodologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'ISO 9001:2015 §7.5',
                  'ISO 19650-1 & -2',
                  'BS 1192 Standard',
                  'Master Document Registers',
                  'Singapore WSH Act',
                  'Aconex Workflow',
                  'SharePoint CDE',
                  'Transmittal Registers',
                  'Version Control Logs',
                  'QA Redlining',
                ].map((item, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* UAE Immediate Mobilization Card */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-5">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#2563EB] text-white rounded">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#1E3A8A]">
                  Immediate UAE Onboarding Clearance
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Holding valid UAE Resident Visa (Spouse Sponsored) with no NOC required. Able to mobilize immediately across Abu Dhabi, Dubai, Sharjah, or regional EPC sites.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="bg-white text-blue-900 px-2 py-0.5 rounded border border-blue-200">
                    Passport: Valid Oct 2033
                  </span>
                  <span className="bg-white text-blue-900 px-2 py-0.5 rounded border border-blue-200">
                    Location: Abu Dhabi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Studies Highlights & Proof (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#059669]" />
                  Audited Portfolio Case Studies
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real operational case proofs from maritime terminal and enterprise systems
                </p>
              </div>
              <button
                onClick={() => onNavigate('case-studies')}
                className="text-xs font-mono font-semibold text-[#2563EB] hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>View All 4</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {CASE_STUDIES.slice(0, 2).map((cs) => (
                <div 
                  key={cs.id}
                  className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white hover:border-slate-400 transition-all shadow-xs"
                >
                  {/* Case Study Header per spec */}
                  <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="font-bold text-[#0F172A] bg-white border border-slate-200 px-2 py-0.5 rounded">
                      {cs.docClassNumber}
                    </span>
                    <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[11px]">
                      {cs.isoTag}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      {cs.sector}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cs.roleScope}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.edmsEcosystem.map((eco, i) => (
                        <span key={i} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {eco}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Metric per spec */}
                  <div className="bg-[#ECFDF5] border-t border-[#A7F3D0] px-4 py-2 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono font-semibold text-[#047857] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                      Audited Metric Output:
                    </span>
                    <span className="font-bold text-[#047857] text-right font-mono text-[11px]">
                      {cs.auditedMetricOutput}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Want to test the Master Document Register in real time?
              </span>
              <button
                onClick={() => onNavigate('mdr')}
                className="text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 px-3 py-1.5 rounded transition-colors cursor-pointer"
              >
                Access Simulated EDMS Register →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
