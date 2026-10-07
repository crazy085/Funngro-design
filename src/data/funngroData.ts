import { OpportunityItem, SolutionCategory, JourneyStep, UniverseCategory } from '../types';

/**
 * Publicly stated Funngro metrics.
 * Note: Prompt strictly instructs: "Show verified Funngro statistics only.
 * If any statistic cannot be verified, do not use it.
 * Use: 70L+ Young Indians, 5,000+ Brands, 1,000+ Live projects."
 */
export const VERIFIED_METRICS = [
  {
    value: '70L+',
    label: 'Young Indians',
    detail: 'Registered platform community across India'
  },
  {
    value: '5,000+',
    label: 'Brands',
    detail: 'Enterprises & startups collaborating with youth'
  },
  {
    value: '1,000+',
    label: 'Live projects',
    detail: 'Active opportunities across digital disciplines'
  }
];

export const CONCEPTUAL_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp-1',
    category: 'App Testing',
    title: 'Mobile Fintech Checkout & UI Usability Audit',
    brandType: 'Digital Payments Startup',
    duration: '3–4 hours',
    conceptualReward: '₹800 – ₹1,200',
    skills: ['Attention to Detail', 'Android/iOS Testing', 'Bug Reporting'],
    description: 'Walk through new student onboarding flows, identify edge-case UI glitches on budget smartphones, and document screen recordings.',
    deliverable: 'Structured bug sheet with 3 annotated screen captures',
    difficulty: 'Beginner'
  },
  {
    id: 'opp-2',
    category: 'Content Creation',
    title: 'Short-Form Reel Script & Campus Hook Testing',
    brandType: 'Sustainable Apparel Brand',
    duration: '2 hours',
    conceptualReward: '₹600 – ₹1,000',
    skills: ['Gen-Z Copywriting', 'Video Hook Design', 'Trend Awareness'],
    description: 'Draft 3 punchy 30-second reel concepts showcasing organic cotton basics for college students without sounding corporate.',
    deliverable: '3 video scripts with visual storyboard notes',
    difficulty: 'Beginner'
  },
  {
    id: 'opp-3',
    category: 'Brand Promotion',
    title: 'Peer Campus Ambassador & Workshop Co-Host',
    brandType: 'National EdTech Platform',
    duration: '1 week',
    conceptualReward: '₹1,500 – ₹2,500',
    skills: ['Community Leadership', 'Peer Networking', 'Event Coordination'],
    description: 'Coordinate an online coding orientation with college study circles, sharing invite codes and tracking student attendance.',
    deliverable: 'Post-event attendance report & attendee feedback poll',
    difficulty: 'Intermediate'
  },
  {
    id: 'opp-4',
    category: 'Research',
    title: 'Gen-Z Audio Streaming Habits & Playlists Survey',
    brandType: 'Media & Streaming Label',
    duration: '1.5 hours',
    conceptualReward: '₹400 – ₹700',
    skills: ['Critical Thinking', 'Survey Synthesis', 'Consumer Insights'],
    description: 'Complete an in-depth survey on regional music discovery habits, college study soundtrack habits, and ad-tolerance thresholds.',
    deliverable: 'Completed 25-question qualitative survey response',
    difficulty: 'Beginner'
  }
];

export const TEEN_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Find an opportunity that fits your skills.',
    keyOutcome: 'Browse curated projects matching your interests.'
  },
  {
    step: '02',
    title: 'CHOOSE',
    description: 'Pick work that interests you.',
    keyOutcome: 'Select tasks that align with your available study hours.'
  },
  {
    step: '03',
    title: 'CREATE',
    description: 'Complete the task and deliver your work.',
    keyOutcome: 'Submit outputs cleanly through guided checklists.'
  },
  {
    step: '04',
    title: 'GROW',
    description: 'Use every project to build experience.',
    keyOutcome: 'Accumulate project experience and practical skills.'
  }
];

export const UNIVERSE_CATEGORIES: UniverseCategory[] = [
  {
    id: 'content',
    name: 'Content',
    summary: 'Scripts, campus blogs, video hooks, memes, and storytelling.',
    projectExamples: ['UGC video concepts', 'Student newsletter columns', 'Meme culture ideation'],
    typicalTools: ['Canva', 'CapCut', 'Notion']
  },
  {
    id: 'testing',
    name: 'Testing',
    summary: 'App usability, beta trials, bug identification, and feedback.',
    projectExamples: ['Android device compatibility', 'Game level testing', 'Checkout flow reviews'],
    typicalTools: ['Screen Recorder', 'Google Forms', 'Loom']
  },
  {
    id: 'research',
    name: 'Research',
    summary: 'Youth trends, brand sentiment, consumption audits, and surveys.',
    projectExamples: ['Snack preference audits', 'Study habit surveys', 'Pricing sensitivity polls'],
    typicalTools: ['Sheets', 'Forms', 'Typeform']
  },
  {
    id: 'promotion',
    name: 'Promotion',
    summary: 'Campus word-of-mouth, community buzz, and social advocacy.',
    projectExamples: ['College club outreach', 'Event registration drives', 'Peer trial invitations'],
    typicalTools: ['WhatsApp Communities', 'Instagram', 'Discord']
  },
  {
    id: 'design',
    name: 'Design',
    summary: 'Social graphics, stickers, presentations, and visual identity.',
    projectExamples: ['Merchandise sticker packs', 'Instagram carousel drafts', 'Pitch deck cleanups'],
    typicalTools: ['Figma', 'Illustrator', 'Procreate']
  },
  {
    id: 'technology',
    name: 'Technology',
    summary: 'Dataset reviews, AI prompt feedback, web audits, and automation.',
    projectExamples: ['AI response quality evaluation', 'Local directory audits', 'Python script testing'],
    typicalTools: ['VS Code', 'GitHub', 'ChatGPT/Gemini']
  }
];

export const COMPANY_SOLUTIONS: SolutionCategory[] = [
  {
    id: 'promote',
    label: 'PROMOTE',
    tagline: 'Authentic Peer-to-Peer Campus Visibility',
    description: 'Activate thousands of passionate young ambassadors across college campuses and youth groups to build organic brand resonance.',
    deliverables: ['Campus ambassador campaigns', 'Social peer mentions', 'Event partner outreach'],
    targetAction: 'Organic social mentions & peer community recommendations',
    metricHighlight: 'High organic engagement rate vs traditional banner ads'
  },
  {
    id: 'create',
    label: 'CREATE',
    tagline: 'Unfiltered Youth UGC & Creative Assets',
    description: 'Receive authentic creative assets made by the generation that sets digital culture — short-form video hooks, memes, and reviews.',
    deliverables: ['Short-form video scripts', 'UGC testimonial clips', 'Youth-centric meme assets'],
    targetAction: 'Native social assets ready for ad creative & organic channels',
    metricHighlight: 'Authentic creative production at lightning speed'
  },
  {
    id: 'test',
    label: 'TEST',
    tagline: 'Real-Device Beta & Usability Feedback',
    description: 'Uncover UX friction, bugs, and comprehension hurdles by placing your app or product into the hands of native digital testers.',
    deliverables: ['Screen recording logs', 'Bug documentation sheets', 'First-impression usability audits'],
    targetAction: 'Actionable feedback across diverse Android & iOS devices',
    metricHighlight: 'Fast turnaround on pre-launch usability audits'
  },
  {
    id: 'research',
    label: 'RESEARCH',
    tagline: 'Fast, Unvarnished Gen-Z Consumer Insights',
    description: 'Get deep, actionable qualitative and quantitative intelligence into how young Indians discover, purchase, and perceive products.',
    deliverables: ['Pulse surveys (1,000+ respondents)', 'Focus circle syntheses', 'Pricing preference maps'],
    targetAction: 'Reliable demographic data from Tier 1, 2, and 3 cities',
    metricHighlight: 'High-speed data collection from real youth users'
  },
  {
    id: 'refer',
    label: 'REFER',
    tagline: 'High-Intent Student Referral Engines',
    description: 'Turn young brand lovers into motivated brand evangelists who introduce their friends, classmates, and family.',
    deliverables: ['Peer referral activations', 'Campus sign-up drives', 'App download sprints'],
    targetAction: 'Active installs and sign-ups with low fraud rate',
    metricHighlight: 'Accurate referral attribution'
  },
  {
    id: 'sample',
    label: 'SAMPLE',
    tagline: 'Direct-to-Youth Product Sampling',
    description: 'Deliver physical products or digital trials directly into young households, hostels, and college student hubs.',
    deliverables: ['Hostel product drop distribution', 'Digital voucher redemptions', 'Post-trial feedback surveys'],
    targetAction: 'Trial experience combined with immediate digital feedback',
    metricHighlight: 'Targeted distribution to student age cohorts'
  }
];

export const COMPANY_PROCESS = [
  {
    step: '01',
    title: 'DEFINE',
    description: 'Tell us what you want to achieve.',
    detail: 'Set campaign objectives, target age groups, deliverables, and timeline.'
  },
  {
    step: '02',
    title: 'ACTIVATE',
    description: 'Connect with the right young audience.',
    detail: 'Funngro connects you with teen and young talent suited for your specific task.'
  },
  {
    step: '03',
    title: 'ENGAGE',
    description: 'Launch the campaign or activity.',
    detail: 'Participants execute real projects with guided quality checks and milestones.'
  },
  {
    step: '04',
    title: 'LEARN',
    description: 'Understand the response and outcomes.',
    detail: 'Review completed deliverables, campaign metrics, and demographic sentiment.'
  }
];

export const WHY_FUNNGRO = [
  {
    title: 'YOUTH AT SCALE',
    summary: 'Connect with a large community of young Indians.',
    detail: 'Direct access to an expansive network of ambitious 14–22 year olds across metros, state capitals, and emerging tier cities.'
  },
  {
    title: 'REAL PARTICIPATION',
    summary: 'Go beyond impressions toward meaningful actions.',
    detail: 'Move past passive billboard views. Engage youth who create, test, research, and authentically recommend your product.'
  },
  {
    title: 'FRESH PERSPECTIVES',
    summary: 'Get closer to the people shaping tomorrow.',
    detail: 'Receive candid, unvarnished viewpoints from digital natives who evaluate your brand through the lens of modern culture.'
  }
];
