// src/app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#f8f5f2] dark:bg-[#1a1814]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-amber-700/30 to-transparent"></div>
        </div>
        
        <div className="page-container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4">
              Medical Anthropology Research & Community
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Exploring the intersections of health, culture, and social systems to improve healthcare outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="bg-white text-amber-800 hover:bg-amber-50 px-5 py-2 rounded-md transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Research */}
      <section className="bg-white dark:bg-gray-900">
        <div className="page-container">
          <h2 className="text-3xl font-light mb-8">Featured Research</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Item 1 */}
            <div className="bg-[#f8f5f2] dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* Placeholder for research image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Research Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Healthcare Access in Underserved Communities</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Examining structural barriers to healthcare access and developing community-based solutions.
                </p>
                <Link href="/research/healthcare-access" className="text-amber-600 hover:text-amber-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
            
            {/* Research Item 2 */}
            <div className="bg-[#f8f5f2] dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* Placeholder for research image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Research Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Cultural Competence in Clinical Settings</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Investigating the impact of cultural competence training on patient outcomes and satisfaction.
                </p>
                <Link href="/research/cultural-competence" className="text-amber-600 hover:text-amber-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
            
            {/* Research Item 3 */}
            <div className="bg-[#f8f5f2] dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* Placeholder for research image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Research Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Traditional Healing Practices</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Documenting and analyzing the integration of traditional healing practices in modern healthcare systems.
                </p>
                <Link href="/research/traditional-healing" className="text-amber-600 hover:text-amber-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/research" className="btn-outline">
              View All Research
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cohort Sistas Section */}
      <section className="bg-amber-50 dark:bg-amber-900/20 py-16">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-4">Cohort Sistas</h2>
              <p className="text-lg mb-6">
                A community initiative dedicated to supporting and connecting women of color in medical anthropology and related fields.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mentorship programs connecting established researchers with emerging scholars</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Regular workshops and networking events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Collaborative research opportunities and resource sharing</span>
                </li>
              </ul>
              <Link href="/cohort-sistas" className="btn-primary">
                Join the Community
              </Link>
            </div>
            <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg relative">
              {/* Placeholder for Cohort Sistas image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Community Image
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="bg-white dark:bg-gray-900">
        <div className="page-container">
          <h2 className="text-3xl font-light mb-8">Latest from the Blog</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <div className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
              <h3 className="text-xl font-medium mb-2">
                <Link href="/blog/post-1" className="hover:text-amber-600">
                  The Role of Community Health Workers in Rural Healthcare Delivery
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-3">April 5, 2025</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Exploring how community health workers bridge the gap between clinical settings and remote communities, improving access to healthcare services.
              </p>
              <Link href="/blog/post-1" className="text-amber-600 hover:text-amber-700 font-medium">
                Continue Reading →
              </Link>
            </div>
            
            {/* Blog Post 2 */}
            <div className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
              <h3 className="text-xl font-medium mb-2">
                <Link href="/blog/post-2" className="hover:text-amber-600">
                  Ethics in Cross-Cultural Medical Research
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-3">March 22, 2025</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Addressing ethical considerations when conducting medical research across diverse cultural contexts and communities.
              </p>
              <Link href="/blog/post-2" className="text-amber-600 hover:text-amber-700 font-medium">
                Continue Reading →
              </Link>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/blog" className="btn-outline">
              View All Posts
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-amber-600 dark:bg-amber-800 text-white py-16">
        <div className="page-container text-center">
          <h2 className="text-3xl font-light mb-4">Stay Connected</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new research, blog posts, and upcoming events.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-amber-800 hover:bg-amber-50 px-6 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}