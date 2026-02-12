import type { HeroCarouselImageDto } from '../types';

export const mockHeroImages: HeroCarouselImageDto[] = [
  {
    id: '1',
    title: 'Delivering Electricity to Every Home',
    description: 'Reliable distribution for 4.2 million customers',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200',
    order: 1
  },
  {
    id: '2',
    title: 'Smart Metering for Better Service',
    description: 'Advanced technology for accurate billing and efficiency',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    order: 2
  },
  {
    id: '3',
    title: 'Powering Communities',
    description: 'Infrastructure development for underserved regions',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    order: 3
  }
];
