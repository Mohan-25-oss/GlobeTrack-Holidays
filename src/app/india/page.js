"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Star, Shield, Zap, Plane, Gift } from "lucide-react";

const indiaVisa = {
    country: "India",
    emoji: "🇮🇳",
    title: "ভারত ট্যুরিস্ট ভিসা",
    subtitle: "ভারতের ঐতিহ্য ও সৌন্দর্য উপভোগ করতে এখনই ভিসা করুন!",
    fee: "SGD 50–55",
    type: "eVisa / Tourist Visa",
    validity: "৩০ দিন / ১ বছর (Multiple Entry)",
    processingTime: "৩–৭ কার্যদিবস",
    requirements: [
        "পাসপোর্ট কমপক্ষে ৬ মাস বৈধ থাকতে হবে",
        "ডিজিটাল পাসপোর্ট সাইজ ছবি",
        "ফ্লাইট টিকেট (যাওয়া ও ফেরার)",
        "হোটেল বুকিং বা ভারতের ঠিকানা",
    ],
    features: [
        "✅ অনলাইন আবেদন প্রক্রিয়া খুবই সহজ",
        "✅ Multiple Entry ভিসা সুবিধা",
        "✅ অভিজ্ঞ সহায়তা টিম",
        "✅ ২৪/৭ অনলাইন সাপোর্ট",
        "✅ ঝামেলাহীন ভ্রমণ নিশ্চিত",
    ],
    description:
        "ভারত একটি বৈচিত্র্যময় দেশ &mdash; এখানে রয়েছে ঐতিহাসিক স্থাপনা, পাহাড়, সমুদ্র সৈকত এবং ধর্মীয় স্থান। আমাদের সহজ ভিসা প্রক্রিয়ার মাধ্যমে আপনি উপভোগ করতে পারবেন ভারতের অনন্য সৌন্দর্য।",
    callToAction: "🚀 এখনই আবেদন করুন এবং ভারতের ভ্রমণ শুরু করুন!",
    benefits: [
        {
            icon: <Zap size={24} />,
            title: "দ্রুত প্রক্রিয়াকরণ",
            description: "মাত্র ৩–৭ কার্যদিবসে ভিসা প্রস্তুত!",
        },
        {
            icon: <Shield size={24} />,
            title: "১০০% নিরাপদ",
            description: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত ও গোপনীয়।",
        },
        {
            icon: <Star size={24} />,
            title: "বিশেষজ্ঞ সহায়তা",
            description: "অভিজ্ঞ টিম থেকে সঠিক গাইডলাইন।",
        },
        {
            icon: <Gift size={24} />,
            title: "বোনাস ট্রাভেল টিপস",
            description: "ভারতের ভ্রমণ গাইড বিনামূল্যে!",
        },
    ],
    testimonials: [
        {
            name: "মোহনা দে",
            comment:
                "ভারতের ভিসা প্রক্রিয়া এত সহজ &mdash; আগে জানতাম না! খুব দ্রুত approval পেয়েছি।",
        },
        {
            name: "ইমরান হোসেন",
            comment:
                "গ্লোবট্র্যাকের সার্ভিস সত্যিই অসাধারণ। ভারতের ভিসা নিয়ে একদম ঝামেলা হয়নি।",
        },
    ],
};

export default function IndiaVisa() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-36 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {indiaVisa.emoji} {indiaVisa.title}
                </motion.h2>
                <motion.p
                    className="text-orange-600 text-xl md:text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {indiaVisa.subtitle}
                </motion.p>
                <motion.p
                    className="text-gray-700 text-lg md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {indiaVisa.description}
                </motion.p>
            </div>

            {/* Main Card */}
            <motion.div
                className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6 border-t-4 border-orange-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                {/* Visa Details */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">ভিসার বিবরণ:</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>✅ ভিসার ধরন: {indiaVisa.type}</li>
                        <li>✅ ফি: {indiaVisa.fee}</li>
                        <li>✅ বৈধতা: {indiaVisa.validity}</li>
                        <li>✅ প্রক্রিয়াকরণ সময়: {indiaVisa.processingTime}</li>
                        <li>✨ ভারতের সৌন্দর্য আবিষ্কার করুন সহজ ভিসা প্রক্রিয়ায়।</li>
                    </ul>
                </div>

                {/* Requirements */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">প্রয়োজনীয়তা:</h3>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                        {indiaVisa.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                        <li>✨ আপনার ভ্রমণ হবে নিরাপদ এবং পরিকল্পিত।</li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">
                        কেন আমাদের নির্বাচন করবেন?
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                        {indiaVisa.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="text-orange-500 text-lg">✅</span>
                                <span>{feat.slice(2)}</span>
                            </li>
                        ))}
                        <li>✨ ২৪/৭ অনলাইন সাপোর্ট।</li>
                        <li>✨ ৯৯% সফলতার হার।</li>
                    </ul>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {indiaVisa.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-orange-50 p-4 rounded-lg border border-orange-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-orange-600">{benefit.icon}</div>
                                <h4 className="font-semibold text-orange-800">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="text-gray-700 text-sm">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mt-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                        সন্তুষ্ট গ্রাহকদের কথা:
                    </h3>
                    <div className="space-y-4">
                        {indiaVisa.testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <p className="text-gray-700 italic">
                                    &quot;{testimonial.comment}&quot;
                                </p>
                                <p className="text-right font-semibold text-orange-800 mt-2">
                                    - {testimonial.name}
                                </p>
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
                            className="relative w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
                        >
                            <Plane size={20} className="animate-bounce" />
                            Apply Now
                        </motion.button>
                    </Link>

                    <Link href="/visaoffers" className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
                        >
                            <Plane size={20} />
                            Back to Visa Offers
                        </motion.button>
                    </Link>
                </div>

                {/* Emergency Contact */}
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        জরুরী সহায়তার জন্য কল করুন:{" "}
                        <strong className="text-orange-700">+65 9123 4567</strong>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
