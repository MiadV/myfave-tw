import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  MdChevronRight,
  MdOutlineSearch,
  MdPhoneAndroid,
} from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { Logo, WhiteLogo } from './Logo';
import { SelectCity, SelectCityDesktop } from './SelectCity';
import Categories from './Categories';
import { Button } from './Button';
import HamburgerMenu from '@/icons/HamburgerMenu';
import CloseMenu from '@/icons/CloseMenu';
import Deals from '@/icons/Deals';
import PayPlus from '@/icons/PayPlus';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-10 bg-primary shadow-md lg:border-b lg:bg-white lg:shadow-none lg:dark:border-gray-400 lg:dark:bg-slate-800">
        <div className="absolute inset-x-0 hidden h-2 bg-primary lg:block"></div>
        <div className="flex px-4 py-1.5 lg:px-16 lg:py-7">
          <div className="flex w-full items-center">
            <div className="mr-4 flex lg:mr-6">
              <Link href="/#">
                <a>
                  <WhiteLogo className="lg:hidden" />
                  <Logo className="hidden lg:block" />
                </a>
              </Link>
            </div>
            <div className="flex grow items-center space-x-4">
              <SearchInput />
              <SelectCity className="lg:hidden" />
              <SelectCityDesktop className="hidden lg:block" />
            </div>
          </div>
          <div className="ml-auto h-full">
            <div className="flex items-center py-2 pl-4 pr-0 lg:hidden">
              <ThemeToggle className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-white" />
              <MobileMenu />
            </div>
            <div className="hidden space-x-4 lg:flex">
              <Button
                variant="outline"
                className="whitespace-nowrap font-semibold"
              >
                <MdPhoneAndroid size={20} className="mr-2" /> Download App
              </Button>
              <Button variant="outline" className="font-semibold">
                <FaUserCircle size={20} className="mr-2" /> Login
              </Button>
              <ThemeToggle className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-white" />
            </div>
          </div>
        </div>
        <Categories className="hidden border-t dark:border-gray-500 lg:flex" />
      </header>
      <Categories className="lg:hidden" />
    </>
  );
};

export default Header;

const SearchInput = () => {
  return (
    <form action="" className="w-full flex-shrink lg:max-w-[400px]">
      <div
        id="input-wrapper"
        className="flex w-full items-center rounded-md bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 dark:bg-gray-600 dark:bg-white/20 lg:bg-gray-100"
      >
        <span id="icon" className="p-2">
          <MdOutlineSearch className="h-5 w-5 text-primary dark:text-white lg:h-6 lg:w-6" />
        </span>

        <input
          type="text"
          placeholder="Search for deals"
          className="w-full border-0 bg-transparent pl-0 text-sm placeholder:text-gray-300 focus:ring-0 dark:placeholder:text-gray-200 lg:py-2.5 lg:text-base"
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
          <Popover.Button className="flex">
            {open ? <CloseMenu /> : <HamburgerMenu />}
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 mt-12 bg-black opacity-30" />

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 -translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 -translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute right-0 left-0 z-10 mt-4 bg-gray-100 dark:bg-gray-500">
              <div className="mb-4 border-y bg-white p-4 dark:bg-gray-500">
                <p className="text-center text-base font-medium">
                  Only Available on the App
                </p>
                <div className="flex justify-center gap-8 py-4">
                  <div className="flex flex-col items-center">
                    <Deals width={32} height={32} />
                    <span className="mt-2 block text-sm font-medium text-primary">
                      Rewards
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <PayPlus width={32} height={32} />
                    <span className="mt-2 block text-sm font-medium text-primary">
                      eCards
                    </span>
                  </div>
                </div>
                <div>
                  <Button fullWidth>
                    <FaMobileAlt size={16} className="mr-1" /> Get The App
                  </Button>
                </div>
              </div>
              <div className="bg-white p-4 dark:bg-gray-500">
                <p className="text-center text-base font-medium">
                  Support our movement to save local businesses
                </p>
                <div className="mt-4">
                  <Button fullWidth variant="outline">
                    <span className="font-bold"> See Our Fave</span>
                    <MdChevronRight size={20} className="ml-1" />
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
