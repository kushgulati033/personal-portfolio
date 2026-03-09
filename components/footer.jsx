export function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Kush Gulati. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="mailto:kushgulati150@gmail.com"
                        className="text-slate-400 hover:text-primary no-underline text-sm transition-colors"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary no-underline text-sm transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
