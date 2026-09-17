import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark } from 'lucide-react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : '');
    const API = `${API_BASE}/api/blog?action=list&limit=50`;
    
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.posts);
          const uniqueCategories = [...new Set(data.posts.map(p => p.category))];
          setCategories(uniqueCategories);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter(p => {
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Essay Tips': { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800', dot: 'bg-blue-400' },
      'Assignment Help': { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', dot: 'bg-amber-400' },
      'Study Strategies': { bg: 'bg-teal-50', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-800', dot: 'bg-teal-400' },
      'Academic News': { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800', dot: 'bg-purple-400' },
    };
    return colors[category] || { bg: 'bg-slate-50', text: 'text-slate-700', badge: 'bg-slate-100 text-slate-800', dot: 'bg-slate-400' };
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content?.split(/\s+/).length || 0;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const getAuthorInitials = (author) => {
    return author?.split(' ').map(n => n[0]).join('').toUpperCase() || 'A';
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
              📚 Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Expert Insights & Resources</h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Discover tips, strategies, and expert advice to excel in your academic journey
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        
        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                  selectedCategory === null
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Articles
              </button>
              {categories.map((cat) => {
                const colors = getCategoryColor(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition flex items-center gap-2 ${
                      selectedCategory === cat
                        ? `${colors.badge} shadow-lg`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`}></span>
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin mx-auto mb-3"></div>
              <p className="text-slate-600 font-medium">Loading articles...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl text-slate-600 mb-2">No articles found</p>
            <p className="text-slate-500">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Blog Grid - Beautiful Card Design */}
        {!loading && filteredPosts.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const colors = getCategoryColor(post.category);
              return (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300 transition duration-300 flex flex-col h-full"
                >
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${colors.badge} backdrop-blur-sm bg-opacity-95`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>
                      {post.category}
                    </span>
                  </div>

                  {/* Featured Image - Optimized for 1080x1080 */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 aspect-square">
                    {post.feature_image ? (
                      <img 
                        src={post.feature_image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl opacity-20">📝</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Author & Meta Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                      <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center text-xs font-bold ${colors.text}`}>
                        {getAuthorInitials(post.author)}
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-slate-900">{post.author}</p>
                        <p className="text-xs text-slate-500">
                          {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {getReadingTime(post.excerpt)} min
                        </p>
                      </div>
                      <Bookmark size={16} className="text-slate-300 group-hover:text-blue-500 transition" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Grades?</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get expert help with your assignments. Our writers deliver high-quality, original work.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new Event('openPopup'))}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Order Assignment Now →
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogList;
