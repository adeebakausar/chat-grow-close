import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Database, 
  Users, 
  BarChart3, 
  MessageSquare,
  Zap,
  Shield
} from "lucide-react";
import featuresImage from "@/assets/chatbot-features.jpg";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Smart Replies",
      description: "AI-powered responses trained in your brand voice and industry knowledge."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Lead Capture",
      description: "Automatically collect contact info and qualify prospects based on your criteria."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly sync leads and conversations with your existing CRM system."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Human Handoff",
      description: "Smooth transition to live agents when complex issues require human touch."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics",
      description: "Track conversation metrics, conversion rates, and customer satisfaction."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Multi-Channel",
      description: "Deploy on WhatsApp, Instagram, Messenger, and your website simultaneously."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Easy Setup",
      description: "Get started in minutes with our drag-and-drop conversation builder."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with GDPR, CCPA, and SOC 2 standards."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features That
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate customer conversations and grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={featuresImage} 
              alt="Chatbot Features Dashboard" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold mb-8">
              Built for Growing Businesses
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI chatbot adapts to your business needs, whether you're a solo entrepreneur 
              or managing a team of 50+. Scale conversations without scaling headaches.
            </p>
            <div className="grid gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(4).map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;