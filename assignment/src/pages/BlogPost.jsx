import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : '');
    const API = `${API_BASE}/api/blog?action=post&slug=${encodeURIComponent(slug)}`;

    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setPost(data.post);
          generateTableOfContents(data.post.content);
          fetchRelatedPosts(data.post.category);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  const generateTableOfContents = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const headings = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc = [];
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1]);
      if (level >= 2 && level <= 3) {
        const id = heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        heading.id = id;
        toc.push({
          id,
          text: heading.textContent,
          level
        });
      }
    });
    
    setTableOfContents(toc);
  };

  const fetchRelatedPosts = (category) => {
    const API_BASE = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : '');
    const API = `${API_BASE}/api/blog?action=list&limit=20`;
    
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          const related = data.posts
            .filter(p => p.category === category && p.slug !== slug)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      })
      .catch(() => {});
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content?.split(/\s+/).length || 0;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      'Essay Tips': 'from-blue-50 to-blue-100 border-blue-200 text-blue-700 bg-blue-500',
      'Assignment Help': 'from-purple-50 to-purple-100 border-purple-200 text-purple-700 bg-purple-500',
      'Study Strategies': 'from-green-50 to-green-100 border-green-200 text-green-700 bg-green-500',
      'Academic News': 'from-orange-50 to-orange-100 border-orange-200 text-orange-700 bg-orange-500',
    };
    return gradients[category] || 'from-slate-50 to-slate-100 border-slate-200 text-slate-700 bg-slate-500';
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-primary-600 animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading article...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-6">
            <div className="text-6xl mb-4">📄</div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Article Not Found</h1>
            <p className="text-slate-600 mb-8">Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
          </div>
          <Link to="/blog" className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const gradient = getCategoryGradient(post.category);
  const gradientParts = gradient.split(' ');
  const categoryBg = gradientParts.slice(0, -1).join(' ');
  const categoryBgDot = gradientParts[gradientParts.length - 1];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 overflow-hidden bg-slate-900">
        {post.feature_image && (
          <img 
            src={post.feature_image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 md:px-8 pb-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${categoryBg} border text-white`}>
                  <span className={`w-2 h-2 rounded-full ${categoryBgDot}`}></span>
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Table of Contents */}
          {tableOfContents.length > 0 && (
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition text-sm ${
                        activeSection === item.id
                          ? 'bg-primary-100 text-primary-700 font-semibold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                      style={{ marginLeft: item.level === 3 ? '1rem' : '0' }}
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Article */}
          <article className={tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
            
            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 pb-8 border-b border-slate-200 mb-8">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {post.author?.charAt(0) || 'A'}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-500">Author</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <span>{new Date(post.published_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">⏱️</span>
                  <span>{getReadingTime(post.content)} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">👁️</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none 
              prose-headings:font-bold prose-h1:text-4xl prose-h1:text-slate-900 prose-h1:mt-12 prose-h1:mb-6
              prose-h2:text-3xl prose-h2:text-slate-900 prose-h2:mt-10 prose-h2:mb-4 prose-h2:pt-8 prose-h2:border-t prose-h2:border-slate-200
              prose-h3:text-2xl prose-h3:text-slate-800 prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-em:text-slate-700 prose-em:italic
              prose-ul:text-slate-700 prose-ul:my-6
              prose-li:text-slate-700 prose-li:my-2
              prose-code:bg-slate-100 prose-code:text-slate-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:my-6
              prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
              prose-table:border-collapse prose-table:w-full prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-900 prose-td:p-3 prose-td:border-b prose-td:border-slate-200
            ">
              {post.content && (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
            </div>

            {/* Share & More Actions */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Share this article</p>
                  <div className="flex gap-3">
                    <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition">
                      𝕏
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition">
                      f
                    </a>
                    <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition" title="Copy link">
                      🔗
                    </button>
                  </div>
                </div>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-gradient-to-b from-transparent to-slate-100 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Related Articles</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group rounded-xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-primary-300 transition duration-300 h-full flex flex-col"
                >
                  {relatedPost.feature_image && (
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.feature_image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-primary-100 text-primary-700 w-fit">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-auto">
                      {new Date(relatedPost.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {getReadingTime(relatedPost.excerpt)} min
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert Assignment Help?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team of expert writers is ready to help you excel. Get high-quality, original assignments delivered on time.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new Event('openPopup'))}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-slate-100 transition shadow-xl hover:shadow-2xl"
          >
            Get Started <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;