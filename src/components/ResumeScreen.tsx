import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  FileText,
  Eye,
  Check,
  Calendar,
  Layers
} from 'lucide-react';
import { CANDIDATE_PROFILE, WORK_EXPERIENCE, CERTIFICATIONS } from '../data/portfolioData';

export const ResumeScreen: React.FC = () => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  return (
    <div className="space-y-6 pb-12">
      {/* Header Strip with PDF Download */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
              OFFICIAL CANDIDATE DOSSIER
            </span>
            <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              AUTHENTICATED RESUME (2026)
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            Pugazhenthi Chandraboss — Curriculum Vitae &amp; Credentials
          </h1>
          <p className="text-xs text-slate-500">
            Document Controller • UAE Resident Visa (Spouse Sponsored) • Immediate Availability
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Toggle between Interactive and Official PDF Viewer */}
          <div className="inline-flex bg-slate-100 p-0.5 rounded border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-white text-[#0F172A] font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interactive CV
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === 'pdf'
                  ? 'bg-white text-[#0F172A] font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Embedded PDF</span>
            </button>
          </div>

          <a
            href={CANDIDATE_PROFILE.resumePdfUrl}
            download="Pugazhenthi_Chandraboss_Document_Controller_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {viewMode === 'pdf' ? (
        /* Embedded PDF Viewer Component */
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Source File: <code>PC_RES_DC2026_c61b13c1.pdf</code></span>
            </span>
            <a
              href={CANDIDATE_PROFILE.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline flex items-center gap-1"
            >
              <span>Open In New Window</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="w-full h-[800px] border border-slate-300 rounded overflow-hidden bg-slate-100">
            <iframe
              src={`${CANDIDATE_PROFILE.resumePdfUrl}#view=FitH`}
              title="Pugazhenthi Chandraboss Official Resume PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      ) : (
        /* Structured Interactive View */
        <div className="space-y-6">
          {/* Quick Info & Visa Clearance Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            <div className="bg-white border border-[#E2E8F0] p-4 rounded">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Work Authorization</span>
              <span className="font-bold text-slate-900 block mt-1">UAE Resident Visa</span>
              <span className="text-[11px] text-emerald-600 font-semibold">(Spouse Sponsored - No NOC)</span>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-4 rounded">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Availability</span>
              <span className="font-bold text-emerald-700 block mt-1">Immediate (0 Days Notice)</span>
              <span className="text-[11px] text-slate-500">Ready for instantaneous start</span>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-4 rounded">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Relocation &amp; Travel</span>
              <span className="font-bold text-slate-900 block mt-1">Open within UAE</span>
              <span className="text-[11px] text-slate-500">Abu Dhabi, Dubai &amp; Site based</span>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-4 rounded">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Passport Validity</span>
              <span className="font-bold text-slate-900 block mt-1">Valid Until Oct 2033</span>
              <span className="text-[11px] text-slate-500">Willing to Travel</span>
            </div>
          </div>

          {/* Professional Summary Box */}
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {CANDIDATE_PROFILE.summary}
            </p>
          </div>

          {/* Certifications & Formal Accreditation */}
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                Certifications &amp; Accreditations
              </h2>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100% Verified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-4 space-y-2 hover:border-blue-400 transition-colors text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#0F172A] text-white">
                      {cert.type}
                    </span>
                    <span className="font-mono text-slate-500 text-[11px]">{cert.year}</span>
                  </div>

                  <h3 className="font-bold text-[#0F172A] text-sm leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-[11px] text-slate-600 font-medium">
                    {cert.issuer} {cert.credentialId ? `• ID: ${cert.credentialId}` : ''}
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience Timeline */}
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#2563EB]" />
                Professional Work Experience
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Detailed roles in document control, maritime operations supervision, and enterprise administration
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-8 space-y-3">
                  {/* Timeline Node */}
                  <div className="absolute left-1.5 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#2563EB] shadow-xs"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-slate-700">
                        {exp.company} {exp.parentOrg ? <span className="text-blue-700 font-normal">({exp.parentOrg})</span> : ''} • {exp.location}
                      </div>
                    </div>

                    <div className="font-mono text-[11px] text-slate-500 bg-[#F8FAFC] border border-slate-200 px-2 py-0.5 rounded self-start sm:self-auto">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {exp.bulletPoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] shrink-0 mt-1.5"></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Environment & Metric Tags */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold self-center mr-1">
                        Environment:
                      </span>
                      {exp.environment.map((env, i) => (
                        <span key={i} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {env}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                      ★ {exp.keyAuditMetric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Language Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-3">
              <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2 border-b border-slate-100 pb-3">
                <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                Academic Education
              </h2>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#0F172A]">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <div className="text-xs text-slate-600 font-medium">
                  Bharathidasan University, India • Graduated 2013
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pt-2">
                  Comprehensive academic foundation in Relational Database Management Systems (RDBMS), data structures, software engineering, and digital information systems.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-3">
              <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2 border-b border-slate-100 pb-3">
                <Globe className="w-4 h-4 text-emerald-600" />
                Language Fluency
              </h2>
              <div className="space-y-2.5 pt-1 text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-slate-200">
                  <span className="font-bold text-slate-800">English</span>
                  <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Fluent / Professional Working
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-slate-200">
                  <span className="font-bold text-slate-800">Tamil</span>
                  <span className="font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Native Proficiency
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-slate-200">
                  <span className="font-bold text-slate-800">Malay</span>
                  <span className="font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Professional Working (Singapore Port Ops)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
