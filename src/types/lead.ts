export type ProjectType = "AI" | "MVP" | "TOOLS" | "UI_UX" | "MULTIPLE";

export interface LeadSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: ProjectType;
  estimatedBudget: string;
  message: string;
  source?: string;
}
