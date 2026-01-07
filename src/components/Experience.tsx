import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'SEO and Marketing specialist',
    company: 'senukai.lt',
    period: '11/2023 - Present',
    type: 'Current Position',
    description: 'Leading SEO and marketing initiatives, focusing on keyword analysis, content optimization, and digital strategy development.'
  },
  {
    title: 'E-learning specialist',
    company: 'Continental',
    period: '09/2023 - 12/2023',
    type: 'Contract',
    description: 'Developed and managed e-learning content and platforms, ensuring optimal user experience and engagement.'
  },
  {
    title: 'E-commerce administrator',
    company: 'UAE ATEA',
    period: '02/2021 - 09/2023',
    type: 'Full-time',
    description: 'Managed product categories, content, and SEO for online stores Santakal.lt and 1a.lt. Performed keyword analysis and category tree optimization.'
  },
  {
    title: 'Organizer of the Olympics for Kids',
    company: 'Kauno Lietuva',
    period: '09/2016 - 08/2022',
    type: 'Long-term',
    description: 'Coordinated large-scale youth sports events, managing logistics, communications, and participant engagement.'
  },
  {
    title: 'Marketing Assistant',
    company: 'Bet Futbolo Akademija',
    period: '09/2020 - 09/2021',
    type: 'Part-time',
    description: 'Created social media content, managed digital campaigns, and conducted market analysis for the football academy.'
  },
  {
    title: 'Administrator / Activity Coordinator',
    company: 'Akme Lietuva gimnazija',
    period: '08/2019 - 07/2020',
    type: 'Full-time',
    description: 'Coordinated school activities, managed administrative tasks, and facilitated student engagement programs.'
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#14B8A6] tracking-widest uppercase">Career Path</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-[#0A0A0A] border border-gray-800 p-8 hover:border-[#14B8A6] transition-all duration-300 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-[#14B8A6]" />
                    <h3 className="text-2xl text-white">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-gray-400">{exp.company}</p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-[#14B8A6] text-sm rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Decorative element */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-[#14B8A6] group-hover:h-full transition-all duration-300 rounded-l-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}