import { useRouter } from 'next/router';
import DealIcon from '@/icons/DealIcon';
import FavePayIcon from '@/icons/FavePayIcon';
import HomeIcon from '@/icons/HomeIcon';
import ProfileIcon from '@/icons/ProfileIcon';
import ScanIcon from '@/icons/ScanIcon';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {
  return <footer className={`${className}`}>footer</footer>;
};

const footerItems = [
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

export const MobileFooter = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <div
      className={`${className} fixed inset-x-0 bottom-0 z-10 bg-white px-4 py-2 shadow-md`}
    >
      <nav className="flex justify-between">
        {footerItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <a
              className={`flex flex-col items-center justify-center ${
                router.asPath === item.href ? 'text-primary' : 'text-gray-500'
              }`}
            >
              {item.icon}
              <span className="mt-1 text-xs">{item.title}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};
