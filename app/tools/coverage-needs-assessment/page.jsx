import FMCSACheckerContent from './FMCSACheckerContent';

export const metadata = {
  title: 'Coverage Needs Assessment',
  description: 'Find out what business insurance your company needs. Select your industry to see recommended coverages and compliance requirements.',
  alternates: { canonical: 'https://alkemeins.com/business-insurance/tools/coverage-needs-assessment/' },
  openGraph: { title: 'Coverage Needs Assessment | ALKEME Insurance Services', description: 'Interactive tool to determine your business insurance needs by industry.', url: 'https://alkemeins.com/business-insurance/tools/coverage-needs-assessment/', type: 'website' },
};

export default function CoverageNeedsPage() {
  const jsonLd = [{ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Coverage Needs Assessment', url: 'https://alkemeins.com/business-insurance/tools/coverage-needs-assessment/', applicationCategory: 'BusinessApplication', provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' }, description: 'Determine your business insurance needs by industry type.' }];
  return (<>{jsonLd.map((ld, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />))}<FMCSACheckerContent /></>);
}
