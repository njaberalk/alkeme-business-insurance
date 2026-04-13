// Coverage needs assessment data by industry type

export const cargoTypes = [
  {
    id: 'construction', label: 'Construction', description: 'General contractors, subcontractors, artisan trades',
    minimumLiability: '$3,000 - $15,000', minimumLiabilityAmount: 9000,
    filings: ['General liability required by most contracts', 'Workers\' comp required in nearly all states', 'Builders risk for active projects', 'Surety bonds for public works'],
    requiredCoverages: [
      { coverage: 'General Liability', minimum: 'Required', slug: 'general-liability', notes: 'Essential for contractors. Most contracts require $1M/$2M limits with additional insured endorsements.' },
      { coverage: 'Workers\' Compensation', minimum: 'Required', slug: 'workers-compensation', notes: 'Mandatory in most states for construction. High class codes mean higher premiums. Safety programs reduce costs.' },
      { coverage: 'Commercial Auto', minimum: 'Required', slug: 'commercial-auto', notes: 'Covers company trucks, vans, and equipment haulers. Hired & non-owned auto recommended.' },
      { coverage: 'Umbrella / Excess', minimum: 'Recommended', slug: 'umbrella-excess-liability', notes: 'Most GC contracts require $5M+ in total limits. Umbrella fills the gap above primary policies.' },
      { coverage: 'Professional Liability', minimum: 'Recommended', slug: 'professional-liability', notes: 'For design-build firms and contractors providing professional opinions or engineering services.' },
    ],
    additionalNotes: 'Construction insurance costs vary widely based on trade classification, payroll, and loss history. Artisan contractors may pay less than GCs, but subcontractor default insurance and builders risk can add significant cost to larger projects.',
  },
  {
    id: 'technology', label: 'Technology', description: 'SaaS companies, IT services, startups, MSPs',
    minimumLiability: '$2,000 - $10,000', minimumLiabilityAmount: 6000,
    filings: ['E&O/professional liability often contractually required', 'Cyber liability increasingly mandated by clients', 'SOC 2 compliance may require specific coverages'],
    requiredCoverages: [
      { coverage: 'Professional Liability (E&O)', minimum: 'Required', slug: 'professional-liability', notes: 'Covers claims of negligent service delivery, software bugs, project delays, and failure to perform. Most tech contracts require it.' },
      { coverage: 'Cyber Liability', minimum: 'Required', slug: 'cyber-liability', notes: 'Data breach response, ransomware, business interruption from cyber events. Essential for any company handling data.' },
      { coverage: 'General Liability', minimum: 'Required', slug: 'general-liability', notes: 'Covers premises liability, advertising injury, and general business operations risk.' },
      { coverage: 'Directors & Officers', minimum: 'Recommended', slug: 'directors-officers', notes: 'Critical for funded startups. Investors typically require D&O before closing.' },
      { coverage: 'Employment Practices', minimum: 'Recommended', slug: 'employment-practices-liability', notes: 'Protects against wrongful termination, discrimination, and harassment claims as teams grow.' },
    ],
    additionalNotes: 'Tech companies should budget for E&O and cyber as primary coverages. Many enterprise clients now require proof of both before signing contracts. D&O is essential once you take outside investment.',
  },
  {
    id: 'hospitality', label: 'Hospitality', description: 'Restaurants, hotels, bars, event venues, catering',
    minimumLiability: '$3,000 - $12,000', minimumLiabilityAmount: 7500,
    filings: ['Liquor liability required if serving alcohol', 'Workers\' comp required for all staff', 'Food contamination coverage recommended', 'Property insurance required by landlords'],
    requiredCoverages: [
      { coverage: 'General Liability', minimum: 'Required', slug: 'general-liability', notes: 'Slip-and-fall, food-borne illness, and guest injury claims are the primary exposures in hospitality.' },
      { coverage: 'Commercial Property', minimum: 'Required', slug: 'commercial-property', notes: 'Protects kitchen equipment, furnishings, inventory, and tenant improvements. Landlords require this.' },
      { coverage: 'Workers\' Compensation', minimum: 'Required', slug: 'workers-compensation', notes: 'Kitchen burns, slips, and repetitive strain injuries make workers\' comp essential for hospitality staff.' },
      { coverage: 'Business Interruption', minimum: 'Recommended', slug: 'business-interruption', notes: 'Covers lost income if a fire, flood, or other covered event forces temporary closure.' },
      { coverage: 'Umbrella / Excess', minimum: 'Recommended', slug: 'umbrella-excess-liability', notes: 'Higher foot traffic means higher liability exposure. Umbrella provides crucial additional limits.' },
    ],
    additionalNotes: 'If you serve alcohol, liquor liability is essential and often required by your lease and local regulations. Consider employment practices liability as hospitality faces high rates of employment-related claims.',
  },
  {
    id: 'manufacturing', label: 'Manufacturing', description: 'Factories, fabrication, food production, assembly',
    minimumLiability: '$5,000 - $20,000', minimumLiabilityAmount: 12500,
    filings: ['Workers\' comp required — high-risk class codes', 'Product liability essential for goods producers', 'Environmental/pollution coverage may be required', 'Property insurance for equipment and inventory'],
    requiredCoverages: [
      { coverage: 'General Liability', minimum: 'Required', slug: 'general-liability', notes: 'Products-completed operations coverage is critical. Claims from defective products can be severe.' },
      { coverage: 'Workers\' Compensation', minimum: 'Required', slug: 'workers-compensation', notes: 'Manufacturing carries some of the highest workers\' comp class codes. Safety programs are essential.' },
      { coverage: 'Commercial Property', minimum: 'Required', slug: 'commercial-property', notes: 'Expensive machinery, raw materials, and finished goods inventory all need protection.' },
      { coverage: 'Business Interruption', minimum: 'Required', slug: 'business-interruption', notes: 'Equipment breakdown or supply chain disruption can shut down production. BI covers the lost income.' },
      { coverage: 'Commercial Auto', minimum: 'Recommended', slug: 'commercial-auto', notes: 'Delivery vehicles, forklifts on public roads, and employee vehicles used for business.' },
      { coverage: 'Umbrella / Excess', minimum: 'Recommended', slug: 'umbrella-excess-liability', notes: 'Product liability claims can be catastrophic. Higher umbrella limits provide essential protection.' },
    ],
    additionalNotes: 'Manufacturing insurance is heavily driven by your product type, revenue, payroll, and loss history. Food manufacturers face additional requirements around recall coverage and contamination liability.',
  },
  {
    id: 'retail', label: 'Retail', description: 'Brick & mortar stores, e-commerce, franchise, wholesale',
    minimumLiability: '$1,500 - $8,000', minimumLiabilityAmount: 4750,
    filings: ['General liability required by landlords/malls', 'Workers\' comp for employees', 'Product liability for goods sold', 'Cyber liability for online transactions'],
    requiredCoverages: [
      { coverage: 'General Liability', minimum: 'Required', slug: 'general-liability', notes: 'Customer slip-and-fall and product liability are the primary retail exposures. Most leases require GL.' },
      { coverage: 'Commercial Property', minimum: 'Required', slug: 'commercial-property', notes: 'Inventory, fixtures, signage, and tenant improvements. Business personal property coverage is essential.' },
      { coverage: 'Workers\' Compensation', minimum: 'Required', slug: 'workers-compensation', notes: 'Required for retail employees. Lower class codes than construction but still mandatory in most states.' },
      { coverage: 'Cyber Liability', minimum: 'Recommended', slug: 'cyber-liability', notes: 'PCI-DSS compliance and data breach exposure for any retailer processing card payments or storing customer data.' },
      { coverage: 'Business Interruption', minimum: 'Recommended', slug: 'business-interruption', notes: 'If a covered event shuts your store down, BI replaces lost income during the recovery period.' },
    ],
    additionalNotes: 'A Business Owner\'s Policy (BOP) is often the most cost-effective option for small retailers, bundling GL and property into a single policy at a discounted rate compared to standalone policies.',
  },
  {
    id: 'professional-services', label: 'Professional Services', description: 'Law firms, accounting, consulting, architecture, IT',
    minimumLiability: '$2,000 - $10,000', minimumLiabilityAmount: 6000,
    filings: ['Professional liability (E&O) often required by licensing boards', 'Cyber liability for firms handling sensitive client data', 'Workers\' comp for employees'],
    requiredCoverages: [
      { coverage: 'Professional Liability (E&O)', minimum: 'Required', slug: 'professional-liability', notes: 'The core coverage for any professional firm. Covers negligent advice, errors in deliverables, and failure to perform.' },
      { coverage: 'General Liability', minimum: 'Required', slug: 'general-liability', notes: 'Covers premises liability and general business operations. Required by most office leases.' },
      { coverage: 'Cyber Liability', minimum: 'Required', slug: 'cyber-liability', notes: 'Firms handling client financial data, health records, or legal documents face significant breach exposure.' },
      { coverage: 'Directors & Officers', minimum: 'Recommended', slug: 'directors-officers', notes: 'Protects firm partners and principals against management liability claims.' },
      { coverage: 'Employment Practices', minimum: 'Recommended', slug: 'employment-practices-liability', notes: 'Covers wrongful termination, discrimination, and harassment claims from employees.' },
    ],
    additionalNotes: 'Professional firms should prioritize E&O coverage matched to their specific discipline. Legal malpractice, accounting errors, and consulting failures each have unique policy forms designed for those exposures.',
  },
];
