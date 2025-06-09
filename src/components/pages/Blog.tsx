import { motion } from "motion/react";
import { BlogCard, BlogPost } from "../ui/BlogCard";

// Sample blog data - in a real app, this would come from an API
const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "How AI is Revolutionizing Software Development",
        excerpt: "Artificial intelligence is transforming the way we build software. Learn how AI-powered tools are automating coding tasks, improving code quality, and accelerating development cycles for teams of all sizes.",
        imageUrl: `https://apexsoft.in/wp-content/uploads/2024/10/download-7.gif`,
        date: "Apr 12, 2024",
        author: "Sarah Chen",
        category: "AI"
    },
    {
        id: "2",
        title: "The Future of Web Development: Web Assembly",
        excerpt: "Web Assembly (WASM) is changing the game for web performance. Discover how this binary format is making it possible to run high-performance applications in the browser without sacrificing speed or security.",
        imageUrl: "https://apexsoft.in/wp-content/uploads/2024/10/Untitled-design.gif",
        date: "Apr 8, 2024",
        author: "Michael Rodriguez",
        category: "Web Dev"
    },
    {
        id: "3",
        title: "Building Resilient Microservices Architecture",
        excerpt: "Microservices offer flexibility and scalability, but they come with challenges. This article explores best practices for creating resilient microservices that can handle failures gracefully and scale efficiently.",
        imageUrl: "https://apexsoft.in/wp-content/uploads/2024/10/Untitled-design-1-1024x1024.gif",
        date: "Apr 2, 2024",
        author: "Emily Watson",
        category: "Architecture"
    },
    {
        id: "4",
        title: "The Rise of Edge Computing in Modern Applications",
        excerpt: "Edge computing brings processing power closer to data sources, reducing latency and improving user experience. Learn why this approach is becoming essential for modern applications and IoT solutions.",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        date: "Mar 28, 2024",
        author: "James Kim",
        category: "Infrastructure"
    },
    {
        id: "5",
        title: "7 DevOps Practices to Improve Your Software Delivery",
        excerpt: "DevOps isn't just a buzzword—it's a set of practices that can dramatically improve your software delivery process. Explore seven key DevOps practices that can transform your team's efficiency.",
        imageUrl: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop",
        date: "Mar 22, 2024",
        author: "Lisa Thompson",
        category: "DevOps"
    },
    {
        id: "6",
        title: "Securing Your API: Best Practices and Common Pitfalls",
        excerpt: "APIs are the backbone of modern applications, but they can also be a security vulnerability. Learn how to properly secure your APIs against common attacks and ensure data integrity.",
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop",
        date: "Mar 18, 2024",
        author: "David Garcia",
        category: "Security"
    },
    {
        id: "7",
        title: "The Impact of Quantum Computing on Cryptography",
        excerpt: "Quantum computing poses both challenges and opportunities for cryptography. Discover how quantum computers could break current encryption standards and what post-quantum cryptography looks like.",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
        date: "Mar 12, 2024",
        author: "Sophia Williams",
        category: "Security"
    },
    {
        id: "8",
        title: "Creating Accessible Web Applications: A Comprehensive Guide",
        excerpt: "Web accessibility is not just a legal requirement but a moral imperative. This guide offers practical strategies for building web applications that are usable by everyone, regardless of ability.",
        imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        date: "Mar 6, 2024",
        author: "Ryan Martinez",
        category: "Web Dev"
    },
    {
        id: "9",
        title: "Leveraging GraphQL for More Efficient API Queries",
        excerpt: "REST isn't the only option for API design. Learn how GraphQL can provide more efficient data fetching, reduce over-fetching, and simplify frontend development with flexible queries.",
        imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop",
        date: "Feb 28, 2024",
        author: "Olivia Taylor",
        category: "API"
    },
    {
        id: "10",
        title: "The Evolution of JavaScript: From ES5 to ES2024",
        excerpt: "JavaScript has evolved dramatically over the past decade. This article traces the language's evolution from ES5 through to the latest features in ES2024, highlighting key improvements along the way.",
        imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
        date: "Feb 22, 2024",
        author: "Alex Johnson",
        category: "JavaScript"
    },
    {
        id: "11",
        title: "Containerization vs. Serverless: Choosing the Right Approach",
        excerpt: "Both containerization and serverless architectures offer unique advantages for application deployment. This comparison helps you decide which approach is best suited for your specific use cases.",
        imageUrl: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1770&auto=format&fit=crop",
        date: "Feb 16, 2024",
        author: "Nathan Lee",
        category: "Cloud"
    },
    {
        id: "12",
        title: "Real-time Data Processing with Apache Kafka",
        excerpt: "Apache Kafka has become the go-to solution for real-time data streaming. Learn how to implement Kafka for efficient event processing, data pipelines, and building reactive systems.",
        imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
        date: "Feb 10, 2024",
        author: "Mia Wilson",
        category: "Big Data"
    },
];

export default function Blog() {
    return (
        <div className="w-full px-4 py-12 min-h-screen">


            {/* Search and filter section could be added here */}

            {/* Blog grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        className="h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <BlogCard post={post} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
