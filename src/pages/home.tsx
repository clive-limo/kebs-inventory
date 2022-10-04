import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdLocate } from 'react-icons/io';
import { IoAddCircle } from 'react-icons/io5';

import Header from '@/components/header';
import TitleBar from '@/components/titleBar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Home: FC = () => {
  const [location, setLocation] = useState('kilindini');
  const [selectedComponent, setSelectedComponent] = useState('laptop');
  return (
    <Main meta={<Meta title="Inventory" description="Inventory" />}>
      <div className=" m-2 w-full">
        <Header />
      </div>
      <div className="flex h-full w-full flex-row bg-gray-200">
        <div
          /** Nav Bar */
          className="h-full w-[300px] select-none  border-[1px] pt-5"
        >
          <div className="flex flex-row p-2">
            <p className="my-auto">
              <IoMdLocate />
            </p>
            <p className="px-1 font-bold">Locations</p>
          </div>
          <div
            className={clsx(
              'flex flex-row rounded-lg p-1',
              location === 'kilindini'
                ? 'ml-9 bg-teal-100'
                : 'ml-10 bg-gray-200'
            )}
            onClick={() => setLocation('kilindini')}
          >
            <p className="my-auto">
              <HiOutlineOfficeBuilding />
            </p>
            <p className="px-1 font-light">Kilindini</p>
          </div>
          <div
            className={clsx(
              'ml-10 flex flex-row rounded-lg p-1',
              location === 'cfs' ? 'ml-9 bg-blue-300' : 'ml-10 bg-gray-200'
            )}
            onClick={() => setLocation('cfs')}
          >
            <p className="my-auto">
              <HiOutlineOfficeBuilding />
            </p>
            <p className="px-1 font-light">CFS</p>
          </div>
          <div
            className={clsx(
              'ml-10 flex flex-row rounded-lg p-1',
              location === 'taveta' ? 'ml-9 bg-blue-300' : 'ml-10 bg-gray-200'
            )}
            onClick={() => setLocation('taveta')}
          >
            <p className="my-auto">
              <HiOutlineOfficeBuilding />
            </p>
            <p className="px-1 font-light">Taveta</p>
          </div>
          <div
            className={clsx(
              'ml-10 flex flex-row rounded-lg p-1',
              location === 'lungalunga'
                ? 'ml-9 bg-blue-300'
                : 'ml-10 bg-gray-200'
            )}
            onClick={() => setLocation('lungalunga')}
          >
            <p className="my-auto">
              <HiOutlineOfficeBuilding />
            </p>
            <p className="px-1 font-light">LungaLunga</p>
          </div>
        </div>
        <div /** Main Window */ className="flex h-full w-full flex-col p-2">
          <div
            /** Main Window Header */
            className="relative flex h-[100px] w-full flex-row"
          >
            <p className="my-auto flex-1 text-2xl font-bold text-gray-500">
              {selectedComponent}
            </p>
            <div
              /** Item Selection */
              className="absolute bottom-0 right-3 flex flex-1 select-none flex-row"
            >
              <p
                className="m-1 my-auto rounded-md bg-blue-200 p-2 text-sm"
                onClick={() => setSelectedComponent('Laptops')}
              >
                Laptop
              </p>
              <p
                className="m-1 my-auto rounded-md bg-blue-200 p-2 text-sm"
                onClick={() => setSelectedComponent('Desktops')}
              >
                Desktop
              </p>
              <p
                className="m-1 my-auto rounded-md bg-blue-200 p-2 text-sm"
                onClick={() => setSelectedComponent('Printers')}
              >
                Printers
              </p>
              <p
                className="m-1 my-auto rounded-md bg-blue-200 p-2 text-sm"
                onClick={() => setSelectedComponent('Network')}
              >
                Network
              </p>
              <p
                className="m-1 my-auto rounded-md bg-blue-200 p-2 text-sm"
                onClick={() => setSelectedComponent('Power')}
              >
                Power
              </p>
              <div className="mx-2 flex flex-row rounded-lg bg-teal-700 p-2">
                <p className="my-auto text-white">
                  <IoAddCircle />
                </p>
                <button className="px-1 font-bold text-white">Add</button>
              </div>
            </div>
          </div>
          <div
            /** Item Details */
            className="mt-5 flex h-full w-full flex-col rounded-2xl bg-white shadow-lg"
          >
            <TitleBar currentItem={selectedComponent} />
            <div className="m-auto">
              <p className="text-center text-3xl font-bold text-gray-300">
                Nothing Here
              </p>
              <p className="text-center text-sm font-light text-gray-400">
                Add a new Item to the inventory to change that
              </p>
              <img src="/assets/images/nothing-here.png" alt="No files yet" />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;
