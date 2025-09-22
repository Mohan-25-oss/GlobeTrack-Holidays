"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const visaDetails = [
    {
        country: "Malaysia",
        emoji: "🇲🇾",
        title: "Malaysia Tourist Visa",
        points: [
            "Visa Type: eVisa / eNTRI",
            "Fee: 5000.00 Taka",
            "Validity: 6 months",
            "Processing Time: 3–5 working days",
            "Requirements: Passport ≥6 months, WorkPermit/S-Pass, Passport-sized photo",
            "Features: ✅ Fast & easy online process, ✅ Expert assistance, ✅ 24/7 booking",
        ],
        style: "from-yellow-400 via-pink-400 to-green-400",
    },
    {
        country: "Indonesia",
        emoji: "🇮🇩",
        title: "Indonesia Tourist Visa",
        points: [
            "Visa Type: Visa on Arrival (VOA) / eVisa",
            "Fee: 7000.00 Taka",
            "Validity: 30 days (extendable once)",
            "Processing Time: Online eVisa 3–5 days, VOA immediate",
            "Requirements: Passport ≥6 months, Ferry/Flight tickets, Hotel/Stay address",
            "Features: ✅ Fast & easy, ✅ Online or VOA, ✅ Expert assistance, ✅ 24/7 booking",
        ],
        style: "from-purple-400 via-pink-500 to-red-400",
    },
    {
        country: "Thailand",
        emoji: "🇹🇭",
        title: "Thailand Tourist Visa",
        points: [
            "Visa Type: Tourist Visa / 30-day Visa Exemption",
            "Fee: 7000.00 Taka",
            "Validity: 30 days",
            "Processing Time: eVisa 3–5 days, VOA immediate",
            "Requirements: Passport ≥6 months, Flight tickets, Hotel/Stay address",
            "Features: ✅ Fast process, ✅ Online or VOA, ✅ Expert support, ✅ 24/7 online booking",
        ],
        style: "from-green-400 via-teal-400 to-blue-400",
    },
    {
        country: "India",
        emoji: "🇮🇳",
        title: "India Tourist Visa",
        points: [
            "Visa Type: e-Tourist Visa (30-day / 1-year)",
            "Fee: 6500.00 Taka",
            "Validity: 3 months or 6 months depending on type",
            "Processing Time: Online 3–5 days",
            "Requirements: Passport ≥6 months, Hotel/Stay address",
            "Features: ✅ Easy online application, ✅ Expert assistance, ✅ Multiple entries possible",
        ],
        style: "from-orange-400 via-red-400 to-pink-400",
    },
    {
        country: "Dubai",
        emoji: "🇦🇪",
        title: "Dubai Tourist Visa",
        points: [
            "Visa Type: Tourist eVisa",
            "Fee: 8500.00 Taka",
            "Validity: 30 days (extendable once)",
            "Processing Time: Online 3–5 days",
            "Requirements: Passport ≥6 months, Flight tickets, Hotel/Stay address",
            "Features: ✅ Online application, ✅ Quick approval, ✅ Expert guidance, ✅ 24/7 support",
        ],
        style: "from-blue-400 via-purple-400 to-pink-400",
    },
];

export default function BdVisaOffers() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-12 py-7">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-lg">
                    🛂 Visa Fees from Bangladesh
                </h2>
                <p className="text-gray-600 text-lg md:text-xl">
                    Apply for your visa safely and quickly. Expert assistance and online booking available 24/7.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visaDetails.map((visa, idx) => (
                    <motion.div
                        key={idx}
                        className={`rounded-3xl shadow-xl p-6 flex flex-col justify-between border-t-4 border-transparent hover:border-${visa.style.split(" ")[0]} transition-all duration-300 bg-white`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                    >
                        {/* Header */}
                        <h3
                            className={`text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${visa.style} drop-shadow-lg`}
                        >
                            {visa.emoji} ✨ {visa.title}
                        </h3>

                        {/* Points list */}
                        <ul className="text-left space-y-2 mb-6 text-gray-700">
                            {visa.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-green-500 text-lg">✅</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto space-y-4 flex flex-col sm:flex-row sm:justify-center sm:gap-4">
                            {/* Apply Now Button */}
                            <Link href="/contact">
                                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 w-full">
                                    🚀 Apply Now
                                </button>
                            </Link>

                            {/* Bengali Details Button */}
                            <Link href={`/${visa.country.toLowerCase()}`}>
                                <button className="bg-gradient-to-r from-yellow-400 via-pink-400 to-green-400 hover:from-yellow-500 hover:via-pink-500 hover:to-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 w-full">
                                    📖 More Details
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
