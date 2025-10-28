import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Process() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            The Mediation Process
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            A clear, structured approach to resolving family conflicts with
            dignity and respect. Here's what to expect when you choose mediation.
          </p>
        </div>
      </section>

      {/* Conflict Resolution Graphic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mediation: A Collaborative Approach
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Unlike traditional litigation where parties compete to win, mediation
              focuses on collaboration to develop solutions that work for everyone.
              Through compromise and cooperation, both parties can achieve positive
              outcomes.
            </p>
            <img
              src="/collaborative-approach.png"
              alt="Mediation: A Collaborative Approach"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 5 Steps to Successful Conflict Resolution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              5 Steps to Successful Conflict Resolution
            </h2>
            <div className="flex justify-center mb-12">
              <img
                src="/conflict-resolution-steps.png"
                alt="5 Steps to Successful Conflict Resolution"
                className="max-w-2xl w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Stop and Recognize Your Own Emotions
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Take time to understand your feelings before reacting. Self-awareness
                    is the first step to productive dialogue.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Watch Your Words
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Avoid put-downs, insults, or blaming. Communicate respectfully
                    to keep discussions constructive and focused on solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Listen to the Perspectives of Other People
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Active listening helps you understand the other party's needs
                    and concerns, creating a foundation for mutual agreement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Identify the Problem
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Clearly define the issues at hand. Understanding the root
                    problem helps both parties work toward effective solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Agree Upon a Solution
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Work together to find mutually beneficial agreements that both
                    parties can support and implement moving forward.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Mediation Journey: Step by Step
            </h2>
            <p className="text-lg text-gray-700">
              Our mediation process helps couples move from conflict to resolution
              through structured, professional guidance. The goal is to reach
              agreements that work for both parties and any children involved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <Card className="flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The initial meeting ($150) enables couples to make an informed
                    decision whether the process is consistent with their expectations,
                    whether divorce mediation is the right choice for them, and whether
                    they feel comfortable with the particular mediator. After the initial
                    meeting, if you decide to participate in the mediation process, an
                    appointment for your first mediation session will be set.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>60-minute consultation with Mark Parham</li>
                    <li>Discuss your situation and goals</li>
                    <li>Learn about the mediation process</li>
                    <li>Assess if mediation is right for you</li>
                    <li>Determine comfort level with the mediator</li>
                    <li>Schedule first mediation session if proceeding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <Card className="flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Information Gathering
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Both parties provide necessary information and documentation
                    about finances, assets, children, and other relevant matters.
                    Full disclosure is essential for fair mediation.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Financial statements and tax returns</li>
                    <li>Property and asset documentation</li>
                    <li>Debt and liability information</li>
                    <li>Income and employment details</li>
                    <li>Children's needs and schedules</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <Card className="flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Negotiation Sessions
                  </h3>
                  <p className="text-gray-600 mb-4">
                    At the first mediation session, the parties and mediator begin
                    organizing all relevant information so that both parties and the
                    mediator are fully informed before decision-making begins. Well
                    prepared parties usually complete that informational process in one
                    or two sessions. If there are any urgent or immediate problems,
                    including those involving finances, living arrangements or children,
                    temporary agreements may be entered into for the duration of the
                    mediation process.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Through structured sessions, we work through each issue
                    systematically. The mediator facilitates productive discussions in a
                    neutral setting where all participants engage in courteous, respectful
                    and focused dialogue. No decisions are made by an outsider—the
                    neutral mediator assists the parties in finding mutually acceptable
                    solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Child custody and parenting plans</li>
                    <li>Child and spousal support</li>
                    <li>Property and asset division</li>
                    <li>Debt allocation</li>
                    <li>Other relevant issues</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <Card className="flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Agreement Drafting
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Once agreements are reached, the mediator will draft a comprehensive
                    Marital Settlement Agreement (MSA) that documents all decisions and
                    forward it to the parties for their review. Parties are free to have
                    their independent attorneys review the agreement and provide any
                    additional advice. The parties then return to mediation to review any
                    further issues and finalize the agreement.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Comprehensive written separation agreement</li>
                    <li>Clear terms and conditions for all issues</li>
                    <li>Detailed parenting plan (if applicable)</li>
                    <li>Financial arrangements and property division</li>
                    <li>Review period for both parties</li>
                    <li>Option for independent attorney review</li>
                    <li>Final mediation session to address any questions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
              </div>
              <Card className="flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Finalization & Court Filing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Once your mediation is complete and your agreement is finalized,
                    filing with the court is a separate process. You'll need to contract
                    with a paralegal service to prepare and file the necessary court documents.
                    This typically costs $300-$500 and includes preparing all required forms
                    and filing them with the court. Once filed and approved by a judge,
                    your divorce is finalized according to your mediated agreement.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Guidance on court filing procedures</li>
                    <li>Paralegal services required for filing ($300-$500)</li>
                    <li>Required forms and documentation preparation</li>
                    <li>Court filing and processing</li>
                    <li>Timeline expectations (varies by county)</li>
                    <li>Post-mediation support available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What to Expect During Mediation
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Session Length
                </h3>
                <p className="text-gray-600">
                  Most mediation sessions last 2-3 hours. This allows enough time
                  for productive discussion without becoming overwhelming.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Number of Sessions
                </h3>
                <p className="text-gray-600">
                  The average couple has between three and six meetings with their
                  mediator in order to come to a complete agreement about all issues.
                  Our package includes up to 5 sessions for $3,000, then $250/hour.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Timeline
                </h3>
                <p className="text-gray-600">
                  The entire mediation process typically takes 2-4 months from
                  start to finish, much faster than traditional litigation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Confidentiality
                </h3>
                <p className="text-gray-600">
                  All mediation sessions are completely confidential. What's
                  discussed in mediation stays in mediation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Neutral Environment
                </h3>
                <p className="text-gray-600">
                  Sessions take place in a comfortable, neutral setting. The
                  mediator ensures both parties have equal opportunity to be
                  heard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Legal Counsel
                </h3>
                <p className="text-gray-600">
                  You may consult with your own attorney at any time during the
                  process. We encourage reviewing agreements with legal counsel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do we both need to attend every session?
                </h3>
                <p className="text-gray-600">
                  Both parties should attend the initial consultation and the final
                  session to review and sign the agreement. However, individual sessions
                  may be held during the mediation process when appropriate. The mediator
                  will work with both parties to determine the best approach for your
                  situation, ensuring both spouses have equal opportunity to participate
                  in discussions and decision-making.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What if we can't agree on everything?
                </h3>
                <p className="text-gray-600">
                  The mediator helps facilitate productive discussions and explore
                  options. If you reach an impasse on certain issues, you can
                  still mediate the issues you do agree on and address remaining
                  issues through other means.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is the mediator our attorney?
                </h3>
                <p className="text-gray-600">
                  No, the mediator is a neutral third party who facilitates
                  discussions. The mediator does not provide legal advice to
                  either party. You may consult your own attorney at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does the process take?
                </h3>
                <p className="text-gray-600">
                  Most mediations are completed in 2-4 months. The exact timeline
                  depends on the complexity of your case and how quickly you can
                  schedule sessions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What happens after we reach an agreement?
                </h3>
                <p className="text-gray-600">
                  The mediator drafts a Marital Settlement Agreement documenting
                  all decisions. After review, you file this agreement with the
                  court along with other required divorce paperwork.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can we modify our agreement later?
                </h3>
                <p className="text-gray-600">
                  Yes, if circumstances change significantly, you can return to
                  mediation to modify custody, support, or other arrangements.
                  This is much easier and less expensive than going back to court.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin the Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your initial consultation ($150) today to get started with mediation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
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

