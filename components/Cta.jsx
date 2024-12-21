import Link from 'next/link';
import { RiMailLine } from 'react-icons/ri';

const Cta = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 pt-4 pb-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Please feel free to reach out to connect.
        </h2>
        <div className="bg-gray-200 dark:bg-gray-700 px-5 py-4 rounded-md text-center mt-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg">Reach out to me at</p>
          <Link
            href="mailto:alvyn.kwon@gmail.com"
            className="text-black hover:underline hover:text-blue-500 text-xl font-medium flex items-center justify-center"
          >
            <RiMailLine className="mr-2" />
            alvyn.kwon@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
