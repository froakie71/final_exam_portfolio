'use client';
import Link from 'next/link';

export function Navigation() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-xl font-bold text-indigo-600">
                        My Portfolio
                    </Link>
                    <div className="flex space-x-8">
                        <Link href="/#projects" className="text-gray-600 hover:text-gray-900">
                            Projects
                        </Link>
                        <Link href="/#about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>                        <Link href="/#skills" className="text-gray-600 hover:text-gray-900">
                            Skills
                        </Link>
                        <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                            Portfolio
                        </Link>
                        <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
