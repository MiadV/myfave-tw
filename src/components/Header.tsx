import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MdChevronRight, MdOutlineSearch } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { WhiteLogo } from './Logo';
import SelectCity from './SelectCity';
import Categories from './Categories';
import { Button } from './Button';
import HamburgerMenu from '@/icons/HamburgerMenu';
import CloseMenu from '@/icons/CloseMenu';
import Deals from '@/icons/Deals';
import PayPlus from '@/icons/PayPlus';

const Header = () => {
  return (
    <>
      <header className='z-10 bg-primary py-1.5 shadow-md'>
        <div className='flex px-4'>
          <div className='flex items-center w-full'>
            <div className='flex mr-4'>
              <Link href='/#'>
                <a>
                  <WhiteLogo />
                </a>
              </Link>
            </div>
            <div className='grow'>
              <SearchInput />
            </div>
            <div className='px-4'>
              <SelectCity />
            </div>
          </div>
          <div className='ml-auto h-full'>
            <div className='p-2 pr-0'>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
      <Categories />
    </>
  );
};

export default Header;

const SearchInput = () => {
  return (
    <form action='' className='w-full'>
      <div
        id='input-wrapper'
        className='flex items-center bg-white rounded-md w-full'
      >
        <span id='icon' className='p-2'>
          <MdOutlineSearch className='w-5 h-5 text-primary' />
        </span>

        <input
          type='text'
          placeholder='Search for deals'
          className='bg-transparent pl-0 border-0 text-sm placeholder:text-gray-300 w-full focus:ring-0'
        />
      </div>
    </form>
  );
};

const MobileMenu = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className='flex'>
            {open ? <CloseMenu /> : <HamburgerMenu />}
          </Popover.Button>
          <Popover.Overlay className='bg-black opacity-30 fixed inset-0 mt-12' />

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 -translate-y-1'
            enterTo='opacity-100 -translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 -translate-y-0'
            leaveTo='opacity-0 -translate-y-1'
          >
            <Popover.Panel className='absolute right-0 left-0 z-10 mt-4 bg-gray-100'>
              <div className='bg-white p-4 mb-4 border-y'>
                <p className='font-medium text-base text-center'>
                  Only Available on the App
                </p>
                <div className='flex justify-center gap-8 py-4'>
                  <div className='flex flex-col items-center'>
                    <Deals width={32} height={32} />
                    <span className='mt-2 block text-sm text-primary font-medium'>
                      Rewards
                    </span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <PayPlus width={32} height={32} />
                    <span className='mt-2 block text-sm text-primary font-medium'>
                      eCards
                    </span>
                  </div>
                </div>
                <div>
                  <Button fullWidth>
                    <FaMobileAlt size={16} className='mr-1' /> Get The App
                  </Button>
                </div>
              </div>
              <div className='bg-white p-4'>
                <p className='font-medium text-base text-center'>
                  Support our movement to save local businesses
                </p>
                <div className='mt-4'>
                  <Button fullWidth variant='outline'>
                    <span className='font-bold'> See Our Fave</span>
                    <MdChevronRight size={20} className='ml-1' />
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
