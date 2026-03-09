const achievements = [
    'Led a live production project as Project Head',
    'Built multiple backend and system-level projects',
    'Strong Data Structures and Algorithms expertise',
    'Participated in national-level tech competitions',
    'Consistent academic performer in Computer Science Engineering',
];

export function Achievements() {
    return (
        <section id="achievements" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-heading">Achievements</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="card flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-primary text-sm font-bold">{index + 1}</span>
                            </div>
                            <p className="text-slate-300">{achievement}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
