"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
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

interface PortfolioGridProps {
  showFeaturedOnly?: boolean;
  maxItems?: number;
  showFilters?: boolean;
}

export default function PortfolioGrid({
  showFeaturedOnly = false,
  maxItems,
  showFilters = false,
}: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = projectsData.projects as Project[];
  const categories = projectsData.categories;

  const filteredProjects = projects
    .filter((project) => {
      if (showFeaturedOnly && !project.featured) return false;
      if (selectedCategory === "All") return true;
      return project.category === selectedCategory;
    })
    .slice(0, maxItems || projects.length);

  return (
    <>
      {/* Category Filters */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-sparq-orange text-white"
                  : "bg-white/10 text-sparq-gray hover:bg-sparq-orange/20 hover:text-sparq-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid - Masonry Style */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Create varied masonry layout based on index
            const getGridSpan = (i: number) => {
              // Large items (span 2 rows)
              if (i === 0 || i === 4 || i === 8 || i === 12) return "row-span-2";
              // Wide items (span 2 cols on medium+)
              if (i === 2 || i === 7 || i === 11) return "md:col-span-2";
              // Normal items
              return "";
            };
            
            return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${getGridSpan(index)}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-full overflow-hidden bg-sparq-dark">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={70}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Category Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-sparq-orange text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-sans text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-sparq-gray-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.subtitle}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

