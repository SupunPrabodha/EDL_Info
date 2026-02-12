import type { NewsDto } from '../types';

export const mockNews: NewsDto[] = [
  {
    id: '1',
    title: 'Smart Metering Program Expansion Announced',
    excerpt: 'EDL to deploy 500,000 smart meters across Western Province this year.',
    content: 'Full article content here...',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    publishedAt: '2026-02-05',
    author: 'Technology Division'
  },
  {
    id: '2',
    title: 'Grid Enhancement Project Completes Phase Two',
    excerpt: 'Distribution network upgrades improve service reliability in underserved areas.',
    content: 'Full article content here...',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    publishedAt: '2026-02-04',
    author: 'Infrastructure Team'
  },
  {
    id: '3',
    title: 'Customer Service Excellence Awards 2025',
    excerpt: 'Outstanding service centers recognized for customer satisfaction.',
    content: 'Full article content here...',
    category: 'Awards',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    publishedAt: '2026-02-03',
    author: 'Customer Relations'
  },
  {
    id: '4',
    title: 'Loss Reduction Initiative Shows 12% Improvement',
    excerpt: 'Technical and commercial loss reduction strategies prove successful.',
    content: 'Full article content here...',
    category: 'Operations',
    imageUrl: 'https://images.unsplash.com/photo-1642536473529-a6a37e69d1ff?w=800',
    publishedAt: '2026-02-02',
    author: 'Operations Division'
  }
];
