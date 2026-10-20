export interface Role {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Role[] = [
  {
    title: 'Software Developer',
    company: 'City Parking Pvt Ltd',
    location: 'Harare, Zimbabwe',
    period: 'Sep 2025 – Present',
    bullets: [
      'Develop an enterprise ERP platform spanning CRM and customer care, helpdesk, task and project management, workforce deployment, asset management, payments and POS, and reporting — full-stack, from UI to database.',
      'Designed and built a workflow and business-process engine (Node.js, SQL Server, RabbitMQ) powering ticketing, task management, job cards, approvals, and performance reviews across the company’s systems.',
      'Built a reporting engine with period comparisons and AI-generated report summaries using the Claude API.',
      'Implemented company-wide single sign-on across backend services and the ERP portal, with role-based access and two-factor checks for sensitive actions.',
      'Engineered an event-driven helpdesk microservice (RabbitMQ, real-time notifications, 4-tier escalation), cutting mean time to resolution by 25%.',
      'Led front-end development of the ERP portal (React/TypeScript, two-factor sign-in, bilingual interface, PDF reporting), reducing task completion time by 20%.',
      'Automated daily workforce deployment with 10 scheduled background jobs covering attendance, redeployment, and next-day scheduling.',
      'Write API documentation, integration guides, and runbooks for internal and external teams.',
    ],
  },
  {
    title: 'Graduate Trainee (Research & Development)',
    company: 'City Parking Pvt Ltd',
    location: 'Harare, Zimbabwe',
    period: 'Aug 2023 – Aug 2025',
    bullets: [
      'Designed a workforce performance-ranking system (ASP.NET MVC, Entity Framework) automating daily/monthly scoring for 200+ staff across 200+ locations, increasing deployment efficiency by 40%.',
      'Built an asset management system tracking 300+ devices with branded PDF reporting, reducing asset misplacement by 35%.',
      'Built a geofencing platform tracking 1,000+ daily transactions, improving anomaly detection by 30%.',
      'Built a CRM and customer query management system handling 500+ queries per month, improving resolution speed by 30% with real-time agent performance monitoring.',
      'Built a multi-channel notification microservice delivering SMS, email, and WhatsApp alerts for system events.',
      'Built a responsive workforce/asset management frontend with event logging for 500+ tasks daily, improving cross-department tracking by 25%.',
      'Designed RESTful APIs bridging front-end applications and backend services, documented with OpenAPI/Swagger.',
    ],
  },
  {
    title: 'IT Intern',
    company: 'MorniPac Consultants',
    location: 'Harare, Zimbabwe',
    period: 'Oct 2020 – Aug 2021',
    bullets: [
      'Collaborated with a senior developer to build and maintain 2 PHP/MySQL websites, improving interface efficiency by 25%.',
      'Performed digital data recovery for forensic analysis, restoring over 90% of lost or corrupted client data.',
      'Assisted with network troubleshooting and router/switch configuration, reducing downtime by 30% through proactive maintenance.',
      'Conducted security audits and implemented practices that strengthened data protection.',
      'Provided technical support to 20+ internal and external users with under 1-hour average response time.',
    ],
  },
]
