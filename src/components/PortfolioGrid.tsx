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

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-sparq-gray-dark to-sparq-dark">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sparq-orange/20 via-sparq-dark to-sparq-dark flex items-center justify-center">
                  <span className="text-4xl opacity-30">✦</span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sparq-dark via-sparq-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Category Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-sparq-orange text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg font-bold text-white mb-1">
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
          ))}
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

