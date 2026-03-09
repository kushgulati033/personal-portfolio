'use client';

import { useState } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-primary no-underline">
                    KG
                </a>
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-slate-300 hover:text-primary no-underline transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-slate-300 hover:text-primary cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-md">
                    <ul className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-primary no-underline transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
