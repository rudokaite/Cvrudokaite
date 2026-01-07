import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <Summary />
      <Expertise />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
