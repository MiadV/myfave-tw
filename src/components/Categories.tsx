import Link from 'next/link';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoriesList } from '@/mockData';

const Categories = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex justify-center border-b bg-white dark:border-gray-500 dark:bg-slate-600 ${className}`}
    >
      <Swiper
        id="cetegories"
        modules={[FreeMode, Scrollbar, Mousewheel]}
        direction="horizontal"
        freeMode={true}
        mousewheel={true}
        scrollbar={{ draggable: true, hide: true }}
        slidesPerView="auto"
        spaceBetween={8}
        breakpoints={{
          768: {
            spaceBetween: 16,
          },
        }}
        className="!py-3"
      >
        {CategoriesList.map((cat) => (
          <SwiperSlide key={cat.title} className="!w-auto">
            <Link href="/">
              <a className="flex flex-col items-center space-y-1 px-3 text-sm md:px-4 lg:px-6">
                {
                  <cat.icon
                    height={30}
                    className="dark:h-8 dark:w-8 dark:rounded-full dark:bg-white/40 dark:p-1"
                  />
                }
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
