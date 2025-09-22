"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BusinessVisa = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            title: "Digital Marketing",
            description: "Boost your online presence with our comprehensive digital marketing strategies tailored to your business needs.",
            icon: "📈",
            features: ["SEO Optimization", "Social Media Management", "PPC Campaigns", "Content Marketing"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Web Development",
            description: "Create stunning, responsive websites and web applications that convert visitors into customers.",
            icon: "💻",
            features: ["Responsive Design", "E-Commerce Solutions", "Web Applications", "API Integration"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Brand Strategy",
            description: "Develop a powerful brand identity that resonates with your target audience and stands out from competitors.",
            icon: "🎯",
            features: ["Brand Identity", "Market Research", "Competitive Analysis", "Positioning Strategy"],
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Data Analytics",
            description: "Turn your data into actionable insights with our advanced analytics and visualization solutions.",
            icon: "📊",
            features: ["Data Visualization", "KPI Tracking", "Performance Reports", "Predictive Analysis"],
            color: "from-green-500 to-teal-500"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechInnovate",
            content: "Their digital marketing strategy increased our conversion rate by 145% in just three months!",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Michael Chen",
            role: "Marketing Director, GrowthCo",
            content: "The web application they developed streamlined our operations and saved us countless hours.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Elena Rodriguez",
            role: "Founder, BellaCouture",
            content: "Their brand strategy completely transformed how customers perceive our fashion brand.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ];

    const stats = [
        { value: "98%", label: "Client Satisfaction" },
        { value: "245%", label: "Average ROI" },
        { value: "500+", label: "Projects Completed" },
        { value: "12+", label: "Years Experience" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        <span className="block">Business Solutions for</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                            Exponential Growth
                        </span>
                    </h1>
                    <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
                        We help businesses transform their operations, reach new customers, and increase profitability with cutting-edge solutions.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg text-center"
                        >
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bg-gradient-to-r ${service.color} rounded-2xl overflow-hidden shadow-xl text-white transform transition-all duration-300 hover:scale-105`}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-4">{service.icon}</span>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                    </div>
                                    <p className="mb-4 opacity-90">{service.description}</p>
                                    <ul className="grid grid-cols-2 gap-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>

                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <div className="block items-center mb-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={500}
                                        height={300}
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Schedule a free consultation with our experts to discover how we can help your business reach its full potential.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            Get Started
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BusinessVisa;