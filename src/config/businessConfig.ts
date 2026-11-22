export type ClassLevel = '8' | '9' | '10';
export type CurriculumBoard = 'Karnataka State Board' | 'CBSE';

export interface ClassProgram {
  level: ClassLevel;
  title: string;
  description: string;
  curricula: CurriculumBoard[];
}

export interface FeedbackThemeItem {
  id: string;
  theme: string;
  summary: string;
  focusArea: string;
}

export const businessConfig = {
  businessName: 'EDUCATE Tuition Centre',
  brandMark: {
    primary: 'EDUCATE',
    secondary: 'TUITION CENTRE',
  },
  category: 'Education / Tuition Centre',
  isWomenOwned: true,
  womenOwnedNote: 'Women-owned tuition centre',
  location: {
    shortArea: 'Rajajinagar, Bengaluru',
    addressLines: [
      'N Block, 60/A, 1st, Dr Rajkumar Road,',
      'Rajajinagar, Bengaluru, Karnataka 560010, India.',
    ],
    singleLineAddress:
      'N Block, 60/A, 1st, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560010',
  },
  phone: {
    display: '+91 70263 35245',
    telHref: 'tel:+917026335245',
  },
  /**
   * Set `confirmed: true` only once the centre confirms admissions status.
   * When `false`, the optional message is omitted from the public top bar.
   */
  admissionsNotice: {
    confirmed: false,
    text: 'Admissions Enquiry Open',
  },
  /**
   * Values below come from the supplied Google Maps listing and are editable.
   * `reviewsUrl` and `enquiryEndpoint` should be configured by the centre/studio.
   */
  googleListing: {
    rating: '5.0',
    ratingScale: '5',
    reviewCount: 101,
    attributionLabel: 'Based on the supplied Google Maps listing.',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=EDUCATE+Tuition+Centre+N+Block+60A+Dr+Rajkumar+Road+Rajajinagar+Bengaluru',
    embedMapUrl:
      'https://maps.google.com/maps?q=EDUCATE+Tuition+Centre+N+Block+60A+Dr+Rajkumar+Road+Rajajinagar+Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed',
    reviewsUrl: '', // Configurable: set the verified Google Maps reviews link when available
  },
  /**
   * Future integration hook for email service, WhatsApp workflow, or backend API.
   * Leave empty until connected so the UI never pretends an enquiry was sent remotely.
   */
  enquiryIntegration: {
    apiEndpoint: '',
    whatsappNumber: '', // e.g. '917026335245' once WhatsApp enquiry workflow is approved
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Teaching Approach', href: '#approach' },
    { label: 'Parent Feedback', href: '#feedback' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headline: 'Building Strong Foundations. Inspiring Brighter Futures.',
    supportingText:
      'Personalized tuition for Classes 8, 9 and 10 — Karnataka State Board and CBSE. Learn with patient guidance, individual attention and a supportive teaching environment.',
    primaryCta: 'Enquire About Admissions',
    secondaryCta: 'Explore Our Classes',
    trustIndicators: [
      'Classes 8, 9 & 10',
      'Karnataka State & CBSE',
      'Individual Attention',
    ],
    imagePath: '/src/assets/images/hero_tuition_classroom_1795344258332.jpg',
    imageAlt:
      'A teacher at EDUCATE Tuition Centre guiding high school students through a lesson in a bright classroom in Rajajinagar, Bengaluru.',
  },
  about: {
    heading: 'Every Student Deserves the Right Guidance.',
    description:
      'At EDUCATE Tuition Centre, learning is built around understanding, encouragement and individual attention. We aim to create a supportive environment where students can ask questions, strengthen their concepts and develop confidence in their studies.',
    highlights: [
      {
        index: '01',
        title: 'Personalized Learning',
        detail: 'Instruction paced around each student so foundational gaps are noticed early.',
      },
      {
        index: '02',
        title: 'Patient Concept Explanation',
        detail: 'Step-by-step clarity on core ideas without rushing through difficult topics.',
      },
      {
        index: '03',
        title: 'Supportive Academic Guidance',
        detail: 'An approachable setting where students feel comfortable asking doubts.',
      },
    ],
    imagePath: '/src/assets/images/about_student_guidance_1795344258598.jpg',
    imageAlt:
      'Educator sitting beside students at a study table to explain concepts clearly and patiently.',
  },
  classes: {
    heading: 'Focused Learning for Every Important Stage.',
    subheading:
      'Structured classroom support tailored to the academic needs of Classes 8, 9 and 10 across Karnataka State Board and CBSE.',
    items: [
      {
        level: '8',
        title: 'Class 8',
        description:
          'Build a strong academic foundation and develop confidence in core concepts.',
        curricula: ['Karnataka State Board', 'CBSE'],
      },
      {
        level: '9',
        title: 'Class 9',
        description:
          'Strengthen subject understanding and prepare for the next academic milestone.',
        curricula: ['Karnataka State Board', 'CBSE'],
      },
      {
        level: '10',
        title: 'Class 10',
        description:
          'Develop exam readiness through consistent learning, practice and revision.',
        curricula: ['Karnataka State Board', 'CBSE'],
      },
    ] as ClassProgram[],
  },
  teachingApproach: {
    heading: 'Learning That Goes Beyond the Textbook.',
    items: [
      {
        id: 'individual-attention',
        title: 'Individual Attention',
        description:
          'Students receive personal attention to help identify and understand their learning needs.',
      },
      {
        id: 'patient-explanations',
        title: 'Patient Explanations',
        description:
          'Difficult concepts are explained clearly and patiently, encouraging students to learn at their own pace.',
      },
      {
        id: 'regular-tests',
        title: 'Regular Tests',
        description:
          'Practice assessments help students review their understanding and identify areas that need more attention.',
      },
      {
        id: 'doubt-clarification',
        title: 'Doubt Clarification',
        description:
          'Students are encouraged to ask questions and clarify concepts without hesitation.',
      },
    ],
  },
  whyChooseUs: {
    heading: 'A Supportive Space Where Students Can Grow.',
    description:
      'Parents look for consistency, patience and clarity when choosing tuition for high school years. EDUCATE Tuition Centre brings those qualities together in a calm, neighbourhood learning space.',
    highlights: [
      'Personal attention',
      'Clear explanations',
      'Encouraging teaching environment',
      'Regular practice and tests',
      'Focus on understanding concepts',
      'Academic confidence',
    ],
    imagePath: '/src/assets/images/why_choose_study_space_1795344258514.jpg',
    imageAlt:
      'Sunlit study room at EDUCATE Tuition Centre with students seated attentively at wooden desks.',
  },
  feedback: {
    heading: 'Experiences That Speak for Themselves.',
    subheading:
      'Summaries reflecting recurring themes shared in parent and student feedback.',
    items: [
      {
        id: 'theme-attention',
        theme: 'Individual Attention',
        focusArea: 'Personal Guidance',
        summary:
          'Parents appreciate that every child is noticed closely, with teaching adapted to help students keep up comfortably rather than feeling lost in a crowd.',
      },
      {
        id: 'theme-explanations',
        theme: 'Patient Explanations',
        focusArea: 'Concept Clarity',
        summary:
          'Feedback highlights how difficult topics are broken down calmly and revisited until students genuinely grasp the underlying concepts.',
      },
      {
        id: 'theme-environment',
        theme: 'Warm & Motivating Environment',
        focusArea: 'Supportive Atmosphere',
        summary:
          'Students feel welcomed and encouraged to speak up, ask questions freely and build steady confidence in their daily studies.',
      },
      {
        id: 'theme-tests',
        theme: 'Regular Tests & Progress Tracking',
        focusArea: 'Consistent Review',
        summary:
          'Regular assessments and follow-up feedback help both students and parents understand where concepts are strong and where extra practice helps.',
      },
      {
        id: 'theme-positive',
        theme: 'Positive Learning Experiences',
        focusArea: 'Subject Understanding',
        summary:
          'Families consistently note a positive shift in students’ interest, study habits and comfort with schoolwork across the academic term.',
      },
    ] as FeedbackThemeItem[],
  },
  ctaSection: {
    headline: 'Give Your Child the Guidance to Move Forward.',
    description:
      'Looking for supportive tuition for Classes 8, 9 or 10? Connect with EDUCATE Tuition Centre to learn more about available programs.',
    ctaLabel: 'Contact Us Today',
  },
  contactSection: {
    heading: "Let's Start the Learning Journey.",
    description:
      'Reach out by phone, visit our centre on Dr Rajkumar Road in Rajajinagar, or prepare your enquiry details below.',
  },
} as const;
