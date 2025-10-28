import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Users, FileText, CheckCircle, Scale, Clock, DollarSign, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Resolve Family Conflicts with Dignity and Respect
              </h1>
              <p className="text-2xl text-blue-600 font-semibold mb-6">
                Finding common ground, one couple at a time.
              </p>
              <p className="text-xl text-gray-700 mb-8">
                Professional divorce and family mediation services in California,
                helping families navigate separation peacefully and cost-effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Book Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/Main Page Graphic.png"
                alt="Mediation Process - From Conflict to Resolution"
                className="rounded-lg shadow-2xl w-full max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Mediation Services
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide comprehensive mediation services to help families resolve conflicts
            and move forward with clarity and confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Divorce Mediation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Navigate divorce proceedings with professional guidance, reducing conflict
                  and costs while protecting your family's interests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Child Custody & Parenting Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create comprehensive parenting plans that prioritize your children's
                  well-being and establish clear custody arrangements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Property & Asset Division</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fair and equitable division of marital property, assets, and debts
                  through collaborative mediation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Mediation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
              <p className="text-gray-600">
                Mediation costs significantly less than traditional litigation, saving you
                thousands in legal fees.
              </p>
            </div>

            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Faster Resolution</h3>
              <p className="text-gray-600">
                Resolve your case in weeks or months instead of years spent in court
                proceedings.
              </p>
            </div>

            <div className="text-center">
              <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Greater Control</h3>
              <p className="text-gray-600">
                You and your spouse make the decisions together, rather than leaving them
                to a judge.
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reduced Conflict</h3>
              <p className="text-gray-600">
                Collaborative process that reduces hostility and preserves relationships,
                especially important for co-parenting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-blue-600">
              <CardHeader className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">$3,000</div>
                <CardTitle>For up to 5 mediation sessions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Additional sessions: $250/hour
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Schedule Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "Mark helped us navigate a difficult divorce with compassion and
                  professionalism. We were able to reach agreements that work for both of
                  us and our children."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "The mediation process saved us time and money compared to going to
                  court. Mark was neutral and helped us communicate effectively."
                </p>
                <p className="font-semibold">- John D.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "I was skeptical at first, but mediation turned out to be the best
                  decision. We created a parenting plan that truly works for our family."
                </p>
                <p className="font-semibold">- Jennifer L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Mediation Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule an initial consultation ($150) to learn how mediation can help your
            family move forward with dignity and respect.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

