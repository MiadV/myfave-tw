import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  MdArrowBack,
  MdCheckCircle,
  MdOutlineArrowDropDown,
  MdRadioButtonUnchecked,
} from 'react-icons/md';
import MalaysiaFlag from '@/icons/MalaysiaFlag';

const cities = [
  { name: 'Kuala Lumpur' },
  { name: 'Penang' },
  { name: 'Johor Bahru' },
  { name: 'Ipoh' },
  { name: 'Kota Kinabalu' },
  { name: 'Kuching' },
  { name: 'Alor Setar' },
  { name: 'Batu Pahat' },
  { name: 'Bintulu' },
  { name: 'Kampar' },
  { name: 'Kelantan' },
  { name: 'Kluang' },
  { name: 'Kulim' },
  { name: 'Malacca' },
  { name: 'Miri' },
  { name: 'Muar' },
];

export const SelectCity = ({ className }: { className: string }) => {
  const [selected, setSelected] = useState(cities[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={className}>
        <Listbox.Button className="flex items-center">
          <MalaysiaFlag />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute inset-0 z-10 h-screen w-full overflow-auto bg-gray-100">
            <div className="fixed z-10 flex w-full justify-center border-b bg-white p-4 text-sm shadow-md">
              <Listbox.Button className="absolute left-2 flex items-center">
                <MdArrowBack size={20} />
              </Listbox.Button>
              <span>Select City</span>
            </div>
            <div className="mt-14 bg-white text-sm">
              <div className="flex items-center border-b border-gray-100 p-3">
                <MalaysiaFlag width={16} height={16} />{' '}
                <span className="ml-1 text-xs font-semibold uppercase">
                  Malaysia
                </span>
              </div>
              {cities.map((city, cityIdx) => (
                <Listbox.Option
                  key={cityIdx}
                  value={city}
                  className="relative flex items-center border-b border-gray-100 p-3"
                >
                  {({ selected }) => (
                    <div className="flex w-full items-center">
                      <span className="block truncate">{city.name}</span>
                      <span className="ml-auto text-primary">
                        {selected ? (
                          <MdCheckCircle size={20} />
                        ) : (
                          <MdRadioButtonUnchecked size={20} />
                        )}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export const SelectCityDesktop = ({ className }: { className: string }) => {
  const [selected, setSelected] = useState(cities[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={className}>
        <Listbox.Button className="flex shrink-0 items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:rounded-lg lg:border lg:border-primary lg:p-2">
          <MalaysiaFlag className="h-7 w-7 shrink-0 " />
          <span className="ml-1 shrink-0 text-sm ">{selected.name}</span>
          <MdOutlineArrowDropDown className="text-primary" size={24} />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-2 max-h-56 w-64 overflow-auto rounded-lg border shadow-xl dark:border-gray-500">
            <div className="bg-white text-sm dark:bg-slate-600">
              <div className="flex items-center border-b border-gray-100 p-3 dark:border-gray-400">
                <MalaysiaFlag width={16} height={16} />{' '}
                <span className="ml-1 text-xs font-semibold uppercase">
                  Malaysia
                </span>
              </div>
              {cities.map((city, cityIdx) => (
                <Listbox.Option
                  key={cityIdx}
                  value={city}
                  className="relative flex cursor-pointer items-center border-b border-gray-100 p-3 dark:border-gray-400"
                >
                  {({ selected }) => (
                    <div className="flex w-full items-center">
                      <span className="block truncate">{city.name}</span>
                      <span className="ml-auto text-primary">
                        {selected ? (
                          <MdCheckCircle size={20} />
                        ) : (
                          <MdRadioButtonUnchecked size={20} />
                        )}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
