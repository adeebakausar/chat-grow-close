import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Founder, FitLife Coaching",
      content: "This chatbot increased our lead capture by 300% in the first month. It's like having a sales team that never sleeps!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      title: "CEO, Digital Marketing Pro",
      content: "We went from losing 60% of after-hours leads to capturing 90% of them. The ROI was immediate and impressive.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      title: "Owner, Watson Real Estate",
      content: "The chatbot handles initial client screening perfectly. My team now focuses on closing deals instead of answering basic questions.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Business Owners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how entrepreneurs and growing businesses are using our AI chatbot to scale their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              2M+
            </div>
            <p className="text-muted-foreground">Conversations</p>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-muted-foreground">Customer Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;