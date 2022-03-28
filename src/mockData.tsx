import ActivityIcon from './icons/ActivityIcon';
import BeautyIcon from './icons/BeautyIcon';
import CharityIcon from './icons/CharityIcons';
import EatIcon from './icons/EatIcon';
import MassageIcon from './icons/MassageIcon';
import RetailIcon from './icons/RetailIcon';
import ServiceIcon from './icons/ServiceIcon';
import TravelIcon from './icons/TravelIcon';

export const CategoriesList = [
  {
    title: 'Eat',
    icon: EatIcon,
  },
  {
    title: 'Beauty',
    icon: BeautyIcon,
  },
  {
    title: 'Massage',
    icon: MassageIcon,
  },
  {
    title: 'Retail',
    icon: RetailIcon,
  },
  {
    title: 'Activities',
    icon: ActivityIcon,
  },
  {
    title: 'Services',
    icon: ServiceIcon,
  },
  {
    title: 'Travel',
    icon: TravelIcon,
  },
  {
    title: 'Charity',
    icon: CharityIcon,
  },
];

export const todayPromos = [
  {
    id: 1,
    img: '/images/a1.jpg',
  },
  {
    id: 2,
    img: '/images/a2.jpg',
  },
  {
    id: 3,
    img: '/images/a3.jpg',
  },
  {
    id: 4,
    img: '/images/a4.jpg',
  },
];

export const dealsOfDay = [
  {
    id: 1,
    title: '1-Hour Deep Pore Cleansing with Honey Peel',
    normalPrice: 'RM160.00',
    afterPrice: 'RM48.00',
    discountPercent: 68,
    vendor: {
      title: 'Beauty Saloon',
      address: 'G-00, Test Shopping Centre and 3 other outlets',
    },
    img: '/images/b1.jpg',
  },
  {
    id: 2,
    title: '1-Hour Pure Excellence Skin Revival Facial Treatment',
    normalPrice: 'RM160.00',
    afterPrice: 'RM48.00',
    discountPercent: 70,
    vendor: {
      title: 'Beauty Saloon',
      address: 'G-00, Test Shopping Centre and 3 other outlets',
    },
    img: '/images/b2.jpg',
  },
];
