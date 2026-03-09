import '../styles/globals.css';

export const metadata = {
    title: 'Kush Gulati | Software Developer',
    description:
        'Passionate Software Developer focused on building efficient, scalable, and user-friendly applications.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                {children}
            </body>
        </html>
    );
}
