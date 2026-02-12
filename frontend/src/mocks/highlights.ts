import type { HighlightDto } from '../types';

export const mockHighlights: HighlightDto[] = [
  {
    id: '1',
    title: 'Customer Base',
    description: 'Total connected customers',
    value: '4.2M',
    icon: 'UserIcon',
    trend: 'up',
    trendValue: '+125K'
  },
  {
    id: '2',
    title: 'Distribution Network',
    description: 'Total circuit kilometers',
    value: '156,234 km',
    icon: 'Activity',
    trend: 'up',
    trendValue: '+2,341 km'
  },
  {
    id: '3',
    title: 'System Reliability',
    description: 'Service availability',
    value: '99.4%',
    icon: 'ShieldCheckIcon',
    trend: 'up',
    trendValue: '+0.6%'
  },
  {
    id: '4',
    title: 'Energy Distributed',
    description: 'Monthly distribution',
    value: '2,456 GWh',
    icon: 'Zap',
    trend: 'up',
    trendValue: '+3.2%'
  }
];
