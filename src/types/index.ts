export type DocumentStatus = 'APPROVED' | 'UNDER_REVIEW' | 'TRANSMITTED' | 'SUPERSEDED' | 'PENDING_APPROVAL';

export type DocumentDiscipline = 'CIVIL' | 'MARINE_OPS' | 'HSE' | 'QA_QC' | 'GOVERNANCE' | 'ELECTRICAL' | 'LOGISTICS';

export interface RevisionRecord {
  revision: string;
  date: string;
  author: string;
  checkedBy: string;
  approvedBy: string;
  changeSummary: string;
  status: DocumentStatus;
  fileSize: string;
}

export interface ControlledDocument {
  id: string;
  docNumber: string;
  title: string;
  discipline: DocumentDiscipline;
  type: string;
  currentRevision: string;
  status: DocumentStatus;
  edmsSystem: string;
  transmittalNo: string;
  originator: string;
  clientRef?: string;
  lastUpdated: string;
  isoStandard: string;
  complianceChecked: boolean;
  securityClassification: 'RESTRICTED' | 'CONFIDENTIAL' | 'INTERNAL_CONTROLLED' | 'PUBLIC';
  revisions: RevisionRecord[];
  tags: string[];
}

export interface CaseStudy {
  id: string;
  docClassNumber: string;
  isoTag: string;
  sector: string;
  title: string;
  organization: string;
  timeframe: string;
  roleScope: string;
  projectScale: string;
  edmsEcosystem: string[];
  challenge: string;
  standardizedWorkflow: string[];
  auditedMetricOutput: string;
  verifiedImpact: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  parentOrg?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  bulletPoints: string[];
  environment: string[];
  keyAuditMetric: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  type: 'CPD' | 'ACTVET' | 'TECHNICAL' | 'ACADEMIC';
  verified: boolean;
  description: string;
}
