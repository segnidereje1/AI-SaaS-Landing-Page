import { FiBarChart2, FiCpu, FiFeather, FiLayers, FiShield, FiUsers } from 'react-icons/fi'

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const featureCards = [
  {
    title: 'Bespoke automation flows',
    desc: "Craft concierge-grade workflows that remove repetitive work without losing your team's signature touch.",
    icon: FiLayers,
  },
  {
    title: 'Tasteful AI writing',
    desc: 'Generate polished copy, proposals, and product narratives that sound considered, not generic.',
    icon: FiFeather,
  },
  {
    title: 'Real-time command center',
    desc: 'See live performance, high-priority alerts, and revenue signals in a calm, elegant interface.',
    icon: FiBarChart2,
  },
  {
    title: 'Secure by design',
    desc: 'Enterprise-ready guardrails, role controls, and review paths that keep sensitive work protected.',
    icon: FiShield,
  },
  {
    title: 'Team orchestration',
    desc: 'Hand off work across departments with context-rich collaboration and perfectly timed nudges.',
    icon: FiUsers,
  },
  {
    title: 'Fast integration layer',
    desc: 'Connect your stack with lightweight APIs and workflows that feel native to your tools.',
    icon: FiCpu,
  },
]

export const showcaseHighlights = [
  'Personalized activity briefings',
  'Executive-ready analytics snapshots',
  'Workflow orchestration with approval layers',
  'Live visibility into what matters most',
]

export const metrics = [
  { label: 'Operational time saved', value: 84, suffix: '%', note: 'Across weekly admin tasks' },
  { label: 'Faster approvals', value: 3.2, suffix: 'x', note: 'From request to sign-off' },
  { label: 'Client retention lift', value: 27, suffix: '%', note: 'Driven by faster response loops' },
  { label: 'Workflows launched', value: 1200, suffix: '+', note: 'Across teams and departments' },
]

export const processSteps = [
  {
    title: 'Curate the brief',
    text: 'Define the experience you want, the teams involved, and the moments that deserve automation.',
  },
  {
    title: 'Shape the flow',
    text: 'Design elegant pathways for approvals, insights, and alerts so the product feels calm and precise.',
  },
  {
    title: 'Scale the rhythm',
    text: 'Roll it out across the organization with confident controls, analytics, and a premium rollout plan.',
  },
]

export const testimonials = [
  {
    quote:
      'The interface feels like something you would expect from a design studio, but the operations depth is what actually changed how our team works.',
    name: 'Maya Laurent',
    role: 'VP of Operations',
    company: 'Maison North',
  },
  {
    quote:
      'We replaced three disconnected tools with one beautifully composed system. The result is clearer decisions and a much calmer team.',
    name: 'Jordan Ellis',
    role: 'Chief Product Officer',
    company: 'Monarch Labs',
  },
  {
    quote:
      'Our client updates, approvals, and internal reports now feel intentionally crafted instead of stitched together at the last minute.',
    name: 'Ari Chen',
    role: 'Founder',
    company: 'Atelier Studio',
  },
]

export const pricingPlans = [
  {
    name: 'Private',
    monthly: 39,
    yearly: 390,
    description: 'For solo operators who want a polished edge and a serious workflow advantage.',
    features: ['3 premium workflows', 'Basic analytics', 'Email support', 'Theme customization'],
  },
  {
    name: 'Signature',
    monthly: 79,
    yearly: 790,
    description: 'For teams that want premium orchestration and a striking command center.',
    features: ['Unlimited workflows', 'Advanced analytics', 'Collaboration tools', 'Priority support', 'API access'],
    popular: true,
  },
  {
    name: 'Atelier',
    monthly: 149,
    yearly: 1490,
    description: 'For organizations that need bespoke control, scale, and white-glove implementation.',
    features: ['SSO and roles', 'Custom SLAs', 'Dedicated support', 'Security reviews', 'Private deployment'],
  },
]

export const faqs = [
  {
    question: 'Can we use this with our existing stack?',
    answer:
      'Yes. The layout is designed to feel premium while still fitting naturally into modern web tooling, APIs, and team workflows.',
  },
  {
    question: 'Is this suitable for enterprise teams?',
    answer:
      'Absolutely. The visual language is luxurious, but the system is built to communicate trust, clarity, and control at scale.',
  },
  {
    question: 'Can we adapt the colors and brand easily?',
    answer:
      'Yes. The styling is centralized so you can swap the palette, copy, and section order without having to unravel the page.',
  },
  {
    question: 'What makes the design feel more premium?',
    answer:
      'We leaned on editorial typography, restrained gold accents, glassy surfaces, and spacious composition instead of loud gradients.',
  },
]

export const serviceStats = [
  { label: 'Response time', value: '12m' },
  { label: 'Launch readiness', value: '98%' },
  { label: 'Clarity score', value: 'A+' },
]

export const timelineNotes = [
  {
    title: 'Daily briefing',
    text: 'Summaries are condensed into a refined morning view for leadership and operators.',
  },
  {
    title: 'Decision lane',
    text: 'High-impact requests are routed into a crisp approval path instead of a crowded inbox.',
  },
  {
    title: 'Revenue pulse',
    text: 'Track the important movement without drowning the screen in noise or clutter.',
  },
]
