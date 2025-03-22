import { Link } from "wouter";
import { motion } from "framer-motion";
import { useUser } from "@/lib/userContext";
import { paths } from "@/lib/mockData";

const PathCard = ({ path, index }: { path: any, index: number }) => {
  const { setCurrentPath } = useUser();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => setCurrentPath(path.id)}
    >
      <div className="h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="w-full h-full flex items-center justify-center">
          <path.icon className="h-24 w-24 text-white opacity-30" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <div className={`flex items-center justify-center h-10 w-10 rounded-md ${path.bgColor} text-white`}>
            <i className={`${path.iconClass} text-xl`}></i>
          </div>
          <h3 className="ml-3 text-xl font-semibold text-neutral-900">{path.title}</h3>
        </div>
        <p className="mt-4 text-neutral-600">
          {path.description}
        </p>
        <div className="mt-6">
          {path.tags.map((tag: string, idx: number) => (
            <span key={idx} className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${path.tagBg} ${path.tagText} ${idx > 0 ? 'ml-2' : ''}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Link href={`/learn/${path.id}`}>
            <a className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${path.btnBg} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${path.id === 'engineering' ? 'primary' : path.id === 'healthcare' ? 'teal-500' : 'amber-500'}`}>
              Start Learning
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PathSelectionPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Choose Your Learning Path
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-white opacity-90 max-w-3xl mx-auto"
            >
              Select the career path that aligns with your interests and goals
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {paths.map((path, index) => (
            <PathCard key={path.id} path={path} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathSelectionPage;
