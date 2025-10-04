import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm flex-grow mt-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          className="mt-4 text-sm font-medium text-indigo-600 hover:underline"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}
