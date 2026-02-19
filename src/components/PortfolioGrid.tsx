"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
}



export default function PortfolioGrid() {
    // Cast data from JSON
    const projects = projectsData.projects as Project[];

    return (
        <div className="w-full">
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                <AnimatePresence mode="popLayout">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className={`${project.category === "Brand Merchandise" ? "-translate-y-[160px]" : ""} ${["Recognition Assets", "Brand Strategy"].includes(project.category) ? "-translate-y-[370px]" : ""} ${["packaging-design-3", "brand-identity-2"].includes(project.id) ? "translate-y-6" : ""}`}
                        >
                            <ProjectCard
                                id={project.id}
                                aspectRatio={["packaging-design-3", "brand-identity-2"].includes(project.id) ? "aspect-[2/3]" : ["Corporate Branding", "Brand Merchandise"].includes(project.category) ? "aspect-[4/3]" : "aspect-[3/4]"}
                            />

                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
