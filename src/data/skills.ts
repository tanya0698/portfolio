export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Ant Design',
      'Tailwind CSS', 'ApexCharts', 'Leaflet', 'PWA', 'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js', 'Express', 'C#', 'ASP.NET MVC', 'ASP.NET Core', 'Spring Boot',
      'NestJS', 'Java', 'Microservices', 'RESTful APIs',
    ],
  },
  {
    title: 'Data & Messaging',
    items: [
      'Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase',
      'Entity Framework', 'Prisma', 'RabbitMQ', 'Server-Sent Events', 'Hangfire',
    ],
  },
  {
    title: 'Security & Integration',
    items: [
      'Single Sign-On (OAuth2/OIDC)', 'JWT', 'Two-Factor Auth', 'Role-Based Access',
      'Webhooks', 'Claude API (AI)', 'Paynow', 'Stripe', 'PayPal',
    ],
  },
  {
    title: 'DevOps & Quality',
    items: [
      'Docker', 'Nginx', 'PM2', 'Git/GitHub', 'CI/CD', 'Prometheus',
      'SonarQube', 'Swagger/OpenAPI', 'Jest', 'Supertest', 'Vitest', 'BenchmarkDotNet',
    ],
  },
  {
    title: 'Mobile & Other',
    items: [
      'React Native (Expo)', 'Flutter', 'Firebase', 'Push Notifications',
      'i18n', 'Jira', 'Scrum/Kanban',
    ],
  },
]
