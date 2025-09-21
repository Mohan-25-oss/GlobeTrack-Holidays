"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle, Star, Clock, Shield, Zap, Calendar, Plane, Gift } from "lucide-react";

const malaysiaVisa = {
    country: "Malaysia",
    emoji: "❤️",
    title: "মালয়েশিয়া ট্যুরিস্ট ভিসা",
    subtitle: "মালয়েশিয়ার রূপে মাতুন, সহজ ভিসা প্রক্রিয়ায়!",
    fee: "SGD 45",
    type: "eVisa / eNTRI",
    validity: "৬ মাস",
    processingTime: "৩–৫ কার্যদিবস",
    requirements: [
        "পাসপোর্ট কমপক্ষে ৬ মাস বৈধ থাকতে হবে",
        "WorkPermit / S-Pass",
        "পাসপোর্ট সাইজের ছবি",
    ],
    features: [
        "দ্রুত এবং সহজ অনলাইন আবেদন প্রক্রিয়া",
        "অভিজ্ঞ সহায়তা প্রদান",
        "২৪/৭ বুকিং এবং সহায়তা",
        "hassle-free ভ্রমণের নিশ্চয়তা",
        "সঠিক তথ্য ও গাইডলাইন",
    ],
    description:
        "মালয়েশিয়ার প্রাণবন্ত শহর, সবুজ প্রকৃতি এবং সমুদ্র সৈকতের সৌন্দর্য উপভোগ করুন! আমাদের সহজ ভিসা প্রক্রিয়ার মাধ্যমে আপনার স্বপ্নের ভ্রমণকে বাস্তবে রূপান্তর করুন। আমরা নিশ্চিত করি আপনার ভিসা দ্রুত এবং ঝামেলামুক্তভাবে প্রক্রিয়াকৃত হবে।",
    callToAction: "🚀 এখনই আবেদন করুন এবং মালয়েশিয়ার রঙিন ভ্রমণ উপভোগ করুন!",
    benefits: [
        {
            icon: <Zap size={24} />,
            title: "দ্রুত প্রক্রিয়াকরণ",
            description: "কেবলমাত্র ৩-৫ কার্যদিবসে ভিসা প্রস্তুত!"
        },
        {
            icon: <Shield size={24} />,
            title: "১০০% সুরক্ষিত",
            description: "আপনার তথ্য এবং ডকুমেন্ট সম্পূর্ণ গোপনীয়"
        },
        {
            icon: <Star size={24} />,
            title: "বিশেষজ্ঞ সহায়তা",
            description: "ভিসা বিশেষজ্ঞদের দ্বারা সম্পূর্ণ গাইডেন্স"
        },
        {
            icon: <Gift size={24} />,
            title: "বোনাস গাইড",
            description: "মালয়েশিয়ার ট্রাভেল গাইড বিনামূল্যে!"
        }
    ],
    testimonials: [
        {
            name: "রহিমা আক্তার",
            comment: "অত্যন্ত দ্রুত এবং সহজ প্রক্রিয়া! মাত্র ৩ দিনে পেয়ে গেলাম ভিসা। গ্লোবট্র্যাকের সার্ভিস অসাধারণ!"
        },
        {
            name: "আরফান আহমেদ",
            comment: "সিঙ্গাপুর থেকে মালয়েশিয়া ভিসার জন্য গ্লোবট্র্যাকের চেয়ে ভালো সার্ভিস আর পাইনি।"
        }
    ]
};

export default function MalaysiaVisa() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {malaysiaVisa.emoji} {malaysiaVisa.title}
                </motion.h2>
                <motion.p
                    className="text-blue-600 text-xl md:text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {malaysiaVisa.subtitle}
                </motion.p>
                <motion.p
                    className="text-gray-700 text-lg md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {malaysiaVisa.description}
                </motion.p>
            </div>

            <motion.div
                className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6 border-t-4 border-yellow-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                {/* Visa Details */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">ভিসার বিবরণ:</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>✅ ভিসার ধরন: <span className="font-semibold">{malaysiaVisa.type}</span></li>
                        <li>✅ ফি: <span className="font-semibold">{malaysiaVisa.fee}</span></li>
                        <li>✅ বৈধতা: <span className="font-semibold">{malaysiaVisa.validity}</span></li>
                        <li>✅ প্রক্রিয়াকরণ সময়: <span className="font-semibold">{malaysiaVisa.processingTime}</span></li>
                    </ul>
                </div>

                {/* Requirements */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">প্রয়োজনীয়তা:</h3>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                        {malaysiaVisa.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">কেন আমাদের বেছে নেবেন?</h3>
                    <ul className="text-gray-700 space-y-2">
                        {malaysiaVisa.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✅</span>
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {malaysiaVisa.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-blue-600">{benefit.icon}</div>
                                <h4 className="font-semibold text-blue-800">{benefit.title}</h4>
                            </div>
                            <p className="text-gray-700 text-sm">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mt-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">সন্তুষ্ট গ্রাহকদের কথা:</h3>
                    <div className="space-y-4">
                        {malaysiaVisa.testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <p className="text-gray-700 italic">&quot;{testimonial.comment}&quot;</p>
                                <p className="text-right font-semibold text-blue-800 mt-2">- {testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link href="/contact" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-lg"
                        >
                            <Plane size={20} className="inline-block mr-2" />
                            Apply Now
                        </motion.button>
                    </Link>
                    <Link href="/visaoffers" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-lg"
                        >
                            Back to Visa Offers
                        </motion.button>
                    </Link>
                </div>

                {/* Emergency Contact */}
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        জরুরী সহায়তার জন্য কল করুন: <strong className="text-blue-700">+65 9123 4567</strong>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
