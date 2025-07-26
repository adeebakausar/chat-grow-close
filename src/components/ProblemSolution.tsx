import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Clock, Users, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-6 w-6 text-destructive" />,
      title: "Missing leads after hours",
      description: "Customers contact you when you're offline, and they find someone else by morning."
    },
    {
      icon: <Users className="h-6 w-6 text-destructive" />,
      title: "Overwhelmed support team",
      description: "Your team spends hours answering the same questions instead of closing deals."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-destructive" />,
      title: "Low conversion rates",
      description: "Website visitors leave without engaging, and leads go cold without follow-up."
    }
  ];

  const solutions = [
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "24/7 instant response",
      description: "Never miss another lead. Your AI chatbot captures and qualifies prospects around the clock."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Automated qualification",
      description: "Smart conversations that identify hot leads and route them to your sales team instantly."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      title: "Higher conversions",
      description: "Personalized interactions that guide visitors to purchase and book appointments."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stop Losing Customers to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Poor Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every minute without an AI chatbot, you're losing potential customers to competitors who respond faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center lg:text-left mb-8">
              The Problems You Face Daily
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {problem.icon}
                      <div>
                        <h4 className="font-semibold mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center lg:text-left mb-8">
              How Our AI Chatbot Solves This
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-accent/20 bg-accent/5 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {solution.icon}
                      <div>
                        <h4 className="font-semibold mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;