const skillCategories = [
    {
        title: 'Languages',
        items: ['C++', 'Python', 'Java', 'Shell Scripting'],
    },
    {
        title: 'Web & Frameworks',
        items: ['HTML', 'CSS', 'React.js', 'Node.js', 'WordPress', 'PHP'],
    },
    {
        title: 'Databases & Cloud',
        items: ['MySQL', 'AWS'],
    },
    {
        title: 'Tools',
        items: ['GitHub', 'Power BI', 'Microsoft Excel', 'Linux'],
    },
    {
        title: 'Core Strengths',
        items: [
            'Data Structures & Algorithms',
            'Backend Development',
            'API Development',
            'Database Management',
            'Object-Oriented Programming',
            'System Design Basics',
        ],
    },
    {
        title: 'Soft Skills',
        items: ['Problem Solving', 'Leadership', 'Team Collaboration', 'Project Management', 'Adaptability'],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="section-heading">Skills</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="card">
                            <h3 className="text-primary mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span key={item} className="badge">
                                        {item}
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
