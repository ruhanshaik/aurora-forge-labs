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
              <span className="font-syne font-extrabold text-2xl text-foreground">
                <span className="gradient-text">GMI</span> Tech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-outfit">
              Design | Dev | Security
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-outfit">
              Software Engineered With Precision. Designed To Perform. Built To Scale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Useful Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/careers', label: 'Careers' },
                { to: '/blogs', label: 'Blogs' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Technologies</h4>
            <div className="flex flex-col gap-3">
              {['HTML, CSS, JavaScript', 'React & Node.js', 'Android & iOS', 'Cloud & Hosting', 'AI & Automation'].map((t) => (
                <span key={t} className="text-sm text-muted-foreground font-outfit">{t}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:gmitech@zohomail.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit">
                <Mail size={14} /> gmitech@zohomail.in
              </a>
              <a href="tel:+919036717885" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit">
                <Phone size={14} /> +91 90367 17885
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground font-outfit">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>PES College Road, Srinagar, Bangalore & Cowl Bazar, Ballari 583102</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-outfit">
            © {new Date().getFullYear()} GMI Tech — All Rights Reserved
          </p>
          <p className="text-sm text-muted-foreground font-outfit">
            Designed & Developed by GMI Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
