
import React from 'react';
import CTAButton from './components/CTAButton';
import HeroMockup from './components/HeroMockup';
import PricingTable from './components/PricingTable';
import { FAQItem } from './components/FAQ';
import { SpyCamGraphic, SecurityGraphic, CloneGraphic, AutomationGraphic, OmnichannelGraphic, MindGenGraphic } from './components/Graphics';
import { Zap, Lightbulb, Eye, CheckCircle2, Lock, ShieldCheck, Copy, XCircle, TrendingUp, Search, Users, ArrowRight, Globe, Cpu, Layers, MessageSquare } from './components/Icons';
import { ROW_1 } from './constants';

const StickyBar: React.FC = () => {
    const handleTracking = () => {
        try {
            window.parent.postMessage("FIRE_PIXEL", "*");
            if ((window as any).fbq) (window as any).fbq('track', 'StartTrial');
            if ((window as any).ttq) (window as any).ttq.track('StartTrial');
        } catch (e) {}
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-gray-950/80 backdrop-blur-2xl border-b border-green-500/20 p-3 md:p-4 opacity-100 translate-y-0 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <div className="flex items-center gap-2">
                        <span className="hidden md:block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-white font-black text-sm md:text-xl tracking-tighter uppercase italic">
                            SECURE YOUR WHATSAPP DATA TODAY
                        </p>
                    </div>
                    <p className="text-green-400 text-[10px] md:text-sm font-bold font-mono animate-pulse hidden sm:block">
                        &lt;&lt; JOIN 15,000+ COMPANIES
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

const BackgroundGlows: React.FC = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-green-500/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[30%] bg-indigo-500/5 blur-[100px] rounded-full"></div>
    </div>
);

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#020617] bg-gradient-to-b from-[#020617] via-[#030b21] to-[#020617] text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden relative">
            <BackgroundGlows />
            <StickyBar />

            {/* HEADER */}
            <header className="relative pt-24 md:pt-36 pb-20 md:pb-32 px-4 md:px-8 overflow-hidden text-center z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/10 rounded-full blur-[180px] -z-10" />
                <div className="max-w-7xl mx-auto relative z-20">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs md:text-sm font-black mb-10 animate-pulse uppercase italic tracking-widest">
                        <CheckCircle2 size={16} /> SMART BACKUP FOR YOUR BUSINESS
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black tracking-tight leading-tight mb-8 uppercase italic drop-shadow-2xl">
                        NEVER LOSE A <br />
                        <span className="border-b-8 border-green-500 pb-2 inline-block mt-4 text-green-500">CLIENT AGAIN.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-center text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-bold">
                        When employees move on, they shouldn't take your customers with them. <span className="text-white underline decoration-green-500 decoration-4">NOW YOU CAN STOP IT.</span> GodView saves every chat to your own vault. If it's deleted on the phone, <span className="text-green-500">you still have the records forever.</span>
                    </p>
                    <div className="mb-16 md:mb-24 relative z-50">
                         <CTAButton />
                    </div>
                    <HeroMockup />
                </div>
            </header>

            {/* MAIN BENEFITS - ZIG ZAG */}
            <section className="py-24 px-4 md:px-8 bg-gray-950/40 backdrop-blur-sm relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-white">HOW GODVIEW HELPS</h2>
                        <p className="text-green-500 font-black uppercase tracking-[0.3em] text-sm md:text-xl italic">SECURITY. VISIBILITY. GROWTH.</p>
                    </div>

                    <div className="space-y-40">
                        {/* Benefit 1: Stop Data Loss */}
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-4 rounded-2xl bg-gray-900 border border-white/10 mb-8 shadow-2xl">
                                    <Lock className="text-blue-400 w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">PROTECT YOUR <span className="text-blue-400">WHATSAPP DATA</span></h3>
                                <div className="block md:hidden mb-8 w-full"><SecurityGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
                                    Your customer list is your biggest asset. GodView automatically backups every single <span className="text-white font-bold">WhatsApp contact and message</span>. Deleted chats or reset phones are no longer a problem.
                                </p>
                                <div className="bg-blue-900/10 backdrop-blur-md border border-blue-500/30 p-6 rounded-2xl text-blue-200 text-base font-bold flex items-center gap-4 shadow-xl shadow-blue-500/5">
                                    <ShieldCheck className="shrink-0" size={28} /> Keep your WhatsApp history safe and secure forever.
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><SecurityGraphic /></div>
                        </div>

                        {/* Benefit 2: Better Monitoring */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-4 rounded-2xl bg-gray-900 border border-white/10 mb-8 shadow-2xl">
                                    <Eye className="text-green-500 w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">MONITOR <span className="text-green-500">WHATSAPP SALES</span> LIVE</h3>
                                <div className="block md:hidden mb-8 w-full"><SpyCamGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
                                    Check how your team is talking to customers in real-time via <span className="text-white font-bold">WhatsApp conversations</span>. Make sure everyone is getting a fast response and high-quality service every single time.
                                </p>
                                <div className="flex items-center gap-4 text-green-400 font-black bg-green-950/10 backdrop-blur-md border border-green-500/30 p-6 rounded-2xl shadow-xl shadow-green-500/5">
                                    <CheckCircle2 size={28} /> Knowing what happens in your sales chats leads to better results.
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><SpyCamGraphic /></div>
                        </div>

                        {/* Benefit 3: Team Success */}
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                            <div className="w-full md:w-1/2">
                                <div className="inline-block p-4 rounded-2xl bg-gray-900 border border-white/10 mb-8 shadow-2xl">
                                    <Copy className="text-yellow-400 w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">SHARE WINNING <span className="text-yellow-400">WHATSAPP REPLIES</span></h3>
                                <div className="block md:hidden mb-8 w-full"><CloneGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
                                    Found a <span className="text-white font-bold">WhatsApp script</span> that closes every deal? Share it with the whole team instantly. Use GodView to help everyone sell as well as your top performers.
                                </p>
                                <div className="bg-yellow-900/10 backdrop-blur-md border border-yellow-500/30 p-6 rounded-2xl text-yellow-200 text-base font-bold flex items-center gap-4 shadow-xl shadow-yellow-500/5">
                                    <TrendingUp className="shrink-0" size={28} /> Turn your best WhatsApp sales into a system for everyone.
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><CloneGraphic /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS - STATIC GRID */}
            <section className="py-24 relative z-10 overflow-hidden px-4 border-y border-white/5">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] -z-10" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">REAL RESULTS FROM <span className="text-green-500">REAL TEAMS</span></h2>
                        <p className="text-gray-500 font-bold italic uppercase tracking-widest text-base">Proven success across 15,000+ businesses</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {ROW_1.slice(0, 3).map((item, index) => (
                            <div key={index} className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between hover:border-green-500/40 transition-all group hover:bg-gray-900/60 shadow-2xl">
                                <div>
                                    <div className="text-green-400 text-xs font-black mb-4 flex items-center gap-2 font-mono uppercase tracking-widest">
                                        <TrendingUp size={14} /> {item.highlight}
                                    </div>
                                    <p className="text-lg text-gray-300 italic leading-relaxed font-medium mb-8">"{item.quote}"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <img src={`https://i.pravatar.cc/150?img=${item.img}`} alt={item.name} className="w-12 h-12 rounded-full border-2 border-white/10 object-cover shadow-lg" />
                                    <div>
                                        <div className="font-black text-white uppercase italic text-base">{item.name}</div>
                                        <div className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {ROW_1.slice(3, 5).map((item, index) => (
                            <div key={index} className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between hover:border-green-500/40 transition-all group hover:bg-gray-900/60 shadow-2xl">
                                <div>
                                    <div className="text-green-400 text-xs font-black mb-4 flex items-center gap-2 font-mono uppercase tracking-widest">
                                        <TrendingUp size={14} /> {item.highlight}
                                    </div>
                                    <p className="text-lg text-gray-300 italic leading-relaxed font-medium mb-8">"{item.quote}"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <img src={`https://i.pravatar.cc/150?img=${item.img}`} alt={item.name} className="w-12 h-12 rounded-full border-2 border-white/10 object-cover shadow-lg" />
                                    <div>
                                        <div className="font-black text-white uppercase italic text-base">{item.name}</div>
                                        <div className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BONUS GROWTH SUITE - BENEFIT FOCUSED */}
            <section className="py-32 px-4 md:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <div className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-xs font-black uppercase italic mb-6 tracking-widest animate-pulse">
                            ULTIMATE GROWTH BUNDLE
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                            YOU DON'T JUST <br className="hidden md:block" /> GET <span className="text-green-500">GODVIEW...</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-bold italic max-w-2xl mx-auto leading-relaxed">
                            We've included <span className="text-white underline decoration-green-500 decoration-2">3 massive bonus benefits</span> for free to help you skyrocket both your marketing reach and your sales closing rates instantly.
                        </p>
                    </div>

                    <div className="space-y-48">
                        {/* Benefit 1: Marketing Reach */}
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                            <div className="w-full md:w-1/2">
                                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-blue-500/10 mb-8 border border-blue-500/20 shadow-lg">
                                    <Globe className="text-blue-400 w-8 h-8" />
                                    <span className="text-blue-400 font-black uppercase italic tracking-widest text-sm">MARKETING UPGRADE</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-blue-400 uppercase italic tracking-tighter leading-none">SCALE YOUR <br/><span className="text-white">REACH ON AUTOPILOT</span></h3>
                                <div className="block md:hidden mb-8 w-full"><AutomationGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic">
                                    Stop losing leads from Facebook and Instagram because of slow replies. You'll get automatic responders that funnel every interested prospect directly to your WhatsApp 24/7.
                                </p>
                                <div className="flex items-center gap-3 text-blue-400 font-black border-l-4 border-blue-500 pl-6 py-2">
                                    <span>Scale your lead generation without hiring more staff.</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><AutomationGraphic /></div>
                        </div>

                        {/* Benefit 2: Sales Efficiency */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32">
                            <div className="w-full md:w-1/2">
                                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 mb-8 border border-green-500/20 shadow-lg">
                                    <Zap className="text-green-500 w-8 h-8" />
                                    <span className="text-green-500 font-black uppercase italic tracking-widest text-sm">SALES UPGRADE</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-green-500 uppercase italic tracking-tighter leading-none">TRIPLE YOUR <br/><span className="text-white">RESPONSE SPEED</span></h3>
                                <div className="block md:hidden mb-8 w-full"><OmnichannelGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic">
                                    Speed is the #1 factor in closing sales. You'll be able to manage IG, Facebook, and WhatsApp from a single unified dashboard, allowing your team to reply to every customer in seconds.
                                </p>
                                <div className="flex items-center gap-3 text-green-500 font-black border-l-4 border-green-500 pl-6 py-2">
                                    <span>Close more deals by being the first to respond.</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block"><OmnichannelGraphic /></div>
                        </div>

                        {/* Benefit 3: Closing Performance */}
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                            <div className="w-full md:w-1/2">
                                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-yellow-500/10 mb-8 border border-yellow-500/20 shadow-lg">
                                    <TrendingUp className="text-yellow-500 w-8 h-8" />
                                    <span className="text-yellow-500 font-black uppercase italic tracking-widest text-sm">PERFORMANCE UPGRADE</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-yellow-500 uppercase italic tracking-tighter leading-none">CLONE YOUR <br/><span className="text-white">TOP SALES PERFORMER</span></h3>
                                <div className="block md:hidden mb-8 w-full"><MindGenGraphic /></div>
                                <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic">
                                    You'll have an AI assistant that learns from your best closed deals and suggests perfect replies for your entire team. Turn every salesperson into your highest-converting closer instantly.
                                </p>
                                <div className="flex items-center gap-3 text-yellow-500 font-black border-l-4 border-blue-500 pl-6 py-2">
                                    <span>Ensure every customer gets a world-class sales pitch.</span>
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
            <section className="py-32 px-4 md:px-8 relative z-10 text-center overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[140px] -z-10 animate-pulse" />
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">START FOR <span className="text-green-500 underline decoration-green-500 decoration-8 underline-offset-8">FREE</span></h2>
                    <p className="text-gray-300 text-2xl font-black italic mb-16 max-w-2xl mx-auto">Secure your business today. No credit card needed to get started.</p>
                    <div className="scale-110 md:scale-125">
                        <CTAButton />
                    </div>
                    <p className="mt-16 text-gray-600 font-mono text-xs uppercase tracking-[0.5em] animate-pulse font-black">Trusted by Professional Teams</p>
                </div>
            </section>

            <footer className="py-12 bg-black/80 backdrop-blur-md border-t border-white/5 text-center text-gray-700 text-xs relative z-10 font-mono tracking-widest uppercase font-black">
                <p>© {new Date().getFullYear()} GodView Systems. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
