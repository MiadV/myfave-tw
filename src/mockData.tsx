import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import ActivityIcon from './icons/ActivityIcon';
import BeautyIcon from './icons/BeautyIcon';
import CharityIcon from './icons/CharityIcons';
import DealIcon from './icons/DealIcon';
import EatIcon from './icons/EatIcon';
import FavePayIcon from './icons/FavePayIcon';
import HomeIcon from './icons/HomeIcon';
import MassageIcon from './icons/MassageIcon';
import ProfileIcon from './icons/ProfileIcon';
import RetailIcon from './icons/RetailIcon';
import ScanIcon from './icons/ScanIcon';
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

export const collectionsList = [
  {
    title: 'Top Selling Deals',
    img: '/images/c1.jpg',
  },
  {
    title: 'Massage and Spa',
    img: '/images/c2.jpg',
  },
  {
    title: 'Flas Sales!',
    img: '/images/c3.jpg',
  },
  {
    title: 'New deals on Fave',
    img: '/images/c4.jpg',
  },
  {
    title: 'Best Facial Deals',
    img: '/images/c5.jpg',
  },
  {
    title: 'Best Hair Deals',
    img: '/images/c6.jpg',
  },
];

export const highlightsList = [
  {
    id: 1,
    title: '1-Hour Deep Pore Cleansing with Honey Peel',
    normalPrice: 'RM160.00',
    afterPrice: 'RM48.00',
    discountPercent: 68,
    vendor: 'Beauty Saloon',
    locationsQty: 1,
    rate: 4.4,
    bought: 129,
    img: '/images/d1.jpg',
  },
  {
    id: 2,
    title:
      '(Sat - Sun) 90-Min Balinese Massage + Foot Bath for 1 Pax (1 Session)',
    normalPrice: 'RM300.00',
    afterPrice: 'RM199.00',
    discountPercent: 33,
    vendor: 'Beauty Spa',
    locationsQty: 3,
    rate: 4.3,
    bought: 0,
    img: '/images/d2.jpg',
  },
  {
    id: 3,
    title: 'Lunch Buffet + 5 Pcs Beancurd Roll for 1 Pax',
    normalPrice: 'RM57.65',
    afterPrice: 'RM33.99',
    discountPercent: 41,
    vendor: 'XY Restaurant',
    locationsQty: 1,
    rate: 4.6,
    bought: 251,
    img: '/images/d3.jpg',
  },
  {
    id: 4,
    title:
      '2-Hour Full Body Energise and Revitalise Therapy Massage for 2 People',
    normalPrice: 'RM560.00',
    afterPrice: 'RM288.00',
    discountPercent: 48,
    vendor: 'Delux Spa',
    locationsQty: 1,
    rate: 4.4,
    bought: 98,
    img: '/images/d4.jpg',
  },
  {
    id: 5,
    title: '(Sat - Sun, PH) Aquaria Admission for 1 Adult',
    normalPrice: 'RM52.00',
    afterPrice: 'RM45.00',
    discountPercent: 13,
    vendor: 'Aquaria',
    locationsQty: 1,
    rate: 4.3,
    bought: 73,
    img: '/images/d5.jpg',
  },
  {
    id: 6,
    title:
      'Air Conditioner Servicing and Gas Refill with 1-Month Warranty for 1 Unit',
    normalPrice: 'RM150.00',
    afterPrice: 'RM85.00',
    discountPercent: 43,
    vendor: 'Service Co',
    locationsQty: 1,
    rate: 4.5,
    bought: 33,
    img: '/images/d6.jpg',
  },
  {
    id: 7,
    title: '19-Step Auto Detailing with Polishing + Windscreen Treatment',
    normalPrice: 'RM388.00',
    afterPrice: 'RM148.00',
    discountPercent: 61,
    vendor: 'Service Co',
    locationsQty: 1,
    rate: 4.2,
    bought: 91,
    img: '/images/d7.jpg',
  },
  {
    id: 8,
    title: '(Sat - Sun, PH) Lunch buffet for 2 people - steak',
    normalPrice: 'RM229.00',
    afterPrice: 'RM197.00',
    discountPercent: 43,
    vendor: 'Steakhouse',
    locationsQty: 2,
    rate: 4.5,
    bought: 33,
    img: '/images/d8.jpg',
  },
];

export const footerSocialLinks = [
  {
    href: 'https://facebook.com',
    icon: <FaFacebookF />,
  },
  {
    href: 'https://instagram.com',
    icon: <FaInstagram />,
  },
  {
    href: 'https://linkedin.com',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'https://youtube.com',
    icon: <FaYoutube />,
  },
];

export const footerLinks: Record<
  string,
  {
    href: string;
    title: string;
  }[]
> = {
  Company: [
    { href: '/', title: 'About Fave' },
    { href: '/', title: 'Blog' },
    { href: '/', title: 'Careers' },
    { href: '/', title: 'Press' },
    { href: '/', title: 'FAQ' },
    { href: '/', title: 'Contact Us' },
    { href: '/', title: 'Be a partner' },
  ],
  Product: [
    { href: '/', title: 'FavePay' },
    { href: '/', title: 'Fave Deals' },
    { href: '/', title: 'Fave eCards' },
    { href: '/', title: 'Save Our Fave' },
  ],
  Partnerships: [
    { href: '/', title: 'Fave x GrabPay' },
    { href: '/', title: 'Fave x Boost' },
    { href: '/', title: 'DuitNow' },
  ],
};

export const footerItems = [
  { title: 'Home', icon: <HomeIcon className="fill-current" />, href: '/' },
  {
    title: 'Collections',
    icon: <DealIcon className="fill-current" />,
    href: '/#',
  },
  { title: 'Scan', icon: <ScanIcon className="fill-current" />, href: '/#' },
  {
    title: 'FavePay',
    icon: <FavePayIcon className="fill-current" />,
    href: '/#',
  },
  { title: 'Me', icon: <ProfileIcon className="fill-current" />, href: '/#' },
];
