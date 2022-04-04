import Image from 'next/image';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { todayPromos } from '@/mockData';

const TodayPromos = () => {
  return (
    <section className="bg-white pb-4 dark:bg-slate-600 lg:rounded-xl">
      <div className="p-3 lg:px-5 lg:pt-5">
        <h4 className="text-lg font-medium">{`Today's Promos`}</h4>
      </div>
      <div>
        <Swiper
          id="TodayPromos"
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
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
                <a className="flex overflow-hidden rounded-xl border border-slate-200 bg-gray-200 dark:border-gray-500 dark:bg-slate-700">
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
    </section>
  );
};

export default TodayPromos;
