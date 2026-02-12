import type { EventDto } from '../types';

export const mockEvents: EventDto[] = [
  {
    id: '1',
    title: 'Distribution Network Safety Workshop',
    description: 'Advanced safety protocols for field operations and maintenance.',
    eventDate: '2026-02-18',
    eventTime: '09:00 AM',
    location: 'EDL Regional Offices',
    category: 'Training'
  },
  {
    id: '2',
    title: 'Customer Service Excellence Program',
    description: 'Training program for customer-facing staff.',
    eventDate: '2026-02-21',
    eventTime: '10:00 AM',
    location: 'EDL Head Office',
    category: 'Training'
  },
  {
    id: '3',
    title: 'Loss Reduction Initiative Review',
    description: 'Quarterly review of technical and commercial loss reduction.',
    eventDate: '2026-02-24',
    eventTime: '02:00 PM',
    location: 'Regional Control Centers',
    category: 'Meeting'
  },
  {
    id: '4',
    title: 'Field Staff Wellness Program',
    description: 'Health and wellness activities for all distribution workers.',
    eventDate: '2026-02-28',
    eventTime: '08:00 AM',
    location: 'All EDL Offices',
    category: 'Wellness'
  },
  {
    id: '5',
    title: 'Smart Metering Deployment Training',
    description: 'Technical training for smart meter installation teams.',
    eventDate: '2026-03-04',
    eventTime: '09:30 AM',
    location: 'Training Center',
    category: 'Training'
  }
];
