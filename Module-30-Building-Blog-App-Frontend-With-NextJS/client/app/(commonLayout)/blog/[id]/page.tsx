import { blogService } from "@/services/blog.service";
import { blogType } from "@/types/blogType";

// To make the page static 
export async function generateStaticParams() {
  const { data } = await blogService.getBlogPost();

  const blogs = data?.data?.data || [];
  console.log(data)
  return [{ id: "1bb845d7-e306-4f37-92d3-e1db57f5a79f" }];
  // return blogs.map((blog : blogType) => ({ id: blog.id }));
}

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const blog  = await blogService.getBlogById(id!);
  const { title, content, tags, authorId } = blog.data;

  // const { data } = await blogService.getBlogPost();
  // const ids = data?.data?.data?.map((blog) => ({ id: blog.id }));
  // console.log(ids);
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wide"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {title}
        </h1>

        <div className="flex items-center text-gray-500 text-sm">
          <span className="font-medium text-gray-700">
            Author ID: {authorId}
          </span>
          <span className="mx-2">•</span>
          <span>Jan 24, 2026</span>
        </div>
      </header>

      {/* Hero Image Placeholder (Optional but recommended) */}
      <div className="w-full h-64 md:h-96 bg-gray-200 rounded-2xl mb-10 overflow-hidden">
        <div className="flex items-center justify-center h-full text-gray-400 italic">
          Featured Image Placeholder
        </div>
      </div>

      {/* Main Content */}
      <section className="prose prose-lg prose-indigo max-w-none text-gray-800 leading-relaxed">
        {/* If content is HTML, use dangerouslySetInnerHTML. If it's plain text, use a paragraph. */}
        <div className="whitespace-pre-wrap">{content}</div>
      </section>

      {/* Footer / Share Section */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            ← Back to Feed
          </button>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">🔗</button>
            <button className="p-2 rounded-full hover:bg-gray-100">❤️</button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BlogPage;
