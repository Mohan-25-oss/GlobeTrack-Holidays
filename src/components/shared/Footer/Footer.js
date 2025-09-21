// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold">GlobeTrack Holidays</h2>
                    <p className="mt-3 text-gray-300">
                        Your trusted partner for Visa, Flights & Tours.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-400">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            Instagram
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-400 mt-10">
                © {new Date().getFullYear()} GlobeTrack Holidays. All Rights Reserved.
            </div>
        </footer>
    );
}
