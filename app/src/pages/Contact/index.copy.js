export const contactConfig = {
  heading: 'GET IN TOUCH',
  email: 'SDSTUDIOS.CO.UK@GMAIL.COM',
  subheading: "LET'S GET TO KNOW YOU...",
  budgetOptions: [
    { value: 'under-2k', label: 'UNDER £2K' },
    { value: '2k-3k', label: '£2K - £3K' },
    { value: 'over-3k', label: 'OVER £3K' }
  ],
  steps: [
    {
      id: 1,
      fields: [
        { name: 'name', type: 'text', placeholder: 'NAME' },
        { name: 'email', type: 'email', placeholder: 'EMAIL' },
        { name: 'company', type: 'text', placeholder: 'COMPANY' }
      ]
    },
    {
      id: 2,
      fields: [
        { name: 'phone', type: 'tel', placeholder: 'PHONE NUMBER (OPTIONAL)' },
        { name: 'website', type: 'url', placeholder: 'WEBSITE (OPTIONAL)' },
        { name: 'timeline', type: 'text', placeholder: 'PROJECT TIMELINE' }
      ]
    },
    {
      id: 3,
      showBudget: true,
      showProjectDetails: true
    }
  ]
};
