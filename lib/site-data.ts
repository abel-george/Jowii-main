export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
  children?: NavItem[];
  description?: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

export interface Speaker {
  name: string;
  role: string;
  status: string;
  image?: string;
  initials?: string;
  tag?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  detail: string;
}

export interface AgendaTrack {
  name: string;
  items: AgendaItem[];
}

export interface DocumentItem {
  title: string;
  anchor?: string;
  file: string;
  description: string;
  highlights: string[];
  category?: string;
  pages: number;
  status: string;
}

export interface CoreLayer {
  id: string;
  title: string;
  body: string;
}

export interface PartnerItem {
  name: string;
  category: string;
  src: string;
  href: string;
  role: string;
  quote: string;
}

export const siteData = {
  config: {
    eventDate: '2026-10-29T20:00:00+03:00',
    fallbackEmail: 'jowihfoundationorg@gmail.com',
    whatsappCommunity: 'https://chat.whatsapp.com/HgadK4W3gBvD7x4Mq90Z4m?s=acl&p=a&mlu=4&ilr=4',
    location: 'Kisii, Kenya',
    venue: 'Kisii University Auditorium & Virtual Live Room',
    time: '8:00 PM – 1:00 AM EAT',
    hashtag: '#JOWIHKENYA',
  },
  languages: [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'fr', label: 'French', native: 'Français' },
    { code: 'sw', label: 'Swahili', native: 'Kiswahili' },
  ],
  news: [
    {
      id: 1,
      title: 'Jowih Foundation Announces Pre-Launch Initiative',
      date: '2026-10-09',
      category: 'Foundation',
      excerpt: 'The Jowih Foundation is proud to announce its pre-launch initiative to establish continental infrastructure for African development.',
      href: '/news/jowih-foundation-announces-pre-launch',
    },
    {
      id: 2,
      title: 'Great African Grid Framework Released',
      date: '2026-10-07',
      category: 'Infrastructure',
      excerpt: 'The 7-corridor infrastructure framework is now available for review by potential partners and stakeholders.',
      href: '/news/great-african-grid-framework-released',
    },
    {
      id: 3,
      title: 'ASTA OS Technical Architecture Published',
      date: '2026-10-05',
      category: 'Technology',
      excerpt: 'Technical documentation for ASTA OS layers and integration specifications has been published in the source papers.',
      href: '/news/asta-os-technical-architecture-published',
    },
  ],
  nav: [
    {
      label: 'Home',
      href: '/',
      description: 'Return to the institutional home',
      children: [
        { label: 'Home', href: '/' },
        { label: 'Latest news', href: '/#news' },
        { label: 'Priority areas', href: '/#priorities' },
      ]
    },
    { 
      label: 'About', 
      href: '/about',
      description: 'Learn about the Jowih Foundation mission and vision',
      children: [
        { label: 'Overview', href: '/about' },
        { label: 'Mission & Vision', href: '/about#mission' },
        { label: 'Structure', href: '/about#structure' },
      ]
    },
    { 
      label: 'Great African Grid', 
      href: '/gag',
      description: '7 infrastructure corridors powering continental development',
      children: [
        { label: 'Overview', href: '/gag' },
        { label: 'Transport Corridor', href: '/gag/transport' },
        { label: 'Industrial Corridor', href: '/gag/industrial' },
        { label: 'Energy Corridor', href: '/gag/energy' },
        { label: 'Digital Corridor', href: '/gag/digital' },
        { label: 'Payments Corridor', href: '/gag/payments' },
        { label: 'Services Corridor', href: '/gag/services' },
        { label: 'Space Corridor', href: '/gag/space' },
      ]
    },
    { 
      label: 'ASTA OS', 
      href: '/ecosystem',
      description: 'Technical operating stack and infrastructure framework',
      children: [
        { label: 'Overview', href: '/ecosystem' },
        { label: 'Core Layers', href: '/ecosystem#asta-os' },
        { label: 'Super App', href: '/ecosystem#super-app' },
        { label: 'Ecosystem Participants', href: '/ecosystem#participants' },
      ]
    },
    { 
      label: 'Funding', 
      href: '/funding',
      description: 'Financial architecture and resource mobilization',
      children: [
        { label: 'Overview', href: '/funding' },
        { label: 'Master Ecosystem Fund', href: '/funding#master-fund' },
        { label: 'Grid Bond', href: '/funding#grid-bond' },
        { label: 'Pre-Launch Support', href: '/donate' },
      ]
    },
    { 
      label: 'Governance', 
      href: '/governance',
      description: 'Leadership structure and institutional framework',
      children: [
        { label: 'Overview', href: '/governance' },
        { label: 'Leadership', href: '/governance#leadership' },
        { label: 'Policies', href: '/governance#policies' },
      ]
    },
    { 
      label: 'Partners', 
      href: '/partners',
      description: 'Join the ecosystem partnership community',
      children: [
        { label: 'Partner Community', href: '/partner/community' },
        { label: 'Developer Community', href: '/partner/developer' },
        { label: 'Diaspora Network', href: '/partner/diaspora' },
        { label: 'Institutional Partnership', href: '/partner/institutional' },
        { label: 'Volunteers', href: '/partner/volunteer' },
      ]
    },
    {
      label: 'Documents',
      href: '/documents',
      description: '9 foundational documents outlining the framework',
      children: [
        { label: 'All Documents', href: '/documents' },
        { label: 'Foundation', href: '/documents#foundation' },
        { label: 'Governance', href: '/documents#governance' },
        { label: 'Infrastructure', href: '/documents#infrastructure' },
        { label: 'Financial', href: '/documents#financial' },
      ]
    },
    {
      label: 'Framework',
      href: '/framework',
      description: '16 implementation frameworks from The GAG Initiative',
      children: [
        { label: 'Accelerated Development Framework Agreement (ADFA)', href: '/framework#fw-01' },
        { label: 'AU Partnership Framework', href: '/framework#fw-02' },
        { label: 'New Dawn City Blueprint', href: '/framework#fw-03' },
        { label: 'Country Pots Scale Allocation', href: '/framework#fw-04' },
        { label: 'Exchange Programs & Co-Development', href: '/framework#fw-05' },
        { label: 'Urban Housing & Urbanization', href: '/framework#fw-06' },
        { label: 'Jowih Africa Health Fund', href: '/framework#fw-07' },
        { label: 'Infrastructure Execution', href: '/framework#fw-08' },
        { label: 'Africa Sovereign Space Capability', href: '/framework#fw-09' },
        { label: 'Jowih Education Framework', href: '/framework#fw-10' },
        { label: 'Capsule Rapid Transit & HSR', href: '/framework#fw-11' },
        { label: 'Jowih Mobile Health', href: '/framework#fw-12' },
        { label: 'Air Jowih & Airport SEZs', href: '/framework#fw-13' },
        { label: 'Africa Connect Alliance', href: '/framework#fw-14' },
        { label: 'Environmental Cleanliness', href: '/framework#fw-15' },
        { label: 'Creative, Animation & Gaming', href: '/gag/creative' },
      ]
    },
    {
      label: 'Horizon 2045',
      href: '/horizon-2045',
      description: 'The complete 20-year transformation arc to 2045',
      children: [
        { label: 'Overview', href: '/horizon-2045' },
        { label: 'Phase 1: Ecosystem Launch', href: '/horizon-2045#phase-1' },
        { label: 'Phase 2: Heavy Execution & Scaling', href: '/horizon-2045#phase-2' },
        { label: 'Phase 3: First World Africa', href: '/horizon-2045#phase-3' },
      ]
    },
    {
      label: 'Jowih Credits',
      href: '/credits',
      description: 'The asset-backed bridge token for African settlement',
      children: [
        { label: 'Article LIX (Constitution)', href: '/credits#cb-01' },
        { label: 'Core Principle & Positioning', href: '/credits#cb-02' },
        { label: 'Partner-Only Execution', href: '/credits#cb-05' },
        { label: 'Fee Schedule', href: '/credits#cb-06' },
        { label: 'Partner Margins', href: '/credits#cb-07' },
        { label: 'Reserves & Liquidity', href: '/credits#cb-09' },
        { label: 'User Procedures', href: '/credits#cb-12' },
        { label: 'Compliance & Reporting', href: '/credits#cb-13' },
      ]
    },
    {
      label: 'Comrades',
      href: '/comrades',
      description: 'Community participation, workforce development, and continental coordination.',
      children: [
        { label: 'Comrades Hub', href: '/comrades#community' },
        { label: 'Workforce pathway', href: '/comrades#workforce' },
        { label: 'Africa Development Network', href: '/comrades#network' },
        { label: 'Phased funding model', href: '/comrades#funding' },
      ]
    },
    {
      label: 'Commerce',
      href: '/jowih-group',
      description: 'Jowih Group execution structure and operating companies.',
      children: [
        { label: 'Group structure', href: '/jowih-group#structure' },
        { label: 'Operating companies', href: '/jowih-group#companies' },
      ]
    },
    { 
      label: 'Updates', 
      href: '/waitlist',
      description: 'Stay informed about launch progress and developments',
      children: [
        { label: 'Join Waitlist', href: '/waitlist' },
        { label: 'Join WhatsApp Community', href: 'https://chat.whatsapp.com/HgadK4W3gBvD7x4Mq90Z4m?s=acl&p=a&mlu=4&ilr=4' },
        { label: 'Newsletter', href: '/waitlist#newsletter' },
        { label: 'Contact', href: '/documents#contact' },
      ]
    },
  ],
  hero: {
    eyebrow: 'Kisii, Kenya  ·  29 October 2026  ·  8:00 PM – 1:00 AM',
    title: 'Jowih institutional pre-launch',
    statementLine1: 'WE ARE BUILDING',
    statementLine2: "AFRICA'S NEXT CHAPTER.",
    copy: 'The launch room for the Jowih Foundation, the Great African Grid, ASTA OS, and a continental operating framework built to partner, integrate, empower, complement, accelerate, and enable.',
    actions: [
      { label: 'Join the Waitlist', href: '/waitlist', style: 'primary', icon: 'arrow' },
      { label: 'Book a ticket', href: '/ticket', style: 'light', icon: 'ticket' },
      { label: 'Become a partner', href: '/partner', style: 'outlined', icon: 'arrow' },
      { label: 'Become investor', href: '/investor', style: 'ghost', icon: 'arrow' },
    ],
  },
  stats: [
    { value: '7', label: 'GAG Corridors', detail: 'Transport, Industry, Energy, Digital, Payments, Services, Space' },
    { value: '90%', label: 'Mission-Aligned Flow', detail: 'Permanent asset-lock reinvestment into African development' },
    { value: '54', label: 'African States', detail: 'Continental ADFA accelerated development framework' },
    { value: '2045', label: 'First Horizon', detail: 'The milestone of a 20-year pan-African transformation' },
  ],
  manifesto: {
    eyebrow: '01 / THE CONTINENTAL IMPERATIVE',
    quoteLine1: "AFRICA DOESN'T NEED ANOTHER CONVERSATION.",
    quoteLine2: 'IT NEEDS INFRASTRUCTURE.',
    body: 'Africa is not poor. Africa is not lacking talent, youth, resources, or ambition. Africa is structurally disconnected. Jowih is designed so sovereign nations can accelerate development, trade freely, and integrate without surrendering control over their own destiny.',
  },
  about: {
    kicker: 'Institution',
    title: 'A mission-locked foundation for continental development.',
    intro:
      'The Jowih Foundation is a proposed mission-led development institution designed to support African progress through the Great African Grid. It is not a political union and is not intended to replace any national government, central bank or legal system.',
    founder: {
      name: 'Reuben Oduk',
      role: 'Founder and Steward President',
      location: 'Kisii University · BSc Computer Science',
      portrait: '/assets/reuben-oduk.jpg',
      lead: 'My story is one of 1.6 billion singular stories in Africa. It already served its purpose in the past. We have a future to build.',
      paragraphs: [
        'Reuben Oduk is the Founder and Steward President of Jowih. He designed the Foundation, the Great African Grid, and ASTA OS over two years as a Computer Science student at Kisii University, with the ecosystem pre-launch planned for October 2026 in Kisii.',
        'The Steward President is the principal constitutional steward of the Jowih mission, exercising the strategic, protective, and reserved powers established by the Foundation constitution. On launch night the room is not asked to dwell on one biography. It is asked to share a common belief: a better Africa.',
        'The Founder’s Council is the founder-era advisory structure. It is not a separate operating authority. Special Advisors may serve in development, partnerships, finance, technology, legal, diplomatic, and economic portfolios at the Steward President’s invitation.',
      ],
    },
    foundation: {
      title: 'The Foundation Engine',
      paragraphs: [
        'The Foundation exists to accelerate national and continental progress where technology, sustained capital, and long-term collaboration can amplify impact. It operates in full compliance with sovereign laws, in cooperative partnership with governments, and in alignment with national priorities where invited.',
        'The draft describes a proposed commercial reinvestment model in which a defined share of distributable value from Jowih Holdings would support the Mission Fund. The organization and related structures must first be established, and the proposed percentages remain subject to governing documents, law and implementation.',
        'Four strategic pillars guide the work: Empower Communities and Basic Needs; Digital Opportunity and Youth Advancement; African Research and Innovation Leadership; and The Future Civilization — the long-horizon African capability agenda.',
        'Vision Horizon 2045 is not the end. It is the first milestone of a 20-year pan-African transformation strategy.',
      ],
      pillars: [
        {
          id: '01',
          title: 'Empower Communities & Basic Needs',
          description: 'Sovereign food security, clean industrial water, resilient rural micro-grids, and decentralized human healthcare access.',
        },
        {
          id: '02',
          title: 'Digital Opportunity & Youth Advancement',
          description: 'ASTA OS open development access, software apprenticeships, comrade hubs, and continental employment rails.',
        },
        {
          id: '03',
          title: 'African Research & Innovation Leadership',
          description: 'Direct university research endowments, technology transfer corridors, open patents, and domestic silicon/hardware labs.',
        },
        {
          id: '04',
          title: 'The Future Civilization Agenda',
          description: 'High-speed continental mobility, clean orbital infrastructure, synthetic biology safeguards, and sovereign African AI.',
        },
      ],
    },
    structure: {
      title: 'Nine-Layer Institutional Structure',
      subtitle: 'Engineered for multi-generational mission preservation and sovereign non-interference.',
        layers: [
          { id: 'jowih-foundation', title: 'Jowih Foundation', body: 'Mission, stewardship, country development allocations, and the permanent non-profit control plane. Company limited by guarantee with a statutory asset lock.' },
          { id: 'jowih-purpose-trust', title: 'Jowih Purpose Trust', body: 'Protects the mission and the Foundation’s 90% economic interest in Jowih Holdings from commercial drift.' },
          { id: 'founder-family-trust', title: 'Founder Family Trust', body: 'Protects original mission intent through restricted golden-vote architecture and holds the founder’s 10% economic interest.' },
          { id: 'jowih-holdings', title: 'Jowih Holdings Limited', body: 'Holds 100% equity of commercial operating subsidiaries. Voting: 60% Purpose Trust / 40% Family Trust. Economic allocation: 90% Foundation / 10% Family Trust.' },
          { id: 'jowih-group', title: 'Jowih Group', body: 'Executes and operates commercial subsidiaries and the seven GAG corridors. The Foundation does not duplicate Group operations.' },
          { id: 'great-african-grid', title: 'Great African Grid (GAG)', body: 'Continental infrastructure and economic coordination framework across transport, industry, energy, digital, payments, services, and space.' },
          { id: 'asta-os', title: 'ASTA OS', body: 'Continental digital-physical rails: identity, trust, payments, commerce, logistics, data, AI, and service interoperability.' },
          { id: 'adfa-framework', title: 'ADFA Framework', body: 'Accelerated Development Framework Agreements with African states that invite Foundation projects into their jurisdictions.' },
          { id: 'funding-architecture', title: 'Funding Architecture', body: 'Grid Bond as one-time activation capital, the Jowih Ecosystem Fund for regulated participation, and Mission Fund reinvestment.' },
      ],
    },
    leadership: {
      title: 'Leadership and Oversight Architecture',
      groups: [
        {
          name: 'Stewardship',
          items: ['Founder and Steward President', 'Founder’s Council (founder era)', 'Special Advisors to the Steward President', 'Foundation Advisory Council (successor era)'],
        },
        {
          name: 'Board of Governors',
          items: ['Principal governing body', 'Audit Committee', 'Ethics and Oversight Committee', 'Nominations Committee', 'Remuneration Committee'],
        },
        {
          name: 'Independent Oversight',
          items: ['Independent Auditor General', 'Independent Oversight Committee', 'Rotating external audit firm', 'Specialist professional firms as required'],
        },
        {
          name: 'Foundation Executive',
          items: ['Foundation CEO', 'Chief Finance and Allocation Officer', 'Chief Integrity and Compliance Officer', 'Secretary-General', 'Lead Program Director', 'Country Coordination Lead'],
        },
        {
          name: 'Regional Coordination',
          items: ['North Africa Directorate', 'West Africa Directorate', 'East Africa Directorate', 'Central Africa Directorate', 'Southern Africa Directorate'],
        },
        {
          name: 'Participation Architecture',
          items: ['PAN-Ambassadors', 'Country Executive Directors', 'Continental Development Assembly', 'Diaspora Representatives', 'County Development Assemblies', 'Comrade Hub structures'],
        },
      ],
    },
  },
  gag: {
    kicker: 'Great African Grid',
    title: 'An infrastructure and economic coordination framework, not a government.',
    lead: 'The Great African Grid does not seek to disrupt, replace, compete, extract, or control. It seeks to partner, integrate, empower, complement, accelerate, and enable.',
    what: [
      'The GAG is designed so sovereign nations can accelerate development, trade more freely, and integrate without surrendering control over their own affairs. It is meant to work with the African Union and accelerate frameworks such as AfCFTA.',
      'Africa is not poor. Africa is not lacking talent, resources, or ambition. Africa is structurally disconnected. The Grid is the backbone that reconnects infrastructure, industry, energy, digital systems, finance, education, healthcare, mobility, and human capital.',
    ],
    principles: [
      { title: 'Consultation & Shared Benefit', body: 'Projects are developed with host governments, communities, and regional bodies. Mission first.' },
      { title: 'Sovereignty Preserved', body: 'No supranational authority. No replacement of national governments, central banks, or legal systems.' },
      { title: 'Africa First, Global Best', body: 'African solutions and African ownership through asset lock. Global partners where local capacity is still building — never dependence.' },
      { title: 'Partner, Do Not Capture', body: 'Existing operators keep their brands, mandates, and markets. Jowih supplies coordination, capital, and shared rails.' },
    ],
    corridors: [
      { id: '01', title: 'Transport', slug: 'transport', body: 'Moving people and goods: CRT capsule transit, airport SEZs, high-speed rail, logistics corridors, and advanced road architecture.', icon: 'Move' },
      { id: '02', title: 'Industrial', slug: 'industrial', body: 'Building Africa’s production capacity through manufacturing platforms, industrial parks, and partnered technology production.', icon: 'Factory' },
      { id: '03', title: 'Energy', slug: 'energy', body: 'Powering the Grid with generation, transmission, storage, and energy access designed for industrial and civic scale.', icon: 'Zap' },
      { id: '04', title: 'Digital', slug: 'digital', body: 'Connecting everyone and powering the digital economy through ASTA OS, connectivity, compute, and data infrastructure.', icon: 'Cpu' },
      { id: '05', title: 'Payments', slug: 'payments', body: 'Moving value across borders through Jowih Credits as a bridge layer, with licensed partners executing conversion.', icon: 'CreditCard' },
      { id: '06', title: 'Services', slug: 'services', body: 'Health, education, and human empowerment programmes that sit on top of the physical and digital corridors.', icon: 'HeartHandshake' },
      { id: '07', title: 'Space', slug: 'space', body: 'Securing African participation in orbital infrastructure, earth observation, communications, and space industry capability.', icon: 'Rocket' },
    ],
    frameworks: [
      { id: 'adfa', group: 'State & continental coordination', title: 'Accelerated Development Framework Agreements (ADFA)', detail: 'Proposed voluntary bilateral agreements with African states. Project models include state-funded delivery, Foundation-funded projects and co-funded arrangements, with roles and ownership defined in each agreement.' },
      { id: 'au-parf', group: 'State & continental coordination', title: 'AU Partnership Framework (PARF)', detail: 'A proposed observatory and coordination relationship with the African Union. The source describes recommendations as non-binding and operational authority as independent.' },
      { id: 'horizons-multipliers', group: 'State & continental coordination', title: '20-year Horizons & six multipliers', detail: 'A long-range planning cycle paired with policy coordination, standards, government services, financing, cooperation and people-to-people ties.' },
      { id: 'country-pots-cdes', group: 'Community & human development', title: 'Country Pots & Community Development Enterprises', detail: 'Proposed country-level planning and five local CDE areas: education, agriculture, health, infrastructure and energy, and digital innovation. The draft sets out a 70/30 project/business split and a Care Fund allocation.' },
      { id: 'adn-assemblies', group: 'Community & human development', title: 'Africa Development Network & Development Assemblies', detail: 'Proposed country coordination and community-prioritization structures, with centralized direct disbursement, citizen input and public reporting.' },
      { id: 'education-framework', group: 'Community & human development', title: 'Education Framework', detail: 'School and STEM-lab proposals, national-curriculum alignment, teacher support, devices, teaching hubs, scholarships and workforce pathways.' },
      { id: 'health-ahf', group: 'Community & human development', title: 'Mobile Health Framework & Africa Health Fund', detail: 'A proposed layered health-access model combining community/mobile clinics, county facilities, referral care and a complementary financing stabilizer.' },
      { id: 'housing-urbanization', group: 'Community & human development', title: 'Urban Housing & Rapid Urbanization', detail: 'Proposed community-led housing and settlement plans, including rental and ownership paths, no-displacement principles, local consultation and escrow safeguards.' },
      { id: 'environmental-cleanliness', group: 'Community & human development', title: 'Environmental Cleanliness Framework', detail: 'Proposed CDE-led waste collection, public-space maintenance, local employment, coordination with local authorities and measurable cleanliness reporting.' },
      { id: 'infrastructure-execution', group: 'Infrastructure & delivery', title: 'Infrastructure Execution Blueprint', detail: 'A proposed three-tier delivery model for continental, national and local projects, using qualified firms, milestones, local participation and oversight.' },
      { id: 'crt', group: 'Infrastructure & delivery', title: 'Jowih Capsule Rapid Transit (CRT)', detail: 'A proposed modular, electric guided transit concept intended to complement public-service vehicles, connect urban corridors and support logistics.' },
      { id: 'energy-framework', group: 'Infrastructure & delivery', title: 'Energy Corridor Framework', detail: 'Renewable generation, grid connections, storage, solar infrastructure and micro-grid concepts for civic and industrial service.' },
      { id: 'new-dawn-city', group: 'Infrastructure & delivery', title: 'New Dawn City & Jowih Citadel', detail: 'A proposed integrated economic-zone and headquarters concept, dependent on host-state agreements, land arrangements, feasibility studies and approvals.' },
      { id: 'asta-connect', group: 'Digital & technology', title: 'ASTA OS & Africa Connect Alliance', detail: 'Proposed interoperability, API and developer infrastructure alongside telecom and connectivity partnerships intended to extend essential digital access.' },
      { id: 'credits', group: 'Digital & technology', title: 'Jowih Credits', detail: 'A proposed non-speculative cross-border bridge model requiring licensed payment partners and regulatory approval; it is not available through this site.' },
      { id: 'animation-gaming', group: 'Digital & technology', title: 'African Animation & Gaming Framework', detail: 'Proposed anchor studios, independent creator participation, training, original African intellectual property, distribution and commercialization pathways.' },
      { id: 'air-jowih', group: 'Infrastructure & delivery', title: 'Air Jowih Aviation Framework', detail: 'A proposed African aviation service concept designed to enhance continental mobility, support logistics corridors, and contribute to the transport infrastructure pillar.' },
      { id: 'space-capability', group: 'Digital & technology', title: 'African Sovereign Space Capability', detail: 'A proposed long-term capability spanning Earth observation, communications, navigation, ground systems, launch infrastructure and African industry.' },
      { id: 'grid-bond-mission-fund', group: 'Funding & capital', title: 'Grid Bond & Mission Fund sequencing', detail: 'The GAG papers describe a proposed one-time bond as later activation capital. It is separate from the donation-only structural pre-launch, and no bond is offered here.' },
    ],
    parf: {
      kicker: 'AU Partnership Framework (PARF)',
      title: 'Observatory and coordination, not subordination.',
      paragraphs: [
        'The AU Partnership Framework establishes a strategic relationship between the Jowih Foundation and the African Union. JOWIH and the AU operate as partners within their respective mandates. Neither exercises control over the other.',
        'The African Union provides visibility, recommended standards, and continental coordination. JOWIH provides execution, governance, and delivery through qualified partners. Execution remains decentralised.',
        'A Joint Coordination Committee operationalises the relationship. Member states participate as sovereign partners. The Framework is an observatory layer: it watches, aligns, and recommends. It does not become a single point of political failure.',
      ],
    },
  },
  ecosystem: {
    kicker: 'Architecture',
    title: 'One ecosystem. Several coordinated layers.',
    lead: 'Using Jowih does not make you an owner. Integrating with Jowih does not make you an owner. Investing in eligible commercial assets does not give you control of the Foundation.',
    asta: {
      title: 'ASTA OS',
      subtitle: 'Accelerated Systemic Transformation Architecture',
      body: 'Asta Continental OS (Asta) is a continental digital-physical infrastructure and orchestration layer designed to enable interoperable digital activity among people, businesses, governments, developers, financial institutions, technology platforms, service providers and physical infrastructure. It is not fundamentally a consumer application. It is an infrastructure environment upon which multiple applications, services, institutions and physical systems may operate and interoperate.',
      pillars: ['Identity & KYC Rail', 'Cross-Border Trust Layer', 'Micro-Payment Settlement', 'Decentralised Logistics Protocol', 'Open Sovereign AI Orchestration'],
      coreLayers: [
        { id: '01', title: 'Physical infrastructure', body: 'Proposed connections to transport, energy, logistics, facilities, devices and other authorized real-world systems.' },
        { id: '02', title: 'Connectivity, compute & edge', body: 'A distributed hosting and connectivity design intended to support low-latency service, redundancy and jurisdictional requirements.' },
        { id: '03', title: 'Identity & accounts', body: 'A proposed identity and account layer for authentication, profiles, credentials, organizational identities and account linking.' },
        { id: '04', title: 'Trust & credentials', body: 'Verification, permissions, signatures, fraud signals and dispute mechanisms, distinct from identity and authorization.' },
        { id: '05', title: 'Continental digital rails', body: 'Interoperability interfaces for payments, commerce, communication, mobility, logistics and location.' },
        { id: '06', title: 'Data & interoperability fabric', body: 'Authorized information exchange guided by consent, minimization, security, purpose limitation and applicable law.' },
        { id: '07', title: 'Integration & developer layer', body: 'Proposed APIs, SDKs, webhooks, partner gateways, testing environments and technical documentation.' },
        { id: '08', title: 'Applications & services', body: 'A super app and other first-party experiences alongside independently operated partner services.' },
        { id: '09', title: 'Intelligence & agents', body: 'AI search, planning and orchestration concepts with explicit permissions and human confirmation controls.' },
        { id: '10', title: 'Experience layer', body: 'Access through the super app, partner applications, websites, enterprise tools, government portals and machine interfaces.' },
      ],
      ecosystemParticipants: [
        { title: 'People', body: 'Citizens, consumers, and end-users who access services through the continental infrastructure.' },
        { title: 'Businesses', body: 'African enterprises, startups, and commercial entities that integrate services and operate on ASTA.' },
        { title: 'Governments', body: 'National and regional government services that connect through the interoperability layer.' },
        { title: 'Developers', body: 'Independent developers who build applications and services using ASTA infrastructure.' },
        { title: 'Financial Institutions', body: 'Banks, payment providers, and financial services that integrate through the digital rails.' },
        { title: 'Technology Platforms', body: 'Existing tech platforms and services that connect to the continental ecosystem.' },
        { title: 'Service Providers', body: 'Logistics, healthcare, education, and other service providers that operate through ASTA.' },
      ],
      superApp: {
        title: 'Asta Super App',
        brand: 'Dotkom',
        tagline: 'The Flagship Consumer Interface to Asta OS',
        eyebrow: 'CONSUMER INTERFACE · FIRST-PARTY ENTRY POINT',
        image: '/assets/asta-super-app.jpg',
        imageNote: 'ASTA SUPER APP EXISTING MINIMUM VIABLE PRODUCT',
        lead: 'The Asta Super App is the flagship consumer interface to Asta OS. It is an optional unified entry point, not the only entry point.',
        message: "The Asta Super App is the flagship consumer interface to Asta OS. It is an optional unified entry point, not the only entry point. The Super App Minimum Viable Product (MVP) already exists. Through the Super App, users access the principal first-party services: Dotkom Messenger for communication and business interaction, Dotkom Marketplace for commerce and logistics, Asta Wallet for partnered financial access and payments, Dotkom Social Media for content and community, Asta Store for application and service distribution, and Asta Search for information and service discovery. These services operate on Asta OS infrastructure, the same infrastructure made available to authorized external applications. The Super App is one expression of Asta OS, not the whole of it, because Asta OS also functions through wider digital and physical ecosystem . Within the Super App's internal ecosystem, the consumer-facing brand is Dotkom from back golden days .",
        services: [
          { name: 'Dotkom Messenger', role: 'Communication & business interaction', detail: 'High-speed encrypted messaging, voice/video channels, and verified business rails.' },
          { name: 'Dotkom Marketplace', role: 'Commerce & logistics', detail: 'Integrated merchant storefronts, unified cart, order tracking, and freight coordination.' },
          { name: 'Asta Wallet', role: 'Partnered financial access & payments', detail: 'Partner-routed settlement bridge, multi-currency balances, and direct checkout.' },
          { name: 'Dotkom Social Media', role: 'Content & community', detail: 'Feeds, threads, creator tipping, and community coordination spaces.' },
          { name: 'Asta Store', role: 'Application & service distribution', detail: 'Unified ecosystem app store for certified first-party and partner applications.' },
          { name: 'Asta Search', role: 'Information & service discovery', detail: 'AI-assisted continental search, service cataloging, and local knowledge discovery.' },
        ],
      },
    },
    paths: [
      {
        name: 'Use',
        kicker: 'Citizens & Builders',
        badge: 'Utility',
        description: 'Access Jowih and ASTA services as a user: communication, commerce, wallet interfaces, search, social, education, health, and community services.',
        points: ['Zero ownership claim required', 'Instant platform utility & access', 'Consumer & student privacy guarantees', 'Local African currency conversion'],
        cta: 'Request updates',
        href: '/waitlist',
      },
      {
        name: 'Integrate',
        kicker: 'Partners & Institutions',
        badge: 'Integration',
        description: 'Connect existing services into ASTA OS or help deliver GAG projects through APIs, SDKs, framework agreements, and qualified delivery partnerships.',
        points: ['Keep your sovereign brand & market', 'Commercial developer agreements', 'Partner-led local execution', 'Access continental interoperability'],
        cta: 'Become a Partner',
        href: '/partner',
      },
      {
        name: 'Future participation',
        kicker: 'For later consideration',
        badge: 'Not available',
        description: 'The investment papers describe a separate proposed fund architecture. It is not part of the pre-launch and is not currently an offer or subscription opportunity.',
        points: ['No investment is being solicited here', 'No fund units or bonds are available', 'Any future offer requires legal and regulatory approvals', 'The pre-launch is donation-only'],
        cta: 'Read the proposed architecture',
        href: '/investor',
      },
    ],
  },
  partnersPage: {
    kicker: 'Partnership framework',
    title: 'Designed to work with partners, not instead of them.',
    lead: 'The source papers describe a partner-led approach across public institutions, universities, operators, developers and communities. The materials do not establish that named organizations have signed or become active partners.',
    importance: [
      {
        title: 'Delivery at Continental Speed',
          body: 'The draft proposes a qualified delivery network for future projects. Any appointments would require transparent selection, due diligence, contracts, performance monitoring and applicable procurement compliance.',
      },
      {
        title: 'Sovereignty & Local Capability',
          body: 'The framework is intended to work with host governments and local communities. Project participation would depend on invitation, agreements, legal authority and local capacity.',
      },
      {
        title: 'Universities as Talent & Review Engines',
          body: 'The papers identify universities as potential research, review and talent-development collaborators. No academic partnership is represented as signed on this site.',
      },
      {
        title: 'Rails, Not Capture',
        body: 'Banks, PSPs, airlines, merchants, developers, and government services can access ASTA OS without becoming Jowih-owned services. The objective is connection, not absorption.',
      },
    ],
  },
  partners: [] as PartnerItem[],
  speakers: [
    {
      name: 'Reuben Oduk',
      role: 'Founder and Steward President, Jowih',
      status: 'Founder Keynote & Vision Presentation',
      image: '/assets/reuben-oduk.jpg',
      tag: 'Keynote Speaker',
    },
    {
      name: 'Kisii University Representative',
      role: 'Dean, School of Information Science and Technology',
      status: 'Academic Address & Research Alignment',
      initials: 'KU',
      tag: 'University Host',
    },
    {
      name: 'Technical Review Panel',
      role: 'Software Architecture, Cybersecurity, AI & Distributed Rails',
      status: 'ASTA OS Protocol Verification',
      initials: 'TR',
      tag: 'Technology Panel',
    },
    {
      name: 'Partner and Media Guests',
      role: 'Ecosystem Builders, Creators, Investors & Institutions',
      status: 'Invitations in Progress',
      initials: 'PM',
      tag: 'Ecosystem Voices',
    },
  ],
  agenda: {
    title: 'An evening launch from 8:00 PM to 1:00 AM.',
    copy: 'Founder presentation first, investor briefing in the middle, partner room last, and a final Q&A after everything has been presented.',
    tracks: [
      {
        name: 'Main Stage',
        items: [
          { time: '20:00', title: 'Arrival and auditorium check-in', detail: 'Guests, students, faculty, media, and invited partners arrive for the evening launch at Kisii University.' },
          { time: '20:30', title: 'Opening and founder presentation', detail: 'Reuben Oduk presents Jowih Organization, the Great African Grid, ASTA OS, and the launch thesis.' },
          { time: '21:25', title: 'What Jowih answers', detail: 'GAG answers physical and economic integration, ASTA OS answers digital interoperability, and Jowih Credits answer value movement.' },
          { time: '21:50', title: 'Asta Super App MVP showcase', detail: 'A live look at the consumer doorway into the wider Jowih ecosystem.' },
        ],
      },
      {
        name: 'Investor Track',
        items: [
          { time: '22:20', title: 'Grid Bond and activation capital', detail: 'How initial development capital is separated from the Ecosystem Fund and mission fund.' },
          { time: '22:45', title: 'Jowih 100 and regulated participation', detail: 'Use, integrate, invest, and the strict no-control constitutional principle.' },
          { time: '23:10', title: 'Credits and partner execution', detail: 'Bridge-layer positioning, partner-only conversions, and liquidity treasury model.' },
        ],
      },
      {
        name: 'Partner Room',
        items: [
          { time: '23:35', title: 'University and research collaboration', detail: 'Talent pipeline, R&D centres, student opportunities, technical review, and future academic collaboration.' },
          { time: '00:05', title: 'Media, creators, and ecosystem partners', detail: 'Clear public storylines for Jowih, GAG, ASTA OS, Credits, the Fund, and the Foundation.' },
          { time: '00:30', title: 'Final Q&A and open floor', detail: 'University, media, investor, partner, technical, legal, and public questions come after the full presentation.' },
          { time: '00:55', title: 'Closing and next steps', detail: 'Ticket holders, partners, and invited guests receive the next engagement and onboarding path.' },
        ],
      },
    ],
  },
  documents: [
    {
      title: 'Jowih Foundation · Draft Constitution',
      file: '/documents/JOWIH%20FOUNDATION.pdf',
      description: 'A proposed governing instrument for the Foundation, its mission, governance safeguards and development mandate.',
      highlights: [
        'Mission: accelerate development through the Great African Grid; the document explicitly says GAG is not a political union or supranational authority.',
        'Four pillars: communities and basic needs; digital opportunity and youth; African research and innovation; and future capabilities.',
        'Proposed division between the Foundation, Purpose Trust, Founder Family Trust, Holdings, Group and operating companies.',
        'Controls proposed for donations, direct milestone disbursement, donor due diligence, audit, transparency and community participation.',
        'ADFA project models, CDE delivery, data protection, political neutrality, safeguarding and asset-lock provisions.',
        'The document identifies itself as a draft; registration, enforceability and compliance require independent legal review.',
      ],
      category: 'Governance',
      pages: 99,
      status: 'Draft constitution',
    },
    {
      title: 'Jowih Master Summary',
      file: '/documents/JOWIH%20MASTER%20SUMMARY.pdf',
      description: 'An organization-level overview connecting the proposed institutional, infrastructure, digital and funding architecture.',
      highlights: [
        'Explains the institutional layers from Foundation and trusts through Holdings, Group, GAG, ASTA OS, ADFA and funding.',
        'Summarizes the seven GAG corridors, four Foundation pillars, community CDE model and long-horizon planning.',
        'Distinguishes pre-launch donations from the proposed Grid Bond and the later proposed regulated Ecosystem Fund.',
        'Connects transport, industry, energy, digital systems, payments, human services and space capability.',
        'Contains future plans and financial examples; these should not be read as current operations or offers.',
      ],
      category: 'Architecture',
      pages: 8,
      status: 'Architecture overview',
    },
    {
      title: 'Governance & Appointment Register',
      file: '/documents/JOWIH%20GOVERNANCE.pdf',
      description: 'A proposed governance and appointment architecture across stewardship, oversight, Foundation management, trusts and commercial execution.',
      highlights: [
        'Separates advisory, governing, executive, oversight and external professional roles.',
        'Describes proposed stewardship, Board of Governors committees, Independent Auditor General, external auditor and Combined Trusts Board.',
        'Separates Foundation administration from Holdings, Group and operating-company management, including distinct New Dawn City governance.',
        'Defines regional coordination, country representation and participation structures.',
        'Lists offices and appointment categories; it is not evidence those positions are filled.',
      ],
      category: 'Governance',
      pages: 9,
      status: 'Proposed register',
    },
    {
      title: 'ASTA OS · System Architecture',
      file: '/documents/ASTA%20OS.pdf',
      description: 'A detailed design for a digital-physical interoperability layer that can connect independently operated services.',
      highlights: [
        'Ten proposed layers, from physical infrastructure, connectivity and identity through APIs, applications, AI and user experience.',
        'Details identity, accounts, credentials, permissions, trust, payment, commerce, messaging, mobility, logistics and data rails.',
        'Non-capture principle: partners may retain their brands, systems, customers and data.',
        'Describes API/SDK and partner gateway models, developer tooling, security controls and phased implementation.',
        'Security, data sovereignty, consent and jurisdictional compliance are design requirements, not claims of live certification.',
      ],
      category: 'Technology',
      pages: 20,
      status: 'Proposed technical architecture',
    },
    {
      title: 'Jowih Credits · Operational Framework',
      file: '/documents/JOWIH%20CREDITS.pdf',
      description: 'A proposed partner-executed cross-border settlement bridge, distinct from domestic currency and speculative crypto-assets.',
      highlights: [
        'Defines user, partner and Foundation treasury wallets, plus auto-conversion, optional holding, credit-routed FX and wallet-transfer modes.',
        'The proposed principle is bridge-only use: domestic spending converts to local currency rather than introducing a parallel currency.',
        'Licensed PSPs, banks and other approved partners are intended to handle conversion; the Foundation is not to provide fiat on/off-ramp services.',
        'Covers reserve backing, fees, liquidity, holding periods, AML/KYC, data protection, API integration, dispute handling and audit reporting.',
        'Licensing, reserves, partner agreements and payment services are proposed and are not represented as active.',
      ],
      category: 'Finance',
      pages: 13,
      status: 'Proposed operating model',
    },
    {
      title: 'Ecosystem Investment Architecture',
      anchor: 'funding-architecture',
      file: '/documents/JOWIH%20ECOSYSTEM%20INVESTMENT%20ARCHITECTURE.pdf',
      description: 'A proposed regulated investment and asset-vaulting blueprint, separate from the donation-led structural pre-launch.',
      highlights: [
        'Separates use, integration and investment as distinct participation paths.',
        'Proposes a Mauritius VCC with independent administration, valuation, custody, audit, licensing and segregated sub-funds.',
        'Describes the Jowih 100 expanding toward 500 and a proposed 30% Core / 70% Partner commercial allocation.',
        'Explains non-voting units, asset eligibility, valuation-weighted participation, Treasury capacity and a separate neutral reserve.',
        'Includes a proposed land acquisition/settlement facility with cash, independent valuation, community consultation and legal safeguards.',
        'The standalone Master Ecosystem Fund blueprint is contained in this investment-architecture paper; no separate Master Fund PDF was supplied.',
        'Financial figures are expressly illustrative; there is no current investment offer, fund license or guaranteed return.',
      ],
      category: 'Investment',
      pages: 28,
      status: 'Proposed architecture · not an offer',
    },
    {
      title: 'The GAG Initiative · Continental Framework',
      anchor: 'gag-initiative',
      file: '/documents/The%20GAG%20initiative%20.pdf',
      description: 'A broad proposed development framework bringing together infrastructure, economic coordination, public services and community participation.',
      highlights: [
        'Seven corridors operate in parallel: transport, industry, energy, digital, payments, services and space capability.',
        'Describes voluntary state-level ADFA agreements and state-funded, Foundation-funded or jointly funded project models.',
        'Sets out CDEs, the Comrade Hub, country budgeting, health, education, housing, energy and infrastructure frameworks.',
        'Includes long-range horizons, New Dawn City concepts, proposed acquisition plans and illustrative financial targets.',
      ],
      category: 'Continental development',
      pages: 99,
      status: 'Proposed framework',
    },
    {
      title: 'The Mirror of Africa',
      file: '/documents/THE%20MIRROR%20OF%20AFRICA.pdf',
      description: 'A short narrative essay about collective change, persistence and the origin of the wider development ambition.',
      highlights: [
        'Uses a school-class turnaround as a story about shared effort and changed expectations.',
        'Introduces the founder-authored "Reverse Response Technique": combining adversity with a refusal to accept it as the future.',
        'Provides cultural context rather than institutional policy or a description of operating programs.',
      ],
      category: 'Essay',
      pages: 2,
      status: 'Narrative essay',
    },
    {
      title: 'My Story',
      file: '/documents/My%20story.pdf',
      description: 'A founder-authored account of formative experiences, education, work and the development of the initial Jowih idea.',
      highlights: [
        'Recounts childhood loss, family care, scholarship-supported education and the role of teachers and friends.',
        'Describes financial hardship during university and early work building software and researching African development challenges.',
        'Traces the evolution from a campus-focused app idea toward ASTA OS and the Great African Grid concept.',
        'The biography is context for the institution, not its operating record or a substitute for the governance papers.',
        'Includes personal experiences that are intentionally summarized here rather than made the focus of the institution’s website.',
      ],
      category: 'Founder account',
      pages: 5,
      status: 'Founder-authored narrative',
    },
  ],
  forms: {
    ticket: {
      kicker: 'Public events',
      title: 'Request event updates',
      copy: 'Public event registration and ticketing are not open through this site. Submit an enquiry to receive information when a verified event and registration process are announced.',
      interest: 'Event information request',
    },
    partner: {
      kicker: 'Launch event · Partner & sponsor enquiries',
      title: 'Partner with or sponsor the launch event',
      copy: 'Tell us how your organization may support the Jowih launch event. Enquiries may cover sponsorship, in-kind contributions, venue or production support, academic participation, media collaboration, or technical services. This form records interest only: it does not accept payments or create a sponsorship agreement. Any arrangement requires due diligence, written terms and legal review.',
      interest: 'Launch-event sponsorship',
    },
    investor: {
      kicker: 'Capital & Allocation',
      title: 'Future investment architecture',
      copy: 'The source papers describe proposed future bond and regulated fund structures. No securities, bonds, units or investment opportunities are currently offered. The present pre-launch is donation-only.',
      interest: 'Investor briefing',
    },
    donate: {
      kicker: 'Pre-launch structural setup',
      title: 'Support Pre-Launch',
      copy: 'The pre-launch is for support contributions, not investment. No return, equity or ownership is offered. Online giving remains unavailable until the proposed receiving trust and payment provider are verified.',
      interest: 'Support',
    },
  },
  contactInterests: [
    'Launch-event sponsorship',
    'Cash sponsorship enquiry',
    'In-kind event support',
    'Venue or production support',
    'Academic participation',
    'Media collaboration',
    'Technical services',
    'Media request',
    'General enquiry',
  ],
  newsletter: {
    title: 'Stay in the loop',
    copy: 'Latest updates, documents, and launch notes. No spam — only material that is worth the inbox.',
  },
  footerLinks: [
    { label: 'About', href: '/about' },
    { label: 'Great African Grid', href: '/great-african-grid' },
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Partners', href: '/partners' },
    { label: 'Documents', href: '/documents' },
    { label: 'Waitlist', href: '/waitlist' },
    { label: 'Book Ticket', href: '/ticket' },
    { label: 'Become Partner', href: '/partner' },
    { label: 'Investor Briefing', href: '/investor' },
    { label: 'Support', href: '/donate' },
  ],
  socialMedia: [
    { platform: 'X', label: 'X (Twitter)', href: 'https://x.com/jowihafrica', icon: 'twitter' },
    { platform: 'Facebook', label: 'Facebook', href: 'https://facebook.com/jowihafrica', icon: 'facebook' },
    { platform: 'LinkedIn', label: 'LinkedIn', href: 'https://linkedin.com/company/jowihafrica', icon: 'linkedin' },
    { platform: 'YouTube', label: 'YouTube', href: 'https://youtube.com/@jowihafrica', icon: 'youtube' },
    { platform: 'Instagram', label: 'Instagram', href: 'https://instagram.com/jowihafrica', icon: 'instagram' },
  ],
  resources: {
    keyDocuments: [
      { title: 'Foundation Charter', href: '/documents#foundation' },
      { title: 'Governance Framework', href: '/documents#governance' },
      { title: 'Financial Architecture', href: '/documents#financial' },
      { title: 'Infrastructure Plans', href: '/documents#infrastructure' },
    ],
    publications: [
      { title: 'Jowih Foundation Overview', href: '/documents' },
      { title: 'GAG Implementation Guide', href: '/documents' },
      { title: 'ASTA OS Technical Specs', href: '/documents' },
    ],
  },
  workWithUs: [
    {
      title: 'Join Partnership Community',
      description: 'Submit your capabilities to help build Africa\'s next chapter',
      href: '/partner/community',
      icon: 'users',
    },
    {
      title: 'Developer Opportunities',
      description: 'Build on ASTA OS and contribute to the technology infrastructure',
      href: '/partner/developer',
      icon: 'code',
    },
    {
      title: 'Institutional Collaboration',
      description: 'Partner with universities, research institutions, and governments',
      href: '/partner/institutional',
      icon: 'building',
    },
    {
      title: 'Volunteer Your Skills',
      description: 'Contribute your time and expertise to the foundation',
      href: '/partner/volunteer',
      icon: 'heart',
    },
  ],
};
