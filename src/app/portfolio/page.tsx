
import React from 'react';

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

const dummyProjects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
        imageUrl: 'https://placehold.co/600x400',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'A productivity application for managing tasks and items with real-time updates.',
        imageUrl: 'https://placehold.co/600x400',
        tags: ['React', 'Firebase', 'Redux'],
    },
    {
        id: '3',
        title: 'Portfolio Website V1',
        description: 'The first version of my portfolio website showcasing my early work.',
        imageUrl: 'https://placehold.co/600x400',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
];

export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here is a collection of my recent projects. I specialize in building high-quality web applications using modern technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-video relative bg-gray-100">
                            {/* Using a placeholder image div for now, or img tag */}
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
