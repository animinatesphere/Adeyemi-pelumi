// All portfolio content lives here. Edit this file to update the site —
// no need to touch the components.

export const profile = {
  name: 'Adeyemi Pelumi Daniel',
  handle: 'Hexcode',
  role: 'Full-Stack Developer',
  location: 'Ibadan, Nigeria — open to remote, hybrid and contract roles',
  email: 'adeyemipelumi1980@gmail.com',
  phone: '+234 902 161 5849',
  github: 'https://github.com/animinatesphere',
  linkedin: 'https://www.linkedin.com/in/adeyemi-pelumi-daniel-a98727372/',
  // Put your CV PDF in /public and keep this path, or set to null to hide the button.
  cv: '/Adeyemi_Pelumi_Daniel_CV.pdf',
  photo: '/adeyemi-pelumi-daniel.jpg',
  headline: 'I build web and mobile products end to end — from the interface to the API to the App Store.',
  summary:
    'Full-stack developer building web apps since 2023 (certified web developer, Sheda House Academy), with 1.5+ years of professional experience shipping production web and mobile products. I work across React and Next.js front ends, Node.js and Python (FastAPI) back ends with MongoDB and PostgreSQL, and React Native apps — two of them live on the App Store. I’ve built booking and subscription systems, admin dashboards, AI receptionists, social platforms, real-time video and payments (Stripe, Paystack, Flutterwave).',
}

export const stats = [
  { value: '1.5+', label: 'years professional' },
  { value: '2', label: 'apps on the App Store' },
  { value: '2023', label: 'building since' },
  { value: 'Web · Mobile · API', label: 'end to end' },
]

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  intro: [
    'I’m Adeyemi Pelumi Daniel — Hexcode online — a full-stack developer who likes owning a product from the first screen to the last API call. Since May 2026 I’ve been the full-stack developer at Cleaniq Services, a cleaning company in Greater Manchester, where I built and maintain the whole software side: the public website, the booking and payments system, the admin panel the team runs the business from, two App Store apps and an AI receptionist. I’m also tech lead at SiteOrbit, a platform for learning tech skills and launching a tech career.',
    'I got certified as a web developer at Sheda House Academy in October 2023 and spent the next year building my own projects. I started professionally on the front end — as an intern at Dimatech Consultancy (April–August 2025), then at Roots and Square building Siiqo, a commerce platform for small businesses (August–October 2025). From November 2025 to April 2026 I freelanced: a crypto trading platform (Cheeseball), the book submission and payment flow for The Africa Laureate Awards, and an agency site for BlackQuill — while building my own SaaS, ClientFlow. Most recently I built iConnect, a social platform with messaging, live video and an AI assistant, on a Python back end.',
  ],
  lookingFor:
    'A junior or mid-level full-stack role — full-time or contract, remote, hybrid or UK-based. Full-stack, front-end heavy or React Native — I’m happy anywhere on the stack.',
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
      body: 'Stripe checkout, saved cards, recurring charges with retries, fees and invoices. Paystack and Flutterwave too, with amounts verified on the server.',
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
  role: 'Full-Stack Developer (Web + Mobile)',
  period: 'May 2026 — Present',
  links: [
    { label: 'Live site', href: 'https://cleaniqservices.com' },
    { label: 'Customer app', href: 'https://apps.apple.com/ng/app/cleaniq-services/id6787302038' },
    { label: 'Cleaner app', href: 'https://apps.apple.com/ng/app/cleaniq-service-pro/id6784165706' },
  ],
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
    tag: 'Roots and Square · 2025',
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
    tag: 'Personal · Oct–Nov 2026',
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
    title: 'Cheeseball',
    tag: 'Freelance · 2025–26',
    year: 'Crypto trading platform',
    description:
      'A Nigerian exchange where users buy, sell and swap crypto (BTC, ETH, USDT, SOL) and gift cards for Naira, with live rates and NGN payouts. I built the React and Tailwind front end and the Python back end.',
    highlights: [],
    stack: ['React', 'Tailwind CSS', 'Python'],
    image: { src: '/work/cheeseball.jpg', alt: 'Cheeseball homepage: Buy, Sell & Swap Crypto Instantly, with a live rates card for BTC, ETH, USDT and SOL in Naira', width: 1440, height: 768 },
    links: [{ label: 'Live site', href: 'https://cheeseballapp.com' }],
  },
  {
    title: 'The Africa Laureate Awards',
    tag: 'Freelance · 2025–26',
    year: 'Book submissions & payments',
    description:
      'The book submission and payment flow for a literary award for self-published and independent African authors — Paystack for Naira and Flutterwave for USD.',
    highlights: [
      'Multi-step submission form in React and Tailwind',
      'Paystack (NGN) and Flutterwave (USD) checkout',
      'Server-side verification of payment amounts to block underpaid transactions',
    ],
    stack: ['React', 'Tailwind CSS', 'Paystack', 'Flutterwave'],
    image: { src: '/work/tala.jpg', alt: 'The Africa Laureate Awards homepage: All Award-Winning, Reader-Recommended Books, with a Submit Your Book link in the menu', width: 1440, height: 768 },
    links: [{ label: 'Live site', href: 'https://www.theafricalaureateawards.org' }],
  },
  {
    title: 'BlackQuill',
    tag: 'Freelance · Pre-launch',
    year: 'Digital agency for publishing',
    description:
      'Website for BlackQuill Digital Agency, a Nigerian studio that builds bespoke websites and e-commerce for authors, publishers and literary organisations.',
    highlights: [],
    stack: [],
    image: { src: '/work/blackquill.jpg', alt: 'BlackQuill homepage: Hi, welcome to BlackQuill Digital Agency, with an author website concept card' },
    links: [{ label: 'Preview', href: 'https://blackquill-two.vercel.app' }],
  },
  {
    title: 'ClientFlow',
    tag: 'My startup · In development',
    year: 'Cold email SaaS',
    description:
      'A subscription cold-email platform: businesses connect Gmail or Outlook, load a list, and ClientFlow spreads each sequence across their own inboxes at a safe pace. I’m the founder and sole developer.',
    highlights: [
      'Sends from the customer’s own Gmail and Outlook mailboxes, with per-inbox daily limits',
      'Sequences stop automatically when someone replies, bounces or opts out; bounces and opt-outs are suppressed',
      'Inbox warm-up that raises the daily sending ceiling over time',
    ],
    stack: ['React', 'Node.js', 'VPS'],
    image: { src: '/work/clientflow.jpg', alt: 'ClientFlow homepage: Cold email that sends from your own mailboxes, with a live send queue showing delivered, replied and opted-out contacts', width: 1440, height: 768 },
    links: [{ label: 'Preview', href: 'https://clientflow-io.vercel.app' }],
  },
  {
    title: 'School Portal',
    tag: 'Dimatech · 2025',
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
    role: 'Full-Stack Developer (Web + Mobile)',
    company: 'Cleaniq Services',
    place: 'Manchester, UK · Remote',
    period: 'May 2026 — Present',
    points: [
      'Built the booking and quote system (React 19, Vite, Tailwind, Node.js/Express, MongoDB) with Stripe checkout and every quote saved as a lead.',
      'Implemented Stripe subscriptions: automatic charging before each visit with retries, pause/cancel fees and rolling visit creation.',
      'Built a single admin panel for jobs, calendar, rota, PDF invoices, CRM, staff pay, commissions and email campaigns.',
      'Built an AI receptionist on WhatsApp and phone (Twilio, Claude API) that quotes from live prices.',
      'Shipped two React Native (Expo) apps to the App Store with chat, push notifications and over-the-air updates.',
      'Pre-rendered pages for SEO, 12 location landing pages and an AI blog autopilot.',
    ],
  },
  {
    role: 'Tech Lead',
    company: 'SiteOrbit',
    place: 'Remote',
    period: '2026 — Present',
    points: [
      'Lead the technical side of SiteOrbit, including its courses and learning paths for new developers.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Freelance',
    place: 'Remote',
    period: 'Nov 2025 — Apr 2026',
    points: [
      'Cheeseball — built the React and Tailwind front end and Python back end of a crypto trading platform.',
      'The Africa Laureate Awards — built the book submission and payment flow with Paystack (NGN) and Flutterwave (USD), with server-side amount verification.',
      'BlackQuill Digital Agency — website for an agency serving authors and publishers (pre-launch).',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Roots and Square',
    place: 'Siiqo',
    period: 'Aug 2025 — Oct 2025',
    points: [
      'Built the front end of Siiqo, a Next.js commerce platform with a buyer marketplace and vendor storefronts.',
      'Improved load times with lazy-loading and responsive image optimisation; added Framer Motion and GSAP micro-interactions.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Dimatech Consultancy',
    place: '',
    period: 'Apr 2025 — Aug 2025',
    points: [
      'Built a responsive school portal using React, Framer Motion and GSAP.',
      'Worked with designers and backend developers to deliver pixel-perfect UI.',
    ],
  },
  {
    role: 'Web Developer Certification',
    company: 'Sheda House Academy',
    place: 'Education',
    period: 'Oct 2023',
    points: ['Certified web developer; followed by a year of independent projects in React, Node.js and Python.'],
  },
]

// Scrolling strip under the hero.
export const marquee = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'React Native', 'Expo', 'Stripe', 'Twilio', 'Claude API', 'Gemini API', 'LiveKit', 'Tailwind CSS', 'Framer Motion', 'GSAP']

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
  { group: 'Mobile', items: ['React Native', 'Expo (EAS builds, OTA)', 'Push notifications', 'Flutter', 'Ionic'] },
  { group: 'Backend', items: ['TypeScript', 'Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'JWT auth', 'Rate limiting'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB (Mongoose)', 'Database migrations'] },
  { group: 'Integrations', items: ['Stripe', 'Paystack', 'Flutterwave', 'Twilio (WhatsApp, voice)', 'Claude API', 'Gemini API', 'LiveKit', 'Cloudinary', 'SMS & email automation'] },
  { group: 'Practice', items: ['Git & GitHub', 'GitHub Actions (CI)', 'Jest / Vitest / Playwright', 'VPS & Vercel deploys', 'Figma', 'Responsive design', 'Performance', 'Accessibility', 'SEO / pre-rendering'] },
]
