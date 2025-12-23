
import React, { useState, useEffect, useRef } from 'react';
import { Zap, MessageSquare, Smartphone, ArrowRight, ShieldCheck, Trash2, UserX, CheckCircle2, Lock, Search, Eye, Paperclip, Send, BarChart3, Users, Settings, Database, XCircle } from './Icons';

const HeroMockup: React.FC = () => {
    const [stage, setStage] = useState(1); // 1: Mirror, 2: Block, 3: Own
    const [scale, setScale] = useState(1);
    const [repTyping, setRepTyping] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const stages = [
        {
            id: 1,
            title: "STAGE 1: MIRROR",
            desc: "LIVE SYNC. Whatever the rep types on WhatsApp is instantly cloned to your secure vault.",
            status: "REAL_TIME_SYNCING",
            color: "text-green-500",
            accent: "bg-green-500"
        },
        {
            id: 2,
            title: "STAGE 2: BLOCK",
            desc: "ANTI-DELETE. Rep tries to delete chat history. GodView ignores the command and keeps the data.",
            status: "DELETION_REFUSED",
            color: "text-red-500",
            accent: "bg-red-500"
        },
        {
            id: 3,
            title: "STAGE 3: OWN",
            desc: "PERMANENT ASSET. Rep quits. Phone is wiped. You still own 100% of the client relationships.",
            status: "ASSET_SECURED",
            color: "text-yellow-500",
            accent: "bg-yellow-500"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStage((prev) => (prev % 3) + 1);
        }, 7000);

        let typingTimeout: any;
        if (stage === 1) {
            setRepTyping(true);
            typingTimeout = setTimeout(() => setRepTyping(false), 3500);
        } else {
            setRepTyping(false);
        }
        
        const handleResize = () => {
            if (containerRef.current) {
                const maxWidth = 1200; 
                const parentWidth = Math.min(window.innerWidth, maxWidth); 
                if (parentWidth < 1050 && parentWidth > 600) {
                    const newScale = (parentWidth - 40) / 1000;
                    setScale(newScale);
                } else {
                    setScale(1);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            clearInterval(interval);
            clearTimeout(typingTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, [stage]);

    return (
        <div className="relative w-full mt-2 flex flex-col items-center">
            {/* SIMPLIFIED STAGE INDICATORS */}
            <div className="w-full max-w-5xl mb-8 px-4">
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {stages.map((s) => (
                        <button 
                            key={s.id} 
                            onClick={() => setStage(s.id)}
                            className={`group relative p-4 md:p-6 rounded-[1.5rem] border-2 text-left transition-all duration-500 ${stage === s.id ? `bg-[#020617] border-${s.accent.split('-')[1]}-500/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]` : 'bg-gray-900/20 border-gray-800 opacity-40 grayscale hover:opacity-60'}`}
                        >
                            <div className={`h-1.5 w-12 mb-4 rounded-full ${stage === s.id ? s.accent : 'bg-gray-800'}`}></div>
                            <span className={`text-xs md:text-lg font-black uppercase italic tracking-tighter block mb-2 ${stage === s.id ? s.color : 'text-gray-500'}`}>{s.title}</span>
                            <p className="text-[10px] md:text-xs text-gray-400 font-bold leading-tight hidden sm:block">{s.desc}</p>
                            {stage === s.id && <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${s.accent} animate-pulse`}></div>}
                        </button>
                    ))}
                </div>
            </div>

            {/* MAIN DESKTOP INTERFACE */}
            <div ref={containerRef} className="hidden lg:block relative w-full perspective-1000 origin-top" style={{ height: `${620 * scale}px` }}>
                <div 
                    className="absolute top-0 left-0 right-0 mx-auto origin-top transform transition-all duration-500"
                    style={{ 
                        width: '1100px',
                        height: '600px',
                        transform: `scale(${scale})`,
                    }}
                >
                    <div className="flex gap-6 h-full">
                        
                        {/* 1. PROFESSIONAL COMPANY SIDE (GODVIEW PANEL) */}
                        <div className="flex-1 flex flex-col bg-[#020617] rounded-[2.5rem] border-[10px] border-gray-900 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden relative">
                            {/* TOP LABEL */}
                            <div className="h-14 bg-green-500 flex items-center justify-center shadow-lg z-50">
                                <span className="text-black font-black uppercase italic tracking-tighter text-xl flex items-center gap-3">
                                    <ShieldCheck size={20} /> COMPANY SIDE: ADMIN GODVIEW DASHBOARD
                                </span>
                            </div>

                            <div className="flex-1 flex flex-row">
                                {/* Navigation Sidebar */}
                                <div className="w-16 bg-[#0f172a] border-r border-gray-800 flex flex-col items-center py-6 gap-6">
                                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center font-black text-black italic text-lg shadow-[0_0_15px_rgba(34,197,94,0.4)]">GV</div>
                                    <div className="p-2 bg-gray-800 rounded-lg text-green-400 border border-green-500/20"><MessageSquare size={20} /></div>
                                    <Users className="text-gray-500" size={20} />
                                    <Database className="text-gray-500" size={20} />
                                    <BarChart3 className="text-gray-500" size={20} />
                                    <Settings className="text-gray-500 mt-auto" size={20} />
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 flex flex-col">
                                    {/* Toolbar */}
                                    <div className="h-14 bg-white/5 border-b border-gray-800 flex items-center justify-between px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Master Vault</div>
                                            <div className="h-4 w-px bg-gray-800"></div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-green-500 font-mono text-[10px] font-black">{stages[stage-1].status}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center"><Search size={14} className="text-gray-400" /></div>
                                            <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center"><Settings size={14} className="text-gray-400" /></div>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-row">
                                        {/* Contacts List */}
                                        <div className="w-56 bg-[#0f172a]/50 border-r border-gray-800 p-4">
                                            <div className="space-y-3">
                                                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs">M</div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] font-black text-white">Michael (VIP Client)</span>
                                                        <span className="text-[8px] text-green-500 font-bold uppercase tracking-tighter">Ownership Secured</span>
                                                    </div>
                                                </div>
                                                <div className="p-3 bg-gray-800/20 border border-gray-800 rounded-xl flex items-center gap-3 opacity-60">
                                                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-xs">S</div>
                                                    <span className="text-[11px] font-bold text-gray-400">Sarah Jones</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Chat Feed */}
                                        <div className="flex-1 flex flex-col bg-[#020617] relative">
                                            <div className="flex-1 p-8 space-y-6 overflow-hidden">
                                                <div className="flex flex-col items-start max-w-[80%] animate-fade-in">
                                                    <div className="p-4 bg-gray-800/40 border border-gray-800 rounded-2xl shadow-sm text-sm text-white font-medium">Ready to buy. Send the invoice?</div>
                                                    <span className="text-[9px] text-gray-500 mt-2 font-black uppercase tracking-widest">Incoming from Michael</span>
                                                </div>
                                                
                                                <div className="flex flex-col items-end max-w-[80%] ml-auto animate-fade-in">
                                                    <div className="p-4 bg-green-500 text-black font-black rounded-2xl shadow-[0_10px_30px_rgba(34,197,94,0.3)] text-sm">Yes! Sending it over right now!</div>
                                                    <span className="text-[9px] text-green-500 mt-2 font-black uppercase tracking-widest">Synced Instantly to Admin</span>
                                                </div>

                                                {stage >= 2 && (
                                                    <div className="flex flex-col items-center justify-center py-6">
                                                        <div className="px-6 py-3 bg-red-950/40 border-2 border-red-500 rounded-2xl text-red-500 text-xs font-black uppercase flex items-center gap-3 shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-pulse">
                                                            <XCircle size={16} /> ANTI-DELETE ACTIVE: DATA PRESERVED IN VAULT
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* GodView Monitoring Bar */}
                                            <div className="p-6 bg-[#0f172a] border-t border-gray-800">
                                                <div className="flex items-center gap-4 bg-gray-900/50 rounded-2xl px-6 py-3 border border-gray-800 group transition-all hover:border-green-500/50">
                                                    <Eye className="text-green-500" size={18} />
                                                    <div className="flex-1 text-[11px] text-green-500/70 font-mono italic">
                                                        {stage === 1 && repTyping ? "GODVIEW: Intercepting live typing..." : "GODVIEW: Permanent data retention active..."}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-500"><Lock size={14} /></div>
                                                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black"><CheckCircle2 size={14} /></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {stage === 3 && (
                                                <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm z-40 flex flex-col items-center justify-center text-center p-12 animate-fade-in">
                                                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.6)] animate-bounce">
                                                        <CheckCircle2 size={60} className="text-black" />
                                                    </div>
                                                    <span className="text-green-500 font-black text-4xl uppercase italic tracking-tighter">TOTAL OWNERSHIP</span>
                                                    <p className="text-white/60 text-lg font-bold uppercase mt-4">Rep Phone Cleared. Your Asset Stays Here.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. SALES REP WORK PHONE (REP SIDE) */}
                        <div className="w-[340px] bg-gray-900 rounded-[3.5rem] border-[12px] border-gray-800 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col p-4 shrink-0">
                            {/* TOP LABEL */}
                            <div className="absolute top-0 left-0 right-0 h-14 bg-gray-700 flex items-center justify-center z-50">
                                <span className="text-white font-black uppercase italic tracking-tighter text-sm">REP SIDE (WHATSAPP APP)</span>
                            </div>
                            
                            <div className="flex-1 bg-black rounded-[2.8rem] overflow-hidden flex flex-col relative mt-10">
                                {/* Whatsapp Header */}
                                <div className="bg-[#075e54] p-4 pt-10 text-white flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs border border-white/20">M</div>
                                    <div className="flex-1">
                                        <div className="font-bold text-xs">Michael</div>
                                        <div className="text-[9px] text-white/70">Online</div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Settings size={14} className="opacity-70" />
                                    </div>
                                </div>
                                
                                <div className="flex-1 bg-[#e5ddd5] p-3 space-y-4 relative overflow-hidden">
                                    {stage === 1 ? (
                                        <>
                                            <div className="p-3 bg-white rounded-xl text-[11px] shadow-sm max-w-[85%] rounded-tl-none">Ready to buy. Send the invoice?</div>
                                            <div className="p-3 bg-[#dcf8c6] rounded-xl text-[11px] shadow-sm ml-auto max-w-[85%] rounded-tr-none font-bold">Yes! Sending it over right now!</div>
                                            <div className="mt-8 flex justify-center">
                                                <div className="bg-black/10 text-[9px] font-black px-4 py-1.5 rounded-full uppercase text-gray-600 tracking-widest">Secured by GodView</div>
                                            </div>
                                        </>
                                    ) : stage === 2 ? (
                                        <div className="absolute inset-0 bg-red-900/60 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse">
                                                <Trash2 size={40} className="text-red-600" />
                                            </div>
                                            <div className="bg-red-600 text-white font-black text-sm uppercase px-4 py-2 rounded-xl shadow-lg">ATTEMPTING DELETE...</div>
                                            <p className="text-white font-bold text-xs mt-6 leading-tight">Rep tries to hide the client conversation.</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-100/80 animate-fade-in">
                                            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-8">
                                                <Smartphone size={40} className="text-gray-400" />
                                            </div>
                                            <div className="text-gray-900 font-black text-sm uppercase tracking-tighter italic">PHONE WIPED</div>
                                            <div className="text-gray-500 text-[11px] mt-4 font-bold leading-relaxed">Rep quit. Phone is blank. All history cleared from device.</div>
                                        </div>
                                    )}
                                </div>

                                {/* Typing Bar */}
                                <div className="bg-[#f0f2f5] p-3 flex items-center gap-3 border-t border-gray-200">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400"><Paperclip size={18} /></div>
                                    <div className="flex-1 bg-white h-10 rounded-full border border-gray-200 flex items-center px-4">
                                        <span className="text-[11px] text-gray-400 font-bold">
                                            {stage === 1 && repTyping ? "Yes! Sending it..." : "Type a message..."}
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#075e54] flex items-center justify-center text-white"><Send size={18} /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* MOBILE COMPACT VERSION */}
            <div className="lg:hidden w-full max-w-sm px-4">
                <div className="bg-gray-900 rounded-[2rem] border-2 border-green-500/50 p-8 shadow-2xl">
                    <div className={`text-center mb-6 py-2 rounded-full border-2 border-current transition-all ${stages[stage-1].color}`}>
                        <span className="text-sm font-black uppercase tracking-widest">{stages[stage-1].title}</span>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                            <span className="text-[10px] font-black text-green-500 uppercase block mb-1">Company Dashboard</span>
                            <p className="text-white font-bold text-sm">
                                {stage === 1 ? "Michael's chat synced live." : stage === 2 ? "Rep hit 'Delete' — Blocked." : "Relationships secured."}
                            </p>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-2xl border border-gray-800">
                            <span className="text-[10px] font-black text-gray-400 uppercase block mb-1">Sales Rep Phone</span>
                            <p className="text-gray-400 text-sm italic">
                                {stage === 1 ? "Sending WhatsApp..." : stage === 2 ? "Wiping chat history!" : "Device is empty."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroMockup;
