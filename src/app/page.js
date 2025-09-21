"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Images,
  Plane,
  Globe,
  Star,
  Shield,
  Users,
  Award,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Phone,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import VisaOffers from "./visaoffers/page";
import Services from "./services/page";
import Destinations from "./destinations/page";
import About from "./about/page";
import Contact from "./contact/page";
import SafeText from "@/components/safeText";

// Stats component
const Stats = () => {
  const stats = [
    { number: "10K+", label: "Happy Travelers", icon: <Users className="text-blue-400" /> },
    { number: "50+", label: "Destinations", icon: <Globe className="text-green-400" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="text-yellow-400" /> },
    { number: "24/7", label: "Support", icon: <Shield className="text-purple-400" /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features component
const Features = () => {
  const text = `We're honest, transparent, and say "hello" — always!`;
  const features = [
    {
      icon: <Plane className="text-blue-500" size={32} />,
      title: "Easy Flight Booking",
      description: "Book flights to any destination with our seamless booking system"
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: "Visa Assistance",
      description: "Get expert help with all your visa requirements and documentation"
    },
    {
      icon: <Globe className="text-purple-500" size={32} />,
      title: "Worldwide Tours",
      description: "Discover amazing tour packages to destinations around the globe"
    },
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "Premium Service",
      description: "Experience top-notch service with our dedicated travel experts"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-gray-700 text-lg">
        <SafeText text={text} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-blue-500">GlobeTrack Holidays</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive travel solutions that make your journey seamless and memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl bg-blue-50">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Special Offers component
const SpecialOffers = () => {
  const text = `We're honest, transparent, and say "hello" — always!`;
  const offers = [
    {
      title: "Summer Europe Special",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=600&q=80",
      days: 7,
      price: "$1299"
    },
    {
      title: "Tropical Paradise Getaway",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      days: 5,
      price: "$899"
    },
    {
      title: "Asian Adventure Tour",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=600&q=80",
      days: 10,
      price: "$1599"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">

      <div className="text-gray-700 text-lg">
        <SafeText text={text} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Special <span className="text-blue-500">Travel Offers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Do not miss these limited-time deals for your next adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={500}
                  height={300}
                  unoptimized
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{offer.days} Days</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{offer.price}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      content: "GlobeTrack made our European tour absolutely seamless. Their attention to detail was impressive!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "The visa assistance was exceptional. I got my business visa in record time without any hassle.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Adventure Seeker",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Best travel agency I've worked with! They customized our Southeast Asia trip perfectly.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-blue-500">Travelers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have experienced our exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={500}
                  height={300}
                  unoptimized
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          className="text-xl text-blue-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Contact us today and let us create the perfect travel experience for you
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone size={20} />
              Call Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
              <MessageCircle size={20} />
              Get Quote
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70"></div>
        <div className="relative z-10 max-w-4xl px-4 sm:px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover the World with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              GlobeTrack Holidays
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your journey begins here - Visa Consultancy • Flight Booking • Amazing Tour Packages
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Plane size={20} />
                Book Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <MessageCircle size={20} />
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* Special Offers */}
      <SpecialOffers />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Page Components */}
      <VisaOffers />
      <Services />
      <Destinations />
      <About />
      <Contact />
    </div>
  );
}