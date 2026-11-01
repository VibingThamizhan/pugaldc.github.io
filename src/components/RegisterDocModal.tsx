import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, Plus, Sparkles } from 'lucide-react';
import { ControlledDocument, DocumentDiscipline } from '../types';

interface RegisterDocModalProps {
  onClose: () => void;
  onAddDocument: (doc: ControlledDocument) => void;
}

export const RegisterDocModal: React.FC<RegisterDocModalProps> = ({ onClose, onAddDocument }) => {
  const [project, setProject] = useState('UAE-EPC');
  const [originator, setOriginator] = useState('CON');
  const [discipline, setDiscipline] = useState<DocumentDiscipline>('CIVIL');
  const [docType, setDocType] = useState('DWG');
  const [title, setTitle] = useState('');
  const [isoStandard, setIsoStandard] = useState('ISO 9001:2015 §7.5');
  const [edms, setEdms] = useState('Aconex');
  const [security, setSecurity] = useState<'RESTRICTED' | 'CONFIDENTIAL' | 'INTERNAL_CONTROLLED'>('INTERNAL_CONTROLLED');
  const [year] = useState('2026');
  const [seqNumber, setSeqNumber] = useState('0099');
  const [error, setError] = useState<string | null>(null);

  // Auto-calculated document code following BS 1192 / ISO 19650
  const generatedDocNumber = `${project}-${originator}-${docType}-${discipline.substring(0, 3)}-${year}-${seqNumber}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Document title is required for metadata indexing');
      return;
    }

    if (!seqNumber.trim() || seqNumber.length < 3) {
      setError('Sequence number must be at least 3 digits (e.g. 0100)');
      return;
    }

    const newDoc: ControlledDocument = {
      id: `doc-${Date.now()}`,
      docNumber: generatedDocNumber,
      title: title.trim(),
      discipline,
      type: docType,
      currentRevision: 'REV-A01',
      status: 'APPROVED',
      edmsSystem: edms,
      transmittalNo: `TR-${project}-${year}-${Math.floor(1000 + Math.random() * 9000)}`,
      originator: `${originator} Lead Engineering`,
      clientRef: `${project}-REF-${seqNumber}`,
      lastUpdated: new Date().toISOString().split('T')[0],
      isoStandard,
      complianceChecked: true,
      securityClassification: security,
      tags: [edms, discipline, docType, 'New Intake'],
      revisions: [
        {
          revision: 'REV-A01',
          date: new Date().toISOString().split('T')[0],
          author: 'P. Chandraboss (Doc Controller)',
          checkedBy: 'Lead Quality Auditor',
          approvedBy: 'Project Director',
          changeSummary: 'Initial Controlled Document Intake and Master Register Registration.',
          status: 'APPROVED',
          fileSize: '5.2 MB',
        },
      ],
    };

    onAddDocument(newDoc);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-[#CBD5E1] rounded-lg shadow-[0_12px_32px_rgba(15,23,42,0.18)] max-w-2xl w-full overflow-hidden text-slate-800">
        {/* Header */}
        <div className="bg-[#0F172A] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-600 rounded text-white">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Register New Controlled Document (MDR Intake)
              </h2>
              <p className="text-xs text-slate-400">
                Enforcing ISO 19650 / BS 1192 Codification Protocols
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-xs">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Generated Number Live Box */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-3 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
              Automated BS 1192 Document Identifier
            </span>
            <div className="text-sm font-mono font-bold text-[#0F172A] flex items-center justify-between">
              <span>{generatedDocNumber}</span>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                SYNTAX VALID
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Project Code
              </label>
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              >
                <option value="UAE-EPC">UAE-EPC (Abu Dhabi Megaproject)</option>
                <option value="PSA">PSA (Port of Singapore)</option>
                <option value="RGH">RGH (Royal Greyhound)</option>
                <option value="ADNOC">ADNOC (Downstream Infra)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Originator
              </label>
              <select
                value={originator}
                onChange={(e) => setOriginator(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              >
                <option value="CON">CON (Main Contractor)</option>
                <option value="CLI">CLI (Client Authority)</option>
                <option value="SUB">SUB (Sub-Contractor)</option>
                <option value="ENG">ENG (Engineering Consultant)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Discipline
              </label>
              <select
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value as DocumentDiscipline)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              >
                <option value="CIVIL">CIVIL</option>
                <option value="MARINE_OPS">MARINE_OPS</option>
                <option value="HSE">HSE / Safety</option>
                <option value="QA_QC">QA / QC</option>
                <option value="ELECTRICAL">ELECTRICAL</option>
                <option value="LOGISTICS">LOGISTICS</option>
                <option value="GOVERNANCE">GOVERNANCE</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Type
              </label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              >
                <option value="DWG">DWG (Drawing)</option>
                <option value="SPEC">SPEC (Specification)</option>
                <option value="PRO">PRO (Procedure)</option>
                <option value="MAN">MAN (Manual)</option>
                <option value="LOG">LOG (Log Sheet)</option>
                <option value="REG">REG (Register)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Sequence No.
              </label>
              <input
                type="text"
                value={seqNumber}
                onChange={(e) => setSeqNumber(e.target.value)}
                placeholder="0099"
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs font-mono text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                EDMS Repository
              </label>
              <select
                value={edms}
                onChange={(e) => setEdms(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              >
                <option value="Aconex">Oracle Aconex</option>
                <option value="SharePoint Online">SharePoint Online</option>
                <option value="Autodesk BIM 360">Autodesk BIM 360</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
              Document Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError(null);
              }}
              placeholder="e.g. Quayside High-Mast Lighting Distribution Panel Schematics"
              className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Governing Standard
              </label>
              <input
                type="text"
                value={isoStandard}
                onChange={(e) => setIsoStandard(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Security Classification
              </label>
              <select
                value={security}
                onChange={(e) => setSecurity(e.target.value as any)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
              >
                <option value="INTERNAL_CONTROLLED">INTERNAL_CONTROLLED</option>
                <option value="RESTRICTED">RESTRICTED</option>
                <option value="CONFIDENTIAL">CONFIDENTIAL</option>
              </select>
            </div>
          </div>

          {/* Verification stamp note */}
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-[11px]">
              Intake approval will automatically generate initial <strong>REV-A01</strong>, assign Aconex transmittal slip, and sign off under Document Controller <strong>Pugazhenthi Chandraboss</strong>.
            </span>
          </div>

          {/* Modal Footer */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#059669] hover:bg-emerald-700 text-white font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify &amp; Register Document</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
