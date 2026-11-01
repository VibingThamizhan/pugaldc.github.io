import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  History, 
  Share2, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  Download,
  Building,
  Tag
} from 'lucide-react';
import { ControlledDocument } from '../types';

interface DocumentDetailModalProps {
  document: ControlledDocument | null;
  onClose: () => void;
}

export const DocumentDetailModal: React.FC<DocumentDetailModalProps> = ({ document, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'revisions' | 'transmittal' | 'audit'>('details');

  if (!document) return null;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(document.docNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            COMPLIANT / APPROVED
          </span>
        );
      case 'UNDER_REVIEW':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
            UNDER REVIEW
          </span>
        );
      case 'TRANSMITTED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            TRANSMITTED
          </span>
        );
      case 'SUPERSEDED':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span>
            SUPERSEDED / VOID
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white border border-[#CBD5E1] rounded-lg shadow-[0_12px_32px_rgba(15,23,42,0.18)] max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden text-slate-800"
        role="dialog"
      >
        {/* Modal Top Header Bar */}
        <div className="bg-[#0F172A] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  ACONEX EDMS // CONTROLLED RECORD
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-slate-800 text-slate-300 rounded border border-slate-700">
                  {document.securityClassification}
                </span>
              </div>
              <h2 className="text-base font-bold text-white font-mono tracking-tight flex items-center gap-2">
                {document.docNumber}
                <button
                  onClick={handleCopyNumber}
                  title="Copy Document Code"
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status & Quick Metadata Strip */}
        <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            {getStatusBadge(document.status)}
            <span className="font-mono text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
              Current Rev: <strong className="text-slate-900">{document.currentRevision}</strong>
            </span>
            <span className="font-mono text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
              Transmittal: <strong className="text-slate-900">{document.transmittalNo}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>Last Register Sync: {document.lastUpdated}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E2E8F0] px-6 bg-white">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'details'
                ? 'border-[#2563EB] text-[#2563EB] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Metadata &amp; Spec
          </button>
          <button
            onClick={() => setActiveTab('revisions')}
            className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'revisions'
                ? 'border-[#2563EB] text-[#2563EB] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Revision History ({document.revisions.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('transmittal')}
            className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'transmittal'
                ? 'border-[#2563EB] text-[#2563EB] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Transmittal Package</span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'audit'
                ? 'border-[#2563EB] text-[#2563EB] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Audit Trail</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Controlled Document Title
                </label>
                <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                  {document.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8FAFC] p-4 rounded border border-[#E2E8F0]">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Originating Entity</span>
                  <span className="font-semibold text-slate-800 text-xs">{document.originator}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Discipline &amp; Type</span>
                  <span className="font-semibold text-slate-800 text-xs font-mono">{document.discipline} • {document.type}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Governing Standard</span>
                  <span className="font-semibold text-slate-800 text-xs font-mono">{document.isoStandard}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Client Reference Code</span>
                  <span className="font-semibold text-slate-800 text-xs font-mono">{document.clientRef || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">EDMS Platform</span>
                  <span className="font-semibold text-slate-800 text-xs font-mono">{document.edmsSystem}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">QA Check Status</span>
                  <span className="font-semibold text-emerald-700 text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified by P. Chandraboss (Controller)
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Metadata Keyword Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {document.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'revisions' && (
            <div className="space-y-4">
              <div className="border border-[#E2E8F0] rounded overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      <th className="py-2.5 px-3">Revision</th>
                      <th className="py-2.5 px-3">Issue Date</th>
                      <th className="py-2.5 px-3">Prepared / Controller</th>
                      <th className="py-2.5 px-3">Lead Approval</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-xs">
                    {document.revisions.map((rev, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-mono font-bold text-[#0F172A]">
                          {rev.revision}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-slate-600">
                          {rev.date}
                        </td>
                        <td className="py-2.5 px-3 text-slate-700">
                          {rev.author}
                        </td>
                        <td className="py-2.5 px-3 text-slate-700">
                          {rev.approvedBy}
                        </td>
                        <td className="py-2.5 px-3">
                          {getStatusBadge(rev.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-4 space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                  Latest Revision Change Description ({document.currentRevision})
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-mono">
                  "{document.revisions[0]?.changeSummary || 'Approved for Construction & client distribution'}"
                </p>
              </div>
            </div>
          )}

          {activeTab === 'transmittal' && (
            <div className="space-y-4 font-mono">
              <div className="bg-[#0F172A] text-slate-200 p-4 rounded text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="font-bold text-white">ACONEX TRANSMITTAL FORM</span>
                  <span className="text-emerald-400 font-semibold">{document.transmittalNo}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div>
                    <span className="text-slate-400">ISSUED BY:</span> P. Chandraboss (Doc Controller)
                  </div>
                  <div>
                    <span className="text-slate-400">DISPATCH DATE:</span> {document.lastUpdated}
                  </div>
                  <div>
                    <span className="text-slate-400">PROJECT:</span> Port Container Terminal
                  </div>
                  <div>
                    <span className="text-slate-400">STATUS:</span> Transmitted for Action / Approval
                  </div>
                </div>
              </div>

              <div className="border border-[#E2E8F0] rounded p-4 space-y-2">
                <span className="text-xs font-bold text-[#0F172A]">Distribution Matrix Recipients:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Client Project Director (Port Authority) - 1x Electronic Copy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Lead Structural Resident Engineer - 1x Electronic Copy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>QA/QC Audit Archive - Permanent Master File</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold">Zero Non-Conformance Audit Verified</span>
                </div>
                <span className="text-[11px] bg-emerald-200/60 px-2 py-0.5 rounded text-emerald-900">
                  Score: 100/100
                </span>
              </div>

              <div className="border border-slate-200 rounded divide-y divide-slate-100 bg-white">
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-600">BS 1192 Codification Syntax</span>
                  <span className="text-emerald-700 font-bold">PASSED (Valid Delimiters)</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-600">ISO 9001 §7.5 Retention Policy</span>
                  <span className="text-emerald-700 font-bold">COMPLIANT (10-Yr Archival)</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-600">Digital Signature &amp; Stamp</span>
                  <span className="text-emerald-700 font-bold">VERIFIED (Adobe Acrobat Pro)</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-600">Aconex Metadata Indexing</span>
                  <span className="text-emerald-700 font-bold">SYNCHRONIZED</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-6 py-3 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Internal ID: <code className="text-slate-700">{document.id}</code>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white font-medium text-xs rounded transition-colors cursor-pointer"
          >
            Close Audit View
          </button>
        </div>
      </div>
    </div>
  );
};
