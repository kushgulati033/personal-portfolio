export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-3xl text-center">
                <p className="text-primary font-medium mb-4 text-lg">Hello, I&apos;m</p>
                <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                    Kush Gulati
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 mb-4">
                    Software Developer
                </p>
                <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                    Passionate about building efficient, scalable, and user-friendly applications.
                    I enjoy solving complex problems and creating impactful digital solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#contact" className="btn btn-lg no-underline">
                        Contact Me
                    </a>
                    <a href="#projects" className="btn btn-lg btn-outline no-underline">
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
