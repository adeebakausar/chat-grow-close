import { MessageSquare, Shield, Clock, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4">
        {/* Trust indicators */}
        <div className="py-12 border-b border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground">GDPR & SOC 2 Compliant</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Always here when you need us</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">99.9% Uptime</h4>
              <p className="text-sm text-muted-foreground">Reliable & always available</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Easy Integration</h4>
              <p className="text-sm text-muted-foreground">Setup in minutes, not hours</p>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">ChatBot AI</span>
            </div>
            <p className="text-muted-foreground">
              The AI chatbot that helps businesses automate conversations, 
              capture leads, and close more sales.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                tw
              </div>
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                fb
              </div>
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                li
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 ChatBot AI. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;