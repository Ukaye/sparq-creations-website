"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
}

const projects = projectsData.projects as Project[];
const projectsById = projects.reduce((acc, p) => ({ ...acc, [p.id]: p }), {} as Record<string, Project>);

interface ProjectCardProps {
    id: string;
    className?: string;
    aspectRatio?: string;
}

export default function ProjectCard({ id, className = "", aspectRatio = "" }: ProjectCardProps) {
    const project = projectsById[id];
    if (!project) return null;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden rounded-lg shadow-sm ${className}`}
        >
            <div className={`relative overflow-hidden bg-sparq-dark ${aspectRatio}`}>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1000}
                    className={`w-full ${aspectRatio ? 'h-full object-cover' : 'h-auto'}`}
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                    }}
                />
            </div>

            <div className="absolute top-3 left-3">
                <span className="px-4 py-2 bg-sparq-orange text-white text-[20px] md:text-sm font-normal rounded-lg">
                    {project.category}
                </span>
            </div>
        </motion.div>
    );
}
