import { useState } from 'react';
import { mockHeroImages } from '../mocks/heroImages';
import { mockNews } from '../mocks/news';
import { mockEvents } from '../mocks/events';
import { mockHighlights } from '../mocks/highlights';
import { mockQuickLinks } from '../mocks/quickLinks';
import Card from '../components/Card';
import { ChevronLeft, ChevronRight, Zap, Users, Gauge, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockHeroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockHeroImages.length) % mockHeroImages.length);
  };

  const getHighlightIcon = (iconName: string) => {
    const iconProps = { className: 'h-8 w-8' };
    switch (iconName) {
      case 'UserIcon':
        return <Users {...iconProps} className="h-8 w-8 text-accent" />;
      case 'Activity':
        return <Zap {...iconProps} className="h-8 w-8 text-accent" />;
      case 'ShieldCheckIcon':
        return <Gauge {...iconProps} className="h-8 w-8 text-accent" />;
      case 'Zap':
        return <TrendingUp {...iconProps} className="h-8 w-8 text-accent" />;
      default:
        return <Zap {...iconProps} className="h-8 w-8 text-accent" />;
    }
  };

  return (
    <div className="bg-base min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl mx-4 md:mx-8 my-8">
        <div className="relative w-full h-full">
          {mockHeroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute w-full h-full transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{image.title}</h2>
                <p className="text-gray-200 text-lg">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {mockHeroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-3xl font-bold text-secondary mb-8">Distribution Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockHighlights.map((highlight) => (
            <Card key={highlight.id} className="text-center border-l-4 border-l-accent">
              <div className="flex justify-center mb-4">
                {getHighlightIcon(highlight.icon)}
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">{highlight.title}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{highlight.value}</p>
              <p className="text-xs text-gray-500 mb-3">{highlight.description}</p>
              {highlight.trend && (
                <div className={`text-sm font-semibold ${highlight.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {highlight.trend === 'up' ? '↑' : '↓'} {highlight.trendValue}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Quick Links Grid */}
        <h2 className="text-3xl font-bold text-secondary mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {mockQuickLinks.map((link) => (
            <Card key={link.id} hover className="text-center">
              <div className="mb-3 inline-block p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-secondary mb-1">{link.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{link.description}</p>
              <a
                href={link.url}
                className="text-primary hover:text-accent text-sm font-medium transition-colors"
              >
                Access →
              </a>
            </Card>
          ))}
        </div>

        {/* News Section */}
        <h2 className="text-3xl font-bold text-secondary mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockNews.slice(0, 4).map((article) => (
            <Card key={article.id} hover className="flex flex-col overflow-hidden">
              {article.imageUrl && (
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
              )}
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                  {article.category}
                </span>
                <h3 className="font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
              </div>
              <div className="text-xs text-gray-500">
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                <p>By {article.author}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Events Section */}
        <h2 className="text-3xl font-bold text-secondary mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockEvents.slice(0, 4).map((event) => (
            <Card key={event.id} className="border-l-4 border-l-primary">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-secondary">{event.title}</h3>
                  <span className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📅 {new Date(event.eventDate).toLocaleDateString()}</p>
                {event.eventTime && <p>⏰ {event.eventTime}</p>}
                <p>📍 {event.location}</p>
              </div>
              <Link
                to="/calendar"
                className="mt-4 inline-block text-primary hover:text-accent font-medium text-sm transition-colors"
              >
                View Details →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
