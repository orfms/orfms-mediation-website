import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Clock, Scale, Shield } from "lucide-react";

export default function Benefits() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Mediation?
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-8">
                <DollarSign className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Cost-Effective</h3>
                <p className="text-gray-700">Mediation costs significantly less than traditional litigation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8">
                <Clock className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Faster Resolution</h3>
                <p className="text-gray-700">Resolve your case in weeks or months instead of years.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8">
                <Scale className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Greater Control</h3>
                <p className="text-gray-700">You make the decisions, not a judge.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8">
                <Shield className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Reduced Conflict</h3>
                <p className="text-gray-700">Collaborative process that preserves relationships.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

