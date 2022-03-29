import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dealsOfDay } from '@/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { MdWatchLater } from 'react-icons/md';

const DealsOfDay = () => {
  return (
    <section className="bg-white p-3 lg:rounded-xl lg:px-8 lg:pt-5">
      <div className="pb-3">
        <h4 className="text-lg font-medium">{`Deals Of The Day`}</h4>
      </div>
      <div>
        <Swiper
          id="dealsOfTheDay"
          modules={[Pagination]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={6}
          slidesPerView={1}
          className="pb-6"
        >
          {dealsOfDay.map((item, i) => (
            <SwiperSlide key={i}>
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 md:flex-row md:gap-4 md:border-0">
                <Link href="/#">
                  <a className="relative flex bg-gray-200 dark:bg-slate-700 md:overflow-hidden md:rounded-xl">
                    <span className="absolute top-3 left-3 z-10 hidden rounded-lg bg-primary px-2 py-1 text-sm text-white md:block">{`You save ${item.discountPercent}%`}</span>
                    <Image src={item.img} alt="deal" width={800} height={500} />
                  </a>
                </Link>

                <div className="flex flex-col justify-between px-3 py-2 md:max-w-[30%]">
                  <div>
                    <Link href="/#">
                      <a>
                        <h6 className="truncate text-sm md:whitespace-normal lg:text-3xl">
                          {item.title}
                        </h6>
                      </a>
                    </Link>
                    <span className="text-sm text-gray-400 line-through md:text-xl">
                      {item.normalPrice}
                    </span>{' '}
                    <span className="text-sm text-secondary md:text-xl">
                      {item.afterPrice}
                    </span>
                    <div className="text-sm text-gray-400 md:text-lg md:text-gray-800">
                      {item.vendor.title}
                    </div>
                    <div className="truncate text-sm text-gray-400 md:whitespace-normal md:text-base">
                      {item.vendor.address}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 py-2 text-sm text-gray-500 md:text-base">
                      <MdWatchLater className="text-orange-400" size={20} />{' '}
                      Limited Time Offer
                    </div>
                    <Button colorScheme="secondary" fullWidth>
                      BUY NOW
                    </Button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DealsOfDay;
