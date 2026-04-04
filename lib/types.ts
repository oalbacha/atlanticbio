export type NavItem = {
  label: string;
  href: string;
};

export type MetricItem = {
  value: string;
  label: string;
  sourceNote: string;
};

export type HowItWorksMetricItem = {
  title: string;
  detail: string;
};
export type TimelinePhase = {
  phase: string;
  years: string;
  focus: string;
  outcome: string;
};

export type ValueCard = {
  title: string;
  description: string;
};

export type SpecItem = {
  parameter: string;
  target: string;
  rationale: string;
};

export type InvestorHighlight = {
  title: string;
  detail: string;
};
