'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const allCoverages = {
  'general-liability': { title: 'General Liability', desc: 'Third-party bodily injury and property damage' },
  'workers-compensation': { title: 'Workers\' Compensation', desc: 'Employee injury wage and medical benefits' },
  'commercial-property': { title: 'Commercial Property', desc: 'Buildings, equipment, and inventory protection' },
  'business-interruption': { title: 'Business Interruption', desc: 'Lost income during covered shutdowns' },
  'professional-liability': { title: 'Professional Liability', desc: 'Errors & omissions coverage' },
  'commercial-auto': { title: 'Commercial Auto', desc: 'Company vehicle liability and damage' },
  'cyber-liability': { title: 'Cyber Liability', desc: 'Data breach and cyber event response' },
  'directors-officers': { title: 'Directors & Officers', desc: 'Leadership liability protection' },
  'umbrella-excess-liability': { title: 'Umbrella / Excess', desc: 'Additional liability limits' },
  'employment-practices-liability': { title: 'Employment Practices', desc: 'Wrongful termination and discrimination' },
};

export default function RelatedCoverages({ slugs, title = 'Related Coverage' }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '5rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {slugs.map((slug) => {
            const cov = allCoverages[slug];
            if (!cov) return null;
            return (
              <Link key={slug} href={`/coverage/${slug}/`} className="block border-2 border-ash rounded-[2rem] p-6 group no-underline hover:border-blue-dark" style={{ transition: 'all 0.24s' }}>
                <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.1rem', transition: 'color 0.24s' }}>{cov.title}</h3>
                <p className="text-brand/60" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>{cov.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
