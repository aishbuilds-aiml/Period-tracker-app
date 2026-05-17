import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Menstruation" },
  { href: "/hygiene", label: "Hygiene" },
  { href: "/myths", label: "Myths vs Facts" },
  { href: "/products", label: "Products" },
  { href: "/health", label: "Health & Safety" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Heart className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold text-foreground hidden sm:inline">
            Period<span className="text-primary">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:block">
            {isSearchOpen ? (
              <div className="flex items-center gap-2 animate-fade-in">
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 h-9"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Period Tracker CTA */}
          <Link to="/tracker" className="hidden sm:block">
            <Button size="sm" className="rounded-full">
              Track Your Cycle
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2 p-4 border-b border-border">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-display text-lg font-bold">
                    Period<span className="text-primary">Care</span>
                  </span>
                </div>

                {/* Mobile Search */}
                <div className="p-4 border-b border-border">
                  <Input
                    type="search"
                    placeholder="Search topics..."
                    className="w-full"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive(link.href)
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-border">
                  <Link to="/tracker" className="block">
                    <Button className="w-full rounded-full">
                      Track Your Cycle
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
