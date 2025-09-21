"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SafeText from "@/components/safeText";
import {
    MapPin,
    Star,
    Plane,
    Search,
    Filter,
    Globe,
    Heart,
    Calendar,
    Users,
    ArrowRight
} from "lucide-react";

export default function Destinations() {
    const text = `We're honest, transparent, and say "hello" — always!`;
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [favorites, setFavorites] = useState(new Set());
    const [selectedDestination, setSelectedDestination] = useState(null);

    const toggleFavorite = (name) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(name)) {
            newFavorites.delete(name);
        } else {
            newFavorites.add(name);
        }
        setFavorites(newFavorites);
    };

    const categories = [
        { id: "all", name: "All Destinations" },
        { id: "beach", name: "Beach" },
        { id: "city", name: "City" },
        { id: "adventure", name: "Adventure" },
        { id: "cultural", name: "Cultural" },
    ];

    const destinations = [
        {
            id: 1,
            name: "Paris, France",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            description: "The city of love, art, and iconic landmarks like the Eiffel Tower.",
            category: "city",
            price: "$1,200",
            duration: "7 days",
            rating: 4.8,
            reviews: 1245,
            bestTime: "Apr-Jun",
            highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "French Cuisine"]
        },
        {
            id: 2,
            name: "Dubai, UAE",
            image: "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=",
            description: "A luxurious city with stunning architecture and desert adventures.",
            category: "city",
            price: "$1,500",
            duration: "5 days",
            rating: 4.7,
            reviews: 987,
            bestTime: "Nov-Mar",
            highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah", "Luxury Shopping"]
        },
        {
            id: 3,
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            description: "Tropical paradise with crystal clear waters and white sandy beaches.",
            category: "beach",
            price: "$2,300",
            duration: "6 days",
            rating: 4.9,
            reviews: 1567,
            bestTime: "Dec-Apr",
            highlights: ["Overwater Villas", "Snorkeling", "Spa Treatments", "Sunset Cruises"]
        },
        {
            id: 4,
            name: "Tokyo, Japan",
            image: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
            description: "Blend of modern life and tradition, temples, and neon lights.",
            category: "cultural",
            price: "$1,800",
            duration: "8 days",
            rating: 4.8,
            reviews: 1342,
            bestTime: "Mar-May",
            highlights: ["Senso-ji Temple", "Shibuya Crossing", "Mt. Fuji", "Sushi Making"]
        },
        {
            id: 5,
            name: "New York, USA",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
            description: "The city that never sleeps, famous for skyline and culture.",
            category: "city",
            price: "$1,600",
            duration: "6 days",
            rating: 4.6,
            reviews: 1123,
            bestTime: "Apr-Jun",
            highlights: ["Statue of Liberty", "Broadway Shows", "Central Park", "Museums"]
        },
        {
            id: 6,
            name: "Sydney, Australia",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBGHHzqlCjPuRpG_xgDVqlW7Lv_NgrK7ZUUmWY1Y61nvSvo9gzc2mtOWNqxDGei97Fmk&usqp=CAU",
            description: "Iconic Opera House, beautiful harbor, and beaches.",
            category: "city",
            price: "$2,100",
            duration: "9 days",
            rating: 4.7,
            reviews: 876,
            bestTime: "Sep-Nov",
            highlights: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge", "Wildlife Parks"]
        },
        {
            id: 7,
            name: "Santorini, Greece",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
            description: "Stunning white-washed buildings with blue domes overlooking the Aegean Sea.",
            category: "beach",
            price: "$1,900",
            duration: "5 days",
            rating: 4.9,
            reviews: 1432,
            bestTime: "Jun-Sep",
            highlights: ["Oia Sunset", "Wine Tasting", "Volcanic Beaches", "Ancient Ruins"]
        },
        {
            id: 8,
            name: "Swiss Alps, Switzerland",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
            description: "Majestic mountains, pristine lakes, and charming alpine villages.",
            category: "adventure",
            price: "$2,400",
            duration: "7 days",
            rating: 4.8,
            reviews: 965,
            bestTime: "Dec-Mar",
            highlights: ["Skiing", "Mountain Railways", "Lake Geneva", "Chocolate Tours"]
        },
        {
            id: 9,
            name: "Bali, Indonesia",
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",
            description: "Tropical paradise with ancient temples, lush rice terraces, and vibrant culture.",
            category: "cultural",
            price: "$1,400",
            duration: "8 days",
            rating: 4.7,
            reviews: 1789,
            bestTime: "Apr-Oct",
            highlights: ["Ubud Rice Terraces", "Traditional Temples", "Beach Clubs", "Spa Retreats"]
        }
    ];

    const filteredDestinations = destinations.filter(dest => {
        const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory;
        const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dest.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Fallback image data URL
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
                    Discover Amazing{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Destinations
                    </span>
                </motion.h1>
                <motion.p
                    className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Explore the world&apos;s most breathtaking places and start planning your next adventure.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    className="max-w-2xl mx-auto mt-8 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </motion.div>
            </section>

            {/* Category Filters */}
            <motion.section
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                                }`}
                        >
                            <Globe size={16} />
                            {category.name}
                        </button>
                    ))}
                </div>
            </motion.section>

            {/* Destinations Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <AnimatePresence>
                    {filteredDestinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedDestination(destination)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.title}
                                    width={500}
                                    height={300}
                                    unoptimized
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Favorite Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(destination.name);
                                    }}
                                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <Heart
                                        size={20}
                                        className={favorites.has(destination.name) ? "text-red-500 fill-red-500" : "text-white"}
                                    />
                                </button>

                                {/* Price Tag */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="font-bold text-blue-600">From {destination.price}</span>
                                </div>

                                {/* Rating */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-white font-semibold">{destination.rating}</span>
                                    <span className="text-white/80 ml-1">({destination.reviews})</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {destination.name}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {destination.description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{destination.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} />
                                        <span>Best time: {destination.bestTime}</span>
                                    </div>
                                </div>

                                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    Explore Now
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </section>

            {/* Call to Action */}
            <motion.section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Let our travel experts help you plan the perfect trip to your dream destination
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                        Contact Our Experts
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                        Browse All Packages
                    </button>
                </div>
            </motion.section>

            {/* Destination Modal */}
            <AnimatePresence>
                {selectedDestination && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedDestination(null)}
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
                                    src={selectedDestination.image}
                                    alt={selectedDestination.name}
                                    width={800}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = fallbackImage;
                                    }}
                                />
                                <button
                                    onClick={() => setSelectedDestination(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedDestination.name}</h2>
                                <p className="text-gray-600 text-lg mb-6">{selectedDestination.description}</p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-700 mb-2">Package Details</h3>
                                        <div className="space-y-2 text-gray-600">
                                            <div className="flex justify-between">
                                                <span>Price:</span>
                                                <span className="font-semibold text-blue-600">{selectedDestination.price}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Duration:</span>
                                                <span>{selectedDestination.duration}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Best Time to Visit:</span>
                                                <span>{selectedDestination.bestTime}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Rating:</span>
                                                <span className="flex items-center gap-1">
                                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                                    {selectedDestination.rating} ({selectedDestination.reviews} reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-700 mb-2">Trip Highlights</h3>
                                        <ul className="space-y-2">
                                            {selectedDestination.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-center gap-2 text-gray-600">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                    Book This Package
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}