import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { todayPromos } from '@/mockData';

const TodayPromos = () => {
  return (
    <div className='bg-white pb-4'>
      <div className='p-3'>
        <h4 className='font-medium text-lg'>{`Today's Promos`}</h4>
      </div>
      <div className=''>
        <Swiper
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
          className='px-4 pb-6'
        >
          {todayPromos.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href='/#'>
                <a className='flex overflow-hidden rounded-xl border border-slate-200 bg-gray-200 dark:border-slate-800 dark:bg-slate-700'>
                  <Image
                    src={item.img}
                    alt='promotion'
                    objectFit='cover'
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