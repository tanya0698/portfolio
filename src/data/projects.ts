export interface Project {
  slug: string
  tier: 'featured' | 'more'
  title: string
  blurb: string
  stack: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'workflow-engine',
    tier: 'featured',
    title: 'Workflow & Business Process Engine',
    blurb:
      'A configurable workflow and business-process platform that powers ticketing, task and project management, job cards, approvals, performance reviews, and customer query handling across the company’s systems — new business processes are set up rather than coded from scratch.',
    stack: ['Node.js', 'Express', 'SQL Server', 'RabbitMQ', 'Claude API', 'Jest', 'Docker'],
    highlights: [
      'One shared core serving six business products, from ticketing and task management to approvals and performance reviews',
      'Visual workflow builder, multi-step approvals with e-signatures, SLA tracking, and automatic escalation',
      'Reporting engine with period-over-period comparison and AI-generated report summaries (Claude API)',
      'Secure integration for other systems: single sign-on for staff, API keys for partner services, and signed webhooks',
      'Event-driven architecture on RabbitMQ, encrypted secrets storage, data-retention controls, and monitoring',
      'Automated test coverage and full API documentation for integrating teams',
    ],
  },
  {
    slug: 'erp-platform',
    tier: 'featured',
    title: 'Enterprise ERP Platform',
    blurb:
      'A single sign-on ERP portal bringing together customer relationship management, helpdesk, task and project management, workforce deployment, asset management, payments and POS, field enforcement, and reporting — with access controlled by department and role.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Ant Design', 'React Router', 'ApexCharts', 'Leaflet', 'Vitest'],
    highlights: [
      'One portal connecting multiple independently deployed backend services',
      'Single sign-on with two-factor authentication and role-based access to every module',
      'CRM and customer-care, helpdesk, task management, workforce, asset, and mapping modules',
      'Management dashboards and reports with PDF export, bilingual (English/Shona) interface, and an installable offline-capable app',
      'Mobile-friendly, sortable, filterable data tables and a dark mode across all modules',
    ],
  },
  {
    slug: 'helpdesk-microservice',
    tier: 'featured',
    title: 'Helpdesk & Ticketing Microservice',
    blurb:
      'An event-driven microservice running the full support-ticket lifecycle — assignment, SLA targets, 4-tier escalation, and real-time notifications — for both staff and external customers.',
    stack: ['Node.js', 'Express', 'SQL Server', 'RabbitMQ', 'Server-Sent Events', 'Swagger', 'Jest'],
    highlights: [
      'Ticket workflow from open to closed with server-side validation and 4-tier escalation',
      'Background workers for email, audit logging, and notifications that keep working even if the message queue goes down',
      'Real-time in-app notifications across multiple server instances',
      'Fully documented REST API with unit and integration tests',
      'Cut mean time to resolution by 25%',
    ],
  },
  {
    slug: 'workforce-management',
    tier: 'featured',
    title: 'Workforce Deployment & Performance System',
    blurb:
      'A workforce management system that ranks field staff on daily and monthly performance, assigns them to zones, confirms on-site arrival, and automates the daily deployment process end to end.',
    stack: ['C#', 'ASP.NET MVC', '.NET Framework', 'Entity Framework', 'SQL Server', 'Hangfire'],
    highlights: [
      'Automated performance scoring for 200+ staff across 200+ locations',
      '10 scheduled background jobs automating attendance, redeployment, next-day scheduling, and staff-directory sync',
      'Arrival-time tracking, cutoff and lock times, and leave management',
      'Performance profiling with BenchmarkDotNet on the busiest code paths',
      'Increased deployment efficiency by roughly 40%',
    ],
  },
  {
    slug: 'asset-management',
    tier: 'featured',
    title: 'Asset Management & Device Tracking System',
    blurb:
      'Tracks issuance and return of company equipment — phones, printers, and mobile POS units — to field staff, with approval sign-off, fault tracking, and reporting.',
    stack: ['Node.js', 'Express', 'C#', 'ASP.NET MVC', 'SQL Server', 'Hangfire', 'PDFKit'],
    highlights: [
      'Full issue-and-return lifecycle with approvals and a live dashboard of outstanding devices',
      'Branded, multi-page PDF reports',
      'Automatic recovery of devices assigned to inactive staff through scheduled HR-directory sync',
      'REST API with automated tests, secured with single sign-on and role-based access',
      'Managed 300+ assets and reduced misplacement by 35%',
    ],
  },
  {
    slug: 'crm-query-handling',
    tier: 'featured',
    title: 'CRM & Customer Query Management',
    blurb:
      'A customer-care system that logs, routes, and tracks customer queries against service-level targets, with real-time monitoring of agent performance.',
    stack: ['C#', 'ASP.NET MVC', 'Node.js', 'SQL Server', 'React', 'TypeScript'],
    highlights: [
      'Handles 500+ customer queries a month and improved resolution speed by about 30%',
      'SLA breach tracking and live agent-performance dashboards',
      'Rebuilt on the workflow engine, with a full activity history and query analytics',
    ],
  },
  {
    slug: 'smart-parking-app',
    tier: 'featured',
    title: 'Park-Check — GPS Smart Parking App',
    blurb:
      'A GPS-driven parking app for Harare’s CBD: pin your car, get a live countdown against the 60-minute limit, a warning before time runs out, and fine lookup and payment for any plate.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Leaflet'],
    highlights: [
      'GPS parking sessions with push notifications before time runs out',
      'Automatic session-expiry detection, fines calculation, and monthly parking history',
      'Number-plate recognition demo and in-app fine payment flow',
      'Free open-source maps (Leaflet/OpenStreetMap), secure login with password reset, and full user and technical guides',
    ],
  },
  {
    slug: 'ecommerce-platform',
    tier: 'featured',
    title: 'E-Commerce & Quotation Platform',
    blurb:
      'An online store for a curtain design, sales, and alterations business: product catalogue, cart, quotation requests, checkout with online payments, order tracking, and an admin back office.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Ant Design', 'Supabase', 'PostgreSQL', 'Paynow', 'Stripe'],
    highlights: [
      'Secure PostgreSQL database with row-level security and image storage',
      'Online payments through Paynow, plus a Stripe and PayPal version for a second client',
      'Admin back office for products, quotes, orders, and customers',
      'WhatsApp hand-off for quote follow-up',
    ],
  },
  {
    slug: 'dashboard-starter-kit',
    tier: 'more',
    title: 'Enterprise Dashboard Starter Kit',
    blurb:
      'A reusable React/TypeScript starter kit with a configurable layout, role-based auth, and a full component library for building new internal dashboards quickly.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Ant Design', 'Vitest'],
    highlights: [],
  },
  {
    slug: 'geofence-platform',
    tier: 'more',
    title: 'Geofencing & Live Tracking Platform',
    blurb:
      'Zone boundaries and live tracking of field staff, built first in ASP.NET MVC and later rebuilt as a Node.js microservice powering the ERP’s maps.',
    stack: ['C#', 'ASP.NET MVC', 'Node.js', 'Express', 'SQL Server', 'Leaflet'],
    highlights: [],
  },
  {
    slug: 'parking-bay-gis',
    tier: 'more',
    title: 'Parking Bay GIS Mapping System',
    blurb:
      'A mapping system for parking zones and bays with PDF reporting, deployed on a Linux-style stack with Nginx and PM2.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'PDFKit', 'Nginx', 'PM2'],
    highlights: [],
  },
  {
    slug: 'notification-microservice',
    tier: 'more',
    title: 'Multi-Channel Notification Service',
    blurb:
      'A microservice sending SMS, email, and WhatsApp alerts for system and admin events.',
    stack: ['Node.js', 'Express', 'RabbitMQ', 'Knex', 'Nodemailer'],
    highlights: [],
  },
  {
    slug: 'reminders-pwa',
    tier: 'more',
    title: 'Enterprise Reminders PWA',
    blurb:
      'A Dockerized full-stack reminders app with recurring reminders and email/SMS delivery via Twilio.',
    stack: ['React', 'Vite', 'TypeScript', 'Ant Design', 'Node.js', 'MongoDB', 'RabbitMQ', 'Docker'],
    highlights: [],
  },
  {
    slug: 'parking-reminder-mobile',
    tier: 'more',
    title: 'Parking Reminder Mobile App',
    blurb:
      'A "where did I park" GPS reminder app built with clean architecture.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Geolocator'],
    highlights: [],
  },
]
