export const CardsFilter = [
  { name: 'Newest', value: 'newest' },
  { name: 'Oldest', value: 'oldest' },
  { name: 'Items', value: 'items' },
  { name: 'Name', value: 'name' },
];
export const ProfileOptions = [
  { name: 'Profile', link: '/profile' },
  { name: 'Settings', link: '/settings' },
  // { name: 'Logout', link: '/logout' },
];
// export const colors = [
//   '#FF5733',
//   '#33FF57',
//   '#3357FF',
//   '#FF33A1',
//   '#33FFF5',
//   '#F5FF33',
//   '#FF8F33',
//   '#33FFB5',
//   '#8A33FF',
//   '#FF3333',
// ];

interface ColorScheme {
  [key: string]: {
    bg: string;
    txt: string;
  };
}
export const colors: ColorScheme = {
  1: { bg: '#FF5733', txt: '#FFFFFF' }, // Bright red background, white text
  2: { bg: '#33FF57', txt: '#000000' }, // Bright green background, black text
  3: { bg: '#3357FF', txt: '#FFFFFF' }, // Bright blue background, white text
  4: { bg: '#FFD700', txt: '#000000' }, // Gold background, black text
  5: { bg: '#FF33A6', txt: '#FFFFFF' }, // Bright pink background, white text
  6: { bg: '#33FFF2', txt: '#000000' }, // Bright cyan background, black text
  7: { bg: '#8A2BE2', txt: '#FFFFFF' }, // BlueViolet background, white text
  8: { bg: '#795548', txt: '#FFFFFF' }, // Lime backgrouznd, black text
  9: { bg: '#FF8C00', txt: '#FFFFFF' }, // Dark orange background, white text
  10: { bg: '#1E90FF', txt: '#FFFFFF' }, // DodgerBlue background, white text
  11: { bg: '#FF4500', txt: '#FFFFFF' }, // OrangeRed background, white text
  12: { bg: '#32CD32', txt: '#FFFFFF' }, // LimeGreen background, white text
};

export const COLLECTIONS_LIST = [
  {
    id: 1,
    name: 'Books',
    icon: '📚',
    createdAt: '2024-01-15',
    itemCount: 120,
    color: '#FF5733',
  },
  {
    id: 2,
    name: 'Movies',
    icon: '🎬',
    createdAt: '2023-11-05',
    itemCount: 85,
    color: '#33FF57',
  },
  {
    id: 3,
    name: 'Music',
    icon: '🎵',
    createdAt: '2022-08-19',
    itemCount: 250,
    color: '#009830',
  },
  {
    id: 4,
    name: 'Art',
    icon: '🎨',
    createdAt: '2021-04-30',
    itemCount: 60,
    color: '#FF33A1',
  },
  {
    id: 5,
    name: 'Games',
    icon: '🎮',
    createdAt: '2023-07-22',
    itemCount: 45,
    color: '#33FFF5',
  },
];
