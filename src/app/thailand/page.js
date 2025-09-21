"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Star, Shield, Zap, Plane, Gift } from "lucide-react";

const thailandVisa = {
    country: "Thailand",
    emoji: "🇹🇭",
    title: "থাইল্যান্ড ট্যুরিস্ট ভিসা",
    subtitle: "এশিয়ার সবচেয়ে জনপ্রিয় ভ্রমণ গন্তব্যে সহজ ভিসা!",
    fee: "SGD 50–60",
    type: "Visa on Arrival / eVisa",
    validity: "১৫ দিন (VOA) / ৬০ দিন (eVisa)",
    processingTime: "৩–৭ কার্যদিবস",
    requirements: [
        "পাসপোর্ট কমপক্ষে ৬ মাস বৈধ থাকতে হবে",
        "ফ্লাইট টিকেট (যাওয়া ও ফেরার)",
        "হোটেল বুকিং বা থাকার ঠিকানা",
        "সাম্প্রতিক ছবি (Passport size)"
    ],
    features: [
        "✅ অনলাইনে সহজ আবেদন প্রক্রিয়া",
        "✅ বিমানবন্দরে Visa on Arrival এর সুযোগ",
        "✅ ২৪/৭ সহায়তা",
        "✅ hassle-free ভ্রমণের নিশ্চয়তা",
        "✅ অভিজ্ঞ গাইডেন্স ও ডকুমেন্ট চেক"
    ],
    description:
        "থাইল্যান্ডের সোনালী সমুদ্র সৈকত, ব্যাংককের নাইটলাইফ এবং চিয়াং মাই-এর শান্ত পরিবেশ আপনাকে স্বপ্নের ভ্রমণ উপহার দেবে। আমাদের সহজ ভিসা প্রক্রিয়ায় থাইল্যান্ড ভ্রমণ হবে আরও সহজ এবং ঝামেলামুক্ত।",
    callToAction: "🚀 এখনই আবেদন করুন এবং থাইল্যান্ডের রঙিন ভ্রমণ উপভোগ করুন!",
    benefits: [
        {
            icon: <Zap size={24} />,
            title: "দ্রুত প্রক্রিয়াকরণ",
            description: "মাত্র ৩–৭ কার্যদিবসে ভিসা প্রস্তুত!"
        },
        {
            icon: <Shield size={24} />,
            title: "১০০% নিরাপদ",
            description: "আপনার তথ্য সম্পূর্ণ গোপনীয় ও সুরক্ষিত।"
        },
        {
            icon: <Star size={24} />,
            title: "অভিজ্ঞ টিম",
            description: "ভিসা বিশেষজ্ঞদের পূর্ণ গাইডেন্স।"
        },
        {
            icon: <Gift size={24} />,
            title: "বিনামূল্যে গাইড",
            description: "থাইল্যান্ড ভ্রমণ গাইড ফ্রি পাচ্ছেন।"
        }
    ],
    testimonials: [
        {
            name: "মোহনা ইসলাম",
            comment: "আমার থাইল্যান্ড ভিসা খুব দ্রুত হয়েছে। গ্লোবট্র্যাক সত্যিই দারুণ সার্ভিস দিল!"
        },
        {
            name: "তানভীর আহমেদ",
            comment: "Visa on Arrival নিয়ে ঝামেলা না করে অনলাইনে আবেদন করলাম, খুব সহজ ছিল। Highly recommended!"
        }
    ]
};

export default function ThailandVisa() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-pink-800 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {thailandVisa.emoji} {thailandVisa.title}
                </motion.h2>
                <motion.p
                    className="text-pink-600 text-xl md:text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {thailandVisa.subtitle}
                </motion.p>
                <motion.p
                    className="text-gray-700 text-lg md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {thailandVisa.description}
                </motion.p>
            </div>

            <motion.div
                className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6 border-t-4 border-pink-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                {/* Visa Details */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">ভিসার বিবরণ:</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>✅ ধরন: {thailandVisa.type}</li>
                        <li>✅ ফি: {thailandVisa.fee}</li>
                        <li>✅ বৈধতা: {thailandVisa.validity}</li>
                        <li>✅ প্রসেসিং সময়: {thailandVisa.processingTime}</li>
                        <li>✨ ঝামেলাহীন প্রক্রিয়ায় দ্রুত ভিসা।</li>
                        <li>✨ নিশ্চিন্তে ভ্রমণ উপভোগ করুন।</li>
                    </ul>
                </div>

                {/* Requirements */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">প্রয়োজনীয়তা:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {thailandVisa.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                        <li>✨ সহজ ডকুমেন্টে আবেদন করা যায়।</li>
                        <li>✨ আমাদের টিম সবকিছু যাচাই করবে।</li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">কেন আমাদের বেছে নেবেন?</h3>
                    <ul className="text-gray-700 space-y-2">
                        {thailandVisa.features.map((feat, idx) => (
                            <li key={idx}>{feat}</li>
                        ))}
                        <li>✨ ২৪/৭ অনলাইন সহায়তা।</li>
                        <li>✨ ৯৮% সফলতার হার।</li>
                    </ul>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {thailandVisa.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-pink-50 p-4 rounded-lg border border-pink-100"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-pink-600">{benefit.icon}</div>
                                <h4 className="font-semibold text-pink-800">{benefit.title}</h4>
                            </div>
                            <p className="text-gray-700 text-sm">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mt-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">গ্রাহকদের অভিজ্ঞতা:</h3>
                    <div className="space-y-4">
                        {thailandVisa.testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-gray-50 p-4 rounded-lg border-l-4 border-pink-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.2 }}
                            >
                                <p className="text-gray-700 italic">&quot;{testimonial.comment}&quot;</p>
                                <p className="text-right font-semibold text-pink-800 mt-2">- {testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link href="/contact" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 shadow-lg"
                        >
                            <Plane size={20} className="inline-block mr-2" />
                            Apply Now
                        </motion.button>
                    </Link>
                    <Link href="/visaoffers" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 shadow-lg"
                        >
                            Back to Visa Offers
                        </motion.button>
                    </Link>
                </div>

                {/* Emergency */}
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        জরুরী সহায়তার জন্য কল করুন:{" "}
                        <strong className="text-pink-700">+65 9123 4567</strong>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
