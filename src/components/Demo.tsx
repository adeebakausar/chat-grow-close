import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Monitor, Smartphone, MessageCircle } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See It In
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our AI chatbot transforms customer interactions and drives more sales for businesses like yours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video placeholder */}
          <Card className="border-0 shadow-card overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="aspect-video bg-gradient-hero flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="text-center z-10">
                  <Button variant="hero" size="lg" className="mb-4">
                    <Play className="h-6 w-6 mr-2" />
                    Play Demo Video
                  </Button>
                  <p className="text-white/80">3 minutes • See real results</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <MessageCircle className="h-4 w-4 text-white" />
                  <span className="text-white text-sm">Live Chat Demo</span>
                </div>
                
                <div className="absolute bottom-8 right-8 flex gap-2">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <Monitor className="h-4 w-4 text-white" />
                  </div>
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                3x
              </div>
              <p className="text-muted-foreground">Faster Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                85%
              </div>
              <p className="text-muted-foreground">Lead Qualification Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                40%
              </div>
              <p className="text-muted-foreground">Increase in Conversions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;