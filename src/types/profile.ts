export interface ExperienceDeliverable {
  title: string;
  graphicTags: string[];
  keyPoints: string[];
  iconName: string;
}

export interface ExperienceMetric {
  value: string;
  label: string;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  companyType?: string;
  metrics?: ExperienceMetric[];
  deliverables?: ExperienceDeliverable[];
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  timeline: string;
  location: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  primaryPhone: string;
  workPhone: string;
  primaryEmail: string;
  secondaryEmail: string;
  linkedin: string;
  location: string;
}

export interface ResponsibilityPillar {
  id: string;
  pillarNumber: string;
  title: string;
  graphicTags: string[];
  keyPoints: string[];
  iconName: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  location: string;
  summary: string[];
  pillars?: ResponsibilityPillar[];
  topSkills: string[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  education: Education[];
  contact: ContactInfo;
}
