const experiences = [
    {
        role: 'Project Head',
        company: 'Search Ashiyena',
        duration: 'Jan 2025 – Jul 2025',
        responsibilities: [
            'Led full development and maintenance of the platform',
            'Managed development team including hiring and task delegation',
            'Supervised feature upgrades and workflow management',
            'Coordinated backend operations and deployment',
        ],
        technologies: ['WordPress', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        role: 'Python Developer Intern',
        company: 'Rarr Technologies Pvt Ltd',
        duration: 'Jun 2024 – Sept 2024',
        responsibilities: [
            'Built automated Resume Parser using Python and NLP',
            'Extracted skills and experience from unstructured resumes',
            'Improved parsing accuracy using Machine Learning models',
            'Worked on large-scale text-processing systems',
        ],
        technologies: ['Python', 'NLP', 'Machine Learning', 'LLMs'],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-heading">Experience</h2>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/30 hidden sm:block" />
                    <div className="flex flex-col gap-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="card sm:ml-12 relative">
                                <div className="hidden sm:block absolute -left-[2.55rem] top-8 w-3 h-3 rounded-full bg-primary border-2 border-slate-900" />
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                                    <h3 className="text-white">{exp.role}</h3>
                                    <span className="text-primary font-medium">{exp.company}</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-4">{exp.duration}</p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
