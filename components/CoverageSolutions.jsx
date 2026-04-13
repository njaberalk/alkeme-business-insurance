'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'General Liability', slug: 'general-liability', desc: 'Protects your business against third-party claims for bodily injury, property damage, and advertising injury arising from your operations.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Covers employee injuries and illnesses on the job, providing wage replacement and medical benefits as required by state law.' },
  { title: 'Commercial Property', slug: 'commercial-property', desc: 'Safeguards your buildings, equipment, inventory, and business personal property against fire, theft, storms, and other covered perils.' },
  { title: 'Business Interruption', slug: 'business-interruption', desc: 'Replaces lost income and covers ongoing expenses when a covered event forces your business to temporarily shut down.' },
  { title: 'Professional Liability', slug: 'professional-liability', desc: 'Protects against claims of negligence, errors, or omissions in the professional services or advice you provide to clients.' },
  { title: 'Commercial Auto', slug: 'commercial-auto', desc: 'Covers company-owned vehicles, hired autos, and non-owned vehicles used for business purposes against liability and physical damage.' },
  { title: 'Cyber Liability', slug: 'cyber-liability', desc: 'Responds to data breaches, ransomware attacks, and privacy violations with breach response, liability coverage, and business interruption.' },
  { title: 'Directors & Officers', slug: 'directors-officers', desc: 'Protects company leadership against personal liability for decisions and actions taken in their capacity as directors or officers.' },
  { title: 'Umbrella / Excess Liability', slug: 'umbrella-excess-liability', desc: 'Provides additional liability limits above your underlying policies, protecting against catastrophic claims that exceed primary coverage.' },
  { title: 'Employment Practices', slug: 'employment-practices-liability', desc: 'Covers claims from employees alleging wrongful termination, discrimination, harassment, or other employment-related violations.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Protection Powered by ALKEME</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From general liability to cyber protection, we provide the commercial insurance coverage lines that keep your business compliant and protected.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
