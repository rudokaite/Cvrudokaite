import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Santakal.lt SEO Optimization',
    category: 'E-commerce & SEO',
    description: 'Comprehensive SEO strategy implementation including keyword analysis, category tree optimization, and content management for online store.',
    tags: ['SEO', 'E-commerce', 'Analytics', 'Category Management'],
    highlights: ['Keyword Research', 'Category Structure', 'Product Optimization']
  },
  {
    title: 'UI/UX Design Projects',
    category: 'Design & User Experience',
    description: 'Collection of UI/UX design projects showcasing user-centered design approach and modern interface solutions.',
    tags: ['UI/UX', 'Design', 'Prototyping', 'User Research'],
    highlights: ['User Research', 'Visual Design', 'Prototyping'],
    link: 'https://dribbble.com/Rudokaite'
  },
  {
    title: 'Football Academy Social Media',
    category: 'Digital Marketing',
    description: 'Created engaging social media content and managed digital presence for football academy, including content creation and campaign management.',
    tags: ['Social Media', 'Content Creation', 'Marketing', 'Branding'],
    highlights: ['Content Strategy', 'Social Campaigns', 'Brand Building']
  },
  {
    title: 'E-learning Platform Development',
    category: 'Educational Technology',
    description: 'Specialized in e-learning content development and platform management at Continental, focusing on user experience and engagement.',
    tags: ['E-learning', 'Content Development', 'UX', 'Platform Management'],
    highlights: ['Content Creation', 'User Engagement', 'Platform Optimization']
  },
  {
    title: 'Category Tree Optimization',
    category: 'SEO & Information Architecture',
    description: 'Strategic optimization of product category structures for improved navigation, SEO performance, and user experience.',
    tags: ['Information Architecture', 'SEO', 'UX', 'Analytics'],
    highlights: ['Structure Analysis', 'Navigation Optimization', 'SEO Impact']
  }
];

export function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#A0826D] tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0F0F0F] border border-gray-800 overflow-hidden hover:border-[#A0826D] transition-all duration-300 rounded-xl"
            >
              {/* Decorative top bar */}
              <div className="h-1 bg-gradient-to-r from-[#A0826D] to-transparent" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#A0826D]/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-[#A0826D]" />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[#A0826D]/10 transition-colors rounded-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-[#A0826D]" />
                    </a>
                  )}
                </div>

                <span className="text-[#A0826D] text-sm tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#A0826D] rounded-full" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-[#A0826D]/5 text-[#A0826D] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#A0826D] pointer-events-none transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}