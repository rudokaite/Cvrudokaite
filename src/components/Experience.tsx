import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'SEO and Marketing specialist',
    company: 'Kesko Senukai digital',
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
    company: 'UAB ATEA',
    period: '02/2021 - 09/2023',
    type: 'Full-time',
    description: 'Managed product categories, content, and SEO for online stores Santakal.lt and 1a.lt. Performed keyword analysis and category tree optimization.'
  },
  {
    title: 'Organizer of the Olympics for Kids',
    company: 'Kings Lietuva',
    period: '09/2016 - 08/2022',
    type: 'Long-term',
    description: 'Coordinated large-scale youth sports events, managing logistics, communications, and participant engagement.'
  },
  {
    title: 'Marketing Assistant',
    company: 'Be1 Futbolo akademija',
    period: '09/2020 - 09/2021',
    type: 'Part-time',
    description: 'Created social media content, managed digital campaigns, and conducted market analysis for the football academy.'
  },
  {
    title: 'Administrator / Activity Coordinator',
    company: 'Alma Littera pramogos',
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
          <span className="text-[#A0826D] tracking-widest uppercase">Career Path</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-[#0A0A0A] border border-gray-800 p-8 hover:border-[#A0826D] transition-all duration-300 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-[#A0826D]" />
                    <h3 className="text-2xl text-white">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-gray-400">{exp.company}</p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#A0826D]/10 border border-[#A0826D]/30 text-[#A0826D] text-sm rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Decorative element */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-[#A0826D] group-hover:h-full transition-all duration-300 rounded-l-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}