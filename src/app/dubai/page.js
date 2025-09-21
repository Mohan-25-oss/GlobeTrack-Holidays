"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Star, Shield, Zap, Clock, Gift, Plane, ChevronDown, ChevronUp, Phone, MessageCircle, Check, Award } from "lucide-react";

const dubaiVisa = {
    country: "UAE (Dubai)",
    emoji: "🇦🇪",
    title: "দুবাই ট্যুরিস্ট ভিসা",
    subtitle: "মধ্যপ্রাচ্যের স্বপ্নের শহরে সহজ ভিসা!",
    fee: "SGD 120–150",
    type: "eVisa",
    validity: "১৪ / ৩০ / ৯০ দিন (single বা multiple entry)",
    processingTime: "৩–৫ কার্যদিবস",
    requirements: [
        "পাসপোর্ট কমপক্ষে ৬ মাস বৈধ থাকতে হবে",
        "সাম্প্রতিক পাসপোর্ট সাইজ ছবি",
        "ফ্লাইট টিকেট (যাওয়া ও ফেরার)",
        "হোটেল বুকিং বা থাকার ঠিকানা"
    ],
    features: [
        "✅ অনলাইনে দ্রুত আবেদন প্রক্রিয়া",
        "✅ ৯০ দিনের ভিসা অপশন",
        "✅ অভিজ্ঞ সহায়তা ও ডকুমেন্ট গাইড",
        "✅ ২৪/৭ গ্রাহক সেবা",
        "✅ hassle-free ভ্রমণ অভিজ্ঞতা"
    ],
    description:
        "দুবাই শহরের আকাশচুম্বী ভবন, বিলাসবহুল শপিং মল এবং মরুভূমির রোমাঞ্চকর অভিজ্ঞতা উপভোগ করতে এখনই ভিসার জন্য আবেদন করুন। আমাদের দ্রুত ও নিরাপদ প্রক্রিয়ায় দুবাই ভ্রমণ হবে আরও সহজ ও স্মরণীয়।",
    callToAction: "🚀 এখনই আবেদন করুন এবং দুবাইয়ের স্বপ্নের যাত্রা শুরু করুন!",
    benefits: [
        {
            icon: <Zap size={24} />,
            title: "দ্রুত প্রসেসিং",
            description: "মাত্র ৩–৫ কার্যদিবসে ভিসা প্রস্তুত।"
        },
        {
            icon: <Shield size={24} />,
            title: "১০০% নিরাপদ",
            description: "তথ্য সুরক্ষিত এবং বিশ্বস্ত প্রক্রিয়া।"
        },
        {
            icon: <Clock size={24} />,
            title: "ফ্লেক্সিবল ভিসা",
            description: "১৪, ৩০ ও ৯০ দিনের ভিসা উপলব্ধ।"
        },
        {
            icon: <Gift size={24} />,
            title: "বিনামূল্যে ভ্রমণ গাইড",
            description: "দুবাই ট্যুরিস্ট গাইড ফ্রি পাচ্ছেন।"
        }
    ],
    testimonials: [
        {
            name: "সাবিহা খান",
            comment: "খুব সহজে দুবাই ভিসা পেয়েছি, কোনো ঝামেলা ছিল না। Highly recommended!",
            rating: 5
        },
        {
            name: "আসিফ হোসেন",
            comment: "৩ দিনের মধ্যে ভিসা হাতে পেয়েছি। সার্ভিস অসাধারণ!",
            rating: 5
        },
        {
            name: "রিয়া আহমেদ",
            comment: "ডকুমেন্ট জমা দেওয়ার পর থেকে ভিসা পাওয়া পর্যন্ত পুরো প্রক্রিয়া খুব স্মুথ ছিল।",
            rating: 4
        }
    ],
    visaOptions: [
        {
            type: "১৪ দিন সিঙ্গেল এন্ট্রি",
            price: "SGD 120",
            features: ["১৪ দিন বৈধতা", "সিঙ্গেল এন্ট্রি", "সাধারণ প্রসেসিং"]
        },
        {
            type: "৩০ দিন মাল্টিপল এন্ট্রি",
            price: "SGD 140",
            features: ["৩০ দিন বৈধতা", "মাল্টিপল এন্ট্রি", "দ্রুত প্রসেসিং", "প্রাইওরিটি সাপোর্ট"]
        },
        {
            type: "৯০ দিন মাল্টিপল এন্ট্রি",
            price: "SGD 150",
            features: ["৯০ দিন বৈধতা", "মাল্টিপল এন্ট্রি", "এক্সপ্রেস প্রসেসিং", "প্রাইওরিটি সাপোর্ট", "ফ্রি ট্রাভেল গাইড"]
        }
    ]
};

export default function DubaiVisa() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 min-h-screen">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4"
                >
                    {dubaiVisa.emoji} {dubaiVisa.country}
                </motion.div>
                
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {dubaiVisa.title}
                </motion.h2>
                
                <motion.p
                    className="text-yellow-600 text-xl md:text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {dubaiVisa.subtitle}
                </motion.p>
                
                <motion.p
                    className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {dubaiVisa.description}
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visa Options */}
                <motion.div
                    className="lg:col-span-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">ভিসা প্যাকেজ সমূহ:</h3>
                    
                    {dubaiVisa.visaOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${selectedOption === index ? 'border-yellow-400' : 'border-transparent'} transition-all duration-300 cursor-pointer`}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedOption(index)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-bold text-lg text-yellow-800">{option.type}</h4>
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                                    {option.price}
                                </span>
                            </div>
                            
                            <ul className="space-y-2">
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <Check size={16} className="text-green-500 mr-2" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {selectedOption === index && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    Select Package
                                </motion.button>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 space-y-6 border-t-4 border-yellow-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {/* Special Offer Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-xl text-center"
                    >
                        <h3 className="text-xl font-bold mb-2">🎉 বিশেষ অফার! 🎉</h3>
                        <p>এখনই আবেদন করুন এবং পাচ্ছেন <strong>দুবাই ট্রাভেল গাইড + সিম কার্ড</strong> সম্পূর্ণ বিনামূল্যে!</p>
                    </motion.div>

                    {/* Visa Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-yellow-800 flex items-center">
                                <Award size={20} className="mr-2" />
                                ভিসার বিবরণ:
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li className="flex items-center">✅ ধরন: <span className="font-semibold ml-2">{dubaiVisa.type}</span></li>
                                <li className="flex items-center">✅ ফি: <span className="font-semibold ml-2">{dubaiVisa.fee}</span></li>
                                <li className="flex items-center">✅ বৈধতা: <span className="font-semibold ml-2">{dubaiVisa.validity}</span></li>
                                <li className="flex items-center">✅ প্রসেসিং সময়: <span className="font-semibold ml-2">{dubaiVisa.processingTime}</span></li>
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-yellow-800">প্রয়োজনীয়তা:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {dubaiVisa.requirements.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-yellow-800">আমাদের বিশেষ সুবিধাসমূহ:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dubaiVisa.benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-yellow-50 p-4 rounded-lg border border-yellow-100"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-yellow-600">
                                            {benefit.icon}
                                        </div>
                                        <h4 className="font-semibold text-yellow-800">{benefit.title}</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-4 text-yellow-800">গ্রাহকদের অভিজ্ঞতা:</h3>
                        <div className="space-y-4">
                            {dubaiVisa.testimonials.map((testimonial, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                                >
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic">{testimonial.comment}</p>
                                    <p className="text-right font-semibold text-yellow-700 mt-2">- {testimonial.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 text-yellow-600 font-semibold"
                        >
                            {isExpanded ? 'কম দেখান' : 'আরও তথ্য দেখুন'}
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        {isExpanded && (
                            <motion.div
                                className="mt-4 p-4 bg-yellow-50 rounded-lg"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className="font-semibold text-yellow-800 mb-2">দুবাই ভিসা সম্পর্কে গুরুত্বপূর্ণ তথ্য:</h4>
                                <ul className="text-gray-700 space-y-2 text-sm">
                                    <li>• ভিসা মঞ্জুর হওয়ার পর ৬০ দিনের মধ্যে দুবাই প্রবেশ করতে হবে</li>
                                    <li>• পাসপোর্টে কমপক্ষে ২টি ফাকা পাতা প্রয়োজন</li>
                                    <li>• ভিসা ফি অ-refundable</li>
                                    <li>• প্রয়োজনে ভিসা এক্সটেনশনের জন্য আমাদের সাথে যোগাযোগ করুন</li>
                                </ul>
                            </motion.div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link href="/contact" className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-lg flex items-center justify-center gap-2"
                            >
                                <Plane size={20} />
                                {dubaiVisa.callToAction}
                            </motion.button>
                        </Link>
                        
                        <Link href="/visaoffers" className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-6 py-3 rounded-full font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-lg"
                            >
                                অন্যান্য ভিসা অফার
                            </motion.button>
                        </Link>
                    </div>

                    {/* Support Section */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <MessageCircle size={18} className="mr-2" />
                            সহায়তা প্রয়োজন?
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center">
                                <Phone size={16} className="text-blue-600 mr-2" />
                                <span className="text-sm text-blue-700">+65 9123 4567</span>
                            </div>
                            <div className="flex items-center">
                                <MessageCircle size={16} className="text-blue-600 mr-2" />
                                <span className="text-sm text-blue-700">WhatsApp: +65 8123 4567</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}