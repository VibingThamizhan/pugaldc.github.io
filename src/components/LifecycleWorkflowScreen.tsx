import React, { useState } from 'react';
import { 
  Sliders, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ArrowRight, 
  RefreshCw, 
  Check, 
  Copy,
  Layers,
  Send,
  Sparkles
} from 'lucide-react';

export const LifecycleWorkflowScreen: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [testCode, setTestCode] = useState<string>('PSA-ENG-DWG-CIV-2024-0021');
  const [preset, setPreset] = useState<string>('custom');
  const [copied, setCopied] = useState<boolean>(false);

  // QA checklist states
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    titleBlock: true,
    revisionStamped: true,
    noHandwritten: true,
    metadataPopulated: true,
    cleanOcr: true,
    pdfAFormat: true,
  });

  // Transmittal parameters
  const [transmittalPurpose, setTransmittalPurpose] = useState('FOR_APPROVAL');
  const [recipient, setRecipient] = useState('Client Port Authority - Engineering Director');
  const [turnaroundDays, setTurnaroundDays] = useState(5);

  const toggleCheck = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allPassed = Object.values(checklist).every(Boolean);

  // Parsing test code
  const codeParts = testCode.split('-');
  const isValidSyntax = codeParts.length >= 5 && codeParts.every(part => part.length >= 2);

  const handleApplyPreset = (code: string) => {
    setTestCode(code);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
              EDMS LIFECYCLE SIMULATOR
            </span>
            <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              ISO 19650 &amp; BS 1192 COMPLIANCE
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            Interactive Document Control &amp; Configuration Engine
          </h1>
          <p className="text-xs text-slate-500">
            Test how Pugazhenthi structures naming syntax, enforces ISO 9001 QA gates, and executes official Aconex transmittal dispatches.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded">
            Step {activeStep} of 4
          </span>
        </div>
      </div>

      {/* Progress Steps Header */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { num: 1, label: 'BS 1192 Numbering', sub: 'Syntax Parser' },
          { num: 2, label: 'ISO 9001 QA Gate', sub: 'Quality Audit' },
          { num: 3, label: 'Aconex Transmittal', sub: 'Distribution Slip' },
          { num: 4, label: 'As-Built Archival', sub: 'Audit Registry' },
        ].map((s) => {
          const isActive = activeStep === s.num;
          const isDone = activeStep > s.num;

          return (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`p-3 rounded text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#0F172A] text-white border-slate-900 shadow-xs'
                  : isDone
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-blue-600 text-white' : isDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  PHASE 0{s.num}
                </span>
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
              </div>
              <div className="text-xs font-bold truncate">{s.label}</div>
              <div className={`text-[10px] font-mono ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                {s.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* STEP 1: BS 1192 / ISO 19650 NUMBERING ENGINE */}
      {activeStep === 1 && (
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-[#0F172A] mb-1">
              Phase 1: BS 1192 / ISO 19650 Document Codification Parser
            </h2>
            <p className="text-xs text-slate-500">
              Every controlled document must follow strict delimiter syntax: <code>[PROJECT]-[ORIGINATOR]-[TYPE]-[DISCIPLINE]-[YEAR]-[SEQ]</code>.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-mono font-bold uppercase text-slate-600 block mb-1.5">
                Test Document Number:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={testCode}
                  onChange={(e) => setTestCode(e.target.value.toUpperCase())}
                  className="flex-1 px-3 py-2 bg-white border border-[#CBD5E1] rounded text-sm font-mono text-slate-800 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none"
                  placeholder="e.g. PSA-ENG-DWG-CIV-2024-0021"
                />
                <button
                  onClick={() => handleApplyPreset('PSA-ENG-DWG-CIV-2024-0021')}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono rounded cursor-pointer"
                >
                  Preset 1 (Civil Drawing)
                </button>
                <button
                  onClick={() => handleApplyPreset('UAE-EPC-ITP-MEC-2026-0033')}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono rounded cursor-pointer"
                >
                  Preset 2 (EPC ITP)
                </button>
              </div>
            </div>

            {/* Syntax Breakdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2">
              <div className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Project</span>
                <span className="text-xs font-mono font-bold text-[#0F172A]">{codeParts[0] || '---'}</span>
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Originator</span>
                <span className="text-xs font-mono font-bold text-[#0F172A]">{codeParts[1] || '---'}</span>
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Doc Type</span>
                <span className="text-xs font-mono font-bold text-[#0F172A]">{codeParts[2] || '---'}</span>
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Discipline</span>
                <span className="text-xs font-mono font-bold text-[#0F172A]">{codeParts[3] || '---'}</span>
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Year / Vol</span>
                <span className="text-xs font-mono font-bold text-[#0F172A]">{codeParts[4] || '---'}</span>
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Sequence</span>
                <span className="text-xs font-mono font-bold text-[#0F172A]">{codeParts[5] || codeParts[4] || '---'}</span>
              </div>
            </div>

            {/* Validation Outcome Banner */}
            <div className={`p-4 rounded border flex items-center justify-between text-xs font-mono ${
              isValidSyntax 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}>
              <div className="flex items-center gap-2">
                {isValidSyntax ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <span>
                  {isValidSyntax 
                    ? 'BS 1192 Syntax Validated: Correct delimiters, valid character length, and traceable segment hierarchy.'
                    : 'Syntax Incomplete: Ensure minimum 5 standardized hyphen-delimited segments.'}
                </span>
              </div>
              {isValidSyntax && (
                <span className="text-[11px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">
                  READY FOR QA
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveStep(2)}
              className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Proceed to ISO 9001 QA Gate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: ISO 9001 QA AUDIT GATE */}
      {activeStep === 2 && (
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-[#0F172A] mb-1">
              Phase 2: ISO 9001:2015 Clause 7.5.3 Quality Gate Checklist
            </h2>
            <p className="text-xs text-slate-500">
              Pugazhenthi conducts mandatory pre-transmittal verification to guarantee zero non-conformance reports.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { id: 'titleBlock', title: 'Title Block & Drawing Metadata Match', desc: 'Document number, title, and scale in title block exactly match Aconex database index.' },
              { id: 'revisionStamped', title: 'Revision Letter & Redline Stamp Verified', desc: 'Revision code (e.g. REV-C03) stamped cleanly with author/approver signature fields populated.' },
              { id: 'noHandwritten', title: 'Zero Unofficial Handwritten Overrides', desc: 'Strict compliance rule: No illegible manual notes or unapproved markup ink.' },
              { id: 'metadataPopulated', title: 'Mandatory Metadata Population', desc: 'Client reference ID, package code, discipline tag, and ISO standard fully indexed.' },
              { id: 'cleanOcr', title: 'Optical Character Recognition (OCR) Audit', desc: 'All text layers searchable in Adobe Acrobat Pro for enterprise discovery.' },
              { id: 'pdfAFormat', title: 'ISO 19005 Long-Term Archival (PDF/A)', desc: 'Document verified in PDF/A format ensuring long-term digital preservation integrity.' },
            ].map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3.5 rounded border transition-colors cursor-pointer flex items-start gap-3 ${
                  checklist[item.id] ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  checklist[item.id] ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-white'
                }`}>
                  {checklist[item.id] && <Check className="w-3 h-3" />}
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="text-xs font-bold text-[#0F172A] flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className={`text-[10px] font-mono px-1.5 rounded ${
                      checklist[item.id] ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {checklist[item.id] ? 'PASSED' : 'PENDING'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep(1)}
              className="px-3 py-2 border border-slate-300 text-slate-700 text-xs rounded hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Back to Numbering
            </button>

            <button
              onClick={() => setActiveStep(3)}
              disabled={!allPassed}
              className={`px-4 py-2 text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                allPassed
                  ? 'bg-[#059669] hover:bg-emerald-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{allPassed ? 'Approve & Generate Transmittal' : 'Complete All QA Checks'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: ACONEX TRANSMITTAL PACKAGE SLIP */}
      {activeStep === 3 && (
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-[#0F172A] mb-1">
              Phase 3: Oracle Aconex Official Transmittal Slip Issuance
            </h2>
            <p className="text-xs text-slate-500">
              Contractually binding document dispatch to clients, consultants, and subcontractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Purpose of Transmittal Issue:
              </label>
              <select
                value={transmittalPurpose}
                onChange={(e) => setTransmittalPurpose(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] outline-none font-mono"
              >
                <option value="FOR_APPROVAL">For Client Approval (Code 1 / 2 / 3)</option>
                <option value="FOR_CONSTRUCTION">Approved for Construction (AFC)</option>
                <option value="FOR_INFORMATION">For Information Only (FIO)</option>
                <option value="FOR_REVIEW">For Technical Review / Consultant Comments</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-600 font-bold block mb-1">
                Primary Contractual Recipient:
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] outline-none font-mono"
              />
            </div>
          </div>

          {/* Generated Transmittal Slip Representation */}
          <div className="border border-slate-800 rounded bg-[#0F172A] text-white p-5 font-mono text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <div>
                <span className="text-[10px] text-blue-400 font-bold uppercase block">
                  ORACLE ACONEX TRANSMITTAL ADVICE
                </span>
                <span className="text-sm font-bold text-white">TR-PSA-2024-0982</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">ISSUE DATE</span>
                <span className="text-xs text-white">{new Date().toISOString().split('T')[0]}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] bg-slate-900/60 p-3 rounded border border-slate-800">
              <div>
                <span className="text-slate-400 block">ISSUED BY:</span>
                <span className="text-white font-bold">P. Chandraboss</span>
              </div>
              <div>
                <span className="text-slate-400 block">PURPOSE:</span>
                <span className="text-emerald-400 font-bold">{transmittalPurpose}</span>
              </div>
              <div>
                <span className="text-slate-400 block">SLA WINDOW:</span>
                <span className="text-amber-300 font-bold">{turnaroundDays} Work Days</span>
              </div>
              <div>
                <span className="text-slate-400 block">ENCLOSURE:</span>
                <span className="text-white font-bold">1x PDF/A (Certified)</span>
              </div>
            </div>

            <div className="border border-slate-700 rounded p-3 text-[11px] space-y-1 bg-slate-900/30">
              <span className="text-slate-400 block uppercase text-[10px]">Transmitted Document Record:</span>
              <div className="flex items-center justify-between font-bold text-white">
                <span>{testCode}</span>
                <span className="text-blue-300">REV-C03 [AFC]</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep(2)}
              className="px-3 py-2 border border-slate-300 text-slate-700 text-xs rounded hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Back to QA Checklist
            </button>

            <button
              onClick={() => setActiveStep(4)}
              className="px-4 py-2 bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Transmit &amp; Commit to As-Built Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: AS-BUILT MASTER ARCHIVE & AUDIT REGISTER */}
      {activeStep === 4 && (
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 bg-emerald-100 text-emerald-800 rounded">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </span>
              <h2 className="text-base font-bold text-[#0F172A]">
                Phase 4: Permanent Common Data Environment (CDE) Archiving
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Package successfully signed off, recorded in the Master Document Register, and certified tamper-evident.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded p-4 text-emerald-900 text-xs space-y-2 font-mono">
            <div className="flex items-center justify-between font-bold">
              <span>LIFECYCLE STATUS: ARCHIVED &amp; AUDIT-READY</span>
              <span className="text-emerald-700">100% COMPLIANT</span>
            </div>
            <p className="text-[11px] text-emerald-800">
              Document <code>{testCode}</code> has been indexed into the permanent enterprise MDR. All prior revisions (REV-A01, REV-C02) are flagged as SUPERSEDED with full audit trail retention.
            </p>
          </div>

          <div className="border border-slate-200 rounded divide-y divide-slate-100 text-xs font-mono">
            <div className="p-3 flex items-center justify-between">
              <span className="text-slate-500">Electronic Document Registry:</span>
              <span className="font-bold text-slate-800">Aconex Global Production Instance</span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-slate-500">Document Controller Sign-Off:</span>
              <span className="font-bold text-[#0F172A]">Pugazhenthi Chandraboss (CPD / ACTVET)</span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-slate-500">Retention Horizon:</span>
              <span className="font-bold text-slate-800">10 Years Post-Commissioning (ISO 15489)</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setActiveStep(1)}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulate Another Document Lifecycle</span>
            </button>

            <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              Configuration Control Completed
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
