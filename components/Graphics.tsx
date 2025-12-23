
import React from 'react';
import { Eye, Lock, Database, UserX, ShieldCheck, DollarSign, ArrowRight, Globe, Cpu, Layers, MessageSquare, Zap } from './Icons';

export const SpyCamGraphic: React.FC = () => (
    <div className="relative w-full max-w-md mx-auto h-64 flex flex-col items-center justify-center">
        <div className="bg-black text-green-500 text-xs font-bold px-4 py-1 rounded-full border border-green-500 mb-4 animate-pulse flex items-center gap-2">
            <Eye size={14} /> LIVE MONITORING ACTIVE
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 w-full">
            <div className="bg-gray-900/80 p-2 md:p-4 rounded-xl border-2 border-green-500 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(34,197,94,0.3)] h-28 md:h-32">
                <div className="relative mb-2">
                    <img src="https://i.pravatar.cc/150?img=32" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-700 object-cover" alt="Sales A" />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shadow-sm border border-gray-200">
                        <span className="text-[10px]">👍</span>
                    </div>
                </div>
                <div className="text-xs md:text-sm text-white font-bold">Sales A</div>
                <div className="text-[9px] md:text-[10px] text-green-400 font-bold mt-1">Closing...</div>
            </div>
            <div className="bg-gray-900/80 p-2 md:p-4 rounded-xl border-2 border-red-500 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(239,68,68,0.3)] h-28 md:h-32">
                <div className="relative mb-2">
                    <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-700 object-cover" alt="Sales B" />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shadow-sm border border-gray-200">
                        <span className="text-[10px] text-red-500 font-bold">X</span>
                    </div>
                </div>
                <div className="text-xs md:text-sm text-white font-bold">Sales B</div>
                <div className="text-[9px] md:text-[10px] text-red-500 font-bold mt-1 animate-pulse">NO REPLY!</div>
            </div>
            <div className="bg-gray-900/80 p-2 md:p-4 rounded-xl border-2 border-yellow-500 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(234,179,8,0.3)] h-28 md:h-32">
                <div className="relative mb-2">
                    <img src="https://i.pravatar.cc/150?img=5" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-700 object-cover" alt="Sales C" />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shadow-sm border border-gray-200">
                        <span className="text-[10px]">🤔</span>
                    </div>
                </div>
                <div className="text-xs md:text-sm text-white font-bold">Sales C</div>
                <div className="text-[9px] md:text-[10px] text-yellow-400 font-bold mt-1">Confused</div>
            </div>
        </div>
    </div>
);

export const SecurityGraphic: React.FC = () => (
    <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto flex items-center justify-center overflow-hidden">
        <div className="w-40 h-48 md:w-48 md:h-56 bg-gray-900 border-2 border-blue-500 rounded-xl relative z-10 flex flex-col items-center pt-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-800 rounded-full border border-blue-400 flex items-center justify-center mb-4">
                <Database className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="text-[9px] md:text-[10px] text-blue-300 font-mono text-center px-2 leading-tight font-bold uppercase">Contacts Secured <br /> Forever</div>
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1.5 rounded-l">
                <Lock size={14} />
            </div>
        </div>
        <div className="absolute right-[-20px] md:right-[-30px] top-1/2 transform -translate-y-1/2 flex items-center animate-steal z-20 scale-[1.8] md:scale-[2.2]">
            <div className="bg-red-900/90 text-red-200 px-2 py-1 text-[10px] font-bold rounded border border-red-500 mr-1 shadow-lg">DELETING...</div>
            <div className="w-16 h-12 bg-gray-700 rounded-l-full border-4 border-gray-600 flex items-center justify-center relative shadow-xl">
                <UserX size={24} className="text-gray-400" />
                <div className="absolute -left-3 top-[-15px] text-red-600 font-black text-3xl transform rotate-12">X</div>
            </div>
        </div>
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <ShieldCheck className="w-48 h-48 md:w-56 md:h-56 text-blue-500/10 animate-pulse" />
        </div>
    </div>
);

export const CloneGraphic: React.FC = () => (
    <div className="relative w-full max-w-md mx-auto h-64 flex items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center relative">
            <div className="bg-yellow-500 text-black text-[10px] font-bold px-2 rounded shadow-lg whitespace-nowrap mb-2">TOP SELLER</div>
            <div className="absolute -top-8 left-[-10px] flex flex-col gap-1">
                 <DollarSign size={20} className="text-yellow-400 animate-money" style={{ animationDelay: '0.2s' }} />
            </div>
            <img src="https://i.pravatar.cc/150?img=12" className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-yellow-500 object-cover shadow-[0_0_15px_rgba(234,179,8,0.5)]" alt="Top Seller" />
        </div>
        <div className="flex flex-col items-center text-green-500">
            <div className="text-[9px] font-mono mb-1 animate-pulse whitespace-nowrap uppercase">Cloning Mindset...</div>
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <div className="flex flex-col items-center relative">
            <div className="bg-green-500 text-black text-[10px] font-bold px-2 rounded shadow-lg whitespace-nowrap mb-2 uppercase">Your Sales Team</div>
            <div className="flex -space-x-3 md:-space-x-4">
                <img src="https://i.pravatar.cc/150?img=32" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-green-500 object-cover shadow-[0_0_10px_rgba(34,197,94,0.5)] z-0" alt="Team 1" />
                <img src="https://i.pravatar.cc/150?img=44" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-green-500 object-cover shadow-[0_0_10px_rgba(34,197,94,0.5)] z-10" alt="Team 2" />
                <img src="https://i.pravatar.cc/150?img=59" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-green-500 object-cover shadow-[0_0_10px_rgba(34,197,94,0.5)] z-20" alt="Team 3" />
            </div>
        </div>
    </div>
);

// --- BEYOND GODVIEW BIG VISUALS ---

export const AutomationGraphic: React.FC = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.6)] animate-bounce" style={{animationDelay: '0.1s'}}>
                    <span className="text-white font-bold text-xl italic">f</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-bounce" style={{animationDelay: '0.3s'}}>
                    <span className="text-white font-bold text-xl italic">ig</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.6)] animate-bounce" style={{animationDelay: '0.5s'}}>
                    <span className="text-white font-bold text-xl italic">X</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
                <div className="bg-blue-500/10 border border-blue-500 px-4 py-1 rounded-full">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest animate-pulse">24/7 Auto-Pilot</span>
                </div>
                <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
        </div>
    </div>
);

export const OmnichannelGraphic: React.FC = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="w-32 h-32 border-2 border-dashed border-green-500/30 rounded-full animate-spin-slow flex items-center justify-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)] z-20">
                <Layers className="text-black" size={32} />
            </div>
        </div>
        <div className="absolute top-4 left-1/4 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center animate-pulse"><Globe size={16} /></div>
        <div className="absolute bottom-4 right-1/4 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center animate-pulse"><MessageSquare size={16} /></div>
        <div className="absolute top-1/2 right-4 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center animate-pulse"><Zap size={16} /></div>
    </div>
);

export const MindGenGraphic: React.FC = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl"></div>
        <div className="bg-gray-900 border border-yellow-500/30 p-4 rounded-2xl shadow-2xl relative z-10 w-full max-w-[200px]">
            <div className="flex items-center gap-2 mb-3">
                <Cpu className="text-yellow-500" size={16} />
                <span className="text-[10px] font-black text-yellow-500 uppercase">MindGen Processing</span>
            </div>
            <div className="space-y-2">
                <div className="h-2 w-full bg-gray-800 rounded animate-pulse"></div>
                <div className="h-2 w-3/4 bg-yellow-500/40 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="h-2 w-1/2 bg-yellow-500/20 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-800 flex justify-end">
                <div className="bg-green-500 text-black px-2 py-0.5 rounded text-[8px] font-black uppercase">Draft Ready!</div>
            </div>
        </div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20">
            <Cpu className="text-yellow-500 animate-spin-slow" size={24} />
        </div>
    </div>
);
