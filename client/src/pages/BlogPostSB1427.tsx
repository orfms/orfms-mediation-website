import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BlogPostSB1427() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide">
            Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            California's SB 1427: A New Era of Collaborative Divorce
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>June 17, 2026</span>
            <span>·</span>
            <span>By Our Resolution Family Mediation Services</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For decades, the legal process of divorce in California—formally known as dissolution of
            marriage—has been inherently adversarial. Even when couples agreed on every aspect of
            their separation, the system required one spouse to file a petition against the other,
            effectively casting them as opposing parties in a lawsuit. This adversarial structure
            often escalated conflict, increased legal costs, and prolonged proceedings. However, a
            transformative shift occurred on <strong>January 1, 2026</strong>, with the
            implementation of Senate Bill (SB) 1427. This legislation introduces a joint petition
            process, allowing couples to navigate their divorce collaboratively from the outset.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Adversarial Legacy and the Need for Reform
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prior to SB 1427, the primary non-adversarial option for divorcing couples in California
            was the "summary dissolution" process. While beneficial, summary dissolution was
            restricted by stringent eligibility criteria: couples must have been married for less
            than five years, have no minor children together, own limited community property (under
            $50,000, excluding vehicles), and carry minimal debt. The vast majority of divorcing
            couples—especially those with children, significant assets, or longer marriages—failed
            to meet these requirements and were forced into the traditional, adversarial litigation
            track.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the traditional process, one spouse (the Petitioner) files a petition and formally
            serves the other spouse (the Respondent) with a summons. This procedural requirement
            often set a combative tone, even in amicable separations. As Devin Tucker, program
            director of the Mediation Center of Los Angeles, noted:{" "}
            <em>
              "When things are adversarial, it creates a lot of contention... What ends up happening
              is there's a lot of delays."
            </em>{" "}
            Recognizing the emotional and financial toll of this system, California lawmakers enacted
            SB 1427 to provide a more dignified and efficient alternative.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Understanding the Joint Petition Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SB 1427 fundamentally alters the entry point into the family court system for
            cooperative couples. It establishes a pathway for spouses to file a single, joint
            petition for dissolution of marriage or legal separation. This new framework removes the
            restrictive eligibility requirements of summary dissolution, making collaborative divorce
            accessible to couples regardless of the length of their marriage, the value of their
            assets, or whether they have minor children.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
            Key Features of the Joint Petition
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 space-y-4">
            {[
              {
                label: "Co-Petitioners",
                desc: "Both spouses are listed as equals (Petitioner 1 and Petitioner 2), eliminating the adversarial Petitioner/Respondent dynamic.",
              },
              {
                label: "Immediate Effectiveness",
                desc: "The filing of the joint petition serves as notice to both parties, eliminating the need for formal service of process.",
              },
              {
                label: "Automatic Restraining Orders",
                desc: "Upon filing, standard ATROs immediately take effect, preventing either party from selling property, moving children out of state, or making significant changes to finances or insurance.",
              },
              {
                label: "Cost Efficiency",
                desc: "Couples pay a single filing fee (typically $435), significantly reducing initial court costs compared to filing a petition and a separate response.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">{item.label}:</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
            Requirements and Limitations
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the joint petition streamlines the initiation of a divorce, it does not bypass the
            essential legal requirements for finalizing one. Couples must still adhere to the
            following:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Requirement</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Full Agreement", "Both spouses must agree to divorce and intend to resolve all issues — property, debts, support, child custody, and child support — collaboratively."],
                  ["Financial Disclosures", "Both parties must complete and exchange preliminary and final declarations of disclosure detailing all assets, debts, income, and expenses."],
                  ["Waiting Period", "California's mandatory 6-month waiting period still applies. A divorce cannot become final until at least 6 months after the joint petition is filed (Cal. Fam. Code § 2339)."],
                  ["Proposed Judgment", "Couples must submit a proposed judgment encompassing their comprehensive agreement on all issues for court approval."],
                ].map(([req, desc], i) => (
                  <tr key={req} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-gray-800 border border-gray-200 align-top w-1/3">{req}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            It is crucial to note that couples <strong>cannot request temporary court orders</strong>{" "}
            (such as pendente lite support or custody orders) while proceeding under a joint
            petition. If disagreements arise that require judicial intervention, either spouse can
            revoke the joint petition.
          </p>

          {/* Section 3 — Suitability */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            When Is the Joint Petition Right for You?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The joint petition process is a powerful tool for reducing conflict, but it is not a
            one-size-fits-all solution. The decision flowchart below can help you assess whether
            this pathway suits your situation.
          </p>

          {/* Flowchart */}
          <div className="my-8 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <img
              src="/sb1427_flowchart.png"
              alt="Decision flowchart: Is the SB 1427 Joint Petition Right for You?"
              className="w-full"
            />
            <p className="text-xs text-gray-500 text-center py-2 bg-gray-50 border-t border-gray-200">
              Figure 1 — Decision guide for California couples considering the joint petition process.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
            When the Joint Petition is Highly Recommended
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The SB 1427 process is an excellent fit for couples who meet the following criteria:
          </p>
          <div className="space-y-3 mb-6">
            {[
              ["Mutual Decision", "Both parties agree that the marriage is over and wish to part ways amicably."],
              ["Commitment to Transparency", "Both spouses are willing to fully and honestly disclose all financial assets, debts, and income streams."],
              ["Co-Parenting Priority", "For couples with children, the joint petition fosters a cooperative environment that protects children from the crossfire of litigation."],
              ["Time and Cost Savings", "By eliminating process servers, formal responses, and court hearings over minor disputes, couples can significantly reduce legal fees and emotional stress."],
              ["Straightforward Finances", "Couples whose assets primarily consist of W-2 income, a primary residence, and standard retirement accounts often find the joint process highly efficient."],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">{title}:</strong> {desc}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
            When the Joint Petition is NOT Recommended
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conversely, the joint petition process should be avoided in the following scenarios:
          </p>
          <div className="space-y-3 mb-6">
            {[
              ["History of Domestic Violence or Coercion", "If there is any history of abuse, intimidation, or a significant power imbalance, the collaborative nature of the joint petition can be dangerous. A less-empowered spouse may be pressured into accepting unfair terms. Traditional filing with independent legal representation and protective orders is essential."],
              ["Hidden Assets or Financial Mistrust", "If you suspect your spouse is hiding assets, underreporting income, or will refuse to complete financial disclosures honestly, the joint petition is not suitable. Traditional litigation provides tools (like formal discovery and subpoenas) to uncover hidden finances."],
              ["Fundamental Disagreements", "If you and your spouse cannot agree on major issues — such as child custody arrangements, spousal support, or the division of a business — the court must adjudicate these disputes through the traditional process."],
              ["Need for Immediate Court Intervention", "Because you cannot request temporary orders under a joint petition, it is not the right choice if you urgently need the court to establish temporary child support, order one spouse to vacate the home, or freeze contested assets."],
              ["Highly Complex Estates", "Couples with complex business valuations, extensive trust assets, or highly contested separate property claims may find that the structure of a traditional proceeding better ensures proper characterization and valuation of assets."],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">{title}:</strong> {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Section 4 — Comparison */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Comparing the Processes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The chart below provides a side-by-side comparison of the joint petition under SB 1427
            versus the traditional divorce process across key categories.
          </p>
          <div className="my-8 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <img
              src="/sb1427_comparison.png"
              alt="Side-by-side comparison: Joint Petition vs. Traditional Divorce in California"
              className="w-full"
            />
            <p className="text-xs text-gray-500 text-center py-2 bg-gray-50 border-t border-gray-200">
              Figure 2 — Joint Petition (SB 1427) vs. Traditional Divorce: a side-by-side comparison.
            </p>
          </div>

          {/* Section 5 — Revocation */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Revoking a Joint Petition
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SB 1427 includes safeguards for situations where the collaborative process breaks down.
            Either spouse can revoke the joint petition at any time before the final judgment is
            entered. To do so, the revoking party must file a{" "}
            <strong>Notice of Revocation of Joint Petition (Form FL-720)</strong> and an amended
            petition or response, effectively converting the case into a traditional, adversarial
            divorce proceeding. The original filing date remains valid for the purpose of calculating
            the six-month waiting period, and the automatic restraining orders remain in effect.
          </p>

          {/* Section 6 — Impact */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Impact on California Families
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The implementation of SB 1427 marks a significant step toward reducing the emotional and
            financial burdens of divorce in California. By allowing couples to approach the
            dissolution of their marriage as a shared administrative task rather than a legal battle,
            the state is fostering healthier post-divorce dynamics, particularly for co-parents.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Superior Court of Los Angeles County emphasized that this new pathway{" "}
            <em>
              "provides a streamlined legal process for parties seeking amicable divorce, saving time
              through a collaborative process."
            </em>{" "}
            For couples who have already reached an agreement through mediation or direct
            negotiation, the joint petition offers a dignified exit strategy that aligns with their
            cooperative intentions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            While not suitable for high-conflict cases or situations involving domestic violence or
            significant power imbalances, the joint petition process under SB 1427 empowers many
            Californians to end their marriages with respect and mutual understanding.
          </p>

          {/* References */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">References</h3>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>
                Senate Judiciary Committee.{" "}
                <a href="https://sjud.senate.ca.gov/sites/sjud.senate.ca.gov/files/sb_1427_allen_sjud_analysis.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  SB 1427 (Allen) Bill Analysis
                </a>
                . April 2, 2024.
              </li>
              <li>
                Mediate.com.{" "}
                <a href="https://mediate.com/news/new-state-law-aims-to-reduce-family-court-conflict-through-joint-divorce-filings/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  New State Law Aims to Reduce Family Court Conflict through Joint Divorce Filings
                </a>
                . January 13, 2026.
              </li>
              <li>
                Digital Democracy.{" "}
                <a href="https://calmatters.digitaldemocracy.org/bills/ca_202320240sb1427" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  SB 1427: Marriage: joint petition for dissolution of marriage
                </a>
                .
              </li>
              <li>
                California Courts Self-Help Guide.{" "}
                <a href="https://selfhelp.courts.ca.gov/divorce/joint-petition" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Joint petition for divorce or legal separation
                </a>
                .
              </li>
              <li>
                Divorce.law.{" "}
                <a href="https://divorce.law/guides/news/california-sb-1427-joint-petition-divorce-law-2026/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  California SB 1427 Joint Petition Divorce Law Now Active: What Changes in 2026
                </a>
                . May 18, 2026.
              </li>
              <li>
                Meza Talbott Law.{" "}
                <a href="https://mezatalbottlaw.com/california-finally-made-divorce-less-of-a-fight-heres-what-you-need-to-know/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  California Finally Made Divorce Less of a Fight
                </a>
                . March 8, 2026.
              </li>
              <li>
                Superior Court of Los Angeles County.{" "}
                <a href="https://www.lacourt.org/newsmedia/uploads/142025122915355825NR12-29-2025NewJointPetitionforDissolution-PressRelease(2).pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  New Expanded Divorce Option Press Release
                </a>
                . December 29, 2025.
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Considering a Collaborative Divorce?
            </h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Our Resolution Family Mediation Services can help you and your spouse navigate the
              joint petition process with clarity, dignity, and professional guidance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button variant="outline">← Back to Blog</Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
