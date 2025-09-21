"use client";
import { motion } from "framer-motion";
import {
    FaGlobe,
    FaHandshake,
    FaPlane,
    FaAward,
    FaUsers,
    FaSmile,
    FaHeart,
    FaRocket,
    FaShieldAlt,
    FaHeadset
} from "react-icons/fa";
import {
    Globe,
    Target,
    Eye,
    Star,
    Calendar,
    MapPin,
    Phone,
    Mail,
    MessageCircle
} from "lucide-react";

export default function About() {
    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        {
            icon: <FaGlobe className="text-blue-500" size={30} />,
            title: "Global Reach",
            description: "We provide services for destinations all around the world, making international travel simple and accessible."
        },
        {
            icon: <FaHandshake className="text-green-500" size={30} />,
            title: "Trusted Partner",
            description: "With thousands of satisfied customers, we've built a reputation for reliability and trustworthiness."
        },
        {
            icon: <FaPlane className="text-purple-500" size={30} />,
            title: "Expert Guidance",
            description: "Our experienced team provides professional guidance on visas, flights, and tour planning."
        },
        {
            icon: <FaAward className="text-yellow-500" size={30} />,
            title: "Award Winning",
            description: "Recognized as the best travel agency in the region for three consecutive years."
        },
        {
            icon: <FaUsers className="text-pink-500" size={30} />,
            title: "24/7 Support",
            description: "Round-the-clock customer support to assist you with any travel emergencies or queries."
        },
        {
            icon: <FaShieldAlt className="text-red-500" size={30} />,
            title: "Fully Insured",
            description: "All our travel packages include comprehensive insurance coverage for your peace of mind."
        }
    ];

    const stats = [
        { number: "10K+", label: "Happy Travelers" },
        { number: "50+", label: "Destinations" },
        { number: "98%", label: "Success Rate" },
        { number: "24/7", label: "Support" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-0 right-0 -mr-40 mt-40 rounded-full w-80 h-80 bg-white opacity-10"></div>
                <div className="absolute bottom-0 left-0 -ml-40 mb-40 rounded-full w-80 h-80 bg-white opacity-10"></div>

                <motion.div
                    className="relative max-w-6xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        About <span className="text-yellow-300">GlobeTrack Holidays</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                        Your trusted partner in making travel dreams come true
                    </p>
                    <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        &quot;At GlobeTrack Holidays, we don&apos;t just plan trips&mdash;we create unforgettable experiences.
                        With years of expertise and a passion for travel, we&apos;re dedicated to making
                        your journey seamless and memorable.&quot;
                    </p>

                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={staggerChildren}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-md"
                                variants={fadeIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our <span className="text-blue-600">Mission</span> & <span className="text-purple-600">Vision</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <Target className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-700">Our Mission</h3>
                            </div>
                            <p className="text-gray-700 text-lg">
                                To provide reliable and hassle-free travel services that help clients explore
                                the world with confidence and comfort. We strive to make international travel
                                accessible to everyone through personalized service and expert guidance.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-purple-100 p-3 rounded-full mr-4">
                                    <Eye className="text-purple-600" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-purple-700">Our Vision</h3>
                            </div>
                            <p className="text-gray-700 text-lg">
                                To become the most trusted global travel agency, known for exceptional service,
                                innovative solutions, and unforgettable experiences. We envision a world where
                                borders are no barrier to exploration and cultural exchange.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose <span className="text-blue-600">GlobeTrack Holidays</span>?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We go above and beyond to ensure your travel experience is exceptional
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-white p-4 rounded-full shadow-md">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Our <span className="text-blue-600">Story</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Founded in 2010, GlobeTrack Holidays began as a small travel agency with a big dream:
                                to make world travel accessible to everyone. What started as a passion project
                                has grown into a trusted travel partner for thousands of adventurers.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Over the years, we&apos;ve helped families reunite across continents, students pursue
                                international education, and travelers explore destinations they once only dreamed of.
                            </p>

                            <p className="text-lg text-gray-700">
                                &quot;Our success is built on the smiles of our customers and the relationships we&apos;ve
                                nurtured along the way. We&apos;re not just a travel agency&mdash;we&apos;re your partners in
                                exploration.&quot;
                            </p>

                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                        <Star className="text-yellow-500" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <FaHeart className="text-red-400 mt-1 mr-3" />
                                        <span className="text-gray-700"><strong>Passion:</strong> We love what we do, and it shows in our service</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaShieldAlt className="text-blue-400 mt-1 mr-3" />
                                        <span className="text-gray-700">
                                            <strong>Integrity:</strong> We&apos;re honest, transparent, and trustworthy
                                        </span>
                                    </li>

                                    <li className="flex items-start">
                                        <FaRocket className="text-purple-400 mt-1 mr-3" />
                                        <span className="text-gray-700"><strong>Innovation:</strong> We continuously improve our services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaUsers className="text-green-400 mt-1 mr-3" />
                                        <span className="text-gray-700"><strong>Community:</strong> We believe in connecting people and cultures</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let us help you plan the perfect trip. Our travel experts are ready to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us Now
                        </motion.button>
                        <motion.button
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Browse Packages
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}