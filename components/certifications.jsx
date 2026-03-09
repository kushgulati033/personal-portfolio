const certifications = [
    'Programming Practice (28 Days) — AlgoTutor',
    'Digital Systems: From Logic Gates to Processors — Universitat Autònoma de Barcelona',
    'Fundamentals of Network Communication — University of Colorado System',
];

export function Certifications() {
    return (
        <section id="certifications" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-heading">Certifications</h2>
                <div className="flex flex-col gap-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="card flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>
                            </div>
                            <p className="text-slate-300">{cert}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
