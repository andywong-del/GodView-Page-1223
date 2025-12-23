
import React from 'react';

const CTAButton: React.FC = () => {
    const handleTracking = () => {
        try {
            // 1. Send Signal to Wix (Parent Window)
            // This allows you to catch the event in Wix Velo/Code if needed
            window.parent.postMessage("FIRE_PIXEL", "*");

            // 2. Direct Pixel Tracking (Inside Iframe)
            // Meta (Facebook) - 'StartTrial' maps to "Trial"
            if ((window as any).fbq) {
                (window as any).fbq('track', 'StartTrial');
            }
            // TikTok - 'StartTrial'
            if ((window as any).ttq) {
                (window as any).ttq.track('StartTrial');
            }
        } catch (error) {
            // Fail silently if pixels are not loaded
            console.warn('Pixel tracking skipped:', error);
        }
    };

    return (
        <div className="flex flex-col items-center gap-3 group w-full max-w-sm mx-auto relative z-50">
            <a 
                id="cta-signup-btn"
                href="https://app.chatbooster.ai/en-US/signup" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleTracking}
                className="cursor-pointer w-full relative overflow-hidden bg-[#00E676] hover:bg-[#00C853] text-black text-sm md:text-xl font-black py-3 md:py-3 px-6 rounded-full shadow-[0_0_30px_rgba(0,230,118,0.5)] hover:shadow-[0_0_60px_rgba(0,230,118,0.8)] transition-all transform hover:scale-105 active:scale-95 border-4 border-transparent hover:border-white/20 text-center block uppercase italic"
            >
                <div className="absolute inset-0 bg-white/40 w-1/2 h-full blur-xl animate-shimmer pointer-events-none"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">START FOR FREE</span>
            </a>
            <div className="flex items-center gap-2 text-[#00E676] bg-[#001e10] border border-[#00E676]/30 px-4 py-1 rounded-lg font-mono text-xs tracking-tight shadow-[0_0_15px_rgba(0,230,118,0.1)] uppercase">
                &lt;&lt; No Credit Card Required!
            </div>
        </div>
    );
};

export default CTAButton;
