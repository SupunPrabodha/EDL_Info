import type { QuickLinkDto } from '../types';

export const mockQuickLinks: QuickLinkDto[] = [
  {
    id: '1',
    title: 'Distribution Status',
    description: 'Real-time network status monitoring',
    url: '/distribution',
    icon: 'Activity',
    category: 'Operations'
  },
  {
    id: '2',
    title: 'Loss Analytics',
    description: 'Technical and commercial loss tracking',
    url: '/losses',
    icon: 'ChartBarIcon',
    category: 'Analytics'
  },
  {
    id: '3',
    title: 'Customer Portal',
    description: 'Customer service and billing management',
    url: '/customers',
    icon: 'UserIcon',
    category: 'Customer Service'
  },
  {
    id: '4',
    title: 'Maintenance Scheduling',
    description: 'Plan and track network maintenance',
    url: '/maintenance',
    icon: 'Cog6ToothIcon',
    category: 'Operations'
  },
  {
    id: '5',
    title: 'Employee Portal',
    description: 'HR and personnel services',
    url: '/employee',
    icon: 'UserIcon',
    category: 'HR'
  },
  {
    id: '6',
    title: 'Training Center',
    description: 'Operator and staff training programs',
    url: '/training',
    icon: 'AcademicCapIcon',
    category: 'Learning'
  },
  {
    id: '7',
    title: 'Documentation',
    description: 'Technical manuals and guidelines',
    url: '/docs',
    icon: 'DocumentTextIcon',
    category: 'Resources'
  },
  {
    id: '8',
    title: 'Project Management',
    description: 'Infrastructure projects tracking',
    url: '/projects',
    icon: 'BuildingOfficeIcon',
    category: 'Projects'
  }
];
