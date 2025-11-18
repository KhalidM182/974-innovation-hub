const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary font-bold text-lg">
                974
              </div>
              <span className="text-xl font-bold">Innovation Hub</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transforming legacy into innovation, building a sustainable future for generations to come.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#vision" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Stay updated with the latest news and opportunities from the 974 Innovation Hub.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} 974 Innovation Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
