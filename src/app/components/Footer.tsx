'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">                    <div>
                        <h3 className="text-xl font-bold mb-4">Francis Ampoon</h3>
                        <p className="text-gray-400">
                            Frontend Developer specializing in React and Flutter development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#projects" className="text-gray-400 hover:text-white">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-gray-400 hover:text-white">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills" className="text-gray-400 hover:text-white">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <p className="text-gray-400">
                            Address: Ibabao San-Vicente Lilo-an Cebu<br />
                            Email: francis@example.com<br />
                            LinkedIn: linkedin.com/in/francisdoe<br />
                            GitHub: github.com/francisdoe
                        </p>
                    </div>
                </div>                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    © {new Date().getFullYear()} My Portfolio
                </div>
            </div>
        </footer>
    );
}
