import Link from 'next/link';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoriesList } from '@/mockData';

const Categories = () => {
  return (
    <div className='bg-white border-b'>
      <Swiper
        modules={[FreeMode, Scrollbar, Mousewheel]}
        direction='horizontal'
        freeMode={true}
        mousewheel={true}
        scrollbar={{ draggable: true, hide: true }}
        slidesPerView='auto'
        spaceBetween={8}
        className='!py-3'
      >
        {CategoriesList.map((cat) => (
          <SwiperSlide key={cat.title} className='!w-auto'>
            <Link href='/'>
              <a className='flex flex-col items-center text-sm px-3 space-y-1'>
                {<cat.icon height={30} />}
                <span>{cat.title}</span>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
