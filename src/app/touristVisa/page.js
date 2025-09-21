"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TouristVisa = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const destinations = [
        {
            id: 1,
            name: "Santorini, Greece",
            description: "Stunning white buildings with blue domes overlooking the Aegean Sea.",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "beach",
            rating: 4.9,
            price: "$1,200"
        },
        {
            id: 2,
            name: "Kyoto, Japan",
            description: "Ancient temples, traditional gardens, and cherry blossoms.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "cultural",
            rating: 4.8,
            price: "$1,500"
        },
        {
            id: 3,
            name: "Swiss Alps",
            description: "Majestic mountains perfect for hiking and skiing adventures.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "adventure",
            rating: 4.7,
            price: "$1,800"
        },
        {
            id: 4,
            name: "Machu Picchu, Peru",
            description: "Ancient Incan city nestled high in the Andes Mountains.",
            image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "cultural",
            rating: 4.9,
            price: "$1,600"
        },
        {
            id: 5,
            name: "Maldives",
            description: "Crystal clear waters and overwater bungalows in a tropical paradise.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "beach",
            rating: 4.8,
            price: "$2,200"
        },
        {
            id: 6,
            name: "Safari, Kenya",
            description: "Witness incredible wildlife in their natural habitat.",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "adventure",
            rating: 4.7,
            price: "$2,500"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Destinations' },
        { id: 'beach', name: 'Beach Getaways' },
        { id: 'cultural', name: 'Cultural Experiences' },
        { id: 'adventure', name: 'Adventure Trips' }
    ];

    const filteredDestinations = activeCategory === 'all'
        ? destinations
        : destinations.filter(dest => dest.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-25 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 pb-3">
                        Discover Amazing Destinations
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
                        Explore the world&apos;s most beautiful places and create unforgettable memories.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDestinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md flex items-center">
                                    <span className="text-yellow-500 mr-1">★</span>
                                    <span className="font-semibold">{destination.rating}</span>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {destination.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                                <p className="text-gray-600 mb-4">{destination.description}</p>
                                <div className="flex justify-between items-center">
                                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1">
                                        Explore Now
                                    </button>
                                    <div className="flex space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Sign up now to get exclusive deals and personalized travel recommendations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-auto"
                            />
                            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TouristVisa;