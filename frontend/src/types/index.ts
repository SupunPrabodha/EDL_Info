export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  department: string;
  role: string;
}

export interface NewsDto {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
  publishedAt: string;
  author: string;
}

export interface EventDto {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  eventTime?: string;
  location: string;
  category: string;
}

export interface QuickLinkDto {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  category: string;
}

export interface HighlightDto {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: string;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export interface HeroCarouselImageDto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}
