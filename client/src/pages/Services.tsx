import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Users, FileText, Home, DollarSign, Scale } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Mediation Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
            Comprehensive mediation services designed to help families navigate divorce
            and separation with dignity and respect.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Divorce Mediation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Navigate the divorce process with professional guidance that reduces
                  conflict, saves time and money, and protects your family's interests.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uncontested divorce mediation</li>
                  <li>• Separation agreements</li>
                  <li>• Post-divorce modifications</li>
                  <li>• Collaborative divorce support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Child Custody & Parenting Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Create comprehensive parenting plans that prioritize your children's
                  well-being and establish clear custody arrangements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Physical and legal custody arrangements</li>
                  <li>• Visitation schedules</li>
                  <li>• Holiday and vacation planning</li>
                  <li>• Child support calculations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Property & Asset Division</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Fair and equitable division of marital property, assets, and debts
                  through collaborative mediation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real estate division</li>
                  <li>• Retirement accounts and investments</li>
                  <li>• Business valuation and division</li>
                  <li>• Debt allocation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Spousal Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Negotiate fair spousal support arrangements that consider both parties'
                  financial situations and future needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Temporary support during separation</li>
                  <li>• Long-term alimony agreements</li>
                  <li>• Modification of existing orders</li>
                  <li>• Tax implications guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific needs and how we can help.
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

