"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MessageCircle, Globe, User, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/images/logo.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const pathname = usePathname();
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
                setActiveDropdown(null);
                setMobileDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const navItems = [
        { href: "/", label: "Home" },
        { 
            href: "/visaoffers", 
            label: "Visa Offers",
            dropdown: [
                { href: "/touristVisa", label: "Tourist Visa" },
                { href: "/businessVisa", label: "Business Visa" },
                { href: "/studentVisa", label: "Student Visa" },
            ]
        },
        { 
            href: "/services", 
            label: "Services",
            dropdown: [
                { href: "/services/flights", label: "Flight Booking" },
                { href: "/services/hotels", label: "Hotel Reservations" },
                { href: "/services/tours", label: "Tour Packages" },
            ]
        },
        { href: "/destinations", label: "Destinations" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const toggleMobileDropdown = (label) => {
        setMobileDropdown(mobileDropdown === label ? null : label);
    };

    const closeAllMenus = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileDropdown(null);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setMobileDropdown(null);
        }
    };

    return (
        <header
            ref={navbarRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 shadow-2xl backdrop-blur-md"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Nav */}
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={closeAllMenus}>
                        <div className="relative rounded-full p-1 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Image 
                                src={logo} 
                                alt="GlobeTrack Holidays Logo" 
                                width={44} 
                                height={44} 
                                className="rounded-full object-cover" 
                                priority
                            />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 drop-shadow-md text-2xl md:text-3xl font-extrabold">
                            GlobeTrack
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-1 items-center font-medium">
                        {navItems.map((item, idx) => (
                            <div 
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 ${
                                        pathname === item.href
                                            ? "bg-white/20 text-yellow-300 shadow-inner"
                                            : "text-white hover:bg-white/10 hover:text-yellow-200"
                                    }`}
                                    onClick={closeAllMenus}
                                >
                                    {item.label}
                                    {item.dropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                                </Link>
                                
                                {/* Active indicator */}
                                {pathname === item.href && (
                                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-300 rounded-full"></span>
                                )}
                                
                                {/* Dropdown menu */}
                                {item.dropdown && activeDropdown === item.label && (
                                    <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden z-50 border border-white/20">
                                        {item.dropdown.map((dropdownItem, dIdx) => (
                                            <Link
                                                key={dIdx}
                                                href={dropdownItem.href}
                                                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100 last:border-b-0"
                                                onClick={closeAllMenus}
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button 
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-md transition-all duration-300 hover:scale-110" 
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>

                        <button 
                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-md transition-all duration-300 hover:scale-105" 
                            aria-label="Account"
                        >
                            <User size={18} />
                            <span className="text-sm font-medium">Account</span>
                        </button>

                        <Link href="/contact" onClick={closeAllMenus}>
                            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <Globe size={18} />
                                Book Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-md transition-all duration-300"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Fixed height with scrolling */}
            <div className={`lg:hidden bg-gradient-to-b from-blue-700 via-purple-700 to-pink-600 shadow-2xl transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
                <div className="p-4 border-b border-white/20">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search destinations, services..."
                            className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
                        />
                    </div>
                </div>

                <nav className="flex flex-col p-4 space-y-1 text-white font-medium max-h-64 overflow-y-auto">
                    {navItems.map((item, idx) => (
                        <div key={idx}>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={item.href}
                                        onClick={closeAllMenus}
                                        className={`flex-grow px-4 py-3 rounded-xl transition-all duration-300 ${
                                            pathname === item.href 
                                                ? "bg-white/20 text-yellow-300" 
                                                : "hover:bg-white/10"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.dropdown && (
                                        <button
                                            onClick={() => toggleMobileDropdown(item.label)}
                                            className="p-3 rounded-lg hover:bg-white/10 transition-colors"
                                            aria-label={`Toggle ${item.label} menu`}
                                        >
                                            <ChevronDown 
                                                size={18} 
                                                className={`transition-transform duration-300 ${
                                                    mobileDropdown === item.label ? "rotate-180" : ""
                                                }`} 
                                            />
                                        </button>
                                    )}
                                </div>
                                
                                {/* Mobile dropdown */}
                                {item.dropdown && mobileDropdown === item.label && (
                                    <div className="ml-6 mt-1 space-y-1 border-l-2 border-white/20 pl-2">
                                        {item.dropdown.map((dropdownItem, dIdx) => (
                                            <Link
                                                key={dIdx}
                                                href={dropdownItem.href}
                                                onClick={closeAllMenus}
                                                className="block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="pt-4 border-t border-white/20 mt-4 flex flex-col gap-2">
                        <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl transition-all duration-300">
                            <User size={20} />
                            My Account
                        </button>
                        
                        <Link href="/contact" onClick={closeAllMenus}>
                            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl w-full transition-all duration-300 flex items-center justify-center gap-2">
                                <Globe size={18} />
                                Book Now
                            </button>
                        </Link>
                    </div>
                </nav>

                <div className="p-4 border-t border-white/20 text-white text-sm">
                    <div className="flex items-center gap-2 mb-2 transition-all hover:text-yellow-300">
                        <Phone size={16} />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 transition-all hover:text-green-300">
                        <MessageCircle size={16} />
                        <span>info@globetrack.com</span>
                    </div>
                </div>
            </div>
        </header>
    );
}