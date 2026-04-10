"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CircleUserRound,
  User,
  Phone,
  Mail,
  MapPin,
  Lock,
  Truck,
  ChevronRight,
  UserCheck,
  ChevronLeft
} from "lucide-react";

const GetStarted = () => {
  const [activeTab, setActiveTab] = useState<"owner" | "driver">("owner");
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  // Colors for the brand gradient
  const primaryGradient = 'linear-gradient(200.07deg, #01B7E7 -46.71%, #1DBCDC 69.53%)';

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-20 px-4 md:px-6 mt-16 md:mt-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #EFF6FF 100%)' }}
    >
      {/* Decorative Glows */}
      <div 
        className="absolute top-[80px] -left-20 w-[288px] h-[288px] rounded-full blur-[128px] pointer-events-none z-0 opacity-60"
        style={{ backgroundColor: '#BEDBFF' }}
      />
      <div 
        className="absolute bottom-0 -right-20 w-[350px] h-[350px] rounded-full blur-[128px] pointer-events-none z-0 opacity-40"
        style={{ backgroundColor: '#BEDBFF' }}
      />

      <div className="max-w-[864px] mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">
          Get Started Today
        </h2>
        <p className="text-[#0A254099] font-medium mb-12">
          Join thousands of satisfied customers and drivers
        </p>

        {/* Toggle Tabs */}
        <div className="inline-flex p-1 bg-white border border-gray-100 rounded-full shadow-lg mb-12 relative overflow-hidden">
          <button
            onClick={() => { setActiveTab("owner"); setStep(1); }}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-colors relative z-10 ${
              activeTab === "owner" ? "text-white" : "text-[#0A254099]"
            }`}
          >
            <CircleUserRound className="w-4 h-4" />
            Manage your Trucks
            {activeTab === "owner" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full z-[-1]"
                style={{ background: primaryGradient }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => { setActiveTab("driver"); setStep(1); }}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-colors relative z-10 ${
              activeTab === "driver" ? "text-white" : "text-[#0A254099]"
            }`}
          >
            <Truck className="w-4 h-4" />
            Become a driver
            {activeTab === "driver" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full z-[-1]"
                style={{ background: primaryGradient }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[24px] overflow-hidden text-left border border-gray-100 max-w-3xl mx-auto shadow-[0_15px_50px_-10px_rgba(0,107,174,0.1)]">
          {/* Card Header */}
          <div 
            className="pt-6 pb-2 px-6 text-white relative"
            style={{ background: primaryGradient }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
               {activeTab === "owner" ? <CircleUserRound className="w-4 h-4" /> : <Truck className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">
                  {activeTab === "owner" ? "Create a Truck Owner Account" : "Register Your Truck"}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {activeTab === "owner" ? "Manage your fleet on a dashboard" : "Join our partner network"}
                </p>
              </div>
            </div>

            {/* Integrated Segmented Progress Bar (Only for Driver Multi-step) */}
            {activeTab === "driver" && (
              <div className="mt-6 mb-2">
                <div className="flex gap-2 w-full">
                  <div 
                    className={`h-[7px] flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-[#FBBC05]' : 'bg-white/20'}`} 
                  />
                  <div 
                    className={`h-[7px] flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-[#FBBC05]' : 'bg-white/20'}`} 
                  />
                </div>
                <div className="flex justify-between mt-3 mb-1 text-[11px] font-bold uppercase tracking-wider text-[#FFFFFF]">
                  <span className={step === 1 ? "opacity-100" : "opacity-60"}>Personal Info</span>
                  <span className={step === 2 ? "opacity-100" : "opacity-60"}>Truck Details</span>
                </div>
              </div>
            )}
          </div>

          {/* Form Body */}
          <div className="p-8 md:p-10">
            <AnimatePresence mode="wait">
              {activeTab === "owner" ? (
                /* SINGLE PAGE FORM FOR TRUCK OWNER */
                <motion.div
                  key="owner-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name & Phone */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="text" placeholder="John Mensah" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="tel" placeholder="+233 24 000 0000" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>

                      {/* City & Address */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">City *</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="text" placeholder="City" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Delivery Address *</label>
                        <div className="relative">
                          <input type="text" placeholder="Enter your address" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>

                      {/* Passwords */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="password" placeholder="Create password" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Confirm Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="password" placeholder="Confirm password" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <input type="checkbox" id="terms-owner" className="w-4 h-4 rounded border-gray-300 text-[#4BBDDF]" required />
                      <label htmlFor="terms-owner" className="text-xs font-medium text-[#0A254099]">
                        I agree to the <a href="/terms-and-conditions" target="_blank" className="text-[#155DFC] font-bold underline cursor-pointer">Terms of Service</a> and <a href="/privacy-policy" target="_blank" className="text-[#155DFC] font-bold underline cursor-pointer">Privacy Policy</a>
                      </label>
                    </div>

                    <button type="submit" className="w-full text-white font-bold py-4 rounded-xl shadow-lg shadow-[#4BBDDF2a] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2" style={{ background: primaryGradient }}>
                      Create Account
                    </button>

                    <p className="text-center text-sm font-medium text-[#0A254099] mt-6">
                      Already have an account? <span className="text-[#155DFC] font-bold  cursor-pointer">Sign in.</span>
                    </p>
                  </form>
                </motion.div>
              ) : (
                /* MULTI STEP FORM FOR BECOME A DRIVER */
                <motion.div
                  key={step === 1 ? "driver-step1" : "driver-step2"}
                  initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 1 ? (
                    <>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-1 w-[247px] h-[32px]">Personal Information</h4>
                      <p className="text-[#0A254099] text-[13px] font-medium mb-8">Tell us about yourself</p>

                      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Full Name *</label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input type="text" placeholder="John Mensah" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Phone Number *</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input type="tel" placeholder="+233 24 000 0000" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                            </div>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Email Address *</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">City *</label>
                            <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input type="text" placeholder="City" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[77px] h-[20px]">Residential Address *</label>
                            <div className="relative">
                              <input type="text" placeholder="Enter your address" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-6" style={{ background: primaryGradient }}>
                          Continue
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-1 w-[211px] h-[32px]">Truck Information</h4>
                      <p className="text-[#0A254099] text-[13px] font-medium mb-8">Details about your vehicle</p>

                      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[113px] h-[20px]">Truck Capacity *</label>
                            <input type="text" placeholder="e.g. 3000 Gallons" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[113px] h-[20px]">Truck Model/Make *</label>
                            <input type="text" placeholder="e.g. Mercedes-Benz 1518" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[113px] h-[20px]">License Plate Number *</label>
                            <input type="text" placeholder="GR-1234-20" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0A2540] w-[113px] h-[20px]">Driver's License Number *</label>
                            <input type="text" placeholder="Enter license number" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" required />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-[#0A2540] mb-1 flex items-center gap-2 w-[246px] h-[28px]">
                            Business Information <span className="text-[10px] text-gray-400 rounded-full uppercase">( Optional )</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-[#0A2540] w-[113px] h-[20px]">Business Name</label>
                              <input type="text" placeholder="Your business name" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-[#0A2540] w-[113px] h-[20px]">Registration Number</label>
                              <input type="text" placeholder="Business reg. number" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#4BBDDF] transition-all font-medium text-[#0A2540]" />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button type="button" onClick={handleBack} className="w-[389px] h-[56px] bg-white border border-gray-200 text-[#0A254099] font-bold rounded-xl transition-all hover:bg-gray-50 flex items-center justify-center gap-2">
                            <ChevronLeft className="w-5 h-5" />
                            Back
                          </button>
                          <button type="submit" className="w-[389px] h-[56px] text-white font-bold rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2" style={{ background: primaryGradient }}>
                            Continue
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
