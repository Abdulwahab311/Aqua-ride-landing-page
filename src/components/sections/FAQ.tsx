"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can a water tanker reach my location?",
    answer: "With our real-time orchestration system, urgent deliveries typically reach customers within 30 to 45 minutes, depending on your location and traffic conditions."
  },
  {
    question: "Is the water quality verified by AquaRide?",
    answer: "Absolutely. We only partner with certified tanker drivers who undergo rigorous quality checks. You can view the purity status of your current delivery directly in the app."
  },
  {
    question: "Can I schedule recurring weekly deliveries?",
    answer: "Yes! Our subscription plans allow you to set up weekly or monthly schedules so you never run out of water. You can manage these easily from your customer dashboard."
  },
  {
    question: "How do I track my delivery in real-time?",
    answer: "Once your order is confirmed, you'll see a live GPS map showing your tanker's precise location and estimated time of arrival, similar to leading ride-sharing apps."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? 'text-[#00B4D8]' : 'text-[#03045E] group-hover:text-[#00B4D8]'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#00B4D8] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-500 text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-[#03045E] tracking-tighter uppercase leading-[0.9]">
            Everything you <br />
            <span className="text-[#00B4D8]">Need to Know</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50/50 rounded-[40px] p-8 md:p-12 border border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
