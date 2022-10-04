import clsx from 'clsx';
import type { FC } from 'react';

interface IMainProps {
  currentItem: string;
}
const TitleBar: FC<IMainProps> = ({ currentItem }) => {
  return (
    <div className="h-12 w-full select-none border-[1px] border-gray-100">
      <div
        /** Desktop title * */
        className={clsx(
          'flex flex-row',
          currentItem === 'Desktops' ? 'visible' : 'hidden'
        )}
      >
        <p className="flex-1 p-2 text-center text-sm font-semibold">Model</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          CPU KEBS No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          CPU Serial No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Monitor KEBS No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Computer Name
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Department
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">User</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Status</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          HR Number
        </p>
      </div>
      <div
        /** Laptop title * */
        className={clsx(
          'flex flex-row',
          currentItem === 'Laptops' ? 'visible' : 'hidden'
        )}
      >
        <p className="flex-1 p-2 text-center text-sm font-semibold">Model</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Laptop KEBS No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Laptop Serial No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Computer Name
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Department
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">User</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Status</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          HR Number
        </p>
      </div>
      <div
        /** Printer title * */
        className={clsx(
          'flex flex-row',
          currentItem === 'Printers' ? 'visible' : 'hidden'
        )}
      >
        <p className="flex-1 p-2 text-center text-sm font-semibold">Make</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Model</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Type</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Serial No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">KEBS No</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Department
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Status</p>
      </div>
      <div
        /** Network title * */
        className={clsx(
          'flex flex-row',
          currentItem === 'Network' ? 'visible' : 'hidden'
        )}
      >
        <p className="flex-1 p-2 text-center text-sm font-semibold">Model</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Type</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Serial No
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">KEBS No</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">
          Department
        </p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Status</p>
        <p className="flex-1 p-2 text-center text-sm font-semibold">Location</p>
      </div>
    </div>
  );
};

export default TitleBar;
