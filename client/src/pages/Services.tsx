import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Users, FileText, DollarSign, Home, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Divorce Mediation",
    description:
      "Navigate the divorce process with professional guidance, reducing conflict and costs while protecting your family's interests. We help you reach fair agreements on all aspects of your separation.",
  },
  {
    icon: Users,
    title: "Child Custody & Parenting Plans",
    description:
      "Create comprehensive parenting plans that prioritize your children's well-being. We help establish clear custody arrangements, visitation schedules, and decision-making frameworks.",
  },
  {
    icon: FileText,
    title: "Property & Asset Division",
    description:
      "Fair and equitable division of marital property, assets, and debts through collaborative mediation. We help you inventory, value, and divide assets fairly.",
  },
  {
    icon: DollarSign,
    title: "Spousal Support",
    description:
      "Negotiate fair spousal support arrangements that consider both parties' financial needs and capabilities. We help you reach sustainable agreements.",
  },
  {
    icon: Home,
    title: "Post-Divorce Modifications",
    description:
      "Life changes after divorce. We help you modify existing agreements for custody, support, or other arrangements when circumstances change.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-center leading-tight">
            Our Mediation Services
          </h1>
          <p className="text-base sm:text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Comprehensive family mediation services designed to help you navigate divorce
            and separation with dignity, respect, and collaborative solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="h-full">
                  <CardHeader>
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-3 md:mb-4" />
                    <CardTitle className="font-semibold text-lg md:text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm md:text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            Transparent Pricing
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center pb-2">
                <h3 className="text-xl font-bold text-gray-900">Mediation Package</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">$3,000</span>
                </div>
                <p className="text-gray-500 mt-1">Includes up to 5 mediation sessions</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional mediation services",
                    "Comprehensive session preparation",
                    "Document drafting and review",
                    "Neutral, impartial facilitation",
                    "Confidential process",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Additional Sessions</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    <span>$250</span>
                    <span className="text-base font-normal text-gray-500">/hour</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    If your case requires more than 5 sessions, additional time is billed at $250 per hour.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-gray-900 mb-1">Why This Saves You Money:</p>
                  <p className="text-gray-700 text-sm">
                    Traditional divorce litigation can cost $15,000–$30,000+ per person. Mediation
                    typically costs 70–80% less while achieving better outcomes.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            What's Included in Mediation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Initial Consultation",
                description:
                  "Initial consultation ($150) to discuss your situation, answer questions, and determine if mediation is right for you. If you decide to proceed with mediation, the $150 consultation fee will be credited toward your final mediation package price.",
              },
              {
                title: "Structured Mediation Sessions",
                description:
                  "Professional facilitation of discussions covering all aspects of your divorce including custody, property division, support, and more.",
              },
              {
                title: "Document Preparation",
                description:
                  "Drafting of agreements and necessary documentation based on decisions reached during mediation sessions.",
              },
              {
                title: "Follow-Up Support",
                description:
                  "Guidance on next steps and answers to questions that arise after mediation concludes. Court filing requires contracting with a paralegal service (typically $300–$500) to prepare and file documents.",
              },
            ].map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-base sm:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Schedule an initial consultation ($150) to discuss your situation and learn how
            mediation can help your family.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
