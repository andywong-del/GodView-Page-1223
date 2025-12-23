
import React from 'react';
import { CheckCircle2, Zap, ArrowRight } from './Icons';

const PricingTable: React.FC = () => {
    const tiers = [
        {
            name: "SOLO HACKER",
            price: "$0",
            desc: "Secure your first sales device and test the GodView protocol.",
            features: [
                "1 Sales Device Sync",
                "Live Mirroring (0.1s latency)",
                "7-Day Retention Vault",
                "Basic Admin Dashboard",
                "Community Support"
            ],
            cta: "START FREE",
            color: "gray",
            popular: false
        },
        {
            name: "TEAM DOMINANCE",
            price: "$149",
            period: "/mo",
            desc: "The standard for growing teams who can't afford to lose a single lead.",
            features: [
                "Up to 10 Sales Devices",
                "ANTI-DELETE Shield Active",
                "Lifetime Relationship Vault",
                "Spy-Cam Performance Heatmaps",
                "Top Seller Script Cloning",
                "Priority Support Access"
            ],
            cta: "GET GROWTH HACK",
            color: "green",
            popular: true
        },
        {
            name: "ENTERPRISE OPS",
            price: "Custom",
            desc: "For high-volume organizations requiring total asset security.",
            features: [
                "Unlimited Sales Devices",
                "White-Label Dashboard",
                "API & CRM Webhook Access",
                "1-on-1 Closing Strategy",
                "Dedicated Account Manager",
                "Full Data Legal Protection"
            ],
            cta: "TALK TO EXPERT",
            color: "blue",
            popular: false
        }
    ];

    return (
        <div className="py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">THE COST OF <span className="text-green-500">IGNORANCE</span></h2>
                    <p className="text-gray-400 text-lg font-bold uppercase tracking-widest">Losing one $10k client costs more than 5 years of GodView.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div 
                            key={idx} 
                            className={`relative flex flex-col p-8 rounded-[2.5rem] border-2 transition-all duration-300 hover:translate-y-[-8px] ${
                                tier.popular 
                                ? 'bg-green-500/5 border-green-500 shadow-[0_20px_60px_rgba(34,197,94,0.1)]' 
                                : 'bg-gray-900/40 border-gray-800'
                            }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-1 rounded-full text-xs font-black uppercase italic tracking-widest shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-black uppercase italic mb-2 ${tier.color === 'green' ? 'text-green-500' : 'text-white'}`}>
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-5xl font-black italic tracking-tighter">{tier.price}</span>
                                    {tier.period && <span className="text-gray-500 font-bold uppercase text-sm">{tier.period}</span>}
                                </div>
                                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                    {tier.desc}
                                </p>
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {tier.features.map((feature, fidx) => (
                                    <div key={fidx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className={tier.color === 'green' ? 'text-green-500' : 'text-gray-600'} />
                                        <span className="text-sm font-bold text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a 
                                href="https://app.chatbooster.ai/en-US/signup" 
                                className={`w-full py-4 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-2 group ${
                                    tier.color === 'green' 
                                    ? 'bg-green-500 text-black hover:bg-green-400 shadow-[0_10px_30px_rgba(34,197,94,0.3)]' 
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {tier.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingTable;
