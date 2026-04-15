export const verticalConfig = {
  id: 'business-insurance', label: 'Business Insurance',
  heading: 'Get a Business Insurance Quote',
  subtext: 'Answer a few quick questions and our commercial specialists will design coverage for your business.',
  businessTypes: [
    { value: 'startup', label: 'Startup / New Business' },
    { value: 'small-business', label: 'Small Business' },
    { value: 'mid-size', label: 'Mid-Size Company' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'franchise', label: 'Franchise' },
    { value: 'nonprofit', label: 'Nonprofit' },
  ],
  customQuestions: [
    { id: 'industry', label: 'What industry?', type: 'select', options: ['Construction', 'Technology', 'Retail', 'Manufacturing', 'Hospitality', 'Professional Services', 'Real Estate', 'Logistics', 'Healthcare', 'Other'] },
    { id: 'employee_count', label: 'How many employees?', type: 'select', options: ['1-5', '6-25', '26-100', '101-500', '500+'] },
    { id: 'revenue', label: 'Annual revenue?', type: 'select', options: ['Under $500K', '$500K-$2M', '$2M-$10M', '$10M+'] },
  ],
  coverageOptions: ['General Liability', 'Workers\' Compensation', 'Commercial Property', 'Business Interruption', 'Professional Liability', 'Commercial Auto', 'Cyber Liability', 'Directors & Officers', 'Umbrella / Excess', 'Employment Practices'],
};
