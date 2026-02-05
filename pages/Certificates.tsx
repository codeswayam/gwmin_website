
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye } from 'lucide-react';
import certificatesData from '../data/certificates';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="mb-16 border-b border-brand-border pb-8">
        <h1 className="text-4xl font-mono font-bold tracking-tighter uppercase">Vault // Credentials</h1>
        <p className="text-brand-muted mt-2 font-mono text-[10px] uppercase tracking-widest">Validated certification data and identity proofs.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border">
        {(certificatesData as Certificate[]).map((cert) => (
          <div key={cert.id} className="group bg-brand-bg p-10 flex flex-col hover:bg-brand-surface transition-all">
            <div className="flex items-center justify-between mb-10">
              <span className="text-[8px] font-mono text-brand-muted border border-brand-border px-2 py-0.5 tracking-tighter">CERT_ID_{cert.id}</span>
              <span className="text-[10px] font-mono font-bold text-brand-accent">{cert.year}</span>
            </div>

            <div className="flex-grow space-y-4">
              <h3 className="text-xl font-bold font-mono tracking-tight leading-tight group-hover:underline">{cert.name}</h3>
              <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">{cert.issuer}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-px bg-brand-border mt-12 pt-0.5">
              <Link 
                to={`/certificates/${cert.id}`}
                className="flex items-center justify-center space-x-2 text-[10px] font-mono font-bold py-4 bg-brand-bg text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all uppercase tracking-widest"
              >
                <Eye size={12} />
                <span>INSPECT</span>
              </Link>
              <a 
                href={cert.file}
                download
                className="flex items-center justify-center space-x-2 text-[10px] font-mono py-4 bg-brand-bg text-brand-muted hover:text-brand-accent transition-all uppercase tracking-widest"
              >
                <Download size={12} />
                <span>SAVE</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
