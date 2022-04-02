import { useRouter } from 'next/router';
import Link from 'next/link';
import { GradientLogo } from './Logo';
import { footerItems, footerLinks, footerSocialLinks } from '@/mockData';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`${className} flex bg-gray-50 font-Nunito dark:bg-slate-800`}
    >
      <div className="w-full px-4 py-1.5 lg:px-16 lg:pt-10">
        <div className="mx-auto grid max-w-screen-lg grid-cols-4">
          <div>
            <GradientLogo />
            <div className="mt-8 flex space-x-4">
              {footerSocialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-primary p-1.5 text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {Object.keys(footerLinks).map((col) => (
            <div key={col} className="space-y-2">
              <span className="text-sm font-bold">{col}</span>
              <ul className="space-y-2">
                {footerLinks[col].map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>
                      <a className="text-sm transition-all hover:text-primary">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          id="footer-copyright"
          className="mt-4 flex justify-between border-t py-4 text-sm dark:border-gray-600"
        >
          <div>
            Github{' '}
            <a
              href="https://github.com/miadv"
              className="transition-all hover:text-primary hover:underline"
            >
              Miad Vosoughi
            </a>
          </div>
          <div className="flex space-x-8">
            <Link href="/">
              <a className="transition-all hover:text-primary hover:underline">
                Privacy
              </a>
            </Link>
            <Link href="/">
              <a className="transition-all hover:text-primary hover:underline">
                Terms
              </a>
            </Link>
            <Link href="/">
              <a className="transition-all hover:text-primary hover:underline">
                Sitemap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const MobileFooter = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <div
      className={`${className} fixed inset-x-0 bottom-0 z-10 bg-white px-4 py-2 shadow-md dark:bg-slate-800`}
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
