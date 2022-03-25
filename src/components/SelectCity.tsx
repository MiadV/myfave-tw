import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  MdArrowBack,
  MdCheckCircle,
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

const SelectCity = () => {
  const [selected, setSelected] = useState(cities[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div>
        <Listbox.Button className='flex items-center'>
          <MalaysiaFlag />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute inset-0 w-full overflow-auto bg-gray-100  z-10'>
            <div className='fixed flex z-10 w-full bg-white justify-center p-4 text-sm border-b shadow-md'>
              <Listbox.Button className='flex items-center absolute left-2'>
                <MdArrowBack size={20} />
              </Listbox.Button>
              <span>Select City</span>
            </div>

            <div className='mt-14 bg-white text-sm'>
              <div className='flex items-center p-3 border-b border-gray-100'>
                <MalaysiaFlag width={16} height={16} />{' '}
                <span className='ml-1 font-semibold uppercase text-xs'>
                  Malaysia
                </span>
              </div>
              {cities.map((city, cityIdx) => (
                <Listbox.Option
                  key={cityIdx}
                  value={city}
                  className='relative flex items-center p-3 border-b border-gray-100'
                >
                  {({ selected }) => (
                    <div className='flex items-center w-full'>
                      <span className='block truncate'>{city.name}</span>
                      <span className='ml-auto text-primary'>
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

export default SelectCity;
