'use client';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  { q: 'What types of business insurance does ALKEME offer?', a: 'We provide a full range of commercial insurance including general liability, workers\' compensation, commercial property, business interruption, professional liability (E&O), commercial auto, cyber liability, directors & officers, umbrella/excess liability, and employment practices liability. Every program is customized to your industry and risk profile.' },
  { q: 'How much does business insurance cost?', a: 'Costs vary based on your industry, revenue, number of employees, location, claims history, and coverage limits. A small business may pay $1,500 to $5,000 annually for a basic package, while larger or higher-risk operations may spend significantly more. We benchmark your program against industry standards to ensure competitive pricing.' },
  { q: 'Do I need a Business Owner\'s Policy (BOP)?', a: 'A BOP bundles general liability and commercial property into a single, cost-effective policy. It\'s ideal for small to mid-sized businesses that need foundational coverage without the complexity of separate policies. We can help determine whether a BOP or standalone policies better fit your needs.' },
  { q: 'Is workers\' compensation insurance required?', a: 'In most states, workers\' compensation is mandatory for businesses with employees. Requirements vary by state — some mandate coverage with just one employee, while Texas makes it optional. We ensure your program meets your state\'s specific requirements and help manage your experience modification rate.' },
  { q: 'What does cyber liability insurance cover?', a: 'Cyber liability covers data breach response costs, ransomware payments, business interruption from cyber events, privacy liability, regulatory fines, and notification expenses. With cyber attacks targeting businesses of all sizes, this coverage has become essential for any company that handles customer data or relies on digital systems.' },
  { q: 'How quickly can I get coverage for my business?', a: 'In most cases, we can provide quotes within 24 to 48 hours and bind coverage the same day a proposal is accepted. More complex accounts involving multiple locations, high-risk industries, or large payrolls may require additional time to ensure we access the most competitive markets.' },
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => { setHeight(isOpen && contentRef.current ? contentRef.current.scrollHeight : 0); }, [isOpen]);

  return (
    <div className="border-2 border-ash rounded-[2rem] overflow-hidden" style={{ background: isOpen ? 'rgba(255,255,255,0.5)' : 'transparent', transition: 'background 0.5s ease' }}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
        <span className="text-brand font-bold pr-8 group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: isOpen ? '#ffbf3b' : '#25475e', transition: 'all 0.5s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          <svg className="w-4 h-4" style={{ color: isOpen ? '#25475e' : '#f4f4ec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div ref={contentRef} style={{ height: isOpen ? height + 'px' : '0px', overflow: 'hidden', transition: 'height 0.5s ease' }}>
        <p className="text-brand/70 px-6 pb-6" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation(0.05);

  return (
    <section id="faq" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[900px] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center mb-14 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Frequently Asked Questions</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Common Questions About Business Insurance
          </h2>
        </div>
        <div ref={listRef} className="space-y-4 stagger-children">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
