
import React, { useState, useEffect, useRef } from 'react';
import { Zap, MessageSquare, Smartphone, ArrowRight, ShieldCheck, Trash2, UserX, CheckCircle2, Lock, Search, Eye, Paperclip, Send, BarChart3, Users, Settings, Database, XCircle, Globe, Layers, Cpu } from './Icons';

const HeroMockup: React.FC = () => {
    const [stage, setStage] = useState(1); // 1: Mirror, 2: Block, 3: Own
    const [subStep, setSubStep] = useState(0); 
    // subStep: 
    // 0: Idle
    // 1: Typing Poaching Message (Phone)
    // 2 & 3: Message Sent (Phone) AND Synced (GodView) - NO DELAY
    // 4: Deleting Action (Phone)
    // 5: Phone Empty / GodView Intact (Block Result)
    // 6: Stage 3 Activity Start (Typing Simulation)
    // 7: Device Reset / Records Retained Result
    
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const stages = [
        {
            id: 1,
            title: "STAGE 1: MIRROR",
            desc: "INSTANT BACKUP. Every message is saved in real-time. You see exactly what is happening as it happens.",
            status: subStep >= 2 ? "ACTIVE" : "SYNCING...",
            color: "text-green-500",
            accent: "bg-green-500"
        },
        {
            id: 2,
            title: "STAGE 2: BLOCK",
            desc: "ANTI-DELETE PROTECTION. If a message is deleted on the phone, GodView ignores it and keeps your history safe.",
            status: "PROTECTED",
            color: "text-red-500",
            accent: "bg-red-500"
        },
        {
            id: 3,
            title: "STAGE 3: OWN",
            desc: "PERMANENT RECORDS. Your client history is saved in your own dashboard forever. You keep 100% of the data.",
            status: "SECURED",
            color: "text-yellow-500",
            accent: "bg-yellow-500"
        }
    ];

    // Animation Sequence Controller
    useEffect(() => {
        let timer: any;

        const runSequence = () => {
            if (stage === 1) {
                setSubStep(0);
                timer = setTimeout(() => setSubStep(1), 1000); 
                timer = setTimeout(() => setSubStep(2), 3500); 
                timer = setTimeout(() => setStage(2), 8500);  
            } else if (stage === 2) {
                setSubStep(4); 
                timer = setTimeout(() => setSubStep(5), 3000); 
                timer = setTimeout(() => setStage(3), 8500);  
            } else if (stage === 3) {
                setSubStep(6); // Show typing in stage 3
                timer = setTimeout(() => setSubStep(7), 4000); 
                timer = setTimeout(() => {
                    setStage(1);
                    setSubStep(0);
                }, 12000); 
            }
        };

        runSequence();

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
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [stage]);

    return (
        <div className="relative w-full mt-2 flex flex-col items-center">
            {/* STAGE SELECTORS */}
            <div className="w-full max-w-5xl mb-12 px-4">
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {stages.map((s) => (
                        <button 
                            key={s.id} 
                            onClick={() => { setStage(s.id); }}
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

            {/* MAIN INTERFACE */}
            <div ref={containerRef} className="hidden lg:block relative w-full perspective-1000 origin-top" style={{ height: `${650 * scale}px` }}>
                <div 
                    className="absolute top-0 left-0 right-0 mx-auto origin-top transform transition-all duration-500"
                    style={{ 
                        width: '1100px',
                        height: '630px',
                        transform: `scale(${scale})`,
                    }}
                >
                    <div className="flex gap-8 h-full">
                        
                        {/* LEFT: ADMIN GODVIEW PANEL */}
                        <div className="flex-1 flex flex-col bg-[#F8FAFC] rounded-[2.5rem] border-[1px] border-slate-300 shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden relative">
                            {/* Modern Header */}
                            <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-50">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center font-black text-black italic text-lg shadow-[0_4px_12px_rgba(34,197,94,0.3)]">GV</div>
                                    <div className="h-8 w-[1px] bg-slate-200"></div>
                                    <span className="text-slate-800 font-black uppercase tracking-tight text-base flex items-center gap-3">
                                        GodView Admin Dashboard
                                    </span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full animate-pulse ${stage === 2 ? 'bg-red-500' : stage === 3 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                                        <span className={`font-mono text-[10px] font-black tracking-widest uppercase ${stage === 2 ? 'text-red-600' : stage === 3 ? 'text-yellow-600' : 'text-green-600'}`}>
                                            {stages[stage-1].status}
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                                        <Settings size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-row">
                                {/* Professional Side Navigation */}
                                <div className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-8 gap-8">
                                    <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shadow-sm border border-green-100"><MessageSquare size={22} /></div>
                                    <div className="p-2.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"><Users size={22} /></div>
                                    <div className="p-2.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"><Cpu size={22} /></div>
                                    <div className="p-2.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"><Layers size={22} /></div>
                                    <div className="mt-auto p-2.5 text-slate-400"><Database size={22} /></div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1 flex flex-row relative">
                                        {/* REFINED CONTACTS LIST */}
                                        <div className="w-64 bg-[#F1F5F9] border-r border-slate-200 p-4 space-y-2.5">
                                            <div className="flex items-center justify-between mb-4 px-1">
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Devices</span>
                                                <Search size={14} className="text-slate-400" />
                                            </div>
                                            
                                            <div className={`p-3 rounded-2xl flex items-center gap-3 transition-all duration-500 shadow-sm border ${stage === 3 ? 'bg-yellow-500/10 border-yellow-200' : 'bg-white border-slate-200'}`}>
                                                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs ring-2 ring-white">M</div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-[11px] font-black text-slate-800 truncate">Michael (Lead)</span>
                                                    <span className={`text-[8px] font-bold uppercase italic ${stage === 3 ? 'text-yellow-600' : 'text-green-600'}`}>
                                                        {stage === 3 ? "RECORDS RETAINED" : "BACKING UP"}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Dummy Contacts */}
                                            {['Sarah J.', 'David M.', 'Alex R.', 'Linda C.', 'Kevin B.'].map((name, i) => (
                                                <div key={i} className="p-3 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs ${['bg-purple-500', 'bg-orange-500', 'bg-emerald-500', 'bg-pink-500', 'bg-indigo-500'][i]}`}>
                                                        {name[0]}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] font-bold text-slate-600">{name}</span>
                                                        <span className="text-[8px] text-slate-400 font-bold uppercase">Synced</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CHAT INTERFACE */}
                                        <div className="flex-1 flex flex-col bg-white relative">
                                            {/* Chat Header */}
                                            <div className="px-8 py-4 border-b border-slate-100 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 rounded-full ${stage === 3 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                                                    <span className="text-xs font-black text-slate-800 uppercase italic">Mirror: Device #8821</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="h-6 w-14 bg-slate-100 rounded-full"></div>
                                                    <div className="h-6 w-6 bg-slate-100 rounded-full"></div>
                                                </div>
                                            </div>

                                            <div className="flex-1 p-8 space-y-6 overflow-hidden">
                                                <div className="flex flex-col items-start max-w-[85%]">
                                                    <div className="p-4 bg-slate-100 border border-slate-200 rounded-2xl rounded-tl-none text-sm text-slate-800 font-medium shadow-sm leading-relaxed">
                                                        Ready to buy. Send the invoice?
                                                    </div>
                                                    <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest italic">Michael @ 14:02</span>
                                                </div>
                                                
                                                {subStep >= 2 && subStep <= 5 && (
                                                    <div className="flex flex-col items-end max-w-[85%] ml-auto relative animate-fade-in">
                                                        <div className="absolute -left-24 top-2 bg-green-500 text-black text-[9px] font-black px-3 py-1 rounded-full shadow-lg z-10 ring-2 ring-white">BACKED UP</div>
                                                        <div className="p-4 bg-green-50 border border-green-200 text-slate-900 font-bold rounded-2xl rounded-tr-none shadow-sm text-sm leading-relaxed">
                                                            Wait, I'm moving to a new firm next week. Come with me for a 20% discount? My personal: +1 555-0199
                                                        </div>
                                                        <span className="text-[9px] text-green-600 mt-2 font-black uppercase tracking-widest italic text-right">Captured Successfully</span>
                                                    </div>
                                                )}

                                                {/* Anti-Delete Warning */}
                                                {(stage === 2 || (stage === 3 && subStep < 7)) && (
                                                    <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
                                                        <div className="px-6 py-4 bg-white border-2 border-red-500 rounded-[2rem] text-red-600 text-xs font-black uppercase flex items-center gap-4 shadow-[0_15px_40px_rgba(239,68,68,0.1)] animate-pulse">
                                                            <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg"><Trash2 size={20} /></div>
                                                            <div className="flex flex-col">
                                                                <span className="tracking-tighter text-sm italic">DATA DELETE PREVENTED</span>
                                                                <span className="text-[9px] text-red-400">MESSAGES STORED SAFELY IN YOUR VAULT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {stage === 3 && subStep >= 6 && (
                                                    <div className="flex flex-col items-center justify-center py-4 animate-fade-in space-y-4">
                                                        <div className="px-8 py-5 bg-white border-2 border-yellow-500 rounded-[2rem] text-yellow-600 text-xs font-black uppercase flex items-center gap-4 shadow-[0_15px_40px_rgba(234,179,8,0.1)] w-full max-w-sm">
                                                            <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg"><Database size={20} /></div>
                                                            <div className="flex flex-col">
                                                                <span className="tracking-tighter text-sm italic">DATA PERMANENTLY SAVED</span>
                                                                <span className="text-[9px] text-yellow-500/70">EXPORT AND VIEW AT ANY TIME</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* GODVIEW TYPING BAR - ALWAYS VISIBLE ACROSS ALL STAGES */}
                                            <div className="p-6 bg-slate-50 border-t border-slate-200 mt-auto">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-1 bg-white h-12 rounded-full border border-slate-200 shadow-inner flex items-center px-5 gap-3">
                                                        <Eye size={18} className={`${stage === 3 ? 'text-yellow-600' : 'text-green-600'} opacity-50`} />
                                                        <div className="flex-1 text-[13px] text-slate-700 font-bold italic truncate flex items-center gap-1">
                                                            {(subStep === 1 || subStep === 6) ? (
                                                                <>
                                                                    <span className="text-slate-400 not-italic mr-1 uppercase text-[10px] tracking-tighter">[MIRRORING]</span>
                                                                    <span>{subStep === 1 ? "Wait, I'm moving to a new fi..." : "Archiving active session data..."}</span>
                                                                    <div className={`w-0.5 h-4 ${stage === 3 ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
                                                                </>
                                                            ) : (
                                                                <span className="text-slate-400 font-medium not-italic">
                                                                    {stage === 3 ? "Permanent sync active..." : "Monitoring team activity live..."}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <Paperclip size={18} className="text-slate-300" />
                                                    </div>
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${(subStep === 1 || subStep === 6) ? (stage === 3 ? 'bg-yellow-500 scale-105 shadow-yellow-500/20' : 'bg-green-500 scale-105 shadow-green-500/20') : 'bg-slate-300'}`}>
                                                        <Send size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: SALES REP WORK PHONE */}
                        <div className="w-[340px] bg-[#0F172A] rounded-[3.5rem] border-[12px] border-[#1E293B] shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col p-4 shrink-0">
                            <div className="absolute top-0 left-0 right-0 h-14 bg-[#1E293B] flex items-center justify-center z-50">
                                <span className="text-white font-black uppercase italic tracking-tighter text-[10px] opacity-70">Team Member Phone #8821</span>
                            </div>
                            
                            <div className="flex-1 bg-black rounded-[2.8rem] overflow-hidden flex flex-col relative mt-10">
                                {/* Messaging App Header */}
                                <div className="bg-[#075e54] p-4 pt-10 text-white flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs italic ring-1 ring-white/20">M</div>
                                    <div className="flex-1 font-bold text-xs italic">Michael (Client)</div>
                                    <Settings size={14} className="opacity-50" />
                                </div>
                                
                                <div className="flex-1 bg-[#e5ddd5] p-3 space-y-4 relative overflow-hidden">
                                    {stage === 1 ? (
                                        <>
                                            <div className="p-3 bg-white rounded-xl text-[12px] shadow-sm max-w-[85%] rounded-tl-none text-gray-800 font-semibold">Ready to buy. Send the invoice?</div>
                                            {subStep >= 2 && (
                                                <div className="p-3 bg-[#dcf8c6] rounded-xl text-[12px] shadow-sm ml-auto max-w-[85%] rounded-tr-none font-bold text-gray-900 animate-fade-in border-r-2 border-green-600/20">
                                                    Wait, I'm moving to a new firm next week. Come with me for a 20% discount? My personal: +1 555-0199
                                                    <div className="flex justify-end mt-1">
                                                        <div className="text-green-600 text-[10px] font-black">✓✓</div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : subStep === 4 ? (
                                        <>
                                            <div className="p-3 bg-white rounded-xl text-[12px] shadow-sm max-w-[85%] rounded-tl-none text-gray-800 font-semibold opacity-30">Ready to buy. Send the invoice?</div>
                                            <div className="p-3 bg-[#dcf8c6] rounded-xl text-[12px] shadow-sm ml-auto max-w-[85%] rounded-tr-none font-bold text-gray-900 border-2 border-red-500 bg-red-100 scale-105 transition-all">
                                                Wait, I'm moving to a new firm next week...
                                            </div>
                                            {/* Deletion Popup */}
                                            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-[60] animate-fade-in">
                                                <div className="bg-white rounded-[2rem] p-8 w-full shadow-2xl scale-95 animate-fade-in">
                                                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={32} /></div>
                                                    <div className="text-gray-900 font-black text-sm mb-4 uppercase tracking-tighter">DELETE HISTORY?</div>
                                                    <div className="space-y-3">
                                                        <div className="bg-red-600 text-white py-4 rounded-2xl text-[10px] font-black cursor-pointer shadow-lg active:scale-90 transition-transform flex items-center justify-center gap-2">
                                                            DELETE FOR ALL
                                                        </div>
                                                        <div className="text-gray-400 py-2 text-[10px] font-bold uppercase tracking-widest">CANCEL</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : subStep === 5 ? (
                                        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#e5ddd5] animate-fade-in">
                                            <div className="w-20 h-20 bg-gray-300/40 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-gray-500 animate-pulse">
                                                <MessageSquare size={32} className="text-gray-500" />
                                            </div>
                                            <div className="text-gray-700 font-black text-xs uppercase tracking-tighter italic">CHATS CLEARED</div>
                                            <p className="text-gray-600 text-[10px] mt-4 font-bold leading-tight uppercase opacity-60">The rep thinks it's deleted.</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-100 animate-fade-in">
                                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-8 border-4 border-gray-300">
                                                <Smartphone size={40} className="text-gray-400 opacity-50" />
                                            </div>
                                            <div className="text-gray-900 font-black text-sm uppercase italic tracking-tighter">PHONE DATA RESET</div>
                                            <p className="text-gray-500 text-[11px] mt-4 font-bold leading-relaxed uppercase opacity-40">Device Disconnected from Dashboard</p>
                                        </div>
                                    )}
                                </div>

                                {/* Typing Bar */}
                                <div className="bg-[#f0f2f5] p-3 flex items-center gap-3 border-t border-gray-200">
                                    <div className="flex-1 bg-white h-10 rounded-full border border-gray-300 flex items-center px-4 overflow-hidden shadow-inner">
                                        <span className="text-[12px] text-gray-800 font-bold italic truncate">
                                            {(subStep === 1 || subStep === 6) ? (subStep === 1 ? "Wait, I'm moving to a new fi..." : "Updating device firmware...") : ""}
                                            {subStep === 0 ? "Type a message..." : ""}
                                        </span>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all ${(subStep === 1 || subStep === 6) ? 'bg-green-500 scale-110 shadow-lg' : 'bg-[#075e54]'}`}>
                                        <Send size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* MOBILE ADAPTATION */}
            <div className="lg:hidden w-full max-w-sm px-4">
                <div className="bg-gray-900 rounded-[2.5rem] border-2 border-green-500 p-8 shadow-2xl text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Zap size={32} className="text-black" />
                    </div>
                    <h4 className="text-xl font-black uppercase italic mb-4">{stages[stage-1].title}</h4>
                    <p className="text-gray-400 text-sm font-bold leading-relaxed">{stages[stage-1].desc}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroMockup;
