import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-comfortaa font-extrabold text-2xl text-foreground">
                GMI <span className="gradient-text">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Design | Dev | Security
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering startups and small businesses with modern digital solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-comfortaa font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Useful Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-comfortaa font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Technologies</h4>
            <div className="flex flex-col gap-3">
              {['HTML, CSS, JavaScript', 'React & Node.js', 'Android & iOS', 'Cloud & Hosting'].map((t) => (
                <span key={t} className="text-sm text-gray-400">{t}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-comfortaa font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:gmitech@zohomail.in" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={14} /> gmitech@zohomail.in
              </a>
              <a href="tel:+919036717885" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={14} /> +91 90367 17885
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>PES College Road, Srinagar, Bangalore & Cowl Bazar, Ballari 583102</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GMI Tech — All Rights Reserved
          </p>
          <p className="text-sm text-gray-500">
            Designed & Developed by GMI Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
