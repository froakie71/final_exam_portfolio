'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-xl font-bold text-indigo-600">
                        My Portfolio
                    </Link>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/#projects" className="text-gray-600 hover:text-gray-900">
                            Projects
                        </Link>
                        <Link href="/#about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/#skills" className="text-gray-600 hover:text-gray-900">
                            Skills
                        </Link>
                        <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                            Portfolio
                        </Link>
                        <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Open menu"
                    >
                        <Bars3Icon className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
            </div>
            {/* Mobile Drawer */}
            {drawerOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden">
                    <div className="w-2/3 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
                        <button
                            className="self-end mb-8 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setDrawerOpen(false)}
                            aria-label="Close menu"
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-600" />
                        </button>
                        <Link href="/#projects" className="mb-4 text-gray-700 hover:text-indigo-600 text-lg" onClick={() => setDrawerOpen(false)}>
                            Projects
                        </Link>
                        <Link href="/#about" className="mb-4 text-gray-700 hover:text-indigo-600 text-lg" onClick={() => setDrawerOpen(false)}>
                            About
                        </Link>
                        <Link href="/#skills" className="mb-4 text-gray-700 hover:text-indigo-600 text-lg" onClick={() => setDrawerOpen(false)}>
                            Skills
                        </Link>
                        <Link href="/portfolio" className="mb-4 text-gray-700 hover:text-indigo-600 text-lg" onClick={() => setDrawerOpen(false)}>
                            Portfolio
                        </Link>
                        <Link href="/#contact" className="mb-4 text-gray-700 hover:text-indigo-600 text-lg" onClick={() => setDrawerOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
