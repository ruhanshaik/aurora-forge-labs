import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-dark py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" onClick={handleNavClick('/')} className="inline-block mb-4">
              <span className="font-syne font-extrabold text-2xl text-foreground">
                <span className="gradient-text">GMI</span> Tech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-outfit">
              GMI Tech is a leading software development company based in Ballari & Bangalore, specializing in web development, mobile apps, AI automation, and custom business solutions. We engineer digital experiences that drive growth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
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
                <a
                  key={link.to}
                  href={link.to}
                  onClick={handleNavClick(link.to)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/message/DF2K3DWRYML6G1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/gmitech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/gmi-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-outfit"
              >
                LinkedIn
              </a>
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
                <span>Ballari & Bangalore, Karnataka, India</span>
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
