"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Headphones, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+233 (0) 302 000 000",
    sub: "Mon - Sun, 24/7",
    color: "#1FAFBE",
    bg: "bg-[#E8F8FB]",
    hoverBorder: "hover:border-[#1FAFBE]/30",
    href: "tel:+2330302000000",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@aquaride.com.gh",
    sub: "We reply within 24 hours",
    color: "#FBBF24",
    bg: "bg-[#FFF9E6]",
    hoverBorder: "hover:border-[#FBBF24]/30",
    href: "mailto:hello@aquaride.com.gh",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Airport City, Accra, Ghana",
    sub: "Head Office",
    color: "#CE1126",
    bg: "bg-[#FFF0F0]",
    hoverBorder: "hover:border-[#CE1126]/30",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "24 Hours / 7 Days",
    sub: "Always available for you",
    color: "#006B3D",
    bg: "bg-[#EDFFF5]",
    hoverBorder: "hover:border-[#006B3D]/30",
    href: "#",
  },
];


export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-28 px-4 md:px-6 overflow-hidden"
        style={{
          background: "linear-gradient(200.07deg, #01B7E7 -46.71%, #1DBCDC 69.53%)",
        }}
      >
        {/* Animated Floating Circles */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 -right-10 w-[200px] h-[200px] rounded-full blur-[100px] pointer-events-none opacity-50"
          style={{ backgroundColor: "#FBBF24" }}
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -left-16 w-[250px] h-[250px] rounded-full blur-[120px] pointer-events-none opacity-30"
          style={{ backgroundColor: "#BEDBFF" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10 pointer-events-none"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
          >
            <Headphones className="w-7 h-7 text-white" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#FCD116] text-[11px] font-black uppercase tracking-[0.25em] mb-4"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-[56px] font-black text-white mb-5 font-manrope leading-tight"
          >
            We&apos;d Love to{" "}
            <span className="relative">
              Hear From You
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-2 left-0 h-[4px] bg-[#FCD116] rounded-full"
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Have a question, feedback, or need support? Our team is ready to help you 24/7 across Ghana.
          </motion.p>

          {/* Ghana Accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-1 h-1.5 rounded-full overflow-hidden mx-auto mt-8"
          >
            <div className="w-1/3 bg-[#CE1126]" />
            <div className="w-1/3 bg-[#FCD116]" />
            <div className="w-1/3 bg-[#006B3D]" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => (
              <a key={item.title} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white rounded-[20px] p-6 border border-gray-100 text-center cursor-pointer transition-all duration-300 ${item.hoverBorder}`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </motion.div>
                  <h3 className="text-[#0A2540] text-sm font-black font-manrope mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#0A2540] text-[13px] font-semibold">{item.detail}</p>
                  <p className="text-[#0A254066] text-[11px] mt-1" style={{ fontFamily: "var(--font-cormorant)" }}>{item.sub}</p>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #EFF6FF 100%)" }}>
        {/* Decorative Glows */}
        <div className="absolute top-20 -left-20 w-[288px] h-[288px] rounded-full blur-[128px] pointer-events-none z-0 opacity-40" style={{ backgroundColor: "#BEDBFF" }} />
        <div className="absolute bottom-10 -right-20 w-[300px] h-[300px] rounded-full blur-[128px] pointer-events-none z-0 opacity-30" style={{ backgroundColor: "#BEDBFF" }} />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(200.07deg, #01B7E7 -46.71%, #1DBCDC 69.53%)" }}
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </motion.div>
            <h2 className="text-2xl md:text-[36px] font-black text-[#0A2540] font-manrope mb-3">
              Send Us a Message
            </h2>
            <p className="text-[#0A254099] text-sm max-w-md mx-auto" style={{ fontFamily: "var(--font-cormorant)" }}>
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "linear-gradient(200.07deg, #01B7E7 -46.71%, #1DBCDC 69.53%)" }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-[#0A2540] font-manrope mb-2">Message Sent!</h3>
                  <p className="text-[#0A254099] text-sm" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-bold text-[#0A2540]">Full Name *</label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Mensah"
                          className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#1FAFBE] focus:bg-white focus:shadow-[0_0_0_4px_rgba(31,175,190,0.1)] transition-all duration-300 font-medium text-[#0A2540]"
                          required
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-bold text-[#0A2540]">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 24 000 0000"
                        className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#1FAFBE] focus:bg-white focus:shadow-[0_0_0_4px_rgba(31,175,190,0.1)] transition-all duration-300 font-medium text-[#0A2540]"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-bold text-[#0A2540]">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#1FAFBE] focus:bg-white focus:shadow-[0_0_0_4px_rgba(31,175,190,0.1)] transition-all duration-300 font-medium text-[#0A2540]"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-bold text-[#0A2540]">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#1FAFBE] focus:bg-white focus:shadow-[0_0_0_4px_rgba(31,175,190,0.1)] transition-all duration-300 font-medium text-[#0A2540]"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-bold text-[#0A2540]">Message *</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#1FAFBE] focus:bg-white focus:shadow-[0_0_0_4px_rgba(31,175,190,0.1)] transition-all duration-300 font-medium text-[#0A2540] resize-none"
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -10px rgba(29, 188, 220, 0.3)" }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full text-white font-bold py-4 rounded-xl shadow-lg shadow-[#4BBDDF2a] flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                    style={{
                      background: "linear-gradient(200.07deg, #01B7E7 -46.71%, #1DBCDC 69.53%)",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
