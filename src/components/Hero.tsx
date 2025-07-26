import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-chatbot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Chatbot
                </span>
                <br />
                <span className="text-foreground">
                  That Never Sleeps
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Automate conversations, qualify leads, and close sales 24/7. 
                Integrate with WhatsApp, Instagram, Messenger, and your website.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Try Free for 14 Days
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 space-y-4">
              <p className="text-sm text-muted-foreground">Trusted by 10,000+ businesses</p>
              <div className="flex items-center gap-8 justify-center lg:justify-start opacity-60">
                <div className="px-4 py-2 bg-white/10 rounded-lg text-white font-semibold">WhatsApp</div>
                <div className="px-4 py-2 bg-white/10 rounded-lg text-white font-semibold">Instagram</div>
                <div className="px-4 py-2 bg-white/10 rounded-lg text-white font-semibold">Messenger</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Chatbot Dashboard" 
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl transform scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;