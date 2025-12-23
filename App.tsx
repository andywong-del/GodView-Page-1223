
import React from 'react';
import CTAButton from './components/CTAButton';
import HeroMockup from './components/HeroMockup';
import PricingTable from './components/PricingTable';
import { FAQItem } from './components/FAQ';
import { SpyCamGraphic, SecurityGraphic, CloneGraphic, AutomationGraphic, OmnichannelGraphic, MindGenGraphic } from './components/Graphics';
import { Zap, Lightbulb, Eye, CheckCircle2, Lock, ShieldCheck, Copy, XCircle, TrendingUp, Search, Users, ArrowRight, Globe, Cpu, Layers, MessageSquare } from './components/Icons';
import { ROW_1, ROW_2 } from './constants';

const StickyBar: React.FC = () => {
    const handleTracking = () => {
        try {
            window.parent.postMessage("FIRE_PIXEL", "*");
            if ((window as any).fbq) (window as any).fbq('track', 'StartTrial');
            if ((window as any).ttq) (window as any).ttq.track('StartTrial');
        } catch (e) {}
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-gray-900/95 backdrop-blur-xl border-b border-green-500/40 p-3 md:p-4 opacity-100 translate-y-0 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <div className="flex items-center gap-2">
                        <span className="hidden md:block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-white font-black text-sm md:text-xl tracking-tighter uppercase italic">
                            OWN EVERY WHATSAPP CLIENT NOW!
                        </p>
                    </div>
                    <p className="text-green-400 text-[10px] md:text-sm font-bold font-mono animate-pulse hidden sm:block">
                        &lt;&lt; JOIN 15,000+ TOP SELLERS
                    </p>
                </div>
                
                <a 
                    href="https://app.chatbooster.ai/en-US/signup" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={handleTracking}
                    className="relative overflow-hidden bg-[#00E676] hover:bg-[#00C853] text-black text-xs md:text-base font-black py-2 px-4 md:px-8 rounded-full shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0"
                >
                    <div className="absolute inset-0 bg-white/30 w-1/2 h-full blur-lg animate-shimmer pointer-events-none"></div>
                    START FREE <ArrowRight size={16} />
                </a>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden">
            <StickyBar />

            {/* HEADER */}
            <header className="relative pt-24 md:pt-36 pb-20 md:pb-32 px-4 md:px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/10 rounded-full blur-[160px] -z-10" />
                <div className="max-w-7xl mx-auto text-center relative z-20">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm font-black mb-10 animate-pulse uppercase italic tracking-widest">
                        <Zap size={16} /> Total Relationship Ownership is Now Possible
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black tracking-tight leading-tight mb-8 uppercase italic">
                        OWN EVERY WHATSAPP CLIENT <br />
                        <span className="border-b-8 border-green-500 pb-2 inline-block mt-4">FOREVER.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-center text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-bold">
                        Reps quit. They wipe their phones. They try to steal your leads. <span className="text-white underline decoration-green-500 decoration-4">NOT ANYMORE.</span> GodView mirrors every WhatsApp chat to your private vault in real-time. If they delete it on the phone, <span className="text-green-500">it stays in your dashboard forever.</span>
                    </p>
                    <div className="mb-16 md:mb-24 relative z-50">
                         <CTAButton />
                    </div>
                    <HeroMockup />
                </div>
            </header>

            {/* BENEFITS - ZIG ZAG SECTION */}
            <section className="py-24 px-4 md:px-8 bg-gray-900/30 relative z-10 border-t border-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-white">THE UNTOUCHABLE TRINITY</h2>
                        <p className="text-green-500 font-black uppercase tracking-[0.3em] text-sm md:text-xl italic">Absolute Control. Total Ownership. Zero Excuses.</p>
                    </div>

                    <div className="space-y-40">
                        {/* Benefit 1: Stop Client Theft */}
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-4 rounded-2xl bg-gray-800 mb-8 border border-gray-700">
                                    <Lock className="text-blue-400 w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">KILL <span className="text-blue-400">CLIENT THEFT</span> AT THE SOURCE</h3>
                                <div className="block md:hidden mb-8 w-full"><SecurityGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
                                    Your pipeline is your lifeblood. When a rep leaves, they shouldn't walk away with your $100k database. GodView locks every WhatsApp contact into your company vault the second the first message is sent. <span className="text-blue-400 font-bold">Factory resets and "Clear Chat" are now powerless.</span>
                                </p>
                                <div className="bg-blue-900/20 border-2 border-blue-500/30 p-6 rounded-2xl text-blue-200 text-base font-bold flex items-center gap-4">
                                    <ShieldCheck className="shrink-0" size={28} /> Stop being a lead-gen charity for ex-employees.
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><SecurityGraphic /></div>
                        </div>

                        {/* Benefit 2: Ultimate Spy Camera */}
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                            <div className="w-full md:w-1/2 hidden md:block"><SpyCamGraphic /></div>
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-4 rounded-2xl bg-gray-800 mb-8 border border-gray-700">
                                    <Eye className="text-green-500 w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">THE ULTIMATE <span className="text-green-500">SPY CAMERA</span> FOR SALES</h3>
                                <div className="block md:hidden mb-8 w-full"><SpyCamGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
                                    Are your reps actually selling or just scrolling? GodView gives you a live look into every phone. Watch deals close in real-time or catch "ghosted" leads before they freeze. No more guessing—just pure, unadulterated performance data.
                                </p>
                                <div className="flex items-center gap-4 text-green-400 font-black bg-green-950/20 border-2 border-green-500/30 p-6 rounded-2xl">
                                    <CheckCircle2 size={28} /> Accountability isn't mean. It's profitable.
                                </div>
                            </div>
                        </div>

                        {/* Benefit 3: Clone Your Best Sales Rep */}
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-4 rounded-2xl bg-gray-800 mb-8 border border-gray-700">
                                    <Copy className="text-yellow-400 w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">SCALE YOUR <span className="text-yellow-400">TOP 1% SELLERS</span></h3>
                                <div className="block md:hidden mb-8 w-full"><CloneGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
                                    Why struggle with training when you can just copy-paste? Identify your top performer's closing scripts and force them across your whole team. GodView allows you to turn a C-player into an A-player overnight by mimicking what actually makes money.
                                </p>
                                <div className="bg-yellow-900/20 border-2 border-yellow-500/30 p-6 rounded-2xl text-yellow-200 text-base font-bold flex items-center gap-4">
                                    <TrendingUp className="shrink-0" size={28} /> Stop hiring more reps. Start cloning your best one.
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><CloneGraphic /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 bg-black border-y border-gray-900 overflow-hidden relative z-10">
                <div className="max-w-7xl mx-auto mb-16 px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">TRUSTED BY THE <span className="text-green-500">TOP 1%</span></h2>
                    <p className="text-gray-500 font-bold italic uppercase tracking-widest text-base">Hacking Sales Since 2021</p>
                </div>
                <div className="flex w-full overflow-hidden mask-image-linear-gradient mb-8">
                    <div className="flex animate-scroll gap-6 px-6">
                        {[...ROW_1, ...ROW_1].map((item, index) => (
                            <div key={index} className="w-[400px] md:w-[500px] shrink-0 bg-gray-900 p-10 rounded-[2.5rem] border border-gray-800 relative group hover:border-green-500/50 transition-all shadow-xl">
                                <p className="text-xl text-gray-300 mb-8 relative z-10 italic leading-relaxed font-medium">"{item.quote}"</p>
                                <div className="text-sm text-green-400 font-black mb-6 flex items-center gap-2 font-mono uppercase tracking-widest"><TrendingUp size={16} /> {item.highlight}</div>
                                <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
                                    <img src={`https://i.pravatar.cc/150?img=${item.img}`} alt={item.name} className={`w-14 h-14 rounded-full border-2 border-${item.color}-500 object-cover`} />
                                    <div>
                                        <div className="font-black text-white uppercase italic text-lg">{item.name}</div>
                                        <div className="text-xs text-gray-500 font-bold">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE SUITE - ZIG ZAG LAYOUT */}
            <section className="py-32 px-4 md:px-8 bg-[#020617] relative z-10 border-t border-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <div className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-xs font-black uppercase italic mb-6 tracking-widest animate-pulse">
                            ECOSYSTEM UPGRADE
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                            BEYOND <span className="text-green-500">GODVIEW</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-bold italic max-w-2xl mx-auto leading-relaxed">
                            Apart from GodView, ChatBooster also provides the following <span className="text-white underline decoration-green-500 decoration-2">benefits for free</span> to supercharge your entire operation.
                        </p>
                    </div>

                    <div className="space-y-48">
                        {/* Suite 1: Social Automation */}
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                            <div className="w-full md:w-1/2">
                                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-blue-500/10 mb-8 border border-blue-500/20">
                                    <Zap className="text-blue-400 w-8 h-8" />
                                    <span className="text-blue-400 font-black uppercase italic tracking-widest text-sm">Automated Growth</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-blue-400 uppercase italic tracking-tighter leading-none">SOCIAL <span className="text-white">AUTOMATION</span></h3>
                                <div className="block md:hidden mb-8 w-full"><AutomationGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic">
                                    Stop manual outreach. Our system handles DMs and comment replies on IG, FB, and X automatically, funneling every interested prospect directly to your WhatsApp cockpit 24/7.
                                </p>
                                <div className="flex items-center gap-3 text-blue-400 font-black border-l-4 border-blue-500 pl-6 py-2">
                                    <span>Zero Lead Leakage. Infinite Traffic.</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><AutomationGraphic /></div>
                        </div>

                        {/* Suite 2: Unified Inbox */}
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                            <div className="w-full md:w-1/2 hidden md:block"><OmnichannelGraphic /></div>
                            <div className="w-full md:w-1/2">
                                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 mb-8 border border-green-500/20">
                                    <Layers className="text-green-500 w-8 h-8" />
                                    <span className="text-green-500 font-black uppercase italic tracking-widest text-sm">Centralized Hub</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-green-500 uppercase italic tracking-tighter leading-none">UNIFIED <span className="text-white">OMNI-INBOX</span></h3>
                                <div className="block md:hidden mb-8 w-full"><OmnichannelGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic">
                                    Forget tab switching. Manage Instagram, Facebook, and WhatsApp from a single, high-speed cockpit. Close deals faster when everything is in one place.
                                </p>
                                <div className="flex items-center gap-3 text-green-500 font-black border-l-4 border-green-500 pl-6 py-2">
                                    <span>Max Response Speed. Zero Distractions.</span>
                                </div>
                            </div>
                        </div>

                        {/* Suite 3: MindGen AI */}
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                            <div className="w-full md:w-1/2">
                                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-yellow-500/10 mb-8 border border-yellow-500/20">
                                    <Cpu className="text-yellow-500 w-8 h-8" />
                                    <span className="text-yellow-500 font-black uppercase italic tracking-widest text-sm">Brain Extraction</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-yellow-500 uppercase italic tracking-tighter leading-none">MINDGEN <span className="text-white">AI CLONING</span></h3>
                                <div className="block md:hidden mb-8 w-full"><MindGenGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic">
                                    Our AI analyzes your top seller's historical closes and generates perfect response drafts for your junior reps. It's like having your best closer whispering in their ear.
                                </p>
                                <div className="flex items-center gap-3 text-yellow-500 font-black border-l-4 border-yellow-500 pl-6 py-2">
                                    <span>Perfect Scripts. Instant Closers.</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><MindGenGraphic /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING TABLE */}
            <PricingTable />

            {/* FINAL CTA SECTION */}
            <section className="py-32 px-4 md:px-8 bg-gray-900/20 relative z-10 border-y border-gray-800 text-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">START FOR <span className="text-green-500 underline decoration-green-500 decoration-8 underline-offset-8">FREE</span></h2>
                    <p className="text-gray-300 text-2xl font-black italic mb-16 max-w-2xl mx-auto">Lock your assets. Stop the leaks. Experience the GodView hack today. No credit card needed.</p>
                    <div className="scale-110 md:scale-125">
                        <CTAButton />
                    </div>
                    <p className="mt-16 text-gray-600 font-mono text-xs uppercase tracking-[0.5em] animate-pulse font-black">Elite Level Access Only</p>
                </div>
            </section>

            <footer className="py-12 bg-black border-t border-gray-900 text-center text-gray-700 text-xs relative z-10 font-mono tracking-widest uppercase font-black">
                <p>© {new Date().getFullYear()} GodView Systems. All rights reserved. Data Integrity Guaranteed.</p>
            </footer>
        </div>
    );
};

export default App;
