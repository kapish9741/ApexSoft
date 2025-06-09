import { motion } from "motion/react";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    date: string;
    author: string;
    category: string;
}

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-lg transition-all duration-300 hover:border-neutral-700 hover:shadow-blue-900/20"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {/* Glow effect behind card on hover */}
            <div className="absolute -inset-1 z-0 opacity-0 rounded-xl blur-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex h-full flex-col">
                {/* Image container with overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900/20 z-10"></div>
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 z-20 rounded-full bg-black/70 px-2 py-1 text-xs text-neutral-300">
                        {post.category}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                        <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-neutral-100 group-hover:text-white">
                            {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-3 text-sm text-neutral-400">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="mt-auto flex justify-between items-center">
                        <div className="text-xs text-neutral-500">
                            <span>{post.date}</span>
                            <span className="mx-1">•</span>
                            <span>{post.author}</span>
                        </div>

                        <a
                            href={`/blog/${post.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center group/btn"
                        >
                            <span className="text-sm font-medium text-blue-500 group-hover/btn:text-blue-400">
                                Read more
                            </span>
                            <svg
                                className="ml-1 h-4 w-4 stroke-blue-500 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:stroke-blue-400"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6.5 3.5L11 8L6.5 12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
