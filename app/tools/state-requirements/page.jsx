import StateRequirementsContent from './StateRequirementsContent';

export const metadata = {
  title: 'State Business Insurance Requirements Lookup',
  description: 'Look up business insurance requirements by state. See workers\' comp rules, liability requirements, and state-specific regulations for all 50 states.',
  alternates: { canonical: 'https://alkemeins.com/business-insurance/tools/state-requirements/' },
  openGraph: { title: 'State Business Insurance Requirements | ALKEME Insurance Services', description: 'Look up business insurance requirements for any US state.', url: 'https://alkemeins.com/business-insurance/tools/state-requirements/', type: 'website' },
};

export default function StateRequirementsPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'State Business Insurance Requirements Lookup', url: 'https://alkemeins.com/business-insurance/tools/state-requirements/', applicationCategory: 'BusinessApplication', provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' }, description: 'Look up business insurance requirements for any US state.' };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><StateRequirementsContent /></>);
}
