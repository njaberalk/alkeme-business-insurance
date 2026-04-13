import HomeContent from './HomeContent';

export const metadata = {
  title: 'Commercial Business Insurance Solutions',
  description: 'ALKEME Insurance Services provides tailored commercial insurance solutions for businesses of all sizes. General liability, workers\' comp, property, cyber, and more.',
  openGraph: { title: 'Business Insurance | ALKEME Insurance Services', description: 'Tailored commercial insurance for businesses of all sizes across all 50 states.', url: 'https://alkemeins.com/business-insurance/' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com', telephone: '+18559255363', email: 'info@alkemeins.com', description: 'ALKEME Insurance Services provides tailored commercial insurance solutions for businesses of all sizes across all 50 states.', areaServed: { '@type': 'Country', name: 'United States' }, parentOrganization: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' }, serviceType: ['Commercial Business Insurance', 'General Liability', 'Workers Compensation', 'Commercial Property', 'Business Interruption', 'Professional Liability', 'Commercial Auto', 'Cyber Liability', 'Directors and Officers'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What types of business insurance does ALKEME offer?', acceptedAnswer: { '@type': 'Answer', text: 'We provide general liability, workers\' compensation, commercial property, business interruption, professional liability, commercial auto, cyber liability, directors & officers, umbrella/excess liability, and employment practices liability.' } },
        { '@type': 'Question', name: 'How much does business insurance cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs vary based on industry, revenue, employees, location, and claims history. A small business may pay $1,500 to $5,000 annually for a basic package.' } },
        { '@type': 'Question', name: 'Is workers\' compensation required?', acceptedAnswer: { '@type': 'Answer', text: 'In most states, workers\' compensation is mandatory for businesses with employees. Requirements vary by state.' } },
        { '@type': 'Question', name: 'What does cyber liability insurance cover?', acceptedAnswer: { '@type': 'Answer', text: 'Cyber liability covers data breach response, ransomware payments, business interruption from cyber events, privacy liability, and notification expenses.' } },
        { '@type': 'Question', name: 'How quickly can I get coverage?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, we provide quotes within 24-48 hours and bind coverage the same day a proposal is accepted.' } },
        { '@type': 'Question', name: 'Do I need a Business Owner\'s Policy?', acceptedAnswer: { '@type': 'Answer', text: 'A BOP bundles general liability and commercial property into a single, cost-effective policy ideal for small to mid-sized businesses.' } },
      ] }) }} />
      <HomeContent />
    </>
  );
}
