// Cross-linking maps for dense internal linking
export const coverageToIndustries = {
  'general-liability': ['construction', 'hospitality', 'retail', 'manufacturing'],
  'workers-compensation': ['construction', 'manufacturing', 'hospitality', 'retail'],
  'commercial-property': ['retail', 'manufacturing', 'hospitality', 'real-estate'],
  'business-interruption': ['manufacturing', 'hospitality', 'retail', 'technology'],
  'professional-liability': ['professional-services', 'technology', 'construction', 'startups-emerging'],
  'commercial-auto': ['logistics-warehousing', 'construction', 'manufacturing', 'retail'],
  'cyber-liability': ['technology', 'professional-services', 'retail', 'hospitality'],
  'directors-officers': ['technology', 'professional-services', 'manufacturing', 'real-estate'],
  'umbrella-excess-liability': ['construction', 'manufacturing', 'logistics-warehousing', 'hospitality'],
  'employment-practices-liability': ['hospitality', 'retail', 'professional-services', 'technology'],
};

export const coverageToResources = {
  'general-liability': ['general-liability-guide', 'business-insurance-cost', 'business-owners-policy-guide'],
  'workers-compensation': ['workers-comp-guide', 'business-insurance-cost', 'claims-guide'],
  'commercial-property': ['business-owners-policy-guide', 'business-insurance-cost', 'claims-guide'],
  'business-interruption': ['business-owners-policy-guide', 'claims-guide', 'business-insurance-cost'],
  'professional-liability': ['business-insurance-cost', 'certificate-of-insurance-guide'],
  'commercial-auto': ['commercial-auto-guide', 'business-insurance-cost', 'claims-guide'],
  'cyber-liability': ['cyber-insurance-guide', 'business-insurance-cost'],
  'directors-officers': ['business-insurance-cost', 'business-insurance-glossary'],
  'umbrella-excess-liability': ['business-insurance-cost', 'certificate-of-insurance-guide'],
  'employment-practices-liability': ['business-insurance-cost', 'claims-guide'],
};

export const industryToStates = {
  'startups-emerging': ['california', 'new-york', 'texas', 'massachusetts', 'washington'],
  'construction': ['texas', 'california', 'florida', 'new-york', 'ohio'],
  'automotive': ['texas', 'california', 'florida', 'pennsylvania', 'ohio'],
  'hospitality': ['california', 'florida', 'new-york', 'texas', 'nevada'],
  'real-estate': ['california', 'new-york', 'texas', 'florida', 'illinois'],
  'logistics-warehousing': ['texas', 'california', 'illinois', 'georgia', 'indiana'],
  'retail': ['california', 'texas', 'new-york', 'florida', 'illinois'],
  'manufacturing': ['texas', 'ohio', 'michigan', 'indiana', 'illinois'],
  'professional-services': ['new-york', 'california', 'texas', 'illinois', 'massachusetts'],
  'technology': ['california', 'washington', 'new-york', 'texas', 'massachusetts'],
};

export const industryToResources = {
  'startups-emerging': ['business-insurance-cost', 'cyber-insurance-guide', 'certificate-of-insurance-guide'],
  'construction': ['workers-comp-guide', 'certificate-of-insurance-guide', 'general-liability-guide'],
  'automotive': ['business-insurance-cost', 'general-liability-guide', 'commercial-auto-guide'],
  'hospitality': ['general-liability-guide', 'workers-comp-guide', 'business-insurance-cost'],
  'real-estate': ['business-insurance-cost', 'certificate-of-insurance-guide', 'business-insurance-glossary'],
  'logistics-warehousing': ['commercial-auto-guide', 'workers-comp-guide', 'business-insurance-cost'],
  'retail': ['business-owners-policy-guide', 'cyber-insurance-guide', 'business-insurance-cost'],
  'manufacturing': ['workers-comp-guide', 'business-insurance-cost', 'claims-guide'],
  'professional-services': ['business-insurance-cost', 'cyber-insurance-guide', 'certificate-of-insurance-guide'],
  'technology': ['cyber-insurance-guide', 'business-insurance-cost', 'certificate-of-insurance-guide'],
};
