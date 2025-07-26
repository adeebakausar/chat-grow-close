import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I set up the chatbot?",
      answer: "Most businesses are up and running within 15 minutes. Our drag-and-drop conversation builder makes it easy to create your first chatbot flow. Plus, we provide pre-built templates for common industries like coaching, real estate, and eCommerce."
    },
    {
      question: "Does it work with my existing CRM?",
      answer: "Yes! We integrate with over 100+ popular CRMs including HubSpot, Salesforce, Pipedrive, and Zapier. All leads and conversations are automatically synced to your existing workflow without any manual data entry."
    },
    {
      question: "Can the chatbot handle complex customer questions?",
      answer: "Our AI is trained on millions of conversations and can handle 80-90% of common customer inquiries. For complex issues, it seamlessly transfers to your human agents with full conversation context, ensuring no information is lost."
    },
    {
      question: "What platforms does it support?",
      answer: "The chatbot works on WhatsApp, Instagram Direct Messages, Facebook Messenger, and can be embedded on any website. You can manage all conversations from one unified dashboard."
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We use bank-level encryption and are fully compliant with GDPR, CCPA, and SOC 2 standards. Your customer data is never shared with third parties and is stored in secure, encrypted databases."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our AI chatbot platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;