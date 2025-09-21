"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle, Star, Clock, Shield, Zap, Calendar, Plane, Gift } from "lucide-react";

const indonesiaVisa = {
    country: "Indonesia",
    emoji: "❤️",
    title: "ইন্দোনেশিয়া ট্যুরিস্ট ভিসা",
    subtitle: "দক্ষিণ-পূর্ব এশিয়ার স্বপ্নের গন্তব্যে সহজভাবে ভিসা পান!",
    fee: "SGD 45–50",
    type: "Visa on Arrival / eVisa",
    validity: "৩০ দিন (extendable once)",
    processingTime: "৩–৫ কার্যদিবস (eVisa)",
    requirements: [
        "পাসপোর্ট কমপক্ষে ৬ মাস বৈধ থাকতে হবে",
        "ফ্লাইট টিকেট (যাওয়া ও ফেরার)",
        "হোটেল বা থাকার ঠিকানা",
    ],
    features: [
        "✅ দ্রুত ও সহজ অনলাইন আবেদন প্রক্রিয়া",
        "✅ বিমানবন্দরে ভিসা পাওয়ার সুবিধা (VOA)",
        "✅ অভিজ্ঞ সহায়তা",
        "✅ ২৪/৭ বুকিং এবং সহায়তা",
        "✅ hassle-free ভ্রমণ নিশ্চিত",
    ],
    description:
        "ইন্দোনেশিয়ার সূর্যোদয়, সুন্দর সমুদ্র সৈকত এবং প্রাকৃতিক সৌন্দর্য উপভোগ করুন। আমাদের সহজ ভিসা প্রক্রিয়ার মাধ্যমে আপনার ট্রাভেল প্ল্যান ঝামেলামুক্ত।",
    callToAction: "🚀 এখনই আবেদন করুন এবং ইন্দোনেশিয়ার স্বপ্নের ভ্রমণ উপভোগ করুন!",
    benefits: [
        {
            icon: <Zap size={24} />,
            title: "দ্রুত প্রক্রিয়াকরণ",
            description: "মাত্র ৩–৫ কার্যদিবসে eVisa প্রস্তুত!"
        },
        {
            icon: <Shield size={24} />,
            title: "১০০% নিরাপদ",
            description: "আপনার তথ্য সম্পূর্ণ গোপনীয়।"
        },
        {
            icon: <Star size={24} />,
            title: "বিশেষজ্ঞ সহায়তা",
            description: "এক্সপার্টদের দ্বারা সম্পূর্ণ গাইডেন্স।"
        },
        {
            icon: <Gift size={24} />,
            title: "বোনাস গাইড",
            description: "ইন্দোনেশিয়ার ট্রাভেল গাইড বিনামূল্যে!"
        }
    ],
    testimonials: [
        {
            name: "সুমি রহমান",
            comment: "ইন্দোনেশিয়ার ভিসা প্রক্রিয়া খুবই সহজ ও দ্রুত। গ্লোবট্র্যাকের সার্ভিস অসাধারণ!"
        },
        {
            name: "রানা সরকার",
            comment: "সিঙ্গাপুর থেকে eVisa আবেদন করতে গিয়ে কোনো ঝামেলা হলো না। খুব সুবিধাজনক!"
        }
    ]
};

export default function indonesia() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {indonesiaVisa.emoji} {indonesiaVisa.title}
                </motion.h2>
                <motion.p
                    className="text-green-600 text-xl md:text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {indonesiaVisa.subtitle}
                </motion.p>
                <motion.p
                    className="text-gray-700 text-lg md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {indonesiaVisa.description}
                </motion.p>
            </div>

            <motion.div
                className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6 border-t-4 border-green-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                {/* Visa Details */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">ভিসার বিবরণ:</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li className="flex items-center gap-2">✅ ভিসার ধরন: <span className="font-semibold">{indonesiaVisa.type}</span></li>
                        <li className="flex items-center gap-2">✅ ফি: <span className="font-semibold">{indonesiaVisa.fee}</span></li>
                        <li className="flex items-center gap-2">✅ বৈধতা: <span className="font-semibold">{indonesiaVisa.validity}</span></li>
                        <li className="flex items-center gap-2">✅ প্রক্রিয়াকরণ সময়: <span className="font-semibold">{indonesiaVisa.processingTime}</span></li>
                        <li className="flex items-center gap-2">✨ আপনার ভ্রমণ হবে ঝামেলামুক্ত এবং আনন্দময়।</li>
                        <li className="flex items-center gap-2">✨ সুন্দর সমুদ্র সৈকত ও প্রাকৃতিক সৌন্দর্য উপভোগ করুন।</li>
                    </ul>
                </div>

                {/* Requirements */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">প্রয়োজনীয়তা:</h3>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                        {indonesiaVisa.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                        <li>✨ আপনার ভ্রমণ হবে নিরাপদ এবং সুষ্ঠু পরিকল্পিত।</li>
                        <li>✨ গুরুত্বপূর্ণ ডকুমেন্টস সঙ্গে নিয়ে দ্রুত আবেদন করুন।</li>
                    </ul>
                </div>

                {/* Features & Benefits */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">কেন আমাদের নির্বাচন করবেন?</h3>
                    <ul className="text-gray-700 space-y-2">
                        {indonesiaVisa.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✅</span>
                                <span>{feat.slice(2)}</span>
                            </li>
                        ))}
                        <li className="flex items-center gap-2">✨ ২৪/৭ অনলাইন সহায়তা আপনার সুবিধার জন্য।</li>
                        <li className="flex items-center gap-2">✨ ৯৮% সফলতার হার নিয়ে আমরা গর্বিত।</li>
                    </ul>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {indonesiaVisa.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-green-50 p-4 rounded-lg border border-green-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-green-600">
                                    {benefit.icon}
                                </div>
                                <h4 className="font-semibold text-green-800">{benefit.title}</h4>
                            </div>
                            <p className="text-gray-700 text-sm">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mt-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">সন্তুষ্ট গ্রাহকদের কথা:</h3>
                    <div className="space-y-4">
                        {indonesiaVisa.testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                                <p className="text-right font-semibold text-green-800 mt-2">- {testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    {/* Apply Now Button */}
                    <Link href="/contact" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-2xl overflow-hidden flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <span className="absolute inset-0 bg-white opacity-10 blur-md animate-pulse rounded-full"></span>
                            <Plane size={20} className="animate-bounce" />
                            <span className="relative">Apply Now</span>
                        </motion.button>
                    </Link>

                    {/* Back to Visa Offers Button */}
                    <Link href="/visaoffers" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-2xl overflow-hidden flex items-center justify-center gap-2 transition-all duration-300">
                            <span className="absolute inset-0 bg-white opacity-10 blur-md animate-pulse rounded-full"></span>
                            <Plane size={20} className="animate-bounce" />
                            <span className="relative">Back to Visa Offers</span>
                        </motion.button>
                    </Link>
                </div>

                {/* Emergency Contact */}
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        জরুরী সহায়তার জন্য কল করুন: <strong className="text-green-700">+65 9123 4567</strong>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
