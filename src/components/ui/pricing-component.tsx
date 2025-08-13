"use client";

import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [
    {
      name: "Base Plan",
      price: "₹3,500",
      description: "Perfect for getting started",
      features: [
        "Complete E-commerce Backend",
        "1 Frontend Included (Web, Mobile, or Chat)",
        "Payment Integration (Razorpay)",
        "Inventory Management",
        "Order Tracking",
        "Customer Management",
        "Advanced Analytics",
        "24/7 Support"
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Recommended"
    },
    {
      name: "Dual Frontend",
      price: "₹4,500",
      description: "Expand your reach",
      features: [
        "Everything in Base Plan",
        "2 Frontends Included",
        "Choose any combination:",
        "• Web Frontend",
        "• Native Mobile App",
        "• Chat-based Commerce",
        "WhatsApp Integration",
        "Instagram Integration",
        "Priority Support"
      ],
      cta: "Choose Dual Frontend",
      highlighted: false
    },
    {
      name: "Complete Suite",
      price: "₹5,500",
      description: "Maximum flexibility",
      features: [
        "Everything in Base Plan",
        "All 3 Frontends Included:",
        "• Web Frontend",
        "• Native Mobile App", 
        "• Chat-based Commerce",
        "WhatsApp & Instagram Integration",
        "Custom Branding Options",
        "Dedicated Account Manager",
        "Enterprise-level Support",
        "Custom Integrations"
      ],
      cta: "Get Complete Suite",
      highlighted: false
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-[#111111] text-gray-700 dark:text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Choose the perfect plan for your e-commerce needs. Start with one frontend and scale as you grow.
          </p>

          <div className="inline-flex items-center bg-gray-200 dark:bg-gray-800/50 rounded-full p-1 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50">
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${!isAnnual
                  ? 'bg-[#0CF2A0] text-[#111111] shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${isAnnual
                  ? 'bg-[#0CF2A0] text-[#111111] shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border backdrop-blur-sm transition-all duration-300 ${plan.highlighted
                  ? 'border-[#0CF2A0]/30 bg-white/80 dark:bg-gray-800/20 scale-[1.02] shadow-2xl shadow-[#0CF2A0]/10'
                  : 'border-gray-300/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/10 hover:border-gray-400/50 dark:hover:border-gray-600/50 hover:bg-white/80 dark:hover:bg-gray-800/20'
                } p-8`}
              style={{
                background: plan.highlighted 
                  ? 'linear-gradient(135deg, rgba(12, 242, 160, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%)'
                  : undefined
              }}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#0CF2A0]/20 rounded-full blur-md" />
                      <div className="relative px-4 py-1.5 bg-[#0CF2A0] backdrop-blur-sm rounded-full">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-[#111111] animate-pulse" />
                          <span className="text-xs font-medium text-[#111111]">{plan.badge}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    per month{isAnnual && plan.price !== "Custom" ? " (billed annually)" : ""}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#0CF2A0] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 ${plan.highlighted
                    ? 'bg-[#0CF2A0] text-[#111111] hover:bg-[#0CF2A0]/90 shadow-lg hover:shadow-xl hover:scale-[1.02]'
                    : 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
              >
                {plan.cta}
              </button>

              {/* Glassmorphic glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0CF2A0]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
