import Image from 'next/image';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';
import { Button } from './Button';
import { highlightsList } from '@/mockData';

const CategoryHighlights = () => {
  return (
    <section className="bg-white p-3 dark:bg-slate-600 lg:rounded-xl lg:px-8 lg:pt-5">
      <div className="flex items-center justify-between pb-3">
        <h4 className="text-lg font-medium">{`You Deserve it! 🔥`}</h4>
        <Link href={'/'}>
          <a className="flex items-center text-sm font-medium text-primary">
            See more <MdChevronRight size={20} />
          </a>
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {highlightsList.map((item) => (
            <Link key={item.id} href={'/#'}>
              <a className="dark:hover:border-primar rounded-md border bg-white  shadow-sm transition-all hover:border-primary hover:shadow-xl dark:border-gray-400 dark:bg-slate-800 dark:hover:border-primary md:overflow-hidden">
                <article className="relative flex p-4 md:flex-col md:p-0">
                  <div className="relative mr-2 w-1/3 shrink-0 overflow-hidden md:w-full">
                    <span className="relative inset-0 block pt-[75%]">
                      <Image
                        src={item.img}
                        objectFit="cover"
                        layout="fill"
                        className="rounded-md bg-gray-200 md:rounded-none"
                        alt={item.vendor}
                      />
                      <span className="absolute inset-0 rounded-md bg-gradient-to-b from-black/20"></span>
                      <span className="absolute top-1 left-1 rounded-md bg-primary py-1 px-2 text-xs text-white">
                        <span className="md:hidden">{`-${item.discountPercent}%`}</span>
                        <span className="hidden md:block">{`${item.discountPercent}% OFF`}</span>
                      </span>
                      <span className="absolute top-8 left-1 hidden rounded-md bg-secondary py-1 px-2 text-xs text-white md:block">
                        <span>{`★${item.rate}`}</span>
                      </span>
                    </span>
                  </div>
                  <div className="md:p-2">
                    <h6 className="text-sm">{item.title}</h6>
                    <span className="text-sm text-gray-400 line-through">
                      {item.normalPrice}
                    </span>
                    <span className="text-sm text-secondary">
                      {' '}
                      {item.afterPrice}
                    </span>
                    <div className="text-xs text-gray-400">{item.vendor}</div>
                    <div className="truncate text-xs text-gray-400 md:whitespace-normal">
                      {`Available in ${item.locationsQty} locations`}
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 hidden text-xs md:block">{`${item.bought} bought`}</span>
                </article>
              </a>
            </Link>
          ))}
        </div>
        <div className="my-4 md:hidden">
          <Button colorScheme="secondary" fullWidth>
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
