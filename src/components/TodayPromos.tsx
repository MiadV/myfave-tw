import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { todayPromos } from '@/mockData';

const TodayPromos = () => {
  return (
    <div className="bg-white pb-4 lg:rounded-xl">
      <div className="p-3 lg:px-5 lg:pt-5">
        <h4 className="text-lg font-medium">{`Today's Promos`}</h4>
      </div>
      <div>
        <Swiper
          id="todayPromos"
          modules={[Pagination]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={6}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.4,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 1.6,
              spaceBetween: 28,
            },
          }}
          className="px-4 pb-6"
        >
          {todayPromos.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href="/#">
                <a className="flex overflow-hidden rounded-xl border border-slate-200 bg-gray-200 dark:border-slate-800 dark:bg-slate-700">
                  <Image
                    src={item.img}
                    alt="promotion"
                    width={800}
                    height={373}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TodayPromos;
