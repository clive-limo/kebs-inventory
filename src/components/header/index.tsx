import type { FC } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';

const Header: FC = () => {
  return (
    <div className="flex h-full w-[100%] flex-row">
      <p className="flex-[0.1] p-2 font-bold">Inventory</p>
      <div className="flex-[0.6] rounded-[30px] bg-gray-300 p-2">Search</div>
      <div className="relative  flex-[0.3] p-2">
        <div className="absolute right-0 flex w-[50%] flex-row">
          <p className="m-auto text-center">
            <IoIosNotifications />
          </p>
          <p className="m-auto">
            <AiFillMessage />
          </p>
          <p className="m-auto text-sm">Jhon Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
