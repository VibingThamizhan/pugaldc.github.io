import React from 'react';
import { 
  FileText, 
  Database, 
  Briefcase, 
  Sliders, 
  Award, 
  Mail, 
  Download, 
  ShieldCheck, 
  PhoneCall, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export type NavTab = 'dashboard' | 'mdr' | 'case-studies' | 'lifecycle' | 'resume' | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  documentCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, documentCount }) => {
  const tabs: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'dashboard', label: 'Executive Dossier', icon: <FileText className="w-4 h-4" /> },
    { 
      id: 'mdr', 
      label: 'Master Register (MDR)', 
      icon: <Database className="w-4 h-4" />, 
      badge: `${documentCount} Controlled` 
    },
    { id: 'case-studies', label: 'Case Studies', icon: <Briefcase className="w-4 h-4" />, badge: '4 Audited' },
    { id: 'lifecycle', label: 'Lifecycle Engine', icon: <Sliders className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume & Credentials', icon: <Award className="w-4 h-4" />, badge: 'CPD / ACTVET' },
    { id: 'contact', label: 'Inquiry Transmittal', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
      {/* Top System Compliance Strip */}
      <div className="bg-[#0F172A] text-slate-300 text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] tracking-wider uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            EDMS ONLINE // ISO 9001:2015 &amp; ISO 19650
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:flex items-center gap-1 text-slate-300 text-[11px]">
            <MapPin className="w-3 h-3 text-slate-400" />
            {CANDIDATE_PROFILE.location}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 px-2 py-0.5 rounded-[2px] font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            {CANDIDATE_PROFILE.visaStatus} • {CANDIDATE_PROFILE.availability}
          </span>
          <a
            href={CANDIDATE_PROFILE.resumePdfUrl}
            download="Pugazhenthi_Chandraboss_Document_Controller_Resume.pdf"
            className="flex items-center gap-1 bg-[#2563EB] hover:bg-blue-600 text-white px-2 py-0.5 rounded-[2px] transition-colors"
            title="Download Official Resume PDF"
          >
            <Download className="w-3 h-3" />
            <span>PDF RESUME</span>
          </a>
        </div>
      </div>

      {/* Main Identity & Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#0F172A] text-white flex items-center justify-center font-mono font-bold text-sm tracking-tight border border-slate-800 shadow-sm">
              PC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-[#0F172A] tracking-tight font-sans">
                  {CANDIDATE_PROFILE.fullName}
                </h1>
                <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 mr-0.5 text-emerald-600" />
                  CPD / ACTVET 2026
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {CANDIDATE_PROFILE.title} • {CANDIDATE_PROFILE.subtitle}
              </p>
            </div>
          </div>

          {/* Mobile contact triggers */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={`tel:${CANDIDATE_PROFILE.phoneClean}`}
              className="p-2 border border-slate-200 rounded text-slate-700 hover:bg-slate-50"
              title="Call"
            >
              <PhoneCall className="w-4 h-4 text-[#2563EB]" />
            </a>
            <a
              href={`mailto:${CANDIDATE_PROFILE.email}`}
              className="p-2 border border-slate-200 rounded text-slate-700 hover:bg-slate-50"
              title="Email"
            >
              <Mail className="w-4 h-4 text-[#2563EB]" />
            </a>
          </div>
        </div>

        {/* Quick Contact Bar on Desktop */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block tracking-wider uppercase">Direct Dispatch</span>
            <a 
              href={`mailto:${CANDIDATE_PROFILE.email}`}
              className="text-[#0F172A] font-semibold hover:text-[#2563EB] transition-colors"
            >
              {CANDIDATE_PROFILE.email}
            </a>
          </div>
          <div className="h-7 w-[1px] bg-slate-200"></div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block tracking-wider uppercase">Direct Line (UAE)</span>
            <a 
              href={`tel:${CANDIDATE_PROFILE.phoneClean}`}
              className="text-[#0F172A] font-semibold hover:text-[#2563EB] transition-colors"
            >
              {CANDIDATE_PROFILE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Bar */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex space-x-1 overflow-x-auto py-1.5 no-scrollbar" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        isActive
                          ? 'bg-blue-500/30 text-blue-100 border border-blue-400/30'
                          : 'bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
