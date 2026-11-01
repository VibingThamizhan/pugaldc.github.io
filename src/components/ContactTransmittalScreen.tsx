import React, { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  FileText,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export const ContactTransmittalScreen: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [roleTitle, setRoleTitle] = useState('Senior Document Controller');
  const [sector, setSector] = useState('EPC / Oil & Gas (ADNOC Standards)');
  const [workLocation, setWorkLocation] = useState('Abu Dhabi, UAE');
  const [customMessage, setCustomMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [transmittalGenerated, setTransmittalGenerated] = useState(false);

  // Formatted transmittal text
  const generatedTransmittalText = `FORMAL INTERVIEW & OPPORTUNITY TRANSMITTAL ADVICE
--------------------------------------------------
TRANSMITTAL REF: TR-INQ-${Date.now().toString().slice(-6)}
DATE: ${new Date().toISOString().split('T')[0]}
TO: Pugazhenthi Chandraboss (Document Controller)
EMAIL: ${CANDIDATE_PROFILE.email}
PHONE: ${CANDIDATE_PROFILE.phone}

FROM:
Company: ${companyName || '[Your Organization / EPC Entity]'}
Contact Lead: ${contactPerson || '[Hiring Manager / Talent Lead]'}
Role Scope: ${roleTitle}
Industry Sector: ${sector}
Location: ${workLocation}

REMARKS / SCOPE OF WORK:
${customMessage || 'We have reviewed your audited Document Controller & Aconex EDMS portfolio and would like to invite you for an interview regarding immediate mobilization in the UAE.'}

STATUS ACKNOWLEDGEMENT:
Candidate Visa: UAE Resident Visa (Spouse Sponsored) - Immediate Availability
Notice Period: 0 Days
--------------------------------------------------`;

  const handleCopySlip = () => {
    navigator.clipboard.writeText(generatedTransmittalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Document Controller Opportunity: ${companyName ? `${companyName} - ` : ''}${roleTitle}`);
    const body = encodeURIComponent(generatedTransmittalText);
    window.location.href = `mailto:${CANDIDATE_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Pugazhenthi, I reviewed your Document Controller portfolio. We have an opportunity at ${companyName || 'our company'} for a ${roleTitle} in ${workLocation}. Immediate availability acknowledged.`);
    window.open(`https://wa.me/971565686395?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
              OFFICIAL DISPATCH PROTOCOL
            </span>
            <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              DIRECT CONTACT CHANNELS
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            Transmittal Inquiry &amp; Direct Candidate Engagement
          </h1>
          <p className="text-xs text-slate-500">
            Dispatch an official interview transmittal or contact Pugazhenthi Chandraboss directly for immediate deployment.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Immediate Mobilization Ready
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Communication Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Phone / WhatsApp Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 text-[#2563EB] rounded">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  UAE Direct Telephone Line
                </span>
                <a
                  href={`tel:${CANDIDATE_PROFILE.phoneClean}`}
                  className="text-base font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors font-mono"
                >
                  {CANDIDATE_PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <a
                href={`tel:${CANDIDATE_PROFILE.phoneClean}`}
                className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-medium text-center transition-colors"
              >
                Call Directly
              </a>
              <button
                onClick={handleWhatsApp}
                className="flex-1 py-2 px-3 bg-[#25D366] hover:bg-emerald-600 text-white rounded text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Direct Email Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 text-[#059669] rounded">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  Official Email Inbox
                </span>
                <a
                  href={`mailto:${CANDIDATE_PROFILE.email}`}
                  className="text-sm font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors font-mono"
                >
                  {CANDIDATE_PROFILE.email}
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={`mailto:${CANDIDATE_PROFILE.email}?subject=Document%20Controller%20Inquiry%20-%20Immediate%20Mobilization`}
                className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium block text-center transition-colors"
              >
                Compose Email via Default Client →
              </a>
            </div>
          </div>

          {/* Physical Base & Visa Clearance Summary */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-5 space-y-3 text-xs">
            <h3 className="font-bold text-[#0F172A] flex items-center gap-2 font-mono uppercase text-[11px]">
              <MapPin className="w-4 h-4 text-slate-500" />
              UAE Residence &amp; Mobility Matrix
            </h3>

            <div className="space-y-2 text-slate-600 font-mono text-[11px]">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-slate-400">Current Base:</span>
                <span className="font-bold text-slate-800">Al Danah, Abu Dhabi</span>
              </div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-slate-400">Visa Category:</span>
                <span className="font-bold text-emerald-700">Resident (Spouse Sponsored)</span>
              </div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-slate-400">Availability:</span>
                <span className="font-bold text-emerald-700">Immediate (0 Days)</span>
              </div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-slate-400">Mobility:</span>
                <span className="font-bold text-slate-800">Abu Dhabi / Dubai / Site</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Passport Expiry:</span>
                <span className="font-bold text-slate-800">October 2033</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Formal Transmittal Form & Generator (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-5">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  Generate Opportunity Transmittal Advice
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Prepares a structured transmittal package formatted for EPC and engineering recruitment records
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-400">TR-FORM-2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                  Your Organization / EPC Firm
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Petrofac / ADNOC / NMDC / Altrad"
                  className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                  Contact Person / Hiring Lead
                </label>
                <input
                  type="text"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="e.g. Engineering Director / HR Lead"
                  className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                  Role Scope
                </label>
                <select
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none font-mono"
                >
                  <option value="Senior Document Controller">Senior Document Controller</option>
                  <option value="Lead Document Controller (EPC / Site)">Lead Document Controller (EPC / Site)</option>
                  <option value="Aconex EDMS Administrator">Aconex EDMS Administrator</option>
                  <option value="Information Management Specialist">Information Management Specialist</option>
                  <option value="Project Document Control Coordinator">Project Document Control Coordinator</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                  Work Location
                </label>
                <select
                  value={workLocation}
                  onChange={(e) => setWorkLocation(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
                >
                  <option value="Abu Dhabi, UAE (HQ / Project Office)">Abu Dhabi, UAE (HQ / Project Office)</option>
                  <option value="Dubai, UAE">Dubai, UAE</option>
                  <option value="Ruwais / Western Region (Site-Based)">Ruwais / Western Region (Site-Based)</option>
                  <option value="Sharjah / Northern Emirates">Sharjah / Northern Emirates</option>
                  <option value="Open / Multi-Site Rotation">Open / Multi-Site Rotation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Project Sector &amp; Standards
              </label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="e.g. EPC / Marine Infrastructure / Oil & Gas / Civil Construction"
                className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Transmittal Notes / Scope of Interview
              </label>
              <textarea
                rows={3}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Specify interview time slot, package requirements, or project details..."
                className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              />
            </div>

            {/* Live Generated Transmittal Display Box */}
            <div className="border border-slate-800 rounded bg-[#0F172A] p-4 text-white font-mono text-[11px] space-y-2">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-700 pb-2">
                <span className="font-bold text-emerald-400">LIVE PREVIEW // TRANSMITTAL SLIP</span>
                <button
                  type="button"
                  onClick={handleCopySlip}
                  className="flex items-center gap-1 text-xs text-white hover:text-blue-300 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Slip!' : 'Copy Slip'}</span>
                </button>
              </div>
              <pre className="text-slate-300 whitespace-pre-wrap font-mono text-[10px] leading-relaxed overflow-x-auto max-h-48">
                {generatedTransmittalText}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopySlip}
                className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Transmittal Copied' : 'Copy Formatted Transmittal'}</span>
              </button>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-4 py-2 bg-[#25D366] hover:bg-emerald-600 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailDirect}
                  className="px-4 py-2 bg-[#2563EB] hover:bg-blue-600 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Transmittal Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
