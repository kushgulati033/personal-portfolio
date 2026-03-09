const projects = [
    {
        name: 'DSA Learning Hub',
        description: 'Interactive desktop platform for learning Data Structures and Algorithms with visualizations.',
        features: [
            'Step-by-step algorithm visualizations',
            'Modular OOP architecture for scalability',
            'Interactive GUI for better learning',
        ],
        technologies: ['Python', 'Tkinter', 'SQLite', 'JSON'],
    },
    {
        name: 'Linux Shell Clone',
        description: 'Custom command line interpreter replicating Linux terminal behavior.',
        features: [
            'Command execution and process handling',
            'Piping and redirection support',
            'Background process execution',
            'Realistic terminal interaction',
        ],
        technologies: ['C++', 'POSIX System Calls', 'Process Management'],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="section-heading">Projects</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                    {projects.map((project) => (
                        <div key={project.name} className="card flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-white mb-2">{project.name}</h3>
                            <p className="text-slate-400 mb-4">{project.description}</p>
                            <ul className="text-slate-300 space-y-1 mb-6 text-sm">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">&#10003;</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
