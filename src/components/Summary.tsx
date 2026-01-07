export function Summary() {
  return (
    <section className="py-20 px-6 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-[#A0826D] tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">Short introduction</h2>
        </div>

        <div className="text-xl text-gray-300 leading-relaxed space-y-6">
          <p>
            An enthusiast with a passion for crafting exceptional digital experiences. 
            I thrive on the excitement of creating innovative solutions that merge 
            technology with user needs.
          </p>
          <p>
            With a background in product development and management, digital marketing 
            and UI/UX design, I'm all about making technology accessible and user-friendly. 
            I'm constantly exploring new trends and tools, eager to learn and grow in my 
            field while staying adaptable to the ever-evolving world of tech!
          </p>
          <div className="pt-6 border-t border-gray-700">
            <p className="text-gray-400 italic">
              "I'd love to bring my energy, creativity, and results-driven mindset to 
              your team! I truly hope we'll be in touch"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}