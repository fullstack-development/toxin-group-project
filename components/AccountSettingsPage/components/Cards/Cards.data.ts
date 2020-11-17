type CardsData = {
  title: string;
  description: string;
  href: string;
};

const cardsData: CardsData[] = [
  {
    title: 'Personal info',
    description: 'Provide personal details and how we can reach you',
    href: '/account-settings/personal-info',
  },
  {
    title: 'Login & security',
    description: 'Update your password and secure your account',
    href: './account-settings/login-and-security',
  },
  {
    title: 'Notifications',
    description: 'Choose notification preferences and how you want to be contacted',
    href: './account-settings/notifications',
  },
  {
    title: 'Booked rooms',
    description: 'View all rooms that have been booked by you',
    href: './account-settings',
  },
];

export { cardsData };
