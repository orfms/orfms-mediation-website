import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Users, Briefcase, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About Our Resolution
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
            Dedicated to helping families navigate divorce and separation with dignity,
            respect, and collaborative solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Our Resolution Family Mediation Services, we believe that families
              deserve a peaceful, cost-effective path through divorce and separation. Our
              mission is to provide professional mediation services that empower couples to
              make their own decisions, protect their children's well-being, and move
              forward with dignity.
            </p>
            <p className="text-lg text-gray-700">
              We understand that divorce is one of life's most challenging experiences. Our
              approach focuses on collaboration, communication, and finding common ground
              to create solutions that work for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Mediator Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Your Mediator
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 flex justify-center items-start">
                    <img
                      src="/20250107_100833.jpg"
                      alt="Mark Parham"
                      className="rounded-lg shadow-lg w-full max-w-xs"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Mark Parham
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      Certified Mediator, National Association of Certified Mediators
                    </p>

                    <p className="text-gray-700 mb-4">
                      Mark Parham is a Certified Mediator with the National Association of
                      Certified Mediators, helping families navigate divorce's complexities.
                      His professional background demonstrates a strong ability to facilitate
                      communication and resolve disputes.
                    </p>

                    <h4 className="font-bold text-gray-900 mb-2">Extensive Experience In:</h4>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Leading teams to define requirements and develop solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Conducting workshops to establish processes and resolve issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Negotiating settlements and managing cases</span>
                      </li>
                    </ul>

                    <p className="text-gray-700">
                      Mark's ability to effectively communicate, analyze complex situations,
                      and guide parties toward mutually beneficial agreements makes him a
                      valuable asset in family divorce mediation. Mark's goal is to provide a
                      supportive and structured environment for families to find collaborative
                      solutions, minimizing conflict and promoting positive outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach every situation with empathy and understanding.
              </p>
            </div>

            <div className="text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Professionalism</h3>
              <p className="text-gray-600">
                Certified expertise and ethical standards in every mediation.
              </p>
            </div>

            <div className="text-center">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together to find solutions that benefit everyone.
              </p>
            </div>

            <div className="text-center">
              <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Neutral, fair, and transparent throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn how mediation can help your family.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

