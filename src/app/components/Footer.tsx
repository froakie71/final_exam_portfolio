'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Guitar Shop</h3>
                        <p className="text-gray-400">
                            Your destination for premium guitars and exceptional service.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#guitars" className="text-gray-400 hover:text-white">
                                    Our Guitars
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-gray-400 hover:text-white">
                                    About Us
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
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">
                            Email: info@guitarshop.com<br />
                            Phone: (555) 123-4567<br />
                            Address: 123 Guitar Street, Music City
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    © {new Date().getFullYear()} Guitar Shop. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
