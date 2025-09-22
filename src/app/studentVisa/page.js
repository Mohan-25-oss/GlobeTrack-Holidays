"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StudentVisa = () => {
    const [activeCountry, setActiveCountry] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const countries = [
        {
            name: "United States",
            flag: "🇺🇸",
            requirements: ["Form I-20", "Financial Proof", "SEVIS Fee Payment", "Visa Interview"],
            processingTime: "3-5 weeks",
            successRate: "85%",
            color: "from-blue-500 to-red-500"
        },
        {
            name: "United Kingdom",
            flag: "🇬🇧",
            requirements: ["CAS Statement", "Financial Proof", "TB Test Results", "English Proficiency"],
            processingTime: "2-4 weeks",
            successRate: "88%",
            color: "from-blue-600 to-red-600"
        },
        {
            name: "Australia",
            flag: "🇦🇺",
            requirements: ["eCoE Document", "Financial Capacity", "Health Insurance", "GTE Statement"],
            processingTime: "4-8 weeks",
            successRate: "82%",
            color: "from-blue-500 to-green-500"
        },
        {
            name: "Canada",
            flag: "🇨🇦",
            requirements: ["Letter of Acceptance", "Financial Proof", "Medical Exam", "Biometrics"],
            processingTime: "6-8 weeks",
            successRate: "90%",
            color: "from-red-500 to-white"
        }
    ];

    const services = [
        {
            title: "Visa Consultation",
            description: "Personalized guidance on visa requirements and processes",
            icon: "🗣️",
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Document Preparation",
            description: "Assistance with compiling and organizing required documents",
            icon: "📄",
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Application Review",
            description: "Thorough review of your application before submission",
            icon: "✓",
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Interview Preparation",
            description: "Mock interviews and coaching for visa interviews",
            icon: "🎤",
            color: "bg-orange-100 text-orange-600"
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            country: "India → USA",
            content: "The team helped me navigate the complex F-1 visa process smoothly. My visa was approved in just 3 weeks!",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Ahmed Hassan",
            country: "Egypt → UK",
            content: "Their guidance on the UK student visa requirements was invaluable. I couldn't have done it without them.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Ling Chen",
            country: "China → Australia",
            content: "The document preparation service saved me so much time and stress. My visa was approved on the first try!",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ];

    const steps = [
        { number: "1", title: "Consultation", description: "Initial assessment of your situation" },
        { number: "2", title: "Documentation", description: "Prepare all required documents" },
        { number: "3", title: "Application", description: "Submit your visa application" },
        { number: "4", title: "Preparation", description: "Prepare for your interview" },
        { number: "5", title: "Approval", description: "Receive your visa and prepare to travel" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        <span className="block">Student Visa</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                            Success Made Simple
                        </span>
                    </h1>
                    <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
                        Your pathway to studying abroad starts here. We make the visa process smooth and stress-free.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                            95%
                        </div>
                        <div className="text-gray-600 mt-2">Success Rate</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            2000+
                        </div>
                        <div className="text-gray-600 mt-2">Students Helped</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                            15+
                        </div>
                        <div className="text-gray-600 mt-2">Countries</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                            24h
                        </div>
                        <div className="text-gray-600 mt-2">Response Time</div>
                    </motion.div>
                </div>

                {/* Countries Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Study Destinations</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {countries.map((country, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bg-gradient-to-r ${country.color} rounded-2xl overflow-hidden shadow-xl text-white transform transition-all duration-300 hover:scale-105 cursor-pointer`}
                                onClick={() => setActiveCountry(index)}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-3xl">{country.flag}</span>
                                        <h3 className="text-xl font-bold">{country.name}</h3>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Requirements:</h4>
                                        <ul className="text-sm">
                                            {country.requirements.map((req, i) => (
                                                <li key={i} className="flex items-center mb-1">
                                                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <div>
                                            <div className="font-semibold">Processing</div>
                                            <div>{country.processingTime}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Success Rate</div>
                                            <div>{country.successRate}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Visa Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:scale-105"
                            >
                                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Process Steps */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 5-Step Process</h2>

                    <div className="flex flex-wrap justify-center">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center mx-4 mb-8 w-40"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                                <p className="text-gray-600 text-center">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Student Success Stories</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={500}
                                        height={300}
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.country}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">{testimonial.content}</p>
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
                >
                    <h2 className="text-3xl font-bold mb-4">Begin Your Study Abroad Journey</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Get expert guidance for your student visa application. Schedule a free consultation today!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            Free Consultation
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                            Download Checklist
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default StudentVisa;