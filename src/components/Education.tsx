import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'UI/UX design',
    institution: 'CodeAcademy',
    program: 'Programą pažeisgumus',
    period: '09/2023 - 11/2023',
    type: 'Professional Course',
    icon: Award
  },
  {
    degree: 'Future media and journalism',
    institution: 'Vytauto Didžiojo Universitetas',
    program: 'Masters',
    period: '2023',
    type: 'Masters Degree',
    icon: GraduationCap
  },
  {
    degree: 'Media technology',
    institution: 'Kauno Technologijos Universitetas (KTU)',
    program: 'Bachelors',
    period: '2021',
    type: 'Bachelors Degree',
    icon: GraduationCap
  },
  {
    degree: 'Secondary education',
    institution: 'VDU „Rasos" gimnazija',
    program: 'Honours graduate',
    period: '2017',
    type: 'High School',
    icon: Award,
    note: 'Graduated with honours for active participation in various school activities'
  }
];

export function Education() {
  return (
    <section className="py-20 px-6 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#14B8A6] tracking-widest uppercase">Academic Background</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-[#0A0A0A] border border-gray-800 p-8 hover:border-[#14B8A6] transition-all duration-300 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#14B8A6]/10 group-hover:bg-[#14B8A6]/20 transition-colors shrink-0 rounded-lg">
                  <edu.icon className="w-6 h-6 text-[#14B8A6]" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="text-[#14B8A6] text-sm whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#14B8A6] rounded-full" />
                      <span className="text-gray-300 text-sm">{edu.program}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#14B8A6]/5 border border-[#14B8A6]/20 text-[#14B8A6] text-xs rounded-full">
                      {edu.type}
                    </span>
                  </div>

                  {edu.note && (
                    <p className="mt-4 text-gray-400 text-sm italic border-l-2 border-[#14B8A6]/30 pl-3">
                      {edu.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 p-8 bg-[#0A0A0A] border border-gray-800 rounded-xl">
          <h3 className="text-2xl text-white mb-6">Additional Interests & Activities</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="w-8 h-1 bg-[#14B8A6] mb-3 rounded-full" />
              <h4 className="text-[#14B8A6] mb-2">Continuous Learning</h4>
              <p className="text-sm">Reading books and staying updated with industry trends</p>
            </div>
            <div>
              <div className="w-8 h-1 bg-[#14B8A6] mb-3 rounded-full" />
              <h4 className="text-[#14B8A6] mb-2">Wellness</h4>
              <p className="text-sm">Regular Pilates practice for balance and focus</p>
            </div>
            <div>
              <div className="w-8 h-1 bg-[#14B8A6] mb-3 rounded-full" />
              <h4 className="text-[#14B8A6] mb-2">Analytics Enthusiast</h4>
              <p className="text-sm">Occasional deep dives into Instagram Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}