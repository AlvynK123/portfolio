import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';

const TechnicalSkills = () => {
  return (
    <section className="py-8 xl:py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6 xl:mb-12 text-center mx-auto">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Programming & Markup Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Java</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Python</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">JavaScript</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">TypeScript</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">HTML</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">CSS</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">SQL</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">C/C++</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">MATLAB</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">React</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Next.js</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Express.js</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Tailwind CSS</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Django</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">PyTorch</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Prisma</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Pandas</div>
            </div>
          </div>

          <div className="md:col-span-2 xl:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-center">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">PostgreSQL</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Docker</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">AWS</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Git</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Firebase</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Linux</div>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-center text-sm sm:text-base">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;