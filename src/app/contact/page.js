"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Globe,
    Users,
    CheckCircle,
    Plane
} from "lucide-react";

export default function Contact() {
    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        service: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show toast
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);

        // Clear form fields
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            service: "",
        });

        setIsSubmitting(false);
    };

    const services = [
        "Tourist Visa",
        "Business Visa",
        "Student Visa",
        "Work Permit",
        "Family Visa",
        "Travel Consultation"
    ];

    return (
        <div className="pt-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
            {/* Header Section */}
            <section className="text-center py-16">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch With Us
                </motion.h1>
                <motion.p
                    className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Have questions or want to book your next trip? Reach out to us and we'll get back to you within 24 hours.
                </motion.p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10 max-w-6xl mx-auto">
                {/* Contact Form */}
                <motion.div
                    className="bg-white rounded-3xl shadow-2xl p-8 relative border border-blue-100"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg">
                        <h2 className="font-bold flex items-center gap-2">
                            <MessageCircle size={18} />
                            Send us a Message
                        </h2>
                    </div>

                    <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                                <option value="">Select a service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What is this regarding?"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea
                                name="message"
                                placeholder="Tell us how we can help you..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <Send size={20} />
                            )}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </motion.button>
                    </form>

                    {/* Toast Notification */}
                    <AnimatePresence>
                        {showToast && (
                            <motion.div
                                className="absolute top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
                                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CheckCircle size={20} />
                                <span>Message sent! We'll contact you soon.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Contact Information & Map */}
                <motion.div
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {/* Map */}
                    <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                        <iframe
                            title="Global Wings Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902508503989!2d90.3914!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b019bdc7bf%3A0x23d455af17f1f02!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1695057500000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Users size={24} />
                            Contact Information
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 p-3 rounded-full">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Address</h3>
                                    <p>123 Travel Street, Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 p-3 rounded-full">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <p>+880 123 456 789</p>
                                    <p className="text-blue-200">+880 987 654 321</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 p-3 rounded-full">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p>info@GlobeTrack Holidays.com</p>
                                    <p className="text-blue-200">support@GlobeTrack Holidays.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 p-3 rounded-full">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Business Hours</h3>
                                    <p>Monday - Friday: 9AM - 6PM</p>
                                    <p className="text-blue-200">Saturday: 10AM - 4PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 p-3 rounded-full">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Global Support</h3>
                                    <p>24/7 Emergency Travel Assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                            <div className="text-2xl font-bold text-blue-600">500+</div>
                            <div className="text-sm text-gray-600">Happy Clients</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                            <div className="text-2xl font-bold text-purple-600">24h</div>
                            <div className="text-sm text-gray-600">Response Time</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                            <div className="text-2xl font-bold text-green-600">98%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                            <div className="text-2xl font-bold text-yellow-600">50+</div>
                            <div className="text-sm text-gray-600">Destinations</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Emergency Contact Banner */}
            <motion.div
                className="max-w-6xl mx-auto my-16 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="bg-white p-3 rounded-full">
                            <Phone className="text-red-500" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">24/7 Emergency Support</h3>
                            <p>Need immediate assistance with your travel plans?</p>
                        </div>
                    </div>
                    <div className="text-2xl font-bold flex items-center gap-2">
                        <Plane size={28} />
                        +880 1712 345 678
                    </div>
                </div>
            </motion.div>
        </div>
    );
}