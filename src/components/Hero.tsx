import { Phone, Mail, MapPin } from 'lucide-react';
import profileImage from 'figma:asset/aa3456f47156cbfc412ff605acdf69f880902aa0.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A0826D]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A0826D]/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#A0826D]/30 hover:border-[#A0826D] transition-all">
            <img 
              src={profileImage} 
              alt="Ieva Rudokaitė" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="inline-block mb-6 px-6 py-2 bg-[#A0826D]/10 border border-[#A0826D]/20 rounded-full">
          <p className="text-[#A0826D]">Available for Opportunities</p>
        </div>

        <h1 className="text-6xl md:text-8xl mb-6">
          <span className="text-white">Ieva</span>{' '}
          <span className="text-[#A0826D]">Rudokaitė</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-400 mb-12">
          Marketing & SEO Specialist
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a 
            href="tel:+37061753682"
            className="flex items-center gap-2 hover:text-[#A0826D] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+370 617 53682</span>
          </a>
          <a 
            href="mailto:rudokaite.ieva@gmail.com"
            className="flex items-center gap-2 hover:text-[#A0826D] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>rudokaite.ieva@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Kaunas, Lietuva</span>
          </div>
        </div>

        <div className="mt-16">
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-[#A0826D] text-white hover:bg-[#A0826D]/90 transition-all transform hover:scale-105 rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}