import { FiBarChart2, FiCpu, FiFeather, FiLayers, FiShield, FiUsers } from 'react-icons/fi'

export const navLinks = [
  { label: 'Work', href: '#experience' },
  { label: 'Flow', href: '#capabilities' },
  { label: 'Proof', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const featureCards = [
  {
    title: 'Automation',
    desc: 'Clean workflows that remove repeat work.',
    icon: FiLayers,
  },
  {
    title: 'Writing',
    desc: 'Sharper copy without the filler.',
    icon: FiFeather,
  },
  {
    title: 'Live view',
    desc: 'Key signals in one calm place.',
    icon: FiBarChart2,
  },
  {
    title: 'Secure',
    desc: 'Controls built in from day one.',
    icon: FiShield,
  },
  {
    title: 'Team flow',
    desc: 'Hand-offs that stay in sync.',
    icon: FiUsers,
  },
  {
    title: 'Integrations',
    desc: 'Easy links to the tools you use.',
    icon: FiCpu,
  },
]

export const showcaseHighlights = [
  'Briefings',
  'Snapshots',
  'Approvals',
  'Live view',
]

export const metrics = [
  { label: 'Time saved', value: 84, suffix: '%', note: 'Across weekly tasks' },
  { label: 'Faster approvals', value: 3.2, suffix: 'x', note: 'From request to sign-off' },
  { label: 'Retention lift', value: 27, suffix: '%', note: 'From quicker responses' },
  { label: 'Workflows live', value: 1200, suffix: '+', note: 'Across teams' },
]

export const processSteps = [
  {
    title: 'Brief',
    text: 'Define the outcome and scope.',
  },
  {
    title: 'Shape',
    text: 'Map approvals and alerts.',
  },
  {
    title: 'Scale',
    text: 'Launch it with clarity.',
  },
]

export const testimonials = [
  {
    quote: 'Looks premium. Works hard.',
    name: 'Maya Laurent',
    role: 'Ops Lead',
    company: 'Maison North',
  },
  {
    quote: 'One clean system replaced three tools.',
    name: 'Jordan Ellis',
    role: 'Product Lead',
    company: 'Monarch Labs',
  },
  {
    quote: 'Updates and approvals finally feel smooth.',
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
    description: 'For solo operators.',
    features: ['3 workflows', 'Basic analytics', 'Email support', 'Theme tweaks'],
  },
  {
    name: 'Signature',
    monthly: 79,
    yearly: 790,
    description: 'For growing teams.',
    features: ['Unlimited workflows', 'Analytics', 'Collaboration', 'Priority support', 'API access'],
    popular: true,
  },
  {
    name: 'Atelier',
    monthly: 149,
    yearly: 1490,
    description: 'For larger orgs.',
    features: ['SSO', 'Custom SLAs', 'Dedicated support', 'Security reviews', 'Private deployment'],
  },
]

export const faqs = [
  {
    question: 'Works with our stack?',
    answer: 'Yes. It fits modern tooling and APIs.',
  },
  {
    question: 'Good for enterprise?',
    answer: 'Yes. It keeps things clear and controlled.',
  },
  {
    question: 'Easy to brand?',
    answer: 'Yes. Colors and copy are easy to swap.',
  },
  {
    question: 'What makes it premium?',
    answer: 'Editorial type, soft gold, and space.',
  },
]

export const serviceStats = [
  { label: 'Response', value: '12m' },
  { label: 'Ready', value: '98%' },
  { label: 'Clarity', value: 'A+' },
]

export const timelineNotes = [
  {
    title: 'Brief',
    text: 'A quick view for leaders.',
  },
  {
    title: 'Approvals',
    text: 'Route key requests fast.',
  },
  {
    title: 'Revenue',
    text: 'Track movement without noise.',
  },
]
