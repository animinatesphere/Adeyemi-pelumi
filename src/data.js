// All portfolio content lives here. Edit this file to update the site —
// no need to touch the components.

export const profile = {
  name: 'Adeyemi Pelumi Daniel',
  handle: 'Hexcode',
  role: 'Full-Stack Developer',
  location: 'Ibadan, Nigeria — open to remote',
  email: 'adeyemipelumi1980@gmail.com',
  phone: '+234 902 161 5849',
  github: 'https://github.com/animinatesphere',
  linkedin: 'https://linkedin.com/in/adeyemi-pelumi',
  // Put your CV PDF in /public and keep this path, or set to null to hide the button.
  cv: '/Adeyemi_Pelumi_Daniel_CV.pdf',
  photo: '/adeyemi-pelumi-daniel.jpg',
  headline: 'I build web and mobile products end to end — from the interface to the API to the App Store.',
  summary:
    'Full-stack developer with 3+ years of experience building and shipping products. I work across React and Next.js front ends, Node.js and Python (FastAPI) back ends with MongoDB and PostgreSQL, and React Native apps — two of them live on the App Store. I’ve built booking and subscription systems, admin dashboards, AI receptionists, social platforms, real-time video and payments.',
}

export const stats = [
  { value: '3+', label: 'years shipping' },
  { value: '2', label: 'apps on the App Store' },
  { value: '2', label: 'tech lead roles' },
  { value: 'Web · Mobile · API', label: 'end to end' },
]

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  intro: [
    'I’m Adeyemi Pelumi Daniel — Hexcode online — a full-stack developer who likes owning a product from the first screen to the last API call. Since April 2026 I’ve been tech lead at Cleaniq Services, a cleaning company in Greater Manchester, where I run the whole software side: the public website, the booking and payments system, the admin panel the team runs the business from, two App Store apps and an AI receptionist. I’m also tech lead at SiteOrbit, a platform for learning tech skills and launching a tech career.',
    'Before that I worked on the front end — at Dimatech Consultancy from 2024 to August 2025, then a three-month contract at Roots and Square building Siiqo, a commerce platform for small businesses. That’s where I picked up my eye for clean, fast, well-animated interfaces. In my own time I built iConnect, a social platform with messaging, live video and an AI assistant, on a Python back end.',
  ],
  lookingFor:
    'A full-time or contract role on a product team, remote. Full-stack, front-end heavy or React Native — I’m happy anywhere on the stack.',
  offers: [
    {
      title: 'Full products, start to finish',
      body: 'Front end, API, database, payments, deployment. I can take a feature from idea to production without hand-offs.',
    },
    {
      title: 'Mobile apps that ship',
      body: 'React Native with Expo — App Store releases, push notifications, and over-the-air updates through EAS.',
    },
    {
      title: 'Payments and subscriptions',
      body: 'Stripe checkout, saved cards, recurring charges with retries, fees and invoices. Paystack too.',
    },
    {
      title: 'AI that does real work',
      body: 'Claude and Gemini integrations wired into real systems — quoting customers, drafting content, answering messages.',
    },
  ],
  principles: [
    { title: 'Ship, then improve', body: 'Small releases that real users can touch, then iterate on what they actually do.' },
    { title: 'Keep secrets on the server', body: 'API keys, prices and business rules live in the back end, never in the browser.' },
    { title: 'Fast and accessible by default', body: 'Lazy-loading, optimised images, reduced-motion support and pages search engines can read.' },
    { title: 'Build for the people running it', body: 'Admin tools matter as much as the public site — the team uses them all day.' },
  ],
}

// ---------------------------------------------------------------------------
// Featured case study
// ---------------------------------------------------------------------------

export const caseStudy = {
  title: 'Cleaniq Services',
  subtitle: 'The full software platform for a Greater Manchester cleaning company',
  role: 'Tech Lead (Web + Mobile)',
  period: 'April 2026 — Present',
  links: [{ label: 'Live site', href: 'https://cleaniqservices.com' }],
  // Screenshots live in /public/work.
  siteImage: { src: '/work/cleaniq-site.jpg', alt: 'Cleaniq Services homepage: house cleaning services in Manchester, with Book and Get a quote buttons and App Store and Android download links' },
  appImages: [
    { src: '/work/pro-offers.jpg', alt: 'Cleaniq Service Pro app: Offers tab where cleaners search available jobs by service or location' },
    { src: '/work/pro-notifications.jpg', alt: 'Cleaniq Service Pro app: notifications list of new job offers' },
    { src: '/work/pro-chat.jpg', alt: 'Cleaniq Service Pro app: messages screen for chatting with customers and Cleaniq' },
  ],
  brief:
    'The business needed one system to take bookings and payments online, run the day-to-day operation from a single place, give customers and cleaners their own apps, and answer enquiries without someone always at the phone.',
  owned: ['Public website', 'Booking & payments', 'Admin panel', 'Backend API', 'Customer app', 'Worker app', 'AI receptionist'],
  // Simple system map shown as three columns.
  system: {
    inputs: ['Website', 'Customer app', 'WhatsApp & phone'],
    core: ['Node.js / Express API', 'MongoDB'],
    services: ['Stripe', 'Twilio', 'Claude API'],
    outputs: ['Admin panel', 'Worker app'],
  },
  modules: [
    {
      title: 'Booking & quotes',
      points: [
        'Customers pick services, extras, frequency, date and time, apply coupons and pay with Stripe checkout.',
        'Every quote is saved as a lead, so no enquiry gets lost.',
      ],
    },
    {
      title: 'Subscriptions',
      points: [
        'Regular cleans on Stripe saved cards, charged automatically before each visit, with retries.',
        'Pause and cancel fees, rolling visit creation and a dedicated regular cleaner per customer.',
      ],
    },
    {
      title: 'Admin panel',
      points: [
        'One place for jobs, calendar and availability blocking, rota and shifts, quotes and PDF invoices.',
        'CRM, staff pay, disbursements, creator commissions, email campaigns and cold email.',
      ],
    },
    {
      title: 'AI receptionist',
      points: [
        'Answers on WhatsApp and phone using Twilio and the Claude API.',
        'Quotes from live prices and saves every enquiry as a lead.',
      ],
    },
    {
      title: 'Two App Store apps',
      points: [
        'Cleaniq Services for customers and Cleaniq Service Pro for cleaners, built with React Native and Expo.',
        'Job matching by service, hours, travel area and pets; job-status flow, chat and push notifications; OTA updates with EAS.',
      ],
    },
    {
      title: 'SEO & content',
      points: [
        'Pre-rendered pages so search engines can read them, plus 12 location landing pages.',
        'A blog autopilot that drafts and schedules posts with AI.',
      ],
    },
  ],
  stack: ['React 19', 'Vite', 'Tailwind', 'Framer Motion', 'GSAP', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Twilio', 'Claude API', 'React Native', 'Expo / EAS'],
}

// ---------------------------------------------------------------------------
// Other projects
// ---------------------------------------------------------------------------

export const projects = [
  {
    title: 'SiteOrbit',
    tag: 'Tech Lead',
    year: 'Tech career platform',
    description:
      'A platform for learning tech skills and launching a tech career, with courses and a learning path for new developers. I’m the tech lead.',
    highlights: [],
    stack: [], // add the tech you used
    image: { src: '/work/siteorbit.jpg', alt: 'SiteOrbit homepage: Launch Your Tech Career, with Start Learning and View Courses buttons' },
    links: [{ label: 'Live site', href: 'https://siteorbit.space' }],
  },
  {
    title: 'Siiqo',
    tag: 'Contract · Roots and Square',
    year: 'Commerce platform',
    description:
      'A commerce platform for small businesses: sellers get their own store at their-brand.siiqo.com and Pay Links they can share anywhere, with payments confirmed by Siiqo instead of screenshots, and a Trust Passport buyers can check.',
    highlights: [
      'Buyer marketplace and vendor storefronts built in Next.js',
      'Faster load times through lazy-loading and responsive image optimisation',
      'Animations and micro-interactions with Framer Motion and GSAP',
    ],
    stack: ['Next.js', 'React', 'Framer Motion', 'GSAP'],
    image: { src: '/work/siiqo.jpg', alt: 'Siiqo homepage: Build a business customers trust. Get paid with proof, not screenshots — with an example store and Pay Link' },
    links: [{ label: 'Live site', href: 'https://siiqo.com' }],
  },
  {
    title: 'iConnect',
    tag: 'Personal · Full-stack',
    year: 'Social community platform',
    description:
      '“Your online worlds. One home.” A web-first platform bringing community, conversations, video and member marketplaces together, with a FastAPI back end and provider keys kept on the server.',
    highlights: [
      'Animated public landing page, responsive interface and protected member routes talking to authenticated API routes',
      'Accounts with email verification and privacy controls',
      'Social feed with posts, photos, comments, likes and bookmarks; communities; 24-hour photo statuses with viewer tracking',
      'Job, employer-board and marketplace listings, plus dating profiles, matches and inbox',
      'Private messaging with edits, photo attachments, voice notes and read receipts',
      'AI assistant chat through a server-side Gemini integration',
      'Self-hosted LiveKit broadcasts with live chat',
      'Request validation, authentication, rate limiting and database migrations',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'FastAPI', 'Python', 'PostgreSQL', 'LiveKit', 'Gemini API'],
    image: { src: '/work/iconnect.jpg', alt: 'iConnect homepage: Your online worlds. One home. With a social feed concept preview' },
    links: [
      { label: 'Live site', href: 'https://www.iconnectdworld.com' },
      { label: 'GitHub', href: 'https://github.com/animinatesphere' },
    ],
  },
  {
    title: 'BlackQuill',
    tag: 'Web · Agency site',
    year: 'Digital agency for publishing',
    description:
      'Website for BlackQuill Digital Agency, a Nigerian studio that builds bespoke websites and e-commerce for authors, publishers and literary organisations.',
    highlights: [],
    stack: [], // add the tech you used
    image: { src: '/work/blackquill.jpg', alt: 'BlackQuill homepage: Hi, welcome to BlackQuill Digital Agency, with an author website concept card' },
    links: [{ label: 'Live site', href: 'https://blackquill-two.vercel.app' }],
  },
  {
    title: 'LuxeStore Admin',
    tag: 'Frontend · Dashboard',
    year: 'Admin dashboard',
    description: 'A fashion-store admin dashboard built for day-to-day store management.',
    highlights: [
      'Collapsible sidebar, stat cards and a sales chart',
      'Paginated product table',
      'Add, edit and delete product flows with image upload',
    ],
    stack: ['React', 'Tailwind CSS'],
    links: [],
  },
  {
    title: 'School Portal',
    tag: 'Frontend · Dimatech',
    year: 'Education portal',
    description:
      'A responsive school portal built at Dimatech Consultancy, working with designers and backend developers.',
    highlights: [
      'Responsive React interface across desktop and mobile',
      'Animations with Framer Motion and GSAP',
      'Pixel-perfect build from the design team’s files',
    ],
    stack: ['React', 'Framer Motion', 'GSAP'],
    links: [],
  },
]

// ---------------------------------------------------------------------------
// Experience — add a `period` (e.g. '2023 — Present') to show dates.
// ---------------------------------------------------------------------------

export const experience = [
  {
    role: 'Tech Lead (Web + Mobile)',
    company: 'Cleaniq Services',
    place: 'Manchester, UK · Remote',
    period: 'Apr 2026 — Present',
    points: [
      'Lead and own the public website, admin panel, backend API, two mobile apps and an AI receptionist.',
      'Built the booking and quote system (React 19, Node.js/Express, MongoDB) with Stripe checkout and quotes saved as leads.',
      'Implemented Stripe subscriptions: automatic charging before each visit with retries, pause/cancel fees and rolling visit creation.',
      'Built a single admin panel for jobs, calendar, rota, invoices, CRM, staff pay and email campaigns.',
      'Built an AI receptionist on WhatsApp and phone (Twilio, Claude API) that quotes from live prices.',
      'Shipped two React Native (Expo) apps to the App Store with over-the-air updates.',
      'Pre-rendered pages for SEO, 12 location landing pages and an AI blog autopilot.',
    ],
  },
  {
    role: 'Tech Lead',
    company: 'SiteOrbit',
    place: 'Remote',
    period: '',
    points: [
      'Lead the technical side of SiteOrbit, a platform for learning tech skills and launching a tech career.',
    ],
  },
  {
    role: 'Frontend Developer (Contract)',
    company: 'Roots and Square',
    place: 'Siiqo · 3-month contract',
    period: 'Oct 2025 — Dec 2025',
    points: [
      'Built the front end of Siiqo, a Next.js commerce platform with a buyer marketplace and vendor storefronts.',
      'Added animations and micro-interactions with Framer Motion and GSAP.',
      'Improved load times through lazy-loading and responsive image optimisation.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Dimatech Consultancy',
    place: '',
    period: '2024 — Aug 2025',
    points: [
      'Built a responsive school portal using React, Framer Motion and GSAP.',
      'Worked with designers and backend developers to deliver pixel-perfect UI.',
    ],
  },
]

// Scrolling strip under the hero.
export const marquee = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'React Native', 'Expo', 'Stripe', 'Twilio', 'Claude API', 'Gemini API', 'LiveKit', 'Tailwind CSS', 'Framer Motion', 'GSAP']

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
  { group: 'Mobile', items: ['React Native', 'Expo (EAS builds, OTA)', 'Push notifications', 'Flutter', 'Ionic'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'JWT auth', 'Rate limiting'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB (Mongoose)', 'Database migrations'] },
  { group: 'Integrations', items: ['Stripe', 'Paystack', 'Twilio (WhatsApp, voice)', 'Claude API', 'Gemini API', 'LiveKit', 'Cloudinary', 'SMS & email automation'] },
  { group: 'Practice', items: ['Git & GitHub', 'Figma', 'Responsive design', 'Performance', 'Accessibility', 'SEO / pre-rendering'] },
]
