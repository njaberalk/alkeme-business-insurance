'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cards = [
  {
    title: 'Insurance That Empowers',
    description: 'The right insurance empowers business growth. We align your coverage with your vision so protection becomes a strategic advantage, not just a cost center.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Tailored to Your Operation',
    description: 'Every policy is designed around your specific risks, industry, and business goals — not a generic template. We build programs that fit the way you actually operate.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Claims Advocacy When It Counts',
    description: 'When a loss occurs, we step in as your advocate — managing the claims process, pushing for fair settlements, and keeping your business moving forward.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ValueProposition() {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation(0.1);

  return (
    <section className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Why We&apos;re Different</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Protect. Grow. Thrive.</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>We combine deep commercial insurance knowledge with a consultative approach to deliver programs that truly protect your business.</p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 stagger-children">
          {cards.map((card) => (
            <div key={card.title} className="relative overflow-hidden rounded-[2rem] group cursor-pointer" style={{ height: '13rem' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${card.image}')`, filter: 'grayscale(100%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />
              <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-70" style={{ transition: 'opacity 0.5s ease' }} />
              <div className="absolute inset-0 flex items-end justify-start" style={{ padding: '1.8rem' }}>
                <h3 className="text-stone font-bold relative z-10" style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
