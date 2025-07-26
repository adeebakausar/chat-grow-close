import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  MessageCircle, 
  User, 
  Bot,
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Mail
} from "lucide-react";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
  delay: number;
}

interface DemoStep {
  title: string;
  description: string;
  messages: Message[];
  outcome: string;
  icon: React.ReactNode;
}

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const demoSteps: DemoStep[] = [
    {
      title: "Lead Capture",
      description: "Visitor arrives on your website",
      icon: <User className="h-5 w-5" />,
      outcome: "Contact information captured",
      messages: [
        {
          id: 1,
          type: 'bot',
          content: "Hi there! 👋 I'm here to help you find the perfect solution for your business. What brings you here today?",
          timestamp: "2:30 PM",
          delay: 1000
        },
        {
          id: 2,
          type: 'user',
          content: "I'm looking for a way to automate customer support for my online store.",
          timestamp: "2:31 PM",
          delay: 2000
        },
        {
          id: 3,
          type: 'bot',
          content: "Great! I can definitely help with that. What's your name and what type of products do you sell?",
          timestamp: "2:31 PM",
          delay: 1500
        },
        {
          id: 4,
          type: 'user',
          content: "I'm Sarah, and I run a fitness equipment store.",
          timestamp: "2:32 PM",
          delay: 2000
        },
        {
          id: 5,
          type: 'bot',
          content: "Perfect, Sarah! Can I get your email so I can send you a personalized demo of how our chatbot handles fitness equipment inquiries?",
          timestamp: "2:32 PM",
          delay: 1500
        },
        {
          id: 6,
          type: 'user',
          content: "Sure! It's sarah@fitnesshub.com",
          timestamp: "2:33 PM",
          delay: 2000
        }
      ]
    },
    {
      title: "Lead Qualification",
      description: "AI qualifies the prospect automatically",
      icon: <CheckCircle className="h-5 w-5" />,
      outcome: "Hot lead identified and scored",
      messages: [
        {
          id: 1,
          type: 'bot',
          content: "Thanks Sarah! Just a few quick questions to personalize your demo. How many customer inquiries do you get per day?",
          timestamp: "2:33 PM",
          delay: 1000
        },
        {
          id: 2,
          type: 'user',
          content: "About 50-80 inquiries daily, mostly about product specs and shipping.",
          timestamp: "2:34 PM",
          delay: 2500
        },
        {
          id: 3,
          type: 'bot',
          content: "That's significant volume! What's your current monthly revenue range? This helps me show relevant ROI examples.",
          timestamp: "2:34 PM",
          delay: 1500
        },
        {
          id: 4,
          type: 'user',
          content: "We're doing about $50K per month currently.",
          timestamp: "2:35 PM",
          delay: 2000
        },
        {
          id: 5,
          type: 'bot',
          content: "Excellent! Based on your volume and revenue, you could save 15-20 hours per week and increase conversions by 30%. Would you like to see a live demo this week?",
          timestamp: "2:35 PM",
          delay: 2000
        }
      ]
    },
    {
      title: "Appointment Booking",
      description: "AI schedules demo and notifies sales team",
      icon: <Clock className="h-5 w-5" />,
      outcome: "Demo scheduled, sales team notified",
      messages: [
        {
          id: 1,
          type: 'user',
          content: "Yes, I'd love to see a demo! When are you available?",
          timestamp: "2:36 PM",
          delay: 1000
        },
        {
          id: 2,
          type: 'bot',
          content: "Great! I have these slots available this week:\n\n📅 Tuesday 2PM EST\n📅 Wednesday 10AM EST\n📅 Thursday 3PM EST\n\nWhich works best for you?",
          timestamp: "2:36 PM",
          delay: 1500
        },
        {
          id: 3,
          type: 'user',
          content: "Wednesday 10AM works perfectly!",
          timestamp: "2:37 PM",
          delay: 2000
        },
        {
          id: 4,
          type: 'bot',
          content: "Perfect! ✅ I've booked your demo for Wednesday at 10AM EST. You'll receive a calendar invite at sarah@fitnesshub.com with the Zoom link.\n\nOur specialist Mike will show you exactly how to automate your fitness equipment inquiries. See you Wednesday! 🎯",
          timestamp: "2:37 PM",
          delay: 2000
        }
      ]
    }
  ];

  const currentStepData = demoSteps[currentStep];
  const displayedMessages = currentStepData.messages.slice(0, currentMessageIndex + 1);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentMessageIndex < currentStepData.messages.length - 1) {
      const nextMessage = currentStepData.messages[currentMessageIndex + 1];
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1);
      }, nextMessage.delay);

      return () => clearTimeout(timer);
    } else {
      // Current step is complete
      if (currentStep < demoSteps.length - 1) {
        // Move to next step after a pause
        const timer = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
          setCurrentMessageIndex(-1); // Will be incremented to 0 in next effect
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        // Demo is complete
        setIsComplete(true);
        setIsPlaying(false);
      }
    }
  }, [isPlaying, currentMessageIndex, currentStep, currentStepData.messages.length]);

  const resetDemo = () => {
    setCurrentStep(0);
    setCurrentMessageIndex(0);
    setIsPlaying(false);
    setIsComplete(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Watch AI Chatbot in
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI captures leads, qualifies prospects, and books appointments - all automatically.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Demo Control Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Demo Controls</h3>
                  <div className="flex gap-2 mb-6">
                    <Button 
                      onClick={togglePlayPause}
                      variant={isPlaying ? "secondary" : "hero"}
                      size="sm"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button onClick={resetDemo} variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4" />
                      Reset
                    </Button>
                  </div>

                  {/* Progress Steps */}
                  <div className="space-y-4">
                    {demoSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                          index === currentStep
                            ? 'bg-primary/10 border border-primary/20'
                            : index < currentStep
                            ? 'bg-accent/10 border border-accent/20'
                            : 'bg-muted/50'
                        }`}
                      >
                        <div className={`p-1 rounded-full ${
                          index === currentStep
                            ? 'bg-primary text-white'
                            : index < currentStep
                            ? 'bg-accent text-white'
                            : 'bg-muted'
                        }`}>
                          {step.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{step.title}</h4>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                        {index < currentStep && (
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Step Outcome */}
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Expected Outcome</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {currentStepData.outcome}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <ArrowRight className="h-4 w-4" />
                    <span>Automated process</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b bg-gradient-primary text-white rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold">AI Sales Assistant</h4>
                      <p className="text-xs opacity-80">Online • Responds instantly</p>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-white to-gray-50">
                  {displayedMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-500`}
                    >
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-primary text-white ml-4'
                              : 'bg-white border shadow-sm mr-4'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                        </div>
                        <p className={`text-xs text-muted-foreground mt-1 ${
                          message.type === 'user' ? 'text-right mr-4' : 'ml-4'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                      <div className={`flex-shrink-0 ${message.type === 'user' ? 'order-1' : 'order-2'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-primary text-white' 
                            : 'bg-gradient-primary text-white'
                        }`}>
                          {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isPlaying && currentMessageIndex < currentStepData.messages.length - 1 && (
                    <div className="flex justify-start">
                      <div className="bg-white border shadow-sm rounded-2xl p-3 mr-4">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-white rounded-b-lg">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span>AI is handling this conversation automatically...</span>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              {isComplete && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <Mail className="h-6 w-6 text-accent mx-auto mb-2" />
                      <div className="text-lg font-bold">1 Lead</div>
                      <div className="text-xs text-muted-foreground">Captured</div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="h-6 w-6 text-accent mx-auto mb-2" />
                      <div className="text-lg font-bold">Qualified</div>
                      <div className="text-xs text-muted-foreground">Hot Lead</div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <Phone className="h-6 w-6 text-accent mx-auto mb-2" />
                      <div className="text-lg font-bold">Booked</div>
                      <div className="text-xs text-muted-foreground">Demo Call</div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;