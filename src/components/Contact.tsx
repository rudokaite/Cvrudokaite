import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#A0826D] tracking-widest uppercase">Let&apos;s Connect</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4">Get in Touch</h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            I&apos;d love to bring my energy, creativity, and results-driven mindset to your team! 
            I truly hope we&apos;ll be in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#0F0F0F] border border-gray-800 p-6 hover:border-[#A0826D] transition-colors rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#A0826D]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#A0826D]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a 
                    href="mailto:rudokaite.ieva@gmail.com"
                    className="text-white hover:text-[#A0826D] transition-colors"
                  >
                    rudokaite.ieva@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#0F0F0F] border border-gray-800 p-6 hover:border-[#A0826D] transition-colors rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#A0826D]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#A0826D]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a 
                    href="tel:+37061753682"
                    className="text-white hover:text-[#A0826D] transition-colors"
                  >
                    +370 617 53682
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#0F0F0F] border border-gray-800 p-6 hover:border-[#A0826D] transition-colors rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#A0826D]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#A0826D]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white">Kaunas, Lietuva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-[#0F0F0F] border border-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl text-white mb-6">Professional Links</h3>
            <div className="space-y-4">
              <a
                href="https://dribbble.com/Rudokaite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#A0826D] transition-colors group"
              >
                <Globe className="w-5 h-5" />
                <div>
                  <p className="group-hover:underline">UI/UX Portfolio</p>
                  <p className="text-sm text-gray-500">dribbble.com/Rudokaite</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ieva-rudokaite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#A0826D] transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <div>
                  <p className="group-hover:underline">LinkedIn Profile</p>
                  <p className="text-sm text-gray-500">www.linkedin.com/in/ieva-rudokaite</p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &quot;I enjoy generating ideas and doing my best to bring them to life. 
                I love learning and constantly strive for improvement.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-[#A0826D]/10 to-transparent border border-[#A0826D]/30 p-12 text-center overflow-hidden rounded-2xl">
          <div className="relative z-10">
            <h3 className="text-3xl text-white mb-4">Ready to collaborate?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need SEO expertise, UI/UX design, digital marketing strategy, 
              or e-commerce management, I&apos;m here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:rudokaite.ieva@gmail.com"
                className="px-8 py-4 bg-[#A0826D] text-white hover:bg-[#A0826D]/90 transition-all transform hover:scale-105 rounded-lg"
              >
                Send an Email
              </a>
              <a
                href="tel:+37061753682"
                className="px-8 py-4 border border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D] hover:text-white transition-all rounded-lg"
              >
                Call Me
              </a>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A0826D]/5 rounded-full blur-3xl" />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Ieva Rudokaitė. Marketing & SEO Specialist based in Kaunas, Lithuania.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Available for full-time positions and freelance projects
          </p>
        </div>
      </div>
    </section>
  );
}