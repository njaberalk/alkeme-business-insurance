'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINK_MAP = [
  // Coverages
  ['general liability', '/coverage/general-liability/'],
  ['workers\' compensation', '/coverage/workers-compensation/'],
  ['workers compensation', '/coverage/workers-compensation/'],
  ['workers\' comp', '/coverage/workers-compensation/'],
  ['workers comp', '/coverage/workers-compensation/'],
  ['commercial property', '/coverage/commercial-property/'],
  ['property insurance', '/coverage/commercial-property/'],
  ['business interruption', '/coverage/business-interruption/'],
  ['professional liability', '/coverage/professional-liability/'],
  ['errors and omissions', '/coverage/professional-liability/'],
  ['E&O insurance', '/coverage/professional-liability/'],
  ['commercial auto', '/coverage/commercial-auto/'],
  ['business auto', '/coverage/commercial-auto/'],
  ['cyber liability', '/coverage/cyber-liability/'],
  ['cyber insurance', '/coverage/cyber-liability/'],
  ['data breach', '/coverage/cyber-liability/'],
  ['directors and officers', '/coverage/directors-officers/'],
  ['D&O insurance', '/coverage/directors-officers/'],
  ['umbrella coverage', '/coverage/umbrella-excess-liability/'],
  ['umbrella liability', '/coverage/umbrella-excess-liability/'],
  ['excess liability', '/coverage/umbrella-excess-liability/'],
  ['employment practices liability', '/coverage/employment-practices-liability/'],
  ['EPLI', '/coverage/employment-practices-liability/'],

  // Industries
  ['security companies', '/industries/security-companies/'],
  ['construction', '/industries/construction/'],
  ['automotive', '/industries/automotive/'],
  ['hospitality', '/industries/hospitality/'],
  ['habitational', '/industries/habitational/'],
  ['transportation', '/industries/transportation/'],
  ['retail', '/industries/retail/'],
  ['manufacturing', '/industries/manufacturing/'],
  ['professional services', '/industries/professional-services/'],
  ['technology', '/industries/technology/'],

  // States
  ['Alabama', '/states/alabama/'], ['Alaska', '/states/alaska/'], ['Arizona', '/states/arizona/'],
  ['Arkansas', '/states/arkansas/'], ['California', '/states/california/'], ['Colorado', '/states/colorado/'],
  ['Connecticut', '/states/connecticut/'], ['Delaware', '/states/delaware/'], ['Florida', '/states/florida/'],
  ['Georgia', '/states/georgia/'], ['Idaho', '/states/idaho/'], ['Illinois', '/states/illinois/'],
  ['Indiana', '/states/indiana/'], ['Iowa', '/states/iowa/'], ['Kansas', '/states/kansas/'],
  ['Kentucky', '/states/kentucky/'], ['Louisiana', '/states/louisiana/'], ['Maine', '/states/maine/'],
  ['Maryland', '/states/maryland/'], ['Massachusetts', '/states/massachusetts/'], ['Michigan', '/states/michigan/'],
  ['Minnesota', '/states/minnesota/'], ['Mississippi', '/states/mississippi/'], ['Missouri', '/states/missouri/'],
  ['Montana', '/states/montana/'], ['Nebraska', '/states/nebraska/'], ['Nevada', '/states/nevada/'],
  ['New Hampshire', '/states/new-hampshire/'], ['New Jersey', '/states/new-jersey/'],
  ['New Mexico', '/states/new-mexico/'], ['New York', '/states/new-york/'],
  ['North Carolina', '/states/north-carolina/'], ['North Dakota', '/states/north-dakota/'],
  ['Ohio', '/states/ohio/'], ['Oklahoma', '/states/oklahoma/'], ['Oregon', '/states/oregon/'],
  ['Pennsylvania', '/states/pennsylvania/'], ['Rhode Island', '/states/rhode-island/'],
  ['South Carolina', '/states/south-carolina/'], ['South Dakota', '/states/south-dakota/'],
  ['Tennessee', '/states/tennessee/'], ['Texas', '/states/texas/'], ['Utah', '/states/utah/'],
  ['Vermont', '/states/vermont/'], ['Virginia', '/states/virginia/'], ['Washington', '/states/washington/'],
  ['West Virginia', '/states/west-virginia/'], ['Wisconsin', '/states/wisconsin/'], ['Wyoming', '/states/wyoming/'],

  // Resources
  ['certificate of insurance', '/resources/certificate-of-insurance-guide/'],
  ['business owner\'s policy', '/resources/business-owners-policy-guide/'],
  ['BOP', '/resources/business-owners-policy-guide/'],

  // Tools
  ['coverage assessment', '/tools/coverage-needs-assessment/'],
  ['state requirements', '/tools/state-requirements/'],
];

export default function SmartText({ text, className, style }) {
  const pathname = usePathname();
  if (!text) return null;
  const currentPath = pathname?.replace(/\/business-insurance/, '') || '';
  const parts = autoLink(text, currentPath);

  return (
    <span className={className} style={style}>
      {parts.map((part, i) =>
        typeof part === 'string' ? part : (
          <Link key={i} href={part.href} className="text-blue-dark font-semibold hover:text-brand underline decoration-blue-dark/30 underline-offset-2 hover:decoration-brand/50" style={{ transition: 'color 0.2s' }}>{part.text}</Link>
        )
      )}
    </span>
  );
}

function autoLink(text, currentPath = '') {
  const parts = [];
  let remaining = text;
  const linked = new Set();

  while (remaining.length > 0) {
    let earliestMatch = null;
    let earliestIndex = remaining.length;
    let matchedTerm = null;

    for (const [term, href] of LINK_MAP) {
      if (linked.has(term)) continue;
      if (currentPath && href.replace(/\/$/, '') === currentPath.replace(/\/$/, '')) continue;
      const index = remaining.toLowerCase().indexOf(term.toLowerCase());
      if (index !== -1 && index < earliestIndex) {
        earliestMatch = { href, length: term.length };
        earliestIndex = index;
        matchedTerm = term;
      }
    }

    if (earliestMatch) {
      if (earliestIndex > 0) parts.push(remaining.substring(0, earliestIndex));
      parts.push({ text: remaining.substring(earliestIndex, earliestIndex + earliestMatch.length), href: earliestMatch.href });
      linked.add(matchedTerm);
      remaining = remaining.substring(earliestIndex + earliestMatch.length);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }
  return parts;
}
