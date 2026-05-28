import corporateTravelImage from "../../services_images/Corporate Travel Management.png";
import meetingsConferencesImage from "../../services_images/Meetings, Conferences & Product Launches.png";
import incentiveTravelImage from "../../services_images/Incentive Travel : Reward & Recognition.png";
import teamBuildingImage from "../../services_images/Team-building & Experiential Programs.png";
import artistManagementImage from "../../services_images/Artist Management & Entertainment.png";
import merchandisingImage from "../../services_images/Merchandising & Fulfilment.png";
import hybridTechImage from "../../services_images/Hybrid & Tech Solutions.png";
import riskOperationsImage from "../../services_images/Risk & Operations.png";
import turnkeyEventImage from "../../services_images/Turnkey Event Packages.png";
import customIncentiveImage from "../../services_images/Custom Incentive Journeys.png";
import transportLogisticsImage from "../../services_images/Transport & Logistics Blocks.png";
import reportingDashboardImage from "../../services_images/Reporting Dashboard.png";

export const company = {
  name: "MICEkart Pvt. Ltd.",
  slogan: "Corporate travel and events  Engineered for Impact.",
  email: "gavin@micekart.com",
  phone: "+91 91674 99293",
  phoneTel: "+919167499293",
  address:
    "Neelkanth Business Park, A-704, Vidyavihar station skywalk, Sadguru Nagar, Neelkanth Kingdom, Vidyavihar West, Vidyavihar, Mumbai, Maharashtra 400086",
  mapQuery: "Neelkanth Business Park Vidyavihar Mumbai",
  social: {
    instagram: "https://www.instagram.com/micekart/",
    facebook: "https://www.facebook.com/MICEkart.in/",
    linkedin: "https://in.linkedin.com/company/micekartcom",
  },
};

export const about = {
  intro: [
    "MICEkart Pvt. Ltd. is an integrated corporate travel solutions and event management company, helping businesses plan seamless travel experiences, meetings, conferences, exhibitions, incentive programs, and corporate events across India and internationally.",
    "We focus on delivering well-coordinated, customized solutions that simplify travel and event planning while ensuring efficiency, quality, and memorable experiences."
  ],
  offerings: [
    "We offer end-to-end solutions for sales incentive trips, meetings and conference arrangements, events and exhibitions, merchandising requirements, team-building activities, artist requirements, and more.",
  ],
  closing:
    "With a team backed by deep industry experience, MICEkart focuses on delivering value, service excellence, and personalized support. We believe every journey should be well-planned, well-managed, and memorable for the right reasons.",
};

export const whyChooseUs = [
  "One-stop corporate travel and event solutions.",
  "Expertise in both domestic and international travel planning.",
  "Custom support for incentive trips, conferences, team-building, and more.",
  "Focus on service quality, reliability, and client satisfaction.",
];

export const vision =
  "To be the most trusted partner for organizations that create impactful, memorable corporate events and travel experiences.";

export const mission =
  "To empower organizations to achieve their business and cultural goals through thoughtfully designed corporate travel and MICE programs that connect people, deepen relationships, and turn every event into a meaningful driver of performance and growth.";

export const usp =
  "Our goal is to make corporate travel and event planning easier, smarter, and more efficient for every client. We provide seamless corporate travel and MICE solutions, combining strategic planning, flawless event execution, and personalized experiences to create impactful business events, conferences, incentives, and corporate journeys that drive engagement and growth.";

const u = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const serviceImages = {
  corporateTravel: corporateTravelImage,
  meetingsConferences: meetingsConferencesImage,
  incentiveTravel: incentiveTravelImage,
  teamBuilding: teamBuildingImage,
  artistManagement: artistManagementImage,
  merchandising: merchandisingImage,
  hybridTech: hybridTechImage,
  riskOperations: riskOperationsImage,
  turnkeyEvent: turnkeyEventImage,
  customIncentive: customIncentiveImage,
  transportLogistics: transportLogisticsImage,
  reportingDashboard: reportingDashboardImage,
};

export const images = {
  hero: u("photo-1540575467063-178a50c2df87", 1920, 1080),
  heroAbout: u("photo-1511578314322-379afb476865", 1920, 900),
  heroServices: u("photo-1505373877841-8d25f39d4666", 1920, 900),
  heroProducts: u("photo-1519167758993-4ee570f2b264", 1920, 900),
  heroGallery: u("photo-1516762714899-e21cae0d2670", 1920, 900),
  heroClients: u("photo-1552664730-d307ca884978", 1920, 900),
  heroContact: u("photo-1475721027785-f74eccf83e40", 1920, 900),
  conference: u("photo-1552664730-d307ca884978", 900, 650),
  gala: u("photo-1516762714899-e21cae0d2670", 900, 650),
  launch: u("photo-1519167758993-4ee570f2b264", 900, 650),
  hybrid: u("photo-1515390069361-81ec33c9383e", 900, 650),
  teamBuilding: u("photo-1528605248644-14dd04022da1", 900, 650),
  travel: u("photo-1436491865339-9a61bfe97709", 900, 650),
  incentive: u("photo-1464366400600-7168b8af9bc3", 900, 650),
  merch: u("photo-1567427017947-545c5f8d16ad", 900, 650),
  artist: u("photo-1492684223066-81342ee5ff30", 900, 650),
  networking: u("photo-1517245386807-bb43a81527c1", 900, 650),
  office: u("photo-1497366216548-37526070297c", 900, 650),
};

export const collageImages = [
  images.conference,
  images.gala,
  images.travel,
  images.teamBuilding,
  images.launch,
  images.hybrid,
];

export const stats = [
  { value: "2019", label: "Established", suffix: "", animate: true, extraSpins: 0 },
  { value: "100", label: "Enterprise Clients", suffix: "+", animate: true },
  { value: "1000", label: "Successful Events", suffix: "+", animate: true },
  { value: "9", label: "Core Service Lines", suffix: "", animate: true },
];

export const services = [
  {
    title: "Corporate Travel Management",
    desc: "Flight, rail, transfers, visas, travel-policy compliance, and support for domestic and international programs.",
    image: serviceImages.corporateTravel,
  },
  {
    title: "Meetings, Conferences & Product Launches",
    desc: "Venue sourcing, AV production, speaker and delegate management, conceptualising events, and on-site coordination.",
    image: serviceImages.meetingsConferences,
  },
  {
    title: "Incentive Travel / Reward & Recognition",
    desc: "Bespoke domestic and international incentive trips, curated itineraries, experiential activities, and R&R fulfilment.",
    image: serviceImages.incentiveTravel,
  },
  {
    title: "Team-building & Experiential Programs",
    desc: "Custom team development activities and workshops to boost engagement and performance.",
    image: serviceImages.teamBuilding,
  },
  {
    title: "Artist Management & Entertainment",
    desc: "End-to-end artist management, talent booking, stage logistics, and live-show coordination.",
    image: serviceImages.artistManagement,
  },
  {
    title: "Merchandising & Fulfilment",
    desc: "Branded merchandise, sourcing, inventory, and distribution for events and R&R programs.",
    image: serviceImages.merchandising,
  },
  {
    title: "Hybrid & Tech Solutions",
    desc: "Virtual/hybrid platforms, live streaming, event apps, and analytics for wider reach and measurement.",
    image: serviceImages.hybridTech,
  },
  {
    title: "Risk Management & Logistics",
    desc: "Ground handling, security planning, and contingency management for smooth execution.",
    image: serviceImages.riskOperations,
  },
  {
    title: "Turnkey Event Packages",
    desc: "Conference, awards, product launches, and exhibition packages covering venue, production, and catering.",
    image: serviceImages.turnkeyEvent,
  },
  {
    title: "Custom Incentive Journeys",
    desc: "Scalable incentive trip templates tailored by budget and duration.",
    image: serviceImages.customIncentive,
  },
  {
    title: "Transport & Logistics Blocks",
    desc: "Group transfer and fleet solutions for conferences and incentive groups.",
    image: serviceImages.transportLogistics,
  },
  {
    title: "Reporting Dashboard",
    desc: "Post-event metrics, engagement analytics, and ROI summaries.",
    image: serviceImages.reportingDashboard,
  },
];

export const serviceHighlights = services.slice(0, 6);

export const products = [
  {
    title: "Turnkey Event Packages",
    tag: "Conference · Awards · Launch",
    desc: "Conference, awards, product launches, and exhibition packages covering venue, production, and catering.",
    image: images.conference,
  },
  {
    title: "Custom Incentive Journeys",
    tag: "Domestic & International",
    desc: "Scalable incentive trip templates tailored by budget and duration.",
    image: images.incentive,
  },
  {
    title: "Transport & Logistics Blocks",
    tag: "Group Mobility",
    desc: "Group transfer and fleet solutions for conferences and incentive groups.",
    image: images.travel,
  },
  {
    title: "Reporting Dashboard",
    tag: "Post-Event Analytics",
    desc: "Post-event metrics, engagement analytics, and ROI summaries.",
    image: images.hybrid,
  },
];

export const galleryItems = [
  { title: "Corporate Conference", category: "Conference", image: images.conference },
  { title: "Product Launch", category: "Launch", image: images.launch },
  { title: "Award Gala", category: "Awards", image: images.gala },
  { title: "Hybrid Summit", category: "Hybrid", image: images.hybrid },
  { title: "Incentive Journey", category: "Incentive", image: images.incentive },
  { title: "Team-building Offsite", category: "Team-building", image: images.teamBuilding },
  { title: "Live Entertainment", category: "Entertainment", image: images.artist },
  { title: "Exhibition", category: "Exhibition", image: images.merch },
  { title: "Delegate Experience", category: "MICE", image: images.hero },
];

export const clientLogos = [
  { name: "Aditya Birla Sun Life Insurance Company Ltd", src: "/client-logos/Aditya Birla Sun Life Insurance Company Ltd.jpeg" },
  { name: "Atlan Technologies", src: "/client-logos/atlan_client.png" },
  { name: "Axis Max Life Insurance Limited", src: "/client-logos/Axis Max Life Insurance Limited.png" },
  { name: "Bandhan AMC Limited", src: "/client-logos/Bandhan AMC Limited.jpeg" },
  { name: "Edelweiss Asset Management Limited", src: "/client-logos/edelweiss_client.png" },
  { name: "Hdfc Life Insurance Company Limited", src: "/client-logos/Hdfc Life Insurance Company Limited.jpg" },
  { name: "Hiranandani Financial Services", src: "/client-logos/hfs_client.png" },
  { name: "ICICI Prudential", src: "/client-logos/ICICI Prudential.png" },
  { name: "IDFC First Bank", src: "/client-logos/idfc_client.png" },
  { name: "IndusInd Bank Ltd", src: "/client-logos/indusind_client.png" },
  { name: "Franklin Templeton", src: "/client-logos/Franklin Templeton.png" },
  { name: "Motilal Oswal Asset Management", src: "/client-logos/motilal_client.png" },
  { name: "Muthoot Insurance Brokers Private Limited", src: "/client-logos/Muthoot Insurance Brokers Private Limited.png" },
  { name: "Nippon", src: "/client-logos/Nippon.png" },
  { name: "Nuvama Wealth and Investment Limited", src: "/client-logos/Nuvama Wealth and Investment Limited.png" },
  { name: "Prestige Hospitality Ventures Limited", src: "/client-logos/Prestige Hospitality Ventures Limited.png" },
  { name: "Sanctum Wealth Private Limited, Mumbai", src: "/client-logos/Sanctum Wealth Private Limited,Mumbai.png" },
  { name: "Tata Capital Limited", src: "/client-logos/Tata Capital Limited.png" },
  { name: "Whiteoak Capital Asset Management Limited", src: "/client-logos/Whiteoak Capital Asset Management Limited.png" },
  { name: "Zurich Kotak General Insurance Co. (India) Ltd", src: "/client-logos/Zurich Kotak General Insurance Co. (India) Ltd.png" },
];

export const clients = clientLogos.map((client) => client.name);

export const team = [
  {
    name: "Gavin D'Costa",
    role: "Director",
    bio: "A dynamic entrepreneur in the MICE industry. He has been instrumental in building strategic partnerships, creating innovative event solutions, and fostering global business connections, helping position MICEkart as a trusted platform for corporate travel and events.",
    imageKey: "gavin",
  },
  {
    name: "Abhishek Gupta",
    role: "Director",
    bio: "A seasoned entrepreneur with over 15 years of experience in the travel and MICE industry. He has successfully led large-scale corporate events, incentive programs, and global travel solutions for leading organisations.",
    imageKey: "abhishek",
  },
  {
    name: "Rashmi D'Costa",
    role: "Head of HR",
    bio: "Brings extensive experience in human resources, talent management, and organisational development. She drives employee engagement and strengthens leadership and team development initiatives across the organisation.",
    image: u("photo-1573496359142-b8d87734a5a2", 600, 750),
  },
  {
    name: "Haneen Shaikh",
    role: "Operations Manager",
    bio: "Oversees operational strategy and execution with 8+ years of experience and strong expertise in process management and travel/event coordination, ensuring seamless delivery and exceptional client experiences.",
    image: u("photo-1580489944761-15a19d654956", 600, 750),
  },
  {
    name: "Latish Shetty",
    role: "Sales Manager",
    bio: "Brings strong expertise in client relations, business development, and strategic sales management, driving revenue growth and lasting partnerships across the MICE corporate travel and events industry.",
    imageKey: "latish",
  },
];

export const marqueeItems = [
  "Corporate Travel Management",
  "Meetings & Conferences",
  "Incentive Travel",
  "Team-building Programs",
  "Artist Management",
  "Merchandising & Fulfilment",
  "Hybrid & Tech Solutions",
  "Engineered for Impact",
];

export const testimonials = [
  {
    quote:
      "MICEkart handled our annual leadership offsite with precision. The team stayed responsive from planning to execution and made the entire program feel effortless.",
    name: "Client Partner",
    role: "Corporate Events",
  },
  {
    quote:
      "Their coordination across travel, venue, and on-ground support was seamless. We could focus on the business agenda while they managed every operational detail.",
    name: "Program Lead",
    role: "Enterprise Travel",
  },
  {
    quote:
      "The experience was polished, professional, and well paced. MICEkart brought structure to a complex event and delivered exactly what our teams needed.",
    name: "Marketing Head",
    role: "Brand Activation",
  },
  {
    quote:
      "Their planning discipline and on-ground coordination gave us complete confidence during a high-stakes client summit.",
    name: "Operations Director",
    role: "Client Summits",
  },
  {
    quote:
      "From travel logistics to venue flow, everything was managed smoothly and with a clear eye on the attendee experience.",
    name: "Business Program Manager",
    role: "Corporate Travel",
  },
  {
    quote:
      "MICEkart balanced creativity with structure, which made our incentive program both memorable and easy to manage.",
    name: "HR Business Partner",
    role: "Incentive Programs",
  },
  {
    quote:
      "The team understood our brand tone quickly and translated it into a well-run event with strong attention to detail.",
    name: "Brand Manager",
    role: "Launch Events",
  },
  {
    quote:
      "Every step felt coordinated and proactive. They anticipated needs before they became issues, which made a big difference.",
    name: "Travel Lead",
    role: "Enterprise Mobility",
  },
  {
    quote:
      "We appreciated the clear communication, the professionalism on site, and the quality of execution throughout the program.",
    name: "Event Lead",
    role: "Conferences",
  },
  {
    quote:
      "MICEkart delivered a seamless experience for our stakeholders and created an event flow that kept everything on track.",
    name: "Corporate Affairs Head",
    role: "Stakeholder Events",
  },
  {
    quote:
      "Their team was responsive, adaptable, and highly organized, which gave us a smooth experience from brief to wrap-up.",
    name: "Program Director",
    role: "Business Events",
  },
];
