"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  projectType: string;
  deliverables: string[];
  description: string;
  image: string;
  featured: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const allProjects = projectsData.projects as Project[];
  const relatedProjects = allProjects
    .filter((p) => p.id !== project?.id)
    .slice(0, 3);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-sparq-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="relative lg:w-3/5 aspect-video lg:aspect-auto lg:min-h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  quality={80}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-sparq-orange text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/5 p-6 lg:p-8">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-sparq-gray mb-2">
                    Project Type
                  </h4>
                  <p className="text-sparq-dark">{project.projectType}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-sparq-gray/20">
                  <h4 className="text-sm font-semibold text-sparq-gray mb-2">
                    Industry
                  </h4>
                  <p className="text-sparq-dark">{project.industry}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-sparq-gray/20">
                  <h4 className="text-sm font-semibold text-sparq-gray mb-2">
                    What We Delivered
                  </h4>
                  <ul className="space-y-2">
                    {project.deliverables.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sparq-dark"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sparq-orange" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/contact" variant="primary" className="w-full mb-8">
                  Get a Quote
                </Button>

                {/* Related Works */}
                <div>
                  <h4 className="text-sm font-semibold text-sparq-gray mb-4">
                    More Works
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {relatedProjects.map((relatedProject) => (
                      <div
                        key={relatedProject.id}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      >
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          quality={70}
                          sizes="100px"
                        />
                        <div className="absolute inset-0 bg-sparq-dark/40 group-hover:bg-sparq-dark/60 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

