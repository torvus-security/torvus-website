import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "digital-estate-planning-guide",
    title: "The Complete Guide to Digital Estate Planning",
    excerpt:
      "Learn how to protect your digital assets and ensure your loved ones can access important information when needed.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Estate Planning",
    featured: true,
  },
  {
    id: "zero-knowledge-encryption",
    title: "Understanding Zero-Knowledge Encryption",
    excerpt:
      "Deep dive into how zero-knowledge encryption works and why it's crucial for protecting sensitive documents.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Security",
    featured: true,
  },
  {
    id: "conditional-release-scenarios",
    title: "5 Real-World Conditional Release Scenarios",
    excerpt:
      "Explore practical use cases for conditional document release, from business continuity to personal emergencies.",
    author: "Emily Johnson",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Use Cases",
    featured: false,
  },
  {
    id: "compliance-frameworks",
    title: "Security Compliance: SOC 2, ISO 27001, and GDPR",
    excerpt: "How Torvus Security meets and exceeds industry standards for data protection and privacy.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Compliance",
    featured: false,
  },
  {
    id: "backup-strategies",
    title: "Digital Backup Strategies for Critical Documents",
    excerpt: "Best practices for creating redundant, secure backups of your most important digital assets.",
    author: "Lisa Wang",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "Best Practices",
    featured: false,
  },
  {
    id: "business-continuity",
    title: "Business Continuity Planning with Digital Guardianship",
    excerpt: "How organizations can use conditional release systems to ensure business continuity during emergencies.",
    author: "Robert Thompson",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Business",
    featured: false,
  },
]

const categories = ["All", "Estate Planning", "Security", "Use Cases", "Compliance", "Best Practices", "Business"]

export default function BlogPage() {
  return (
    <main className="container-page section">
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-7xl">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="h1 ink2 ink2--lapis-lagoon ink-shadow">Security Knowledge Base</h1>
              <p className="body">
                Expert insights on digital estate planning, security best practices, and conditional release strategies.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Featured Posts */}
            <div className="mb-16">
              <h2 className="h2">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <Card key={post.id} className="group card-hover elev-1 elev-transition transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="body mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                            <Calendar className="h-4 w-4 ml-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="h2">All Articles</h2>
              <div className="grid gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="group card-hover elev-1 elev-transition transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="h3 font-semibold mb-2 group-hover:text-primary transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="body mb-3">{post.excerpt}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                            <Calendar className="h-4 w-4 ml-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-primary hover:text-primary/80 transition-colors ml-4"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
