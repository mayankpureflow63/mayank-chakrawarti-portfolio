import { Experience, Education, ContactInfo, ResponsibilityPillar, ProfileData } from '../types/profile';

export const experienceData: Experience[] = [
  {
    id: 'ts-associates',
    company: 'TS Associates',
    role: 'Human Resources Executive',
    duration: 'Jun 2025 – Aug 2026',
    location: 'Lucknow, Uttar Pradesh',
    companyType: 'Consultancy Firm',
    metrics: [
      { value: '500+', label: 'Candidates Sourced', icon: 'users' },
      { value: '30%', label: 'TTM Reduced', icon: 'trending-up' },
      { value: '92%', label: 'Offer-to-Joining Success', icon: 'award' },
      { value: '100%', label: 'HR Compliance & Accuracy', icon: 'shield-check' }
    ],
    deliverables: [
      {
        title: 'Talent Sourcing & Headhunting',
        graphicTags: ['Naukri.com', 'LinkedIn Recruiter', 'Boolean Search'],
        keyPoints: [
          'End-to-end sourcing & candidate mapping'
        ],
        iconName: 'search'
      },
      {
        title: 'Screening & Competency Interviews',
        graphicTags: ['Resume Audit', 'Telephonic Rounds', 'Skill Profiling'],
        keyPoints: [
          'Profile evaluation & competency assessment'
        ],
        iconName: 'users'
      },
      {
        title: 'Offer Negotiations & Onboarding',
        graphicTags: ['CTC Breakdown', 'Offer Letters', 'Day-1 Induction'],
        keyPoints: [
          'Compensation negotiation & smooth onboarding'
        ],
        iconName: 'badge-percent'
      },
      {
        title: 'HR Operations & Analytics',
        graphicTags: ['MIS Reports', 'Campus Drives', 'Compliance Audits'],
        keyPoints: [
          'HR ops, reporting & compliance management'
        ],
        iconName: 'bar-chart-2'
      }
    ],
    responsibilities: [
      'Sourcing potential candidates through the Naukri portal, social media, job boards, and other channels.',
      'Reviewing applications, screening resumes, and conducting initial candidate interviews.',
      'Shortlisting top resumes to share with the company and scheduling interviews for selected candidates.',
      'Extending job offers, addressing compensation inquiries, and onboarding new hires.',
      'Building a strong employer brand by strategically hiring the right candidates.',
      'Networking actively by attending job fairs, trade groups, and engaging industry contacts.',
      'Managing administrative duties, including writing reports, organizing data, and keeping precise records.',
    ],
  },
];

export const responsibilityPillars: ResponsibilityPillar[] = [
  {
    id: 'talent-sourcing',
    pillarNumber: 'PILLAR 01',
    title: 'Talent Sourcing & Headhunting',
    graphicTags: ['Naukri.com', 'LinkedIn', 'Boolean Search'],
    keyPoints: [
      'Active & passive candidate talent mapping',
      'High-velocity talent pipeline generation'
    ],
    iconName: 'search',
  },
  {
    id: 'screening-interviews',
    pillarNumber: 'PILLAR 02',
    title: 'Candidate Screening & Assessment',
    graphicTags: ['Resume Audit', '1st Round Interview'],
    keyPoints: [
      'Comprehensive resume & profile validation',
      'Structured telephonic competency checks'
    ],
    iconName: 'user-check',
  },
  {
    id: 'shortlisting-scheduling',
    pillarNumber: 'PILLAR 03',
    title: 'Shortlisting & Panel Coordination',
    graphicTags: ['Shortlist Dossier', 'Multi-Panel Rounds'],
    keyPoints: [
      'Curating executive candidate dossiers',
      'Seamless multi-stage interview calendars'
    ],
    iconName: 'calendar-check',
  },
  {
    id: 'offers-onboarding',
    pillarNumber: 'PILLAR 04',
    title: 'Offers & Onboarding Lifecycle',
    graphicTags: ['CTC Negotiation', 'Day-1 Induction'],
    keyPoints: [
      'Strategic compensation negotiation',
      'Pre-joining engagement & smooth onboarding'
    ],
    iconName: 'badge-percent',
  },
  {
    id: 'employer-branding',
    pillarNumber: 'PILLAR 05',
    title: 'Employer Branding & Networking',
    graphicTags: ['Job Fairs', 'Campus Drives', 'HR Forums'],
    keyPoints: [
      'Corporate employer value proposition (EVP)',
      'Industry outreach & talent community networking'
    ],
    iconName: 'megaphone',
  },
  {
    id: 'hr-operations-data',
    pillarNumber: 'PILLAR 06',
    title: 'HR Operations & Analytics',
    graphicTags: ['TTH Metrics', 'MIS Reports', 'Compliance'],
    keyPoints: [
      'Weekly recruitment analytics & turnaround tracking',
      '100% statutory employee records compliance'
    ],
    iconName: 'file-spreadsheet',
  },
];

export const educationData: Education[] = [
  {
    id: 'kkc-lucknow',
    institution: 'Shri Jai Narayan Mishra PG College (KKC), Lucknow',
    degree: 'Bachelor of Commerce - BCom, Commerce',
    timeline: 'August 2023 - July 2026',
    location: 'Lucknow, Uttar Pradesh',
    highlights: [
      'Business Management & Organization',
      'Commercial Communication & Ethics',
      'Financial Accounting & Corporate Systems',
    ],
  },
];

export const topSkills: string[] = [
  'Human Resource Planning',
  'Strategic Human Resources',
  'Leadership',
  'Recruiting',
];

export const skillCategories = [
  {
    category: 'Talent Acquisition & Sourcing',
    skills: [
      'Naukri.com Portal',
      'Social Media Sourcing',
      'Boolean Search',
      'Job Boards Outreach',
      'Resume Screening',
      'Candidate Pipeline Building',
    ],
  },
  {
    category: 'Full-Lifecycle Recruitment',
    skills: [
      'Initial Interviews',
      'Candidate Shortlisting',
      'Interview Coordination',
      'Salary & Offer Negotiation',
      'New Hire Onboarding',
      'Employer Branding',
    ],
  },
  {
    category: 'HR Operations & Strategy',
    skills: [
      'Strategic HR Planning',
      'Conflict Resolution',
      'Employee Engagement',
      'Data Record Management',
      'Recruitment Reporting',
      'Industry Networking',
    ],
  },
];

export const contactData: ContactInfo = {
  primaryPhone: '6388779272',
  workPhone: '9151887895',
  primaryEmail: 'mayankchakrawarti358@gmail.com',
  secondaryEmail: 'mayankchakravarti9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mayank-chakravarti-59903b378',
  location: 'Lucknow, Uttar Pradesh, India',
};

export const profileData: ProfileData = {
  name: 'Mayank Chakrawarti',
  headline: 'Human Resource Executive & Talent Acquisition Specialist',
  location: 'Lucknow, Uttar Pradesh, India',
  summary: [
    'Results-driven HR professional specializing in recruitment, talent sourcing, and employee engagement.',
    'Passionate about building strong teams and driving organizational growth through people.'
  ],
  pillars: responsibilityPillars,
  topSkills,
  skillCategories,
  experience: experienceData,
  education: educationData,
  contact: contactData,
};
