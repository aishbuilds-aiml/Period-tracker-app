import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  learn: [
    { href: "/about", label: "About Menstruation" },
    { href: "/hygiene", label: "Menstrual Hygiene" },
    { href: "/myths", label: "Myths vs Facts" },
    { href: "/products", label: "Menstrual Products" },
  ],
  support: [
    { href: "/health", label: "Health & Safety" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    { href: "/tracker", label: "Period Tracker" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold">
                Period<span className="text-primary">Care</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering young women with knowledge about menstrual health. 
              Breaking taboos, spreading awareness, and promoting hygiene.
            </p>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Learn
            </h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Get Help
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Women Helpline</p>
                  <p>181 (Toll Free)</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Email Support</p>
                  <p>help@periodcare.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 PeriodCare. Created for CEP Project - Spreading Menstrual Health Awareness.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">
                Made with <Heart className="h-3 w-3 inline text-primary" /> for young women everywhere
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
