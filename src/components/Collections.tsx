import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import Image from 'next/image';
import { MdChevronRight } from 'react-icons/md';
import { collectionsList } from '@/mockData';

export const CollectionSlider = () => {
  return (
    <section
      className={`bg-white p-3 dark:bg-slate-600 lg:rounded-xl lg:px-8 lg:pt-5`}
    >
      <div className="flex items-center justify-between pb-3">
        <h4 className="text-lg font-medium">{`Collections For You`}</h4>
        <Link href={'/'}>
          <a className="flex items-center text-sm font-medium text-primary">
            See more <MdChevronRight size={20} />
          </a>
        </Link>
      </div>

      <div className="md:hidden">
        <Swiper
          id="collections"
          modules={[FreeMode]}
          spaceBetween={6}
          slidesPerView={1}
          className="px-4 pb-6"
        >
          {collectionsList.map((item) => (
            <SwiperSlide key={item.title}>
              <Link href={'/'}>
                <a>
                  <div className="relative flex overflow-hidden rounded-md border dark:border-gray-400">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={800}
                      height={400}
                    />
                    <h4 className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">
                      {item.title}
                    </h4>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-2">
          {collectionsList.map((item) => (
            <Link key={item.title} href={'/'}>
              <a className="overflow-hidden rounded-md border transition-all hover:border-primary dark:border-gray-400 dark:hover:border-primary">
                <div className="relative flex">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={800}
                    height={400}
                  />
                  <h4 className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-2xl">
                    {item.title}
                  </h4>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
