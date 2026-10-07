export type Route = 'gateway' | 'teen' | 'company';

export interface OpportunityItem {
  id: string;
  category: 'App Testing' | 'Content Creation' | 'Brand Promotion' | 'Research';
  title: string;
  brandType: string;
  duration: string;
  conceptualReward: string;
  skills: string[];
  description: string;
  deliverable: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SolutionCategory {
  id: 'promote' | 'create' | 'test' | 'research' | 'refer' | 'sample';
  label: string;
  tagline: string;
  description: string;
  deliverables: string[];
  targetAction: string;
  metricHighlight: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  keyOutcome: string;
}

export interface UniverseCategory {
  id: string;
  name: string;
  summary: string;
  projectExamples: string[];
  typicalTools: string[];
}
