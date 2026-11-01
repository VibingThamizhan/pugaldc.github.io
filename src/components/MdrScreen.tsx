import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  FileText, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowUpDown,
  FileSpreadsheet
} from 'lucide-react';
import { ControlledDocument, DocumentDiscipline, DocumentStatus } from '../types';
import { DocumentDetailModal } from './DocumentDetailModal';
import { RegisterDocModal } from './RegisterDocModal';

interface MdrScreenProps {
  documents: ControlledDocument[];
  onAddDocument: (doc: ControlledDocument) => void;
}

export const MdrScreen: React.FC<MdrScreenProps> = ({ documents, onAddDocument }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedDoc, setSelectedDoc] = useState<ControlledDocument | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [sortField, setSortField] = useState<keyof ControlledDocument>('lastUpdated');
  const [sortAsc, setSortAsc] = useState(false);

  // Filtered documents
  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = 
        doc.docNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.transmittalNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.originator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.clientRef && doc.clientRef.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDiscipline = selectedDiscipline === 'ALL' || doc.discipline === selectedDiscipline;
      const matchesStatus = selectedStatus === 'ALL' || doc.status === selectedStatus;

      return matchesSearch && matchesDiscipline && matchesStatus;
    }).sort((a, b) => {
      const valA = a[sortField] || '';
      const valB = b[sortField] || '';
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [documents, searchQuery, selectedDiscipline, selectedStatus, sortField, sortAsc]);

  const stats = useMemo(() => {
    return {
      total: documents.length,
      approved: documents.filter(d => d.status === 'APPROVED').length,
      underReview: documents.filter(d => d.status === 'UNDER_REVIEW').length,
      transmitted: documents.filter(d => d.status === 'TRANSMITTED').length,
      superseded: documents.filter(d => d.status === 'SUPERSEDED').length,
    };
  }, [documents]);

  const handleExportCSV = () => {
    const headers = ['DocNumber', 'Title', 'Discipline', 'Type', 'Revision', 'Status', 'EDMS', 'TransmittalNo', 'Originator', 'Standard', 'LastUpdated'];
    const rows = filteredDocs.map(d => [
      `"${d.docNumber}"`,
      `"${d.title.replace(/"/g, '""')}"`,
      d.discipline,
      d.type,
      d.currentRevision,
      d.status,
      d.edmsSystem,
      d.transmittalNo,
      `"${d.originator}"`,
      `"${d.isoStandard}"`,
      d.lastUpdated
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Master_Document_Register_Export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: DocumentStatus) => {
    switch (status) {
      case 'APPROVED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            APPROVED
          </span>
        );
      case 'UNDER_REVIEW':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
            UNDER REVIEW
          </span>
        );
      case 'TRANSMITTED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            TRANSMITTED
          </span>
        );
      case 'SUPERSEDED':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span>
            SUPERSEDED
          </span>
        );
    }
  };

  const disciplines: { id: string; label: string }[] = [
    { id: 'ALL', label: 'All Disciplines' },
    { id: 'CIVIL', label: 'Civil / Structural' },
    { id: 'MARINE_OPS', label: 'Marine Ops' },
    { id: 'HSE', label: 'HSE & Safety' },
    { id: 'QA_QC', label: 'QA / QC' },
    { id: 'ELECTRICAL', label: 'Electrical' },
    { id: 'LOGISTICS', label: 'Logistics' },
    { id: 'GOVERNANCE', label: 'Governance' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Title & Operational Command Strip */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
              ACONEX // SIMULATED MASTER REGISTER
            </span>
            <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% AUDIT READY
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            Master Document Register (MDR) &amp; Revision Log
          </h1>
          <p className="text-xs text-slate-500">
            Real-time tracking of engineering drawings, procedures, inspection test plans (ITP), and official client transmittals.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded border border-[#CBD5E1] transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setIsRegisterModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-medium rounded transition-colors shadow-xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Register Controlled Doc</span>
          </button>
        </div>
      </div>

      {/* Register KPI Summary Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono">
        <div className="bg-white border border-[#E2E8F0] p-3 rounded">
          <span className="text-[10px] text-slate-400 block uppercase font-bold">Total In Register</span>
          <span className="text-xl font-bold text-slate-900 tabular-numbers">{stats.total}</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] p-3 rounded">
          <span className="text-[10px] text-emerald-600 block uppercase font-bold">Approved / AFC</span>
          <span className="text-xl font-bold text-emerald-700 tabular-numbers">{stats.approved}</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] p-3 rounded">
          <span className="text-[10px] text-amber-600 block uppercase font-bold">Under Review</span>
          <span className="text-xl font-bold text-amber-700 tabular-numbers">{stats.underReview}</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] p-3 rounded">
          <span className="text-[10px] text-blue-600 block uppercase font-bold">Transmitted (Out)</span>
          <span className="text-xl font-bold text-blue-700 tabular-numbers">{stats.transmitted}</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] p-3 rounded col-span-2 sm:col-span-1">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">Superseded</span>
          <span className="text-xl font-bold text-slate-600 tabular-numbers">{stats.superseded}</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-4 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Document Number, Title, Transmittal ID, Originator..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#CBD5E1] rounded text-xs text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none font-mono"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white border border-[#CBD5E1] rounded px-3 py-2 text-xs text-slate-700 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none font-mono"
            >
              <option value="ALL">All Statuses</option>
              <option value="APPROVED">Approved / Compliant</option>
              <option value="UNDER_REVIEW">Under Review</option>
              <option value="TRANSMITTED">Transmitted</option>
              <option value="SUPERSEDED">Superseded</option>
            </select>
          </div>
        </div>

        {/* Discipline pill selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors cursor-pointer font-mono ${
                selectedDiscipline === d.id
                  ? 'bg-[#0F172A] text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Strict Data Table (Matching design markdown specifications) */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[10px] font-mono uppercase tracking-wider text-slate-500">
                <th className="py-2.5 px-4 font-bold">Document Number</th>
                <th className="py-2.5 px-4 font-bold min-w-[280px]">Document Title &amp; Scope</th>
                <th className="py-2.5 px-3 font-bold">Discipline</th>
                <th className="py-2.5 px-3 font-bold text-center">Rev</th>
                <th className="py-2.5 px-3 font-bold">Status</th>
                <th className="py-2.5 px-3 font-bold">Transmittal Ref</th>
                <th className="py-2.5 px-3 font-bold">Governing Std</th>
                <th className="py-2.5 px-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-xs">
              {filteredDocs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400 font-mono text-xs">
                    No controlled documents found matching filter parameters.
                  </td>
                </tr>
              ) : (
                filteredDocs.map((doc) => (
                  <tr 
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-[#0F172A] whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#2563EB] group-hover:underline">
                          {doc.docNumber}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-4">
                      <div className="font-semibold text-slate-900 leading-snug line-clamp-1">
                        {doc.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        Originator: {doc.originator} {doc.clientRef ? `• Ref: ${doc.clientRef}` : ''}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-700 whitespace-nowrap">
                      <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] border border-slate-200">
                        {doc.discipline}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-center text-[#0F172A] whitespace-nowrap tabular-numbers">
                      {doc.currentRevision}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      {getStatusBadge(doc.status)}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 whitespace-nowrap">
                      {doc.transmittalNo}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[10px] text-slate-500 whitespace-nowrap">
                      {doc.isoStandard}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDoc(doc);
                        }}
                        className="text-xs font-mono font-medium text-[#2563EB] hover:text-blue-800 bg-white border border-blue-200 hover:border-blue-400 px-2 py-1 rounded transition-colors"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footnote */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <span>
            Showing <strong className="text-slate-800">{filteredDocs.length}</strong> of <strong className="text-slate-800">{documents.length}</strong> active controlled records
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Configured with BS 1192 syntax and Aconex metadata synchronization
          </span>
        </div>
      </div>

      {/* Document Detail Modal */}
      {selectedDoc && (
        <DocumentDetailModal
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}

      {/* Register New Document Modal */}
      {isRegisterModalOpen && (
        <RegisterDocModal
          onClose={() => setIsRegisterModalOpen(false)}
          onAddDocument={onAddDocument}
        />
      )}
    </div>
  );
};
