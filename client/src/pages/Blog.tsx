import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogPosts = [
    {
      title: "10 Signs Mediation Is Right for Your Divorce",
      category: "Mediation Basics",
      date: "October 15, 2025",
      excerpt:
        "Discover the key indicators that mediation could be the best path forward for your family during divorce proceedings.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    },
    {
      title: "How to Prepare for Your First Mediation Session",
      category: "Process Guide",
      date: "October 10, 2025",
      excerpt:
        "Essential tips and documents you'll need to make your first mediation session productive and successful.",
      image: "/blog-mediation-prep.jpg",
    },
    {
      title: "Creating a Parenting Plan That Works",
      category: "Co-Parenting",
      date: "October 5, 2025",
      excerpt:
        "Learn how to develop a comprehensive parenting plan that prioritizes your children's well-being and reduces future conflicts.",
      image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&q=80",
    },
    {
      title: "Understanding California Divorce Laws",
      category: "Legal Information",
      date: "September 28, 2025",
      excerpt:
        "A comprehensive guide to California's divorce laws, including community property rules and custody guidelines.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    },
    {
      title: "The True Cost of Divorce: Mediation vs. Litigation",
      category: "Financial Planning",
      date: "September 20, 2025",
      excerpt:
        "Compare the financial and emotional costs of mediation versus traditional divorce litigation.",
      image: "/blog-cost-comparison.jpg",
    },
    {
      title: "Co-Parenting Communication Tips for Divorced Parents",
      category: "Co-Parenting",
      date: "September 15, 2025",
      excerpt:
        "Effective communication strategies to maintain a healthy co-parenting relationship after divorce.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
    },
  ];

  const categories = [
    "All Posts",
    "Mediation Basics",
    "Process Guide",
    "Co-Parenting",
    "Legal Information",
    "Financial Planning",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Mediation Resources & Insights
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Expert guidance on divorce mediation, co-parenting, and family law
            to help you navigate separation with confidence.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                className={
                  category === "All Posts"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Informed About Mediation
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to receive helpful articles, tips, and resources about
              divorce mediation and co-parenting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-900 flex-grow max-w-md"
              />
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Popular Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Getting Started
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn the basics of divorce mediation and how to begin the
                  process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Child Custody
                </h3>
                <p className="text-gray-600 text-sm">
                  Tips for creating parenting plans and custody arrangements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Financial Issues
                </h3>
                <p className="text-gray-600 text-sm">
                  Guidance on property division, support, and financial planning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Co-Parenting
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategies for successful co-parenting after divorce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

