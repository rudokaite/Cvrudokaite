import {
  Search,
  Palette,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Keyword analysis, category tree optimization, and SEO strategy for online stores. Experienced with Santakal.lt and 1a.lt platforms.",
    skills: [
      "Keyword Research",
      "SEO Optimization",
      "Analytics",
      "Category Management",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating user-friendly and accessible digital experiences. Trained at CodeAcademy with projects showcasing innovative designs.",
    skills: [
      "User Research",
      "Prototyping",
      "Wireframing",
      "Visual Design",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Social media management, content creation, and digital strategy. Experience from football academy campaigns to e-learning platforms.",
    skills: [
      "Content Strategy",
      "Social Media",
      "Campaign Management",
      "Brand Development",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "E-shop administration with comprehensive responsibilities from product management to SEO optimization and category structure.",
    skills: [
      "Product Management",
      "Category Optimization",
      "E-shop Admin",
      "Inventory Systems",
    ],
  },
];

export function Expertise() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#14B8A6] tracking-widest uppercase">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">
            Expertise & Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-[#0F0F0F] border border-gray-800 p-8 hover:border-[#14B8A6] transition-all duration-300 rounded-xl"
            >
              <div className="mb-6 inline-block p-4 bg-[#14B8A6]/10 group-hover:bg-[#14B8A6]/20 transition-colors rounded-lg">
                <area.icon className="w-8 h-8 text-[#14B8A6]" />
              </div>

              <h3 className="text-2xl text-white mb-4">
                {area.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#14B8A6]/5 border border-[#14B8A6]/20 text-[#14B8A6] text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}