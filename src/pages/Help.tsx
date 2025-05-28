
import { Search, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and viewing your order history. Each order will show its current status and tracking information."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in their original condition and packaging. To initiate a return, please contact our customer service team."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Free shipping is available on orders over 4000 rupees."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the India. We're working on expanding to international shipping in the future."
    },
    {
      question: "How can I cancel my order?",
      answer: "Orders can be cancelled within 1 hour of placement. After that, the order may have already been processed. Please contact customer service as soon as possible."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal and Apple Pay,Cash on delivery, any UPI payments."
    },
    {
      question: "How do I update my account information?",
      answer: "You can update your account information by logging in and going to your profile page. There you can edit your personal details, shipping addresses, and payment methods."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund."
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+91 9348021930",
      hours: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "support@FOREVER.com",
      hours: "24/7"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on our website",
      hours: "Mon-Fri 9AM-6PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            How can we help you today?
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help..."
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="font-semibold text-blue-600 mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Additional Help */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Still need help?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
