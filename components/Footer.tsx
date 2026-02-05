
import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-brand-border bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-accent p-1 text-brand-bg">
                <Shield size={16} />
              </div>
              <span className="font-mono font-bold text-xs">SEC_OPS_v4.0</span>
            </div>
            <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">Built for Zero-Trust &copy; {currentYear}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-[9px] font-mono text-brand-muted uppercase tracking-[0.2em]">
            <span>REACT_V19</span>
            <span>TW_CSS</span>
            <span>TS_SAFE</span>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-[9px] font-mono text-brand-muted uppercase">SIG: 0x7E3F...9B2A</p>
            <a href="/security.txt" className="text-[9px] font-mono text-brand-accent border-b border-brand-accent hover:text-brand-muted hover:border-brand-muted transition-all uppercase tracking-widest">SEC_POLICY</a>
          </div>

        </div>
      </div>
    </footer>
  );
};
