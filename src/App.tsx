/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { DashboardScreen } from './components/DashboardScreen';
import { MdrScreen } from './components/MdrScreen';
import { CaseStudiesScreen } from './components/CaseStudiesScreen';
import { LifecycleWorkflowScreen } from './components/LifecycleWorkflowScreen';
import { ResumeScreen } from './components/ResumeScreen';
import { ContactTransmittalScreen } from './components/ContactTransmittalScreen';
import { INITIAL_CONTROLLED_DOCS, CANDIDATE_PROFILE } from './data/portfolioData';
import { ControlledDocument } from './types';
import { ShieldCheck, Download, Mail, PhoneCall, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [documents, setDocuments] = useState<ControlledDocument[]>(INITIAL_CONTROLLED_DOCS);

  const handleAddDocument = (newDoc: ControlledDocument) => {
    setDocuments((prev) => [newDoc, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-[#0B1C30] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Top Application Bar & Tab Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        documentCount={documents.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-6 w-full">
        {activeTab === 'dashboard' && (
          <DashboardScreen onNavigate={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {activeTab === 'mdr' && (
          <MdrScreen
            documents={documents}
            onAddDocument={handleAddDocument}
          />
        )}

        {activeTab === 'case-studies' && (
          <CaseStudiesScreen />
        )}

        {activeTab === 'lifecycle' && (
          <LifecycleWorkflowScreen />
        )}

        {activeTab === 'resume' && (
          <ResumeScreen />
        )}

        {activeTab === 'contact' && (
          <ContactTransmittalScreen />
        )}
      </main>

      {/* Enterprise System Footer */}
      <footer className="mt-auto bg-white border-t border-[#E2E8F0] py-8 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold text-slate-800">
                {CANDIDATE_PROFILE.fullName}
              </span>
              <span className="text-slate-400">|</span>
              <span>{CANDIDATE_PROFILE.title}</span>
              <span className="text-slate-400">|</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                CPD &amp; ACTVET Accredited (2026)
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a 
                href={`mailto:${CANDIDATE_PROFILE.email}`}
                className="text-slate-700 hover:text-[#2563EB] flex items-center gap-1 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{CANDIDATE_PROFILE.email}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href={`tel:${CANDIDATE_PROFILE.phoneClean}`}
                className="text-slate-700 hover:text-[#2563EB] flex items-center gap-1 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{CANDIDATE_PROFILE.phone}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <div>
              EDMS Specification: ISO 9001:2015 Clause 7.5 • ISO 19650 BIM Information Management • BS 1192 Codification.
            </div>
            <div>
              Status: UAE Resident Visa (Spouse Sponsored) • Immediate Availability • Al Danah, Abu Dhabi.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
