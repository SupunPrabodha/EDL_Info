import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Menu, X, Zap, User, LogOut, Bell, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { user, logout } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg shadow-warm group-hover:shadow-glow transition-all">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary">EDL</h1>
              <p className="text-xs text-gray-500">Electricity Distribution Lanka</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-secondary hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/news" className="text-secondary hover:text-primary transition-colors font-medium">
              News
            </Link>
            <Link to="/calendar" className="text-secondary hover:text-primary transition-colors font-medium">
              Calendar
            </Link>
            <Link to="/distribution" className="text-secondary hover:text-primary transition-colors font-medium">
              Distribution
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors hidden md:block">
              <Search className="h-5 w-5 text-secondary" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors relative hidden md:block">
              <Bell className="h-5 w-5 text-secondary" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            
            {user && (
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-secondary">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/news"
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                to="/calendar"
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calendar
              </Link>
              <Link
                to="/distribution"
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Distribution
              </Link>
              {user && (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors text-left flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
