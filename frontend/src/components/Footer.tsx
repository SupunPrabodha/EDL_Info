import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EDL</h3>
                <p className="text-sm text-gray-300">Electricity Distribution Lanka (Pvt) Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Dedicated to providing reliable electricity distribution to 4.2 million customers across Sri Lanka.
              Committed to service excellence and customer satisfaction.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Colombo 02, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+94 11 267 8901</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@edl.lk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-accent transition-colors">News</Link>
              </li>
              <li>
                <Link to="/calendar" className="hover:text-accent transition-colors">Calendar</Link>
              </li>
              <li>
                <Link to="/distribution" className="hover:text-accent transition-colors">Distribution</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Safety Protocols</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Training Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Customer Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Technical Docs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Electricity Distribution Lanka (Pvt) Ltd. All rights reserved.</p>
          <p className="mt-2">Internal Portal - For Authorized Personnel Only</p>
        </div>
      </div>
    </footer>
  );
}
