"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    FaPassport,
    FaPlane,
    FaSuitcaseRolling,
    FaShieldAlt,
    FaHotel,
    FaCar,
    FaUmbrellaBeach,
    FaCertificate,
    FaHeadset,
    FaGlobe
} from "react-icons/fa";
import {
    CheckCircle,
    ArrowRight,
    Users,
    Clock,
    Star,
    Award,
    Phone,
    MessageCircle,
    Globe
} from "lucide-react";
import SafeText from "@/components/safeText";

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        const suffix = value.replace(/[0-9]/g, '');

        if (end === 0) return;

        const incrementTime = (duration / end) * 1000;
        const timer = setInterval(() => {
            start += 1;
            setCount(start + suffix);
            if (start >= end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return <span ref={ref}>{isInView ? count : "0"}</span>;
};

export default function Services() {
    const text = `We're honest, transparent, and say "hello" — always!`;
    const [selectedService, setSelectedService] = useState(null);
    const [activeTab, setActiveTab] = useState("all");
    const [showCertificate, setShowCertificate] = useState(false);

    const serviceCategories = [
        { id: "all", name: "All Services" },
        { id: "visa", name: "Visa Services" },
        { id: "travel", name: "Travel Arrangements" },
        { id: "insurance", name: "Insurance & Protection" },
        { id: "premium", name: "Premium Services" },
    ];

    const services = [
        {
            id: 1,
            title: "Visa Consultancy",
            description: "Expert guidance for all types of visas worldwide. We help you get your visa hassle-free and on time.",
            fullDescription: "Our visa experts provide comprehensive assistance for tourist, business, student, and family visas. We handle documentation, application submission, and follow-up to ensure your visa process is smooth and successful.",
            icon: <FaPassport className="text-blue-500" size={30} />,
            category: "visa",
            features: ["Document Preparation", "Application Submission", "Follow-up Services", "Expert Consultation"],
            price: "From $50",
            processingTime: "3-7 days",
            rating: 4.9,
            popular: true,
            image: "https://media.licdn.com/dms/image/v2/C4D1BAQFyUfAbab8HZw/company-background_10000/company-background_10000/0/1583597369322/global_visa_consultants_cover?e=2147483647&v=beta&t=b6kBMMitm9dFZ5ZhfKnR9o6iVoGGF7mOs20HqA1Q3jY"
        },
        {
            id: 2,
            title: "Flight Booking",
            description: "Book affordable flights with trusted airlines. Enjoy seamless booking experience with best prices.",
            fullDescription: "Get the best deals on flights to any destination worldwide. We partner with major airlines to offer competitive prices, flexible dates, and 24/7 support for your travel needs.",
            icon: <FaPlane className="text-purple-500" size={30} />,
            category: "travel",
            features: ["Best Price Guarantee", "24/7 Booking", "Flexible Dates", "Seat Selection"],
            price: "No Booking Fees",
            processingTime: "Instant",
            rating: 4.8,
            popular: true,
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Tour Packages",
            description: "Custom travel packages to explore your dream destinations. Luxury, adventure, and culture – we cover all.",
            fullDescription: "Experience tailor-made tour packages designed to match your preferences and budget. From luxury resorts to adventure trips, we create unforgettable travel experiences.",
            icon: <FaSuitcaseRolling className="text-green-500" size={30} />,
            category: "travel",
            features: ["Custom Itineraries", "Local Guides", "Luxury Accommodations", "Cultural Experiences"],
            price: "Custom Quotes",
            processingTime: "1-2 days",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Travel Insurance",
            description: "Stay safe during your travels. We offer comprehensive travel insurance for peace of mind.",
            fullDescription: "Protect your journey with comprehensive travel insurance covering medical emergencies, trip cancellations, lost luggage, and more. Travel with confidence knowing you're covered.",
            icon: <FaShieldAlt className="text-red-500" size={30} />,
            category: "insurance",
            features: ["Medical Coverage", "Trip Cancellation", "Lost Luggage", "24/7 Assistance"],
            price: "From $25",
            processingTime: "Instant",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Hotel Reservations",
            description: "Luxury to budget accommodations worldwide. Best rates guaranteed with instant confirmation.",
            fullDescription: "Book from thousands of hotels, resorts, and apartments worldwide. We offer best rate guarantee, instant confirmation, and exclusive member discounts.",
            icon: <FaHotel className="text-yellow-500" size={30} />,
            category: "travel",
            features: ["Best Rates", "Instant Confirmation", "Free Cancellation", "Member Discounts"],
            price: "No Booking Fees",
            processingTime: "Instant",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Airport Transfers",
            description: "Comfortable and reliable transportation to and from airports worldwide.",
            fullDescription: "Enjoy stress-free airport transfers with professional drivers, comfortable vehicles, and real-time flight monitoring. We ensure you reach your destination safely and on time.",
            icon: <FaCar className="text-indigo-500" size={30} />,
            category: "travel",
            features: ["Professional Drivers", "Flight Monitoring", "Multiple Vehicles", "24/7 Service"],
            price: "From $30",
            processingTime: "Instant",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "Vacation Planning",
            description: "Complete vacation planning from itinerary to experiences. Make your dream vacation a reality.",
            fullDescription: "Our travel experts design complete vacation packages including flights, accommodation, activities, and dining. We handle all details so you can focus on enjoying your trip.",
            icon: <FaUmbrellaBeach className="text-pink-500" size={30} />,
            category: "premium",
            features: ["Personalized Itineraries", "Experience Booking", "Dining Reservations", "Dedicated Planner"],
            price: "Service Fee $99",
            processingTime: "3-5 days",
            rating: 4.9,
            popular: true,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 8,
            title: "Travel Certification",
            description: "Get certified travel documents and international driving permits for your journey.",
            fullDescription: "Obtain necessary travel certifications including international driving permits, travel authorization documents, and other required certifications for your destination.",
            icon: <FaCertificate className="text-teal-500" size={30} />,
            category: "visa",
            features: ["Fast Processing", "Expert Guidance", "Document Verification", "Delivery Service"],
            price: "From $40",
            processingTime: "2-4 days",
            rating: 4.7,
            image: "https://images.template.net/368409/Travel-Agency-Achievement-Certificate-Template-edit-online.png"
        }
    ];

    const filteredServices = services.filter(service =>
        activeTab === "all" || service.category === activeTab
    );

    const stats = [
        { number: "10K+", label: "Happy Clients", icon: <Users className="text-blue-500" size={24} /> },
        { number: "98%", label: "Success Rate", icon: <CheckCircle className="text-green-500" size={24} /> },
        { number: "24/7", label: "Support", icon: <FaHeadset className="text-purple-500" size={24} /> },
        { number: "50+", label: "Destinations", icon: <Globe className="text-yellow-500" size={24} /> }
    ];

    // Fallback image for error handling
    const fallbackImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNTAgMTUwTDIxMCAxMTBMMjcwIDE3MEwyMTAgMjMwTDI1MCAxOTBMMjkwIDIzMEwyMzAgMTcwTDI5MCAxMTBMMjUwIDE1MFoiIGZpbGw9IiNENEU0RTUiLz4KPC9zdmc+";

    return (
        <div className="pt-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">

            <div className="text-gray-700 text-lg">
                <SafeText text={text} />
            </div>

            {/* Hero Section */}
            <section className="text-center py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform skew-y-3 -rotate-3"></div>
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
                </motion.h1>
                <motion.p
                    className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Comprehensive travel solutions designed to make your journey seamless, secure, and unforgettable
                </motion.p>
            </section>

            {/* Stats Section with Animated Counters */}
            <motion.section
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex justify-center mb-4">
                            <div className={`p-3 rounded-full ${index === 0 ? "bg-blue-100" :
                                index === 1 ? "bg-green-100" :
                                    index === 2 ? "bg-purple-100" : "bg-yellow-100"
                                }`}>
                                {stat.icon}
                            </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                            <AnimatedCounter value={stat.number} duration={2000} />
                        </div>
                        <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.section>

            {/* Service Categories */}
            <motion.section
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="flex flex-wrap justify-center gap-4">
                    {serviceCategories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === category.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </motion.section>

            {/* Services Grid with Images */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <AnimatePresence>
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer width={600} height={400}"
                            onClick={() => setSelectedService(service)}

                        >
                            {/* Service Image */}
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-full "
                                    onError={(e) => {
                                        e.target.src = fallbackImage;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                {service.popular && (
                                    <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                                        Popular
                                    </div>
                                )}
                            </div>

                            <div className="p-6 relative">
                                <div className="flex justify-center mb-4 -mt-12">
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors shadow-md">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-center mb-4">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-blue-600">{service.price}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{service.processingTime}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < Math.floor(service.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-1">({service.rating})</span>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    Learn More
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </section>

            {/* Process Section */}
            <motion.section
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    How It <span className="text-blue-600">Works</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-blue-600">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultation</h3>
                        <p className="text-gray-600">Share your travel needs and preferences with our experts</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-blue-600">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Planning</h3>
                        <p className="text-gray-600">We create a customized plan tailored to your requirements</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-blue-600">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Execution</h3>
                        <p className="text-gray-600">We handle all arrangements while you enjoy your journey</p>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Journey?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Let our travel experts create the perfect itinerary for your next adventure
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <Phone size={20} />
                        Call Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
                        <MessageCircle size={20} />
                        WhatsApp
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                        Email Us
                    </button>
                    <button
                        onClick={() => setShowCertificate(true)}
                        className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                        <FaCertificate size={20} />
                        View Certificate
                    </button>
                </div>
            </motion.section>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-80">
                                <Image
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = fallbackImage;
                                        e.target.width = 600;               // width দিন
                                        e.target.height = 400;              // height দিন
                                    }}
                                />
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                                            {selectedService.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={16}
                                                            className={i < Math.floor(selectedService.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-600">({selectedService.rating} rating)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-3">Service Overview</h3>
                                        <p className="text-gray-600 mb-4">{selectedService.fullDescription}</p>

                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Starting Price:</span>
                                                <span className="font-semibold text-blue-600">{selectedService.price}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Processing Time:</span>
                                                <span>{selectedService.processingTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
                                        <ul className="space-y-2">
                                            {selectedService.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-gray-600">
                                                    <CheckCircle size={16} className="text-green-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                    Book This Service
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
}